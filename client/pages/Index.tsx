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
    "Khám phá nghề nghiệp",
    "Ý định duy trì",
    "Tự chủ quyết định",
    "Hiểu biết về thị trường",
    "Nhận thức độ phù hợp với nghề",
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
        "Spiral Dynamics là một mô hình phát triển con người dựa trên 8 hệ thống giá trị (lăng kính), giúp bạn hiểu cách mình nhìn nhận thế giới và có cơ sở lựa chọn nghề nghiệp vững chắc hơn.",
    },
    {
      question: "Dữ liệu của tôi được sử dụng như thế nào?",
      answer:
        "Dữ liệu cá nhân của bạn được bảo mật tuyệt đối. Chúng tôi chỉ sử dụng dữ liệu dưới dạng thống kê tổng hợp, không bao giờ chia sẻ thông tin cá nhân của bạn.",
    },
  ];

  const howSteps = [
    {
      id: 1,
      title: "Khám phá Hệ Giá Trị",
      description:
        "Thực hiện quiz nhanh hoặc khảo sát chuyên sâu với trợ lý tư vấn cá nhân \"Spiral Guide\". Đây là chatbot thông minh đã được \"đào tạo\" bằng bộ dữ liệu vô cùng đáng tin cậy.",
      url: "https://chatgpt.com/g/g-68ed01f25c8c81918b432f95616b5c19-spiral-guide",
      cardBg: "bg-gradient-to-br from-spiral-blue/5 to-spiral-turquoise/5",
      borderClass: "border-spiral-blue/20",
      badgeBg: "bg-spiral-blue",
    },
    {
      id: 2,
      title: "Nhận Báo Cáo Phân Tích",
      description:
        "Hệ thống tự động phân tích và gửi bạn báo cáo về hệ giá trị cá nhân, nghề nghiệp phù hợp và cách để rèn luyện, nâng cấp dải màu cá nhân. Bạn cũng có thể định vị bản thân trên bảng dữ liệu \"Spiral Data\".",
      url: "https://lookerstudio.google.com/u/0/reporting/f6fc2e35-27d5-4c73-88d7-57f8c2a2cc68",
      cardBg: "bg-gradient-to-br from-spiral-orange/5 to-spiral-yellow/5",
      borderClass: "border-spiral-orange/20",
      badgeBg: "bg-spiral-orange",
    },
    {
      id: 3,
      title: "Trải nghiệm Nghề Nghiệp Yêu Thích",
      description:
        "Trải nghiệm mini game \"Spiral Choices\", nơi bạn được thử sức xử lý các tình huống nghề nghiệp và xác định nghề nghiệp ấy có phù hợp với sắc màu của bạn hay không.",
      url: "https://testminigame.my.canva.site/spiralchoices",
      cardBg: "bg-gradient-to-br from-spiral-green/5 to-spiral-turquoise/5",
      borderClass: "border-spiral-green/20",
      badgeBg: "bg-spiral-green",
    },
    {
      id: 4,
      title: "Xây dựng Chiến Lược Theo Đuổi Đam Mê",
      description:
        "Nhận các khuyến nghị thực tế và các bước hành động để theo đuổi lĩnh vực bạn yêu thích. Bạn có thể tìm hiểu chuyên sâu với Notebook LM \"Spiral Tips & Insights\".",
      url: "https://notebooklm.google.com/notebook/cf690894-6164-4809-805c-68f91b730827",
      cardBg: "bg-gradient-to-br from-spiral-yellow/5 to-spiral-orange/5",
      borderClass: "border-spiral-yellow/20",
      badgeBg: "bg-spiral-yellow",
    },
    {
      id: 5,
      title: "Kết nối, Chia sẻ và Truyền Cảm Hứng",
      description:
        "Trải nghiệm và trở thành một phần của \"Spiral Media\" - nơi sắc màu cá nhân trở thành nguồn cảm hứng cho những sản phẩm hấp dẫn: MV \"The Color in Me\", bộ ảnh \"Spiral Lens\", tạp chí \"Spiral Ways\" và nhiều hơn thế nữa.",
      url: "https://www.facebook.com/thecolorinmesince2025",
      cardBg: "bg-gradient-to-br from-spiral-turquoise/5 to-spiral-blue/5",
      borderClass: "border-spiral-turquoise/20",
      badgeBg: "bg-spiral-turquoise",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/icon.png" alt="Spiral Horizon" className="w-8 h-8 rounded-lg object-cover" />
            <span className="font-bold text-lg text-gray-900">Spiral Horizon</span>
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
          <button className="px-6 py-2 bg-gradient-to-r from-spiral-blue to-spiral-turquoise text-white rounded-lg font-semibold hover:shadow-lg transition" onClick={() => window.open('https://chatgpt.com/g/g-68ed01f25c8c81918b432f95616b5c19-spiral-guide')}>
            Khám phá dãi màu ngay
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
              Vững tin theo đuổi đam mê với bản sắc Spiral Dynamics
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-12">
              Hệ sinh thái sản phẩm hướng nghiệp cá nhân hóa thông minh ứng dụng Spiral Dynamics và trí tuệ nhân tạo (AI) dành cho học sinh THPT.
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center" onClick={() => window.open('https://www.facebook.com/thecolorinmesince2025')}>
              <button className="px-8 py-4 bg-gradient-to-r from-spiral-blue to-spiral-turquoise text-white rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition transform">
                Tìm hiểu thêm về chúng tôi
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
                title: "Mơ hồ về thị trường nghề nghiệp",
                description: "Chưa hiểu rõ về đặc thù nghề nghiệp, cơ sở đào tạo và cơ hội việc làm sau khi ra trường",
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
                title: "Không biết mình phù hợp với điều gì",
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
                Khám phá dải màu Spiral Dynamics với 8 gam màu: beige, purple, red, blue, orange, green, yellow, turquoise.
                Dãy màu của bạn là độc nhất vô nhị và sẽ hé lộ thế giới tinh thần cũng như con đường tương lai của riêng bạn.
              </p>
              <div className="grid grid-cols-2 gap-6">
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
              <div className="space-y-3">
                {spiralColors.slice(4, 8).map((color) => (
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
            </div>

            {/* 6 Competencies */}
            <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
              <div className="text-5xl mb-4 transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1">📊</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Kết nối với Năng Lực Hướng Nghiệp
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Đo lường toàn diện năng lực hướng nghiệp và phân tích trong mối tương quan với hệ giá trị cá nhân của bạn.
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
            <p className="text-xl text-gray-600">5 bước đơn giản để tìm ra định hướng sự nghiệp.<br/>Click vào từng bước để tìm hiểu chi tiết và trải nghiệm nhé!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {howSteps.map((step) => {
              return (
                <div
                  key={step.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => window.open(step.url)}
                  onKeyDown={(e) => {
                    // open on Enter for keyboard users
                    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                    if ((e as any).key === "Enter") window.open(step.url);
                  }}
                  className={`group ${step.cardBg} p-8 rounded-2xl border-2 ${step.borderClass} hover:shadow-2xl hover:scale-105 transform transition duration-300 cursor-pointer`}
                  aria-label={`Open: ${step.title}`}
                >
                  <div className={`${step.badgeBg} w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1`}>
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
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
                    "An tâm khi biết rằng con có cơ sở vững chắc cho lựa chọn tương lai của mình",
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
                    "Thiết kế chương trình hướng nghiệp phù hợp, hiệu quả",
                    "Nâng cao hiệu quả tư vấn hướng nghiệp theo hướng cá nhân hóa",
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
          <div className="text-center mb-16 solution-title">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              500+ Học sinh THPT Đã Tin Dùng
              <br />
              Đánh giá tích cực từ Các Chuyên Gia Tâm Lý, Giáo Dục và Công Nghệ Thông Tin
            </h2>
            <p className="text-xl text-gray-600">
              <span className="typing">
              Bạn đã sẵn sàng trải nghiệm "Spiral Horizon" cùng chúng tôi chưa?
              </span>
            </p>
          </div>

          {/* Embedded Reel/video between the text and the CTA button */}
          <div className="mt-8 flex justify-center">
            <iframe
              title="Spiral Horizon Reel"
              loading="lazy"
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                "https://www.facebook.com/reel/677165481724622"
              )}&show_text=1&width=600`}
              className="w-full max-w-3xl h-64 md:h-96 rounded-lg"
              style={{ border: "none" }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="text-center mt-12">
            <button className="px-10 py-4 bg-spiral-blue text-white rounded-lg font-bold text-lg hover:shadow-xl transition" onClick={() => window.open('https://www.facebook.com/thecolorinmesince2025')}>
              Tìm hiểu thêm về chúng tôi
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
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-to-r mb-6">
            Sẵn Sàng Khám Phá Hệ Giá Trị Của Bạn?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tham gia khảo sát ngay hôm nay và nhận báo cáo phân tích cá nhân trong vài phút
          </p>
          <button className="px-10 py-4 bg-white text-spiral-blue rounded-lg font-bold text-lg hover:shadow-2xl transition" onClick={() => window.open('https://chatgpt.com/g/g-68ed01f25c8c81918b432f95616b5c19-spiral-guide')}>
            Bắt Đầu Khảo Sát Miễn Phí
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              © 2025 Spiral Horizon. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/thecolorinmesince2025" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
