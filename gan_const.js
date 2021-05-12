
// Thay đổi phần tử trong mảng
const COLORS = ["Xanh", "Đỏ", "Tím", "Vàng"];
console.log(COLORS[0]); // Xanh

// Gán lại giá trị cho phần tử đầu tiên
COLORS[0] = "Hồng";
console.log(COLORS[0]); // Hồng
console.log(colors(...COLORS))