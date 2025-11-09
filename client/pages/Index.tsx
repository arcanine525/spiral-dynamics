import { useState } from "react";
import { ChevronDown, CheckCircle2, Zap, Users, Lightbulb, Shield, MessageCircle, Plus } from "lucide-react";

export default function Index() {
  const [activeTab, setActiveTab] = useState("student");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const spiralColors = [
    { name: "Beige", value: "#C4B5A0", meaning: "Survival" },
    { name: "Purple", value: "#9B59B6", meaning: "Tribe" },
    { name: "Red", value: "#E74C3C", meaning: "Power" },
    { name: "Blue", value: "#3498DB", meaning: "Order" },
    { name: "Orange", value: "#E67E22", meaning: "Achievement" },
    { name: "Green", value: "#2ECC71", meaning: "Harmony" },
    { name: "Yellow", value: "#F39C12", meaning: "Integration" },
    { name: "Turquoise", value: "#1ABC9C", meaning: "Wholeness" },
  ];

  const competencies = [
    "Định hướng rõ ràng",
    "Khám phá",
    "Ý định duy trì",
    "Tự chủ quyết định",
    "Kiến thức thị trường",
    "Phù hợp nghề",
  ];

  const faqItems = [
    {
      question: "Khảo sát này có miễn phí không?",
      answer:
        "Có! Khảo sát cơ bản của chúng tôi hoàn toàn miễn phí dành cho tất cả học sinh THPT.",
    },
    {
      question: "Mất bao lâu để hoàn thành khảo sát?",
      answer:
        "Khảo sát mất khoảng 10-12 phút, tùy thuộc vào tốc độ trả lời của bạn.",
    },
    {
      question: "Khi nào tôi sẽ nhận được báo cáo?",
      answer:
        "Bạn sẽ nhận được báo cáo ngay lập tức sau khi hoàn thành khảo sát, không cần chờ đợi.",
    },
    {
      question: "Spiral Dynamics là gì?",
      answer:
        "Spiral Dynamics là một mô hình phát triển con người dựa trên 8 hệ thống giá trị (lăng kính), giúp bạn hiểu cách mình nhìn nhận thế giới và các quyết định sự nghiệp của mình.",
    },
    {
      question: "Dữ liệu của tôi được sử dụng như thế nào?",
      answer:
        "Dữ liệu cá nhân của bạn được bảo mật tuyệt đối. Chúng tôi chỉ sử dụng dữ liệu dưới dạng thống kê tổng hợp, không bao giờ chia sẻ thông tin cá nhân của bạn.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-spiral-yellow to-spiral-turquoise rounded-lg"></div>
            <span className="font-bold text-lg text-gray-900">Spiral Dynamics</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-gray-600 hover:text-gray-900 transition">
              Vấn đề
            </a>
            <a href="#solution" className="text-gray-600 hover:text-gray-900 transition">
              Giải pháp
            </a>
            <a href="#howto" className="text-gray-600 hover:text-gray-900 transition">
              Cách thức
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">
              FAQ
            </a>
          </nav>
          <button className="px-6 py-2 bg-gradient-to-r from-spiral-blue to-spiral-turquoise text-white rounded-lg font-semibold hover:shadow-lg transition">
            Tham gia khảo sát
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-spiral-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-spiral-turquoise/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Khám Phá Hệ Giá Trị Bản Thân
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
              Vững Vàng Chọn Lựa Tương Lai Cùng Spiral Dynamics
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-12">
              Nền tảng khảo sát và phân tích chuyên sâu giúp học sinh THPT lớp 10-12 định vị bản
              thân và xây dựng lộ trình sự nghiệp rõ ràng.
            </p>

            {/* Spiral Dynamics Color Preview */}
            <div className="flex justify-center gap-3 mb-16 flex-wrap">
              {spiralColors.map((color) => (
                <div key={color.name} className="flex flex-col items-center gap-2">
                  <div
                    className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition transform"
                    style={{ backgroundColor: color.value }}
                    title={`${color.name} - ${color.meaning}`}
                  ></div>
                  <span className="text-xs text-gray-600 font-semibold">{color.name}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-spiral-blue to-spiral-turquoise text-white rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition transform">
                Tham Gia Khảo Sát (10 phút)
              </button>
              <button className="px-8 py-4 bg-white border-2 border-spiral-blue text-spiral-blue rounded-lg font-bold text-lg hover:bg-blue-50 transition">
                Xem Mẫu Báo Cáo Cá Nhân
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Bạn Gặp Phải Những Thách Thức Nào?
            </h2>
            <p className="text-xl text-gray-600">
              Nhiều học sinh THPT đang đối mặt với những khó khăn trong hướng nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "❓",
                title: "Mơ hồ về định hướng tương lai",
                description: "Không biết chính xác mình muốn theo đuổi điều gì sau khi tốt nghiệp",
              },
              {
                icon: "😰",
                title: "Áp lực từ gia đình và xã hội",
                description: "Cảm thấy bị ép buộc lựa chọn theo kỳ vọng của người khác thay vì bản thân",
              },
              {
                icon: "🔧",
                title: "Công cụ hướng nghiệp chung chung",
                description:
                  "Các phương pháp hiện có thiếu tính cá nhân hóa và không phù hợp với từng cá nhân",
              },
              {
                icon: "🎯",
                title: "Không biết mình phù hợp với gì",
                description:
                  "Khó nhận diện được điểm mạnh, sở thích thực sự và lĩnh vực nghề phù hợp",
              },
            ].map((problem, idx) => (
              <div
                key={idx}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition hover:shadow-lg hover:scale-105 transform duration-300"
              >
                <div className="text-5xl mb-4 transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  {problem.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600 text-lg">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Giải Pháp Đột Phá
            </h2>
            <p className="text-xl text-gray-600">
              Chúng tôi mang đến cách tiếp cận khoa học và toàn diện
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Spiral Dynamics Framework */}
            <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
              <div className="text-5xl mb-4 transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1">🌀</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Hiểu Hệ Giá Trị Bản Thân</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Khám phá 8 lăng kính (beige, purple, red, blue, orange, green, yellow, turquoise)
                của Spiral Dynamics - cách bạn nhìn nhận thế giới, quyết định động lực và lựa
                chọn sự nghiệp của mình.
              </p>
              <div className="space-y-3">
                {spiralColors.slice(0, 4).map((color) => (
                  <div key={color.name} className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color.value }}
                    ></div>
                    <span className="font-semibold text-gray-700">
                      {color.name}: {color.meaning}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6 Competencies */}
            <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
              <div className="text-5xl mb-4 transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1">📊</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Đo Lường 6 Năng Lực Hướng Nghiệp
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Khảo sát đo lường toàn diện 6 năng lực quan trọng để giúp bạn có cái nhìn rõ ràng
                về khả năng và sẵn sàng:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {competencies.map((comp, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-spiral-turquoise flex-shrink-0 mt-1" />
                    <span className="font-semibold text-gray-700">{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="howto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cách Thức Hoạt Động
            </h2>
            <p className="text-xl text-gray-600">3 bước đơn giản để tìm ra định hướng sự nghiệp</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="group bg-gradient-to-br from-spiral-blue/10 to-spiral-turquoise/10 p-10 rounded-2xl border-2 border-spiral-blue/20 hover:shadow-2xl hover:scale-105 transform transition duration-300">
              <div className="w-16 h-16 bg-spiral-blue rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hoàn Thành Khảo Sát</h3>
              <p className="text-gray-600 leading-relaxed">
                Dành 10-12 phút trả lời các câu hỏi đa chiều về giá trị, hành vi và mong muốn của
                bạn. Quá trình dễ dàng và không áp lực.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group bg-gradient-to-br from-spiral-orange/10 to-spiral-yellow/10 p-10 rounded-2xl border-2 border-spiral-orange/20 hover:shadow-2xl hover:scale-105 transform transition duration-300">
              <div className="w-16 h-16 bg-spiral-orange rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nhận Báo Cáo Phân Tích</h3>
              <p className="text-gray-600 leading-relaxed">
                Hệ thống tự động phân tích và gửi bạn báo cáo cá nhân hóa, trực quan hóa hồ sơ
                Spiral Dynamics và 6 năng lực hướng nghiệp.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group bg-gradient-to-br from-spiral-green/10 to-spiral-turquoise/10 p-10 rounded-2xl border-2 border-spiral-green/20 hover:shadow-2xl hover:scale-105 transform transition duration-300">
              <div className="w-16 h-16 bg-spiral-green rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Khám Phá Lộ Trình Gợi Ý</h3>
              <p className="text-gray-600 leading-relaxed">
                Nhận các khuyến nghị về ngành nghề, hoạt động trải nghiệm và nguồn lực hỗ trợ
                phù hợp nhất với hồ sơ giá trị của bạn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Xem Trước Kết Quả
            </h2>
            <p className="text-xl text-gray-600">
              Đây là những gì bạn sẽ nhận được sau khi hoàn thành khảo sát
            </p>
          </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
              <div className="bg-gray-100 rounded-xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1">📈</div>
                  <p className="text-gray-600 font-semibold">Biểu đồ 8 Màu Spiral Dynamics</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">Hiển thị cấu trúc giá trị của bạn một cách trực quan</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
              <div className="bg-gray-100 rounded-xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1">🎯</div>
                  <p className="text-gray-600 font-semibold">Đánh giá 6 Năng Lực</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">Điểm mạnh và lĩnh vực phát triển của bạn</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
              <div className="bg-gray-100 rounded-xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1">☁️</div>
                  <p className="text-gray-600 font-semibold">Word Cloud Ngành Nghề</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">Các ngành nghề phù hợp nhất cho bạn</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
              <div className="bg-gray-100 rounded-xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1">📊</div>
                  <p className="text-gray-600 font-semibold">Dashboard Phân Tích</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">Một cái nhìn toàn diện về hồ sơ của bạn</p>
            </div>
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-spiral-blue text-white rounded-lg font-bold text-lg hover:shadow-xl transition">
              Khám Phá Dashboard Mẫu
            </button>
          </div>
        </div>
      </section>

      {/* Benefits by Audience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lợi Ích Cho Từng Đối Tượng
            </h2>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {[
              { id: "student", label: "Học Sinh", icon: "🎓" },
              { id: "parent", label: "Phụ Huynh", icon: "👨‍👩‍👧" },
              { id: "school", label: "Nhà Trường", icon: "🏫" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-lg font-bold text-lg transition ${
                  activeTab === tab.id
                    ? "bg-spiral-blue text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-spiral-blue/5 to-spiral-turquoise/5 p-12 rounded-2xl border-2 border-spiral-blue/20">
            {activeTab === "student" && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Dành Cho Học Sinh</h3>
                <ul className="space-y-4">
                  {[
                    "Hiểu rõ bản thân - nhận thức sâu sắc về hệ giá trị và động lực thực sự",
                    "Tự tin lựa chọn - có cơ sở khoa học cho quyết định hướng nghiệp",
                    "Giảm mơ hồ - biết chính xác mình muốn gì và tại sao",
                    "Xây dựng kế hoạch hành động - có lộ trình rõ ràng cho tương lai",
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-spiral-turquoise flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "parent" && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Dành Cho Phụ Huynh</h3>
                <ul className="space-y-4">
                  {[
                    "Thấu hiểu con cái - khám phá giá trị thực sự và năng lực của con",
                    "Đồng hành hiệu quả - hỗ trợ con với những gợi ý phù hợp",
                    "Có cơ sở trao đổi - cuộc hội thoại gia đình dựa trên dữ liệu",
                    "Giảm lo lắng - biết rằng con đang trên con đường đúng",
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-spiral-turquoise flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "school" && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Dành Cho Nhà Trường</h3>
                <ul className="space-y-4">
                  {[
                    "Có dữ liệu tổng quan - hiểu được hồ sơ giá trị của toàn bộ học sinh",
                    "Thiết kế chương trình hướng nghiệp trúng đích - dựa trên nhu cầu thực tế",
                    "Nâng cao hiệu quả tư vấn - các giáo viên có thông tin chi tiết",
                    "Đo lường kết quả - theo dõi sự phát triển của học sinh qua thời gian",
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-spiral-turquoise flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* B2B Solutions for Schools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Giải Pháp Cho Nhà Trường
            </h2>
            <p className="text-xl text-gray-600">
              Chúng tôi cung cấp các gói giải pháp toàn diện cho tổ chức giáo dục
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Gói Báo Cáo Tổng Hợp",
                description: "Khảo sát và báo cáo phân tích theo khối/lớp",
                features: [
                  "Khảo sát cho toàn bộ học sinh",
                  "Báo cáo tổng hợp theo lớp/khối",
                  "Hỗ trợ cơ bản",
                ],
                color: "spiral-blue",
              },
              {
                title: "Gói Dashboard Tương Tác",
                description: "Cung cấp dashboard để nhà trường tự phân tích sâu",
                features: [
                  "Toàn bộ báo cáo tổng hợp",
                  "Dashboard tương tác trực tuyến",
                  "Hỗ trợ nâng cao",
                  "Cập nhật hàng tháng",
                ],
                color: "spiral-orange",
              },
              {
                title: "Gói Tư Vấn & Workshop",
                description: "Tổ chức các buổi chia sẻ, tư vấn dựa trên kết quả",
                features: [
                  "Toàn bộ gói dashboard",
                  "3-5 buổi workshop/tư vấn",
                  "Đào tạo giáo viên tư vấn",
                  "Hỗ trợ toàn diện 24/7",
                ],
                color: "spiral-green",
              },
            ].map((pkg, idx) => (
              <div key={idx} className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{pkg.title}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-5 h-5 text-spiral-${pkg.color} flex-shrink-0 mt-1 transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-bold transition`}
                  style={{
                    backgroundColor: pkg.color === "spiral-blue" ? "#3498DB" :
                                    pkg.color === "spiral-orange" ? "#E67E22" : "#2ECC71",
                    color: "white"
                  }}
                >
                  Tìm Hiểu Thêm
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-10 py-4 bg-spiral-blue text-white rounded-lg font-bold text-lg hover:shadow-xl transition">
              Liên Hệ Hợp Tác
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
            <div className="group bg-gradient-to-br from-spiral-blue/10 to-spiral-turquoise/10 p-12 rounded-2xl hover:shadow-2xl hover:scale-105 transform transition duration-300">
              <Shield className="w-12 h-12 text-spiral-blue mb-4 transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Nền Tảng Khoa Học</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Phương pháp khảo sát được xây dựng dựa trên mô hình Spiral Dynamics, một lý
                thuyết phát triển con người được công nhận quốc tế, kết hợp với các thang đo
                tâm lý học hành vi đã được chuẩn hóa và kiểm chứng.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-spiral-green/10 to-spiral-turquoise/10 p-12 rounded-2xl hover:shadow-2xl hover:scale-105 transform transition duration-300">
              <Zap className="w-12 h-12 text-spiral-green mb-4 transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Bảo Mật Thông Tin</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Chúng tôi cam kết ẩn danh và bảo mật tuyệt đối dữ liệu cá nhân. Mọi phân tích
                chỉ được sử dụng dưới dạng thống kê tổng hợp. Dữ liệu của bạn không bao giờ được
                chia sẻ với bên thứ ba.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Câu Hỏi Thường Gặp
            </h2>
            <p className="text-xl text-gray-600">
              Tìm câu trả lời cho những câu hỏi phổ biến của bạn
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-gray-900 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  {item.question}
                  <ChevronDown
                    className={`w-5 h-5 transition transform ${
                      openFAQ === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Before Footer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-spiral-blue to-spiral-turquoise">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sẵn Sàng Khám Phá Hệ Giá Trị Của Bạn?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tham gia khảo sát ngay hôm nay và nhận báo cáo phân tích cá nhân trong vài phút
          </p>
          <button className="px-10 py-4 bg-white text-spiral-blue rounded-lg font-bold text-lg hover:shadow-2xl transition">
            Bắt Đầu Khảo Sát Miễn Phí
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-spiral-yellow to-spiral-turquoise rounded-lg"></div>
                <span className="font-bold text-lg text-white">Spiral Dynamics</span>
              </div>
              <p className="text-sm text-gray-400">
                Nền tảng định hướng sự nghiệp dựa trên khoa học cho học sinh THPT
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Liên Kết</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Trang Chủ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Về Chúng Tôi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Liên Hệ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Pháp Lý</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Chính Sách Bảo Mật
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Điều Khoản Sử Dụng
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Chính Sách Cookie
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Liên Lạc</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:contact@spiraldynamics.vn" className="hover:text-white transition">
                    contact@spiraldynamics.vn
                  </a>
                </li>
                <li>
                  <a href="tel:+84901234567" className="hover:text-white transition">
                    +84 (90) 123-4567
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              © 2024 Spiral Dynamics. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.104 3.756 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
