import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useLopHocPhan } from "../_context";

type BaiViet = {
  id: number;
  tieuDe: string;
  noiDung: string;
  ngayKetThuc?: string;
  loaiBV: number;
  maLHP: number;
};

export default function BaiTapScreen() {
  const { id, tenLHP } = useLopHocPhan();
  console.log("🔥 Tab Notifications ID:", id);

  const [tasks, setTasks] = useState<BaiViet[]>([]);

  useEffect(() => {
    if (!id) {
      console.warn("⚠️ Thiếu ID lớp học phần");
      return;
    }

    const fetchTasks = async () => {
      try {
        const res = await fetch(
          `http://192.168.1.101:3001/baiviet?maLHP=${id}&loaiBV=1`
        );
        const data = await res.json();
        console.log("📦 Dữ liệu bài tập:", data);
        setTasks(data);
      } catch (err) {
        console.error("❌ Lỗi khi gọi API:", err);
      }
    };

    fetchTasks();
  }, [id]);

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item?.id?.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item?.tieuDe || "Không có tiêu đề"}</Text>
          <Text style={styles.date}>
            Hạn:{" "}
            {item?.ngayKetThuc ? item.ngayKetThuc.slice(0, 10) : "Không rõ"}
          </Text>
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e293b",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    color: "#ccc",
    marginTop: 4,
    fontSize: 13,
  },
});
