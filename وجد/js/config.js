/* ============================================================
   إعدادات المطعم المركزية — Central Restaurant Settings
   ============================================================ */
const RESTAURANT = {
  name: 'وجد',                    // الاسم المؤقت — استبدله بالاسم النهائي عند اعتماده
  nameEn: 'Wajd',                  // الاسم باللغة الإنجليزية (مؤقت)

  cuisine: 'Italian · American',

  whatsapp: {
    // رقم واتساب المطعم — ضع الرقم الدولي بدون رمز الدولة (+) وبدون مسافات (مثال: 966500123456)
    // ملاحظة: الرقم الحالي قيم مؤقتة وسيتم استبدالها بالرقم الفعلي قبل النشر.
    number: '0000000000',
  },

  contact: {
    phone: '',             // رقم الهاتف — غير محدد بعد
    address: '',           // عنوان المطعم — غير محدد بعد
    addressEn: '',
    mapsUrl: '',           // رابط الموقع على خرائط جوجل — غير محدد بعد
    hours: [],             // ساعات العمل — غير محدد بعد
    socials: {
      instagram: '',       // @handle — غير محدد بعد
      tiktok: '',           // @handle — غير محدد بعد
    },
  },
};

/* ============================================================
   بيانات المنيو المركزية — Central Menu Data
   ============================================================ */
const MENU_CATEGORIES = [
  { id: 'burgers', name: 'البرغر', nameEn: 'Burgers' },
  { id: 'pizza', name: 'البيتزا', nameEn: 'Pizza' },
  { id: 'pasta', name: 'الباستا والمعكرونة', nameEn: 'Pasta & Noodles' },
  { id: 'appetizers', name: 'المقبلات والأطباق الجانبية', nameEn: 'Appetizers & Sides' },
  { id: 'signatures', name: 'الأطباق المميزة', nameEn: 'Signature Dishes' },
  { id: 'desserts', name: 'الحلويات', nameEn: 'Desserts' },
  { id: 'drinks', name: 'المشروبات', nameEn: 'Drinks' },
];

const DISHES = [
  // البرغر
  {
    id: 'burger-torino',
    category: 'burgers',
    nameAr: 'برغر توريتو إيطالي',
    nameEn: 'Italian Torino Burger',
    descAr: 'لحم عجل إيطالي مميز مع صلصة الباستا الحارة، وجبن موزارلا، والخبز الإيطالي المحمص.',
    descEn: 'Premium Italian beef topped with spicy pasta sauce, mozzarella and toasted Italian bread.',
    price: 48,
    featured: true,
    badge: 'signature',
  },
  {
    id: 'burger-pizza',
    category: 'burgers',
    nameAr: 'برغر البيتزا نابولي',
    nameEn: 'Naples Pizza Burger',
    descAr: 'برغر لحم مع صلصة البيتزا، جبن الفيتا، والبصل المقلي — فكرة إيطالية أمريكية أصيلة.',
    descEn: 'Meat burger layered with pizza sauce, provolone and fried onions — a true Italian-American classic.',
    price: 44,
    featured: true,
    badge: 'popular',
  },
  {
    id: 'burger-truffle',
    category: 'burgers',
    nameAr: 'برغر بالترويلي إيطالي',
    nameEn: 'Italian Truffle Burger',
    descAr: 'برغر عجل مع صلصة التروني الفاخرة ونقش اللحم البري على خبز إيطالي.',
    descEn: 'Beef patty with premium truffle sauce and wild mushroom crust on Italian bread.',
    price: 52,
    badge: 'popular',
  },

  // البيتزا
  {
    id: 'pizza-margherita',
    category: 'pizza',
    nameAr: 'بيتزا مارغريتا نابولية',
    nameEn: 'Naples Margherita Pizza',
    descAr: 'صلصة الباستا، جبن الفورمي ديل تري، والأعشاب البريزي — بالغة من إيطاليا.',
    descEn: 'San Marzano tomato sauce, fior di latte cheese and fresh basil — straight from Naples.',
    price: 62,
    featured: true,
    badge: 'popular',
  },
  {
    id: 'pizza-capricciosa',
    category: 'pizza',
    nameAr: 'بيتزا كابريتشا نابولية',
    nameEn: 'Naples Capricciosa Pizza',
    descAr: 'بيتزا بصلصة، جبن، كعك بابريكا، موزة، جرجير وأركيز — مطبخ إيطالي متنوع.',
    descEn: 'Pizza with tomato, cheese, capers, artichoke, olives and ham — a versatile Italian classic.',
    price: 68,
    badge: 'popular',
  },
  {
    id: 'pizza-quattro',
    category: 'pizza',
    nameAr: 'بيتزا كويلو فورماغي',
    nameEn: 'Quattro Formaggi Pizza',
    descAr: 'أربعة أنواع من الأجبان الإيطالية مع الأركان الإيطالي والكمأة.',
    descEn: 'Four Italian cheeses with Italian ham and mushrooms on a thin crust.',
    price: 66,
  },

  // الباستا والمعكرونة
  {
    id: 'pasta-bolognese',
    category: 'pasta',
    nameAr: 'بولونيز باللحم الإيطالي',
    nameEn: 'Italian Bolognese Pasta',
    descAr: 'معكرونة إيطالية بالصلصة الحمراء غنية باللحم الإيطالي والصوص الباستا.',
    descEn: 'Italian pasta with rich meat sauce and pasta-style seasoning.',
    price: 56,
    featured: true,
  },
  {
    id: 'pasta-ragu',
    category: 'pasta',
    nameAr: 'راغو أومليتانا',
    nameEn: 'Bucatini all\'Omuletto',
    descAr: 'بكتاتيني بالراغو الإيطالي مع كرات اللحم والجبن والبطاطس.',
    descEn: 'Bucatini noodles with Italian ragu, meatballs, cheese and potatoes.',
    price: 54,
  },
  {
    id: 'pasta-arrabbiata',
    category: 'pasta',
    nameAr: 'باستا بالصلصة الحارة والكباب',
    nameEn: 'Spicy Pasta & Italian Meatballs',
    descAr: 'معكرونة إيطالية بالصلصة الحارة والكباب الإيطالي المحمص.',
    descEn: 'Italian pasta with spicy sauce and grilled Italian meatballs.',
    price: 50,
  },

  // المقبلات والأطباق الجانبية
  {
    id: 'app-arancini',
    category: 'appetizers',
    nameAr: 'كرات الباستا الإيطالية',
    nameEn: 'Italian Arancini',
    descAr: 'كرات أراناكيني بالريشة الإيطالية واللحم، مقلية ومتبلة.',
    descEn: 'Crispy arancini with Italian breadcrumbs and meat, fried and seasoned.',
    price: 34,
    badge: 'popular',
  },
  {
    id: 'app-bruschetta',
    category: 'appetizers',
    nameAr: 'فطائر الباستا',
    nameEn: 'Italian Bruschetta',
    descAr: 'خبز إيطالي محمص بالطماطم، الخيار، الأعشاب وزيت الزيتون.',
    descEn: 'Toasted Italian bread with tomato, cucumber, herbs and olive oil.',
    price: 28,
  },

  // الأطباق المميزة
  {
    id: 'sig-meatball-sub',
    category: 'signatures',
    nameAr: 'سوب اللحم الإيطالي',
    nameEn: 'Italian Meatball Sub',
    descAr: 'خبز فرن حر مع كرات اللحم الإيطالي، الصلصة الحمراء، الجبن والخيار.',
    descEn: 'Wood-fired bread with Italian meatballs, marinara, cheese and pickle.',
    price: 40,
    featured: true,
    badge: 'signature',
  },

  // الحلويات
  {
    id: 'dessert-tiramisu',
    category: 'desserts',
    nameAr: 'تارتا الإيطالية',
    nameEn: 'Italian Tiramisu',
    descAr: 'تارتا بالقهوة الإسبريسو والكاكاو وبسكوين الشوكولاتة.',
    descEn: 'Tiramisu with espresso, cocoa and chocolate chunks.',
    price: 36,
  },
  {
    id: 'dessert-cannoli',
    category: 'desserts',
    nameAr: 'كنافولي الإيطالي',
    nameEn: 'Italian Cannoli',
    descAr: 'كرواسون الإيطالي بالقشدة والكراميل والفستق.',
    descEn: 'Crispy shells filled with sweet ricotta, caramel and pistachio.',
    price: 32,
    badge: 'popular',
  },
  {
    id: 'dessert-semifreddo',
    category: 'desserts',
    nameAr: 'سيميفردو بالشوكولاتة',
    nameEn: 'Chocolate Semifreddo',
    descAr: 'سيميفردو من الكعك المكسور والشوكولاتة الإيطالية.',
    descEn: 'Semifreddo made with crushed ladyfingers and Italian chocolate.',
    price: 38,
  },

  // المشروبات
  {
    id: 'drink-espresso',
    category: 'drinks',
    nameAr: 'إسبريسو إيطالي',
    nameEn: 'Italian Espresso',
    descAr: 'قهوة إيطالية مدخنة بإتقان مع سحابة إسبرسو كثيفة.',
    descEn: 'Perfectly pulled Italian espresso with a rich crema.',
    price: 14,
  },
  {
    id: 'drink-affogato',
    category: 'drinks',
    nameAr: 'أفوغاتو بالآيس كريم',
    nameEn: 'Affogato with Ice Cream',
    descAr: 'إسبرسو إيطالي ساخن يُسكب فوق كريمة الآيس كريم.',
    descEn: 'Hot Italian espresso poured over vanilla ice cream.',
    price: 18,
  },
  {
    id: 'drink-limonata',
    category: 'drinks',
    nameAr: 'ليموناتا إيطالية',
    nameEn: 'Italian Limoncello Spritz',
    descAr: 'مشروب من عصير الليمون الإيطالي والإسبرسو والبروكة.',
    descEn: 'Fresh Italian lemon, espresso and prosecco blend.',
    price: 22,
  },
];

function getDishById(id) {
  return DISHES.find((d) => d.id === id) || null;
}

function getDishesByCategory(categoryId) {
  if (!categoryId || categoryId === 'all') return DISHES;
  return DISHES.filter((d) => d.category === categoryId);
}
