export const categories = [
  "Tất cả",
  "Cơm",
  "Mì & Phở",
  "Món Nước",
  "Khai Vị",
  "Đồ Uống"
];

export const menuItems = [
  {
    id: 1,
    name: "Cơm Gà Xối Mỡ Hoàng Kim",
    description: "Cơm chiên giòn thơm lừng ăn kèm đùi gà xối mỡ da giòn rụm, dưa leo và sốt mắm tỏi ớt chua ngọt.",
    price: 45000,
    category: "Cơm",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "10-15 phút"
  },
  {
    id: 2,
    name: "Mì Xào Bò Rau Cải",
    description: "Sợi mì trứng dai giòn xào cùng thịt bò mềm ướp đậm đà, cải thìa tươi và cà rốt giòn ngọt.",
    price: 50000,
    category: "Mì & Phở",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "8-12 phút"
  },
  {
    id: 3,
    name: "Cơm Tấm Sườn Bì Chả",
    description: "Hạt gạo tấm thơm ngon, sườn nướng than hoa vàng óng ả, chả trứng béo ngậy kèm mỡ hành thơm phức.",
    price: 55000,
    category: "Cơm",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "10-15 phút"
  },
  {
    id: 4,
    name: "Phở Bò Tái Nạm Đặc Biệt",
    description: "Bánh phở tươi mềm, nước dùng hầm xương bò 24h thanh ngọt đậm đà, thịt bò tái thơm mềm.",
    price: 60000,
    category: "Mì & Phở",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "5-10 phút"
  },
  {
    id: 5,
    name: "Bún Bò Huế Đậm Vị",
    description: "Sợi bún to truyền thống, nước dùng cay nồng hương sả mắm ruốc, bắp bò, giò heo và chả cua.",
    price: 60000,
    category: "Món Nước",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    isPopular: false,
    prepTime: "10-15 phút"
  },
  {
    id: 6,
    name: "Canh Chua Cá Hồi",
    description: "Cá hồi phi lê tươi rói nấu cùng dứa, cà chua, dọc mùng và me tươi, vị chua thanh giải nhiệt.",
    price: 65000,
    category: "Món Nước",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=600&q=80",
    isPopular: false,
    prepTime: "12-15 phút"
  },
  {
    id: 7,
    name: "Nem Rán Truyền Thống (6 cuốn)",
    description: "Vỏ ram Hà Tĩnh giòn rụm bên ngoài, nhân thịt, mộc nhĩ, nấm hương đậm đà bên trong.",
    price: 40000,
    category: "Khai Vị",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
    isPopular: false,
    prepTime: "8-10 phút"
  },
  {
    id: 8,
    name: "Khoai Tây Chiên Phô Mai",
    description: "Khoai tây chiên vàng ruộm lắc bột phô mai béo thơm nức mũi, sốt tương cà tương ớt.",
    price: 35000,
    category: "Khai Vị",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
    isPopular: false,
    prepTime: "5-8 phút"
  },
  {
    id: 9,
    name: "Trà Đào Cam Sả Tươi",
    description: "Vị trà thanh mát kết hợp cùng đào giòn, vị chua ngọt từ cam tươi và hương sả dịu thơm.",
    price: 30000,
    category: "Đồ Uống",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "3-5 phút"
  },
  {
    id: 10,
    name: "Trà Sữa Trân Châu Hoàng Gia",
    description: "Trà sữa đậm vị hồng trà cùng trân châu đen dai giòn ngọt nhẹ đường đen thơm phức.",
    price: 35000,
    category: "Đồ Uống",
    image: "https://images.unsplash.com/photo-1558857563-b37cf5a26620?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "3-5 phút"
  }
];

// Hàm format tiền tệ VNĐ chuẩn
export function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);
}
