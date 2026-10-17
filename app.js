/**
 * ADJECTIVES AND ADVERBS - Quiz Application Logic
 * Trường Cao đẳng Công nghệ Thủ Đức (TDC)
 * 
 * Features:
 * - 20 Comprehensive Questions on Adjectives & Adverbs
 * - Single docked frame on Mobile & iPad
 * - Strictly NO hints during test; Detailed explanations & Vietnamese translations post-submission
 * - Live Visitor Counter & Student Sign-in Tracking for GitHub deployment
 * - Teacher Admin Panel with CSV export
 */

// 20-Question Data Array
const QUIZ_DATA = [
  {
    id: 1,
    question: "1. I can ________ understand what he says.",
    options: [
      { key: "A", text: "ease" },
      { key: "B", text: "easier" },
      { key: "C", text: "easy" },
      { key: "D", text: "easily" }
    ],
    answer: "D",
    translation: "Tôi có thể dễ dàng hiểu được những gì anh ấy nói.",
    explanation: "Vị trí đứng trước động từ chính 'understand' (hoặc giữa trợ động từ 'can' và động từ chính) cần một trạng từ chỉ thể cách (Adverb of manner) để bổ nghĩa cho động từ đó. Trong 4 phương án:\n• 'ease': danh từ (sự dễ dàng) hoặc động từ (làm dịu đi)\n• 'easier': tính từ dạng so sánh hơn\n• 'easy': tính từ (dễ dàng)\n• 'easily': trạng từ (một cách dễ dàng)\nDo đó, đáp án chính xác là D. easily."
  },
  {
    id: 2,
    question: "2. The interviews with parents showed that the vast majority were ________ of teachers.",
    options: [
      { key: "A", text: "support" },
      { key: "B", text: "supportive" },
      { key: "C", text: "supporter" },
      { key: "D", text: "supporting" }
    ],
    answer: "B",
    translation: "Các cuộc phỏng vấn với các bậc phụ huynh cho thấy đại đa số họ đều ủng hộ các giáo viên.",
    explanation: "Cấu trúc cụm tính từ đi kèm giới từ: 'to be supportive of somebody/something' có nghĩa là ủng hộ, tương trợ ai đó/điều gì đó. Sau động từ to be 'were' ta cần một tính từ miêu tả thái độ. Trong các phương án:\n• 'support': động từ / danh từ (sự ủng hộ)\n• 'supportive': tính từ mang nghĩa ủng hộ, giúp đỡ ('supportive of')\n• 'supporter': danh từ chỉ người (người ủng hộ)\n• 'supporting': phân từ / bổ nghĩa danh từ (ví dụ: supporting role)\nDo đó, đáp án đúng là B. supportive."
  },
  {
    id: 3,
    question: "3. London is home to people of many ________ cultures.",
    options: [
      { key: "A", text: "diverse" },
      { key: "B", text: "diversity" },
      { key: "C", text: "diversify" },
      { key: "D", text: "diversification" }
    ],
    answer: "A",
    translation: "London là nơi sinh sống của người dân đến từ nhiều nền văn hóa đa dạng.",
    explanation: "Vị trí đứng trước danh từ số nhiều 'cultures' (các nền văn hóa) cần một tính từ (Adjective) để bổ nghĩa cho danh từ đó ('diverse cultures' = các nền văn hóa phong phú, đa dạng).\n• 'diverse' (adj): đa dạng, khác nhau\n• 'diversity' (n): sự đa dạng\n• 'diversify' (v): đa dạng hóa\n• 'diversification' (n): sự đa dạng hóa\nDo đó, đáp án chính xác là A. diverse."
  },
  {
    id: 4,
    question: "4. They had a ________ candlelit dinner last night and she accepted his proposal of marriage.",
    options: [
      { key: "A", text: "romance" },
      { key: "B", text: "romanticize" },
      { key: "C", text: "romantically" },
      { key: "D", text: "romantic" }
    ],
    answer: "D",
    translation: "Tối qua họ đã có một bữa tối lãng mạn dưới ánh nến và cô ấy đã nhận lời cầu hôn của anh.",
    explanation: "Vị trí đứng trước cụm danh từ 'candlelit dinner' (bữa tối dưới ánh nến) cần một tính từ (Adjective) để miêu tả tính chất của bữa tối đó ('a romantic candlelit dinner' = một bữa tối dưới ánh nến lãng mạn).\n• 'romance' (n): sự lãng mạn, mối tình\n• 'romanticize' (v): lãng mạn hóa\n• 'romantically' (adv): một cách lãng mạn\n• 'romantic' (adj): mang tính lãng mạn\nDo đó, đáp án đúng là D. romantic."
  },
  {
    id: 5,
    question: "5. If a boss wants to have a well-qualified staff, he should have to pay his employees________.",
    options: [
      { key: "A", text: "appropriately" },
      { key: "B", text: "appropriate" },
      { key: "C", text: "appropriation" },
      { key: "D", text: "appropriating" }
    ],
    answer: "A",
    translation: "Nếu người sếp muốn có một đội ngũ nhân viên giỏi, ông ấy phải trả lương cho nhân viên một cách thỏa đáng.",
    explanation: "Cấu trúc bổ ngữ cho động từ hành động: [Verb + Object + Adverb]. Ở đây động từ 'pay' (trả lương) đi kèm tân ngữ 'his employees' (nhân viên của ông ấy), do đó từ đứng sau tân ngữ phải là một trạng từ chỉ thể cách (Adverb of manner) để bổ nghĩa cho động từ 'pay' (trả như thế nào -> trả một cách thỏa đáng/hợp lý).\n• 'appropriately' (adv): một cách thỏa đáng, thích hợp\n• 'appropriate' (adj): thích hợp\n• 'appropriation' (n): sự chiếm đoạt, sự phân bổ ngân sách\nDo đó, đáp án chính xác là A. appropriately."
  },
  {
    id: 6,
    question: "6. As an ________, Mr. Pike is very worried about the increasing of juvenile delinquency.",
    options: [
      { key: "A", text: "educate" },
      { key: "B", text: "education" },
      { key: "C", text: "educator" },
      { key: "D", text: "educative" }
    ],
    answer: "C",
    translation: "Với tư cách là một nhà giáo dục, ông Pike rất lo lắng về sự gia tăng của tình trạng phạm pháp ở tuổi vị thành niên.",
    explanation: "Cấu trúc 'As an + [Noun chỉ người/nghề nghiệp]' đứng đầu câu để chỉ cương vị, nghề nghiệp tương ứng với chủ ngữ 'Mr. Pike' (một người cụ thể). Sau mạo từ 'an' cần một danh từ số ít chỉ người bắt đầu bằng một nguyên âm:\n• 'educate' (v): giáo dục\n• 'education' (n): nền giáo dục, sự giáo dục\n• 'educator' (n): nhà giáo dục, thầy giáo\n• 'educative' (adj): có tính giáo dục\nDo đó, đáp án đúng là C. educator."
  },
  {
    id: 7,
    question: "7. The Minister of the Education and Training Department appeared on TV last night to ________ his new policy.",
    options: [
      { key: "A", text: "public" },
      { key: "B", text: "publicly" },
      { key: "C", text: "publicize" },
      { key: "D", text: "publicizing" }
    ],
    answer: "C",
    translation: "Bộ trưởng Bộ Giáo dục và Đào tạo đã xuất hiện trên truyền hình tối qua để công bố chính sách mới của mình.",
    explanation: "Cấu trúc chỉ mục đích trong tiếng Anh: 'to + V-infinitive' (để làm gì). Sau 'to' cần một động từ nguyên thể có tân ngữ theo sau ('his new policy').\n• 'public': tính từ (công cộng) hoặc danh từ (công chúng)\n• 'publicly': trạng từ (một cách công khai)\n• 'publicize': động từ nguyên mẫu (công bố rộng rãi, quảng bá, công khai)\n• 'publicizing': dạng V-ing\nDo đó, đáp án chính xác là C. publicize."
  },
  {
    id: 8,
    question: "8. Sara speaks so ________ that I can't understand her.",
    options: [
      { key: "A", text: "fastly" },
      { key: "B", text: "fast" },
      { key: "C", text: "faster" },
      { key: "D", text: "fastest" }
    ],
    answer: "B",
    translation: "Sara nói nhanh đến mức tôi không thể hiểu được những gì cô ấy nói.",
    explanation: "Cấu trúc 'so + adv + that...' (quá... đến nỗi mà). Động từ 'speaks' là động từ hành động thường, do đó cần một trạng từ chỉ thể cách để bổ nghĩa.\nLưu ý quy tắc đặc biệt: 'fast' vừa là tính từ vừa là trạng từ bất quy tắc (không thêm đuôi -ly). Trong tiếng Anh chuẩn HOÀN TOÀN KHÔNG có từ 'fastly'.\nNgữ cảnh không so sánh với ai khác nên không dùng so sánh hơn (faster) hay so sánh nhất (fastest). Do đó chọn B. fast."
  },
  {
    id: 9,
    question: "9. She bought _________ for her younger brother yesterday afternoon.",
    options: [
      { key: "A", text: "a pair of sport new French shoes" },
      { key: "B", text: "a pair of new sport French shoes" },
      { key: "C", text: "a pair of new French sport shoes" },
      { key: "D", text: "a pair of French new sport shoes" }
    ],
    answer: "C",
    translation: "Chiều hôm qua cô ấy đã mua một đôi giày thể thao Pháp mới cho em trai mình.",
    explanation: "Quy tắc trật tự tính từ đứng trước danh từ trong tiếng Anh: OSASCOMP (Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material -> Purpose):\n• 'new': thuộc nhóm Age (tuổi tác: mới/cũ)\n• 'French': thuộc nhóm Origin (xuất xứ/quốc tịch: Pháp)\n• 'sport': thuộc nhóm Purpose (mục đích sử dụng: giày dùng để tập thể thao)\nThứ tự chuẩn là: Age (new) -> Origin (French) -> Purpose (sport) + shoes => 'a pair of new French sport shoes'. Do đó đáp án chính xác là C."
  },
  {
    id: 10,
    question: "10. He sat beside _________ covered with books.",
    options: [
      { key: "A", text: "an old wooden thick table" },
      { key: "B", text: "a wooden thick old table" },
      { key: "C", text: "a thick wooden old table" },
      { key: "D", text: "a thick old wooden table" }
    ],
    answer: "D",
    translation: "Anh ấy ngồi cạnh một chiếc bàn gỗ cũ dày cộm phủ đầy sách.",
    explanation: "Quy tắc trật tự của tính từ OSASCOMP (Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material -> Purpose):\n• 'thick': thuộc nhóm Size / Dimension (kích cỡ, độ dày)\n• 'old': thuộc nhóm Age (tuổi tác, mới hay cũ)\n• 'wooden': thuộc nhóm Material (chất liệu bằng gỗ)\nThứ tự đúng là: Size (thick) -> Age (old) -> Material (wooden) => 'a thick old wooden table' (dùng mạo từ 'a' vì 'thick' bắt đầu bằng phụ âm /θ/). Do đó đáp án là D."
  },
  {
    id: 11,
    question: "11. Edward felt ________ after the big meal.",
    options: [
      { key: "A", text: "sleep" },
      { key: "B", text: "sleepy" },
      { key: "C", text: "sleepily" },
      { key: "D", text: "slept" }
    ],
    answer: "B",
    translation: "Edward cảm thấy buồn ngủ sau bữa ăn no nê.",
    explanation: "Động từ 'feel' (quá khứ là 'felt') trong ngữ cảnh này là một động từ nối (Linking Verb / Copular Verb) miêu tả trạng thái, cảm giác của chủ ngữ. Theo sau Linking Verb là một Tính từ (Adjective), không dùng trạng từ.\n• 'sleepy' là tính từ (buồn ngủ)\n• 'sleepily' là trạng từ (một cách uể oải, ngái ngủ - chỉ dùng bổ nghĩa cho động từ hành động, ví dụ: smiled sleepily)\n• 'sleep' là danh từ/động từ\nDo đó, đáp án đúng là B. sleepy."
  },
  {
    id: 12,
    question: "12. The theater got ________ when the movie began.",
    options: [
      { key: "A", text: "quiet" },
      { key: "B", text: "quietly" },
      { key: "C", text: "quietness" },
      { key: "D", text: "more quieter" }
    ],
    answer: "A",
    translation: "Rạp hát trở nên yên ắng khi bộ phim bắt đầu chiếu.",
    explanation: "Động từ 'get' (ở quá khứ là 'got') là một Động từ nối (Linking Verb) có nghĩa là 'trở nên, trở thành'. Cấu trúc: 'get + Adjective' (trở nên như thế nào).\n• 'quiet' là tính từ (yên tĩnh, yên ắng)\n• 'quietly' là trạng từ (không đứng sau linking verb)\n• 'quietness' là danh từ\n• 'more quieter' là lỗi ngữ pháp nghiêm trọng (trùng lặp hai lần dạng so sánh hơn)\nDo đó, đáp án chính xác là A. quiet."
  },
  {
    id: 13,
    question: "13. He grew more and more ________ as she told him the story.",
    options: [
      { key: "A", text: "angry" },
      { key: "B", text: "angrily" },
      { key: "C", text: "anger" },
      { key: "D", text: "angrier" }
    ],
    answer: "A",
    translation: "Anh ấy càng lúc càng trở nên tức giận khi nghe cô ấy kể lại câu chuyện.",
    explanation: "Động từ 'grow' (quá khứ là 'grew') đóng vai trò là một Linking Verb mang nghĩa 'dần trở nên'.\nCấu trúc so sánh lũy tiến (càng ngày càng...): 'more and more + Adjective nguyên cấp' (dành cho tính từ 2 âm tiết trở lên hoặc tính từ miêu tả trạng thái).\nSau 'more and more' ta dùng tính từ dạng nguyên thể 'angry'. Không dùng 'angrier' vì đã có 'more and more'; không dùng 'angrily' vì sau linking verb cần tính từ. Do đó đáp án là A. angry."
  },
  {
    id: 14,
    question: "14. They sounded the alarm ________ when they smelled the smoke of the fire.",
    options: [
      { key: "A", text: "louder" },
      { key: "B", text: "loud" },
      { key: "C", text: "loudly" },
      { key: "D", text: "loudness" }
    ],
    answer: "C",
    translation: "Họ đã bấm chuông báo động một cách ầm ĩ khi ngửi thấy mùi khói của đám cháy.",
    explanation: "Trong câu này, 'sound' đóng vai trò là ngoại động từ chỉ hành động ('sounded the alarm' = bấm còi / rung chuông báo động) đi với tân ngữ 'the alarm'.\nĐể bổ nghĩa cho hành động bấm chuông báo động như thế nào, ta phải dùng trạng từ chỉ thể cách (Adverb of manner) đứng sau tân ngữ: 'sounded the alarm loudly'.\n(Lưu ý: Chỉ khi 'sound' là linking verb miêu tả âm thanh nghe như thế nào, ví dụ: 'The bell sounds loud', ta mới dùng tính từ. Ở đây là ngoại động từ hành động). Do đó chọn C. loudly."
  },
  {
    id: 15,
    question: "15. He ________ to find a job but he had no luck.",
    options: [
      { key: "A", text: "hardly tries" },
      { key: "B", text: "tried hardly" },
      { key: "C", text: "hard tries" },
      { key: "D", text: "tried hard" }
    ],
    answer: "D",
    translation: "Anh ấy đã cố gắng hết sức để tìm một công việc nhưng không gặp may.",
    explanation: "Phân tích câu trên 2 phương diện:\n1. Thì của động từ: Vế sau dùng thì quá khứ đơn 'had no luck', do đó vế trước động từ 'try' phải chia ở quá khứ đơn là 'tried'.\n2. Phân biệt trạng từ 'hard' và 'hardly':\n• 'hard' (adv): chăm chỉ, nỗ lực hết mình ('try hard' = cố gắng hết sức).\n• 'hardly' (adv): mang nghĩa phủ định 'hầu như không' (thường đứng trước động từ: 'hardly tried' = hầu như không cố gắng).\nNgữ cảnh câu muốn nói anh ấy đã nỗ lực hết mình nhưng không may mắn => dùng 'tried hard'. Do đó chọn D."
  },
  {
    id: 16,
    question: "16. ________, I have started jogging at night.",
    options: [
      { key: "A", text: "Late" },
      { key: "B", text: "Later" },
      { key: "C", text: "Lately" },
      { key: "D", text: "Latest" }
    ],
    answer: "C",
    translation: "Dạo gần đây, tôi đã bắt đầu đi chạy bộ vào ban đêm.",
    explanation: "Phân biệt hai trạng từ 'Late' và 'Lately':\n• 'Late' (adv/adj): muộn, trễ (trái nghĩa với early).\n• 'Lately' (adv): gần đây, dạo gần đây (= recently). 'Lately' là dấu hiệu nhận biết đặc trưng của thì hiện tại hoàn thành ('have started').\n• 'Later': sau đó, về sau.\n• 'Latest': mới nhất (tính từ so sánh nhất).\nDo đó đáp án chính xác là C. Lately."
  },
  {
    id: 17,
    question: "17. Is the store ________ on Sundays?",
    options: [
      { key: "A", text: "open" },
      { key: "B", text: "opens" },
      { key: "C", text: "will open" },
      { key: "D", text: "to opening" }
    ],
    answer: "A",
    translation: "Cửa hàng có mở cửa vào các ngày Chủ nhật không?",
    explanation: "Trong câu hỏi đảo bắt đầu bằng động từ to be 'Is [Subject] + [Adj]?', từ 'open' ở đây đóng vai trò là một TÍNH TỪ (Adjective) chỉ trạng thái mở cửa hoạt động (trái nghĩa với closed - đóng cửa).\nLưu ý: Nếu dùng 'open' như một động từ thường ở thì hiện tại đơn, câu hỏi bắt buộc phải mượn trợ động từ 'Does the store open on Sundays?'. Vì câu dùng to be 'Is' nên phía sau phải là tính từ 'open'. Đáp án là A."
  },
  {
    id: 18,
    question: "18. It was an ________ experience in my life.",
    options: [
      { key: "A", text: "extremely frightened" },
      { key: "B", text: "frightened extremely" },
      { key: "C", text: "extremely frightening" },
      { key: "D", text: "frightening extremely" }
    ],
    answer: "C",
    translation: "Đó là một trải nghiệm cực kỳ đáng sợ trong cuộc đời tôi.",
    explanation: "Phân tích 2 điểm ngữ pháp cốt lõi:\n1. Phân biệt tính từ đuôi -ing và -ed:\n• Tính từ đuôi -ing ('frightening'): miêu tả bản chất, đặc điểm của sự vật/hiện tượng gây ra cảm xúc sợ hãi (ở đây là 'experience' - trải nghiệm kinh hãi).\n• Tính từ đuôi -ed ('frightened'): miêu tả cảm giác của con người khi bị sợ hãi.\n2. Vị trí của trạng từ chỉ mức độ: Trạng từ 'extremely' (cực kỳ) phải đứng trước tính từ mà nó bổ nghĩa ('extremely frightening').\nDo đó, đáp án đúng là C. extremely frightening."
  },
  {
    id: 19,
    question: "19. What is this ________ thing on the cake?",
    options: [
      { key: "A", text: "round disgusting pink" },
      { key: "B", text: "disgusting pink round" },
      { key: "C", text: "disgusting round pink" },
      { key: "D", text: "round pink disgusting" }
    ],
    answer: "C",
    translation: "Cái thứ màu hồng tròn tròn trông gớm ghiếc này trên chiếc bánh là cái gì thế?",
    explanation: "Quy tắc trật tự tính từ OSASCOMP (Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material -> Purpose):\n• 'disgusting' (kinh tởm, ghê gớm): thuộc nhóm Opinion (quan điểm / đánh giá cá nhân)\n• 'round' (tròn): thuộc nhóm Shape (hình dạng)\n• 'pink' (hồng): thuộc nhóm Color (màu sắc)\nThứ tự theo chuẩn ngữ pháp là: Opinion (disgusting) -> Shape (round) -> Color (pink) => 'disgusting round pink thing'. Do đó đáp án chính xác là C."
  },
  {
    id: 20,
    question: "20. We had ________ lake right in front of us.",
    options: [
      { key: "A", text: "an amazing enormous blue" },
      { key: "B", text: "an enormous amazing blue" },
      { key: "C", text: "a blue enormous amazing" },
      { key: "D", text: "an amazing blue enormous" }
    ],
    answer: "A",
    translation: "Chúng tôi có một hồ nước xanh ngắt to lớn tuyệt đẹp ngay trước mắt mình.",
    explanation: "Quy tắc trật tự tính từ OSASCOMP (Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material -> Purpose):\n• 'amazing' (tuyệt vời): thuộc nhóm Opinion (quan điểm / cảm xúc nhận xét)\n• 'enormous' (to lớn, khổng lồ): thuộc nhóm Size (kích thước)\n• 'blue' (màu xanh lam): thuộc nhóm Color (màu sắc)\nThứ tự theo quy tắc là: Opinion (amazing) -> Size (enormous) -> Color (blue) => 'an amazing enormous blue lake'. Do đó đáp án đúng là A."
  }
];

// Application State
const state = {
  currentIndex: 0,
  userAnswers: new Array(QUIZ_DATA.length).fill(null),
  isSubmitted: false,
  timerSeconds: 0,
  timerInterval: null,
  theme: "light",
  viewMode: "desktop",
  visitCount: 128,
  student: {
    name: "Sinh viên TDC",
    id: "",
    className: ""
  }
};

// DOM Elements Cache
const elements = {
  appRoot: document.getElementById("app-root"),
  questionPillGrid: document.getElementById("question-pill-grid"),
  answeredCount: document.getElementById("answered-count"),
  progressBarFill: document.getElementById("progress-bar-fill"),
  questionCard: document.getElementById("question-card"),
  currentQBadge: document.getElementById("current-q-badge"),
  statusTag: document.getElementById("status-tag"),
  questionText: document.getElementById("question-text"),
  optionsGroup: document.getElementById("options-group"),
  explanationBox: document.getElementById("explanation-box"),
  expBadge: document.getElementById("exp-badge"),
  expTranslation: document.getElementById("exp-translation"),
  expExplanation: document.getElementById("exp-explanation"),
  btnPrev: document.getElementById("btn-prev"),
  btnNext: document.getElementById("btn-next"),
  btnSubmit: document.getElementById("btn-submit"),
  btnQuickSubmit: document.getElementById("btn-quick-submit"),
  timerDisplay: document.getElementById("timer-display"),
  themeToggle: document.getElementById("btn-theme-toggle"),
  themeIcon: document.getElementById("theme-icon"),
  visitorCountText: document.getElementById("visitor-count-text"),
  studentNameTag: document.getElementById("student-name-tag"),
  avatarCircle: document.getElementById("avatar-circle"),
  btnEditStudent: document.getElementById("btn-edit-student"),

  // Modals
  resultModal: document.getElementById("result-modal"),
  confirmModal: document.getElementById("confirm-modal"),
  studentModal: document.getElementById("student-modal"),
  adminModal: document.getElementById("admin-modal"),
  fullReviewModal: document.getElementById("full-review-modal"),

  // Result Elements
  resultScore: document.getElementById("result-score"),
  resultRating: document.getElementById("result-rating"),
  statCorrect: document.getElementById("stat-correct"),
  statWrong: document.getElementById("stat-wrong"),
  statTime: document.getElementById("stat-time"),
  breakdownGrid: document.getElementById("breakdown-grid"),

  // Student Form
  inputStudentName: document.getElementById("input-student-name"),
  inputStudentId: document.getElementById("input-student-id"),
  inputStudentClass: document.getElementById("input-student-class"),
  formStudent: document.getElementById("form-student")
};

// ==========================================================================
// VISITOR TRACKING & STORAGE
// ==========================================================================
const STORAGE_PREFIX = "tdc_adjadv_";
const STORAGE_KEY_VISITS = `${STORAGE_PREFIX}visits_count`;
const STORAGE_KEY_SESSION = `${STORAGE_PREFIX}has_visited`;
const STORAGE_KEY_SUBMISSIONS = `${STORAGE_PREFIX}submissions`;
const STORAGE_KEY_STUDENT = `${STORAGE_PREFIX}current_student`;
const STORAGE_KEY_THEME = `${STORAGE_PREFIX}theme`;

function initVisitorTracking() {
  let visits = parseInt(localStorage.getItem(STORAGE_KEY_VISITS) || "128", 10);

  // If new session, increment count
  if (!sessionStorage.getItem(STORAGE_KEY_SESSION)) {
    visits += 1;
    localStorage.setItem(STORAGE_KEY_VISITS, visits.toString());
    sessionStorage.setItem(STORAGE_KEY_SESSION, "true");
  }

  state.visitCount = visits;
  if (elements.visitorCountText) {
    elements.visitorCountText.textContent = visits.toLocaleString();
  }

  // Load saved student if exists
  const savedStudent = localStorage.getItem(STORAGE_KEY_STUDENT);
  if (savedStudent) {
    try {
      state.student = JSON.parse(savedStudent);
      updateStudentUI();
    } catch (e) {}
  }
}

function recordSubmission(score, total, timeFormatted) {
  const submissions = JSON.parse(localStorage.getItem(STORAGE_KEY_SUBMISSIONS) || "[]");

  const record = {
    id: Date.now(),
    name: state.student.name || "Sinh viên TDC",
    studentId: state.student.id || "N/A",
    className: state.student.className || "N/A",
    score: score,
    total: total,
    percentage: Math.round((score / total) * 100),
    timeSpent: timeFormatted,
    date: new Date().toLocaleString("vi-VN")
  };

  submissions.unshift(record);
  localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(submissions));
}

function updateStudentUI() {
  if (elements.studentNameTag) {
    elements.studentNameTag.textContent = state.student.name || "Sinh viên TDC";
  }
  if (elements.avatarCircle) {
    const firstLetter = (state.student.name || "T").trim().charAt(0).toUpperCase();
    elements.avatarCircle.textContent = firstLetter || "T";
  }
}

function saveStudentProfile(e) {
  e.preventDefault();
  const name = elements.inputStudentName.value.trim();
  const id = elements.inputStudentId.value.trim();
  const className = elements.inputStudentClass.value.trim();

  state.student = {
    name: name || "Sinh viên TDC",
    id: id,
    className: className
  };

  localStorage.setItem(STORAGE_KEY_STUDENT, JSON.stringify(state.student));
  updateStudentUI();
  elements.studentModal.classList.remove("open");
}

// ==========================================================================
// QUIZ CORE FUNCTIONS
// ==========================================================================
function initQuiz() {
  buildNavigatorPills();
  renderQuestion(state.currentIndex);
  startTimer();
  initTheme();
  initVisitorTracking();
  attachEvents();
}

// Build question navigator grid (1 to 20)
function buildNavigatorPills() {
  elements.questionPillGrid.innerHTML = "";
  QUIZ_DATA.forEach((q, idx) => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "q-pill";
    pill.id = `q-pill-${idx}`;
    pill.textContent = idx + 1;
    pill.title = `Câu hỏi ${idx + 1}`;
    pill.addEventListener("click", () => {
      goToQuestion(idx);
    });
    elements.questionPillGrid.appendChild(pill);
  });
  updateNavigatorPills();
}

// Update active and answered state of pills
function updateNavigatorPills() {
  QUIZ_DATA.forEach((q, idx) => {
    const pill = document.getElementById(`q-pill-${idx}`);
    if (!pill) return;

    pill.className = "q-pill";
    if (idx === state.currentIndex) {
      pill.classList.add("active");
    }

    if (state.isSubmitted) {
      // Review mode: green if correct, red if wrong
      const userAns = state.userAnswers[idx];
      if (userAns === q.answer) {
        pill.classList.add("correct-pill");
      } else {
        pill.classList.add("wrong-pill");
      }
    } else {
      // Taking quiz mode: green if answered
      if (state.userAnswers[idx] !== null) {
        pill.classList.add("answered");
      }
    }
  });

  // Update progress bar
  const answeredTotal = state.userAnswers.filter(a => a !== null).length;
  elements.answeredCount.textContent = answeredTotal;
  const percent = (answeredTotal / QUIZ_DATA.length) * 100;
  elements.progressBarFill.style.width = `${percent}%`;
}

// Render question and options inside the SINGLE frame
function renderQuestion(index) {
  state.currentIndex = index;
  const qData = QUIZ_DATA[index];

  // Header inside card
  elements.currentQBadge.textContent = `CÂU ${qData.id} / ${QUIZ_DATA.length}`;

  const isAnswered = state.userAnswers[index] !== null;
  if (state.isSubmitted) {
    const isCorrect = state.userAnswers[index] === qData.answer;
    elements.statusTag.className = `status-tag ${isCorrect ? "done" : ""}`;
    elements.statusTag.style.backgroundColor = isCorrect ? "var(--success-light)" : "var(--danger-light)";
    elements.statusTag.style.color = isCorrect ? "var(--success-dark)" : "var(--danger)";
    elements.statusTag.textContent = isCorrect ? "✓ Trả lời Đúng" : "✗ Trả lời Sai";
  } else {
    elements.statusTag.className = `status-tag ${isAnswered ? "done" : ""}`;
    elements.statusTag.style.backgroundColor = "";
    elements.statusTag.style.color = "";
    elements.statusTag.textContent = isAnswered ? "Đã chọn đáp án" : "Chưa làm";
  }

  // Question Text (Strictly NO hints during quiz)
  elements.questionText.textContent = qData.question;

  // Options List inside the SAME frame
  elements.optionsGroup.innerHTML = "";
  const selectedKey = state.userAnswers[index];

  qData.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.dataset.key = opt.key;

    let badgeHtml = "";

    if (state.isSubmitted) {
      btn.disabled = true;
      if (opt.key === qData.answer) {
        btn.classList.add("correct");
        badgeHtml = `<span class="answer-badge badge-correct">✓ Đáp án đúng</span>`;
      }
      if (opt.key === selectedKey && selectedKey !== qData.answer) {
        btn.classList.add("wrong");
        badgeHtml = `<span class="answer-badge badge-wrong">✗ Lựa chọn của bạn</span>`;
      }
      if (opt.key === selectedKey && selectedKey === qData.answer) {
        badgeHtml = `<span class="answer-badge badge-correct">✓ Bạn đã chọn đúng</span>`;
      }
    } else {
      if (opt.key === selectedKey) {
        btn.classList.add("selected");
      }
      btn.addEventListener("click", () => selectOption(index, opt.key));
    }

    btn.innerHTML = `
      <span class="option-key">${opt.key}</span>
      <span class="option-text">${opt.text}</span>
      ${badgeHtml}
    `;

    elements.optionsGroup.appendChild(btn);
  });

  // Explanation and Translation Box inside the SAME frame
  // Strictly shown ONLY after submission
  if (state.isSubmitted) {
    elements.explanationBox.style.display = "block";
    elements.expBadge.textContent = `Đáp án đúng: ${qData.answer}`;
    elements.expTranslation.textContent = qData.translation;
    elements.expExplanation.textContent = qData.explanation;
  } else {
    elements.explanationBox.style.display = "none";
  }

  // Footer Navigation State
  elements.btnPrev.disabled = index === 0;
  elements.btnNext.disabled = index === QUIZ_DATA.length - 1;

  if (state.isSubmitted) {
    elements.btnSubmit.textContent = "Xem kết quả";
  } else {
    elements.btnSubmit.textContent = "Nộp bài thi";
  }

  updateNavigatorPills();
}

// Select an option during the quiz
function selectOption(qIndex, key) {
  if (state.isSubmitted) return;

  state.userAnswers[qIndex] = key;
  renderQuestion(qIndex);

  // Auto advance to next question smoothly after 280ms if not on last question
  if (qIndex < QUIZ_DATA.length - 1) {
    setTimeout(() => {
      if (state.currentIndex === qIndex && !state.isSubmitted) {
        goToQuestion(qIndex + 1);
      }
    }, 280);
  }
}

function goToQuestion(index) {
  if (index < 0 || index >= QUIZ_DATA.length) return;
  renderQuestion(index);
}

// Timer
function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerSeconds = 0;
  state.timerInterval = setInterval(() => {
    state.timerSeconds++;
    elements.timerDisplay.textContent = formatTime(state.timerSeconds);
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

// ==========================================================================
// SUBMIT & RESULT EVALUATION
// ==========================================================================
function openSubmitConfirm() {
  if (state.isSubmitted) {
    openResultModal();
    return;
  }

  const answeredCount = state.userAnswers.filter(a => a !== null).length;
  const confirmText = document.getElementById("confirm-text");
  if (confirmText) {
    if (answeredCount < QUIZ_DATA.length) {
      confirmText.innerHTML = `Bạn mới hoàn thành <strong>${answeredCount}/${QUIZ_DATA.length} câu</strong>.<br>Vẫn còn <strong>${QUIZ_DATA.length - answeredCount} câu</strong> chưa trả lời. Bạn có chắc chắn muốn nộp bài?`;
    } else {
      confirmText.innerHTML = `Bạn đã hoàn thành đủ <strong>${answeredCount}/${QUIZ_DATA.length} câu</strong>.<br>Bạn có muốn nộp bài và xem giải thích chi tiết ngay bây giờ?`;
    }
  }
  elements.confirmModal.classList.add("open");
}

function submitQuiz() {
  elements.confirmModal.classList.remove("open");
  stopTimer();
  state.isSubmitted = true;

  // Calculate score
  let correctCount = 0;
  QUIZ_DATA.forEach((q, idx) => {
    if (state.userAnswers[idx] === q.answer) {
      correctCount++;
    }
  });

  const wrongCount = QUIZ_DATA.length - correctCount;
  const timeFormatted = formatTime(state.timerSeconds);

  // Record submission in storage
  recordSubmission(correctCount, QUIZ_DATA.length, timeFormatted);

  // Update UI & Modal
  elements.resultScore.textContent = correctCount;
  elements.statCorrect.textContent = correctCount;
  elements.statWrong.textContent = wrongCount;
  elements.statTime.textContent = timeFormatted;

  let ratingText = "Cần cố gắng thêm!";
  if (correctCount >= 19) ratingText = "Xuất sắc! Tuyệt đối!";
  else if (correctCount >= 16) ratingText = "Rất tốt! Nắm vững ngữ pháp!";
  else if (correctCount >= 12) ratingText = "Khá tốt! Ôn tập thêm các lỗi sai nhé!";
  else if (correctCount >= 10) ratingText = "Đạt yêu cầu. Hãy xem kỹ giải thích!";
  elements.resultRating.textContent = ratingText;

  // Build Result Breakdown Grid
  elements.breakdownGrid.innerHTML = "";
  QUIZ_DATA.forEach((q, idx) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "breakdown-item";
    const isCorrect = state.userAnswers[idx] === q.answer;
    item.classList.add(isCorrect ? "correct" : "wrong");

    const userAns = state.userAnswers[idx] || "—";
    item.innerHTML = `
      <span class="breakdown-q">Câu ${q.id}</span>
      <span class="breakdown-status">${isCorrect ? `✓ ${q.answer}` : `✗ (${userAns} -> ${q.answer})`}</span>
    `;

    item.addEventListener("click", () => {
      elements.resultModal.classList.remove("open");
      goToQuestion(idx);
    });

    elements.breakdownGrid.appendChild(item);
  });

  // Re-render current question to reveal answers & explanations
  renderQuestion(state.currentIndex);
  openResultModal();
}

function openResultModal() {
  elements.resultModal.classList.add("open");
}

function restartQuiz() {
  elements.resultModal.classList.remove("open");
  state.userAnswers = new Array(QUIZ_DATA.length).fill(null);
  state.isSubmitted = false;
  state.currentIndex = 0;
  buildNavigatorPills();
  renderQuestion(0);
  startTimer();
}

// ==========================================================================
// FULL REVIEW MODAL (Xem trọn bộ 20 câu một lúc)
// ==========================================================================
function openFullReviewModal() {
  const container = document.getElementById("full-review-content");
  container.innerHTML = "";

  QUIZ_DATA.forEach((q, idx) => {
    const userAns = state.userAnswers[idx];
    const isCorrect = userAns === q.answer;

    const card = document.createElement("div");
    card.className = "full-review-card";

    let optionsHtml = "";
    q.options.forEach(opt => {
      let optClass = "full-opt";
      let badge = "";
      if (opt.key === q.answer) {
        optClass += " correct";
        badge = `<span class="badge-tag correct">✓ Đáp án đúng</span>`;
      }
      if (opt.key === userAns && userAns !== q.answer) {
        optClass += " wrong";
        badge = `<span class="badge-tag wrong">✗ Bạn đã chọn</span>`;
      }
      if (opt.key === userAns && userAns === q.answer) {
        badge = `<span class="badge-tag correct">✓ Bạn đã chọn đúng</span>`;
      }

      optionsHtml += `
        <div class="${optClass}">
          <span class="opt-bullet">${opt.key}.</span>
          <span class="opt-text">${opt.text}</span>
          ${badge}
        </div>
      `;
    });

    card.innerHTML = `
      <div class="full-card-header">
        <span class="full-q-num">Câu ${q.id}</span>
        <span class="full-q-status ${isCorrect ? "correct" : "wrong"}">
          ${isCorrect ? "✓ Đúng" : `✗ Sai (Bạn chọn ${userAns || "trống"})`}
        </span>
      </div>
      <p class="full-q-text">${q.question}</p>
      <div class="full-options-list">
        ${optionsHtml}
      </div>
      <div class="full-exp-box">
        <div class="full-exp-line">
          <strong>🇻🇳 Dịch nghĩa:</strong> ${q.translation}
        </div>
        <div class="full-exp-line">
          <strong>📚 Giải thích:</strong> ${q.explanation}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  elements.fullReviewModal.classList.add("open");
}

// ==========================================================================
// ADMIN / TEACHER DASHBOARD & CSV EXPORT
// ==========================================================================
function openAdminModal() {
  const submissions = JSON.parse(localStorage.getItem(STORAGE_KEY_SUBMISSIONS) || "[]");
  const visits = state.visitCount;

  document.getElementById("admin-visit-count").textContent = visits;
  document.getElementById("admin-submission-count").textContent = submissions.length;

  let avgScore = 0;
  if (submissions.length > 0) {
    const totalScore = submissions.reduce((sum, item) => sum + item.score, 0);
    avgScore = (totalScore / submissions.length).toFixed(1);
  }
  document.getElementById("admin-avg-score").textContent = `${avgScore} / 20`;

  const tbody = document.getElementById("admin-table-body");
  tbody.innerHTML = "";

  if (submissions.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 20px;">Chưa có lượt nộp bài nào được lưu.</td></tr>`;
  } else {
    submissions.forEach((item, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td><strong>${item.name}</strong></td>
        <td>${item.studentId || "-"}</td>
        <td>${item.className || "-"}</td>
        <td><strong style="color: var(--primary);">${item.score} / ${item.total}</strong> (${item.percentage}%)</td>
        <td>${item.timeSpent}</td>
        <td><small style="color: var(--text-muted);">${item.date}</small></td>
      `;
      tbody.appendChild(tr);
    });
  }

  elements.adminModal.classList.add("open");
}

function exportSubmissionsCSV() {
  const submissions = JSON.parse(localStorage.getItem(STORAGE_KEY_SUBMISSIONS) || "[]");
  if (submissions.length === 0) {
    alert("Chưa có dữ liệu sinh viên nộp bài để xuất file.");
    return;
  }

  let csvContent = "\uFEFF"; // UTF-8 BOM for Excel
  csvContent += "STT,Họ và tên,MSSV,Lớp,Điểm số,Tổng câu,Tỉ lệ %,Thời gian làm bài,Thời điểm nộp\n";

  submissions.forEach((item, i) => {
    const row = [
      i + 1,
      `"${item.name.replace(/"/g, '""')}"`,
      `"${(item.studentId || "").replace(/"/g, '""')}"`,
      `"${(item.className || "").replace(/"/g, '""')}"`,
      item.score,
      item.total,
      item.percentage + "%",
      item.timeSpent,
      `"${item.date}"`
    ];
    csvContent += row.join(",") + "\n";
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `TDC_Adjectives_Adverbs_Results_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function clearSubmissions() {
  if (confirm("Bạn có chắc chắn muốn xóa tất cả lịch sử nộp bài của sinh viên trên máy này?")) {
    localStorage.removeItem(STORAGE_KEY_SUBMISSIONS);
    openAdminModal();
  }
}

// ==========================================================================
// THEME & VIEW SWITCHER
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY_THEME) || "light";
  setTheme(savedTheme);
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY_THEME, theme);
  elements.themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
  setTheme(state.theme === "dark" ? "light" : "dark");
}

function setViewMode(mode) {
  state.viewMode = mode;
  elements.appRoot.classList.remove("desktop-mode", "ipad-mode", "mobile-mode");
  elements.appRoot.classList.add(`${mode}-mode`);

  document.querySelectorAll(".dev-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === mode);
  });
}

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================
function attachEvents() {
  // Navigation
  elements.btnPrev.addEventListener("click", () => goToQuestion(state.currentIndex - 1));
  elements.btnNext.addEventListener("click", () => goToQuestion(state.currentIndex + 1));
  elements.btnSubmit.addEventListener("click", openSubmitConfirm);
  if (elements.btnQuickSubmit) elements.btnQuickSubmit.addEventListener("click", openSubmitConfirm);

  // Submit Modal
  document.getElementById("btn-confirm-submit").addEventListener("click", submitQuiz);
  document.getElementById("btn-cancel-submit").addEventListener("click", () => elements.confirmModal.classList.remove("open"));
  document.getElementById("btn-close-confirm").addEventListener("click", () => elements.confirmModal.classList.remove("open"));

  // Result Modal
  document.getElementById("btn-close-result").addEventListener("click", () => elements.resultModal.classList.remove("open"));
  document.getElementById("btn-review").addEventListener("click", () => elements.resultModal.classList.remove("open"));
  document.getElementById("btn-restart").addEventListener("click", restartQuiz);
  document.getElementById("btn-view-all-20").addEventListener("click", () => {
    elements.resultModal.classList.remove("open");
    openFullReviewModal();
  });

  // Full Review Modal
  document.getElementById("btn-close-full-review").addEventListener("click", () => elements.fullReviewModal.classList.remove("open"));

  // Student Profile Modal
  if (elements.btnEditStudent) {
    elements.btnEditStudent.addEventListener("click", () => {
      elements.inputStudentName.value = state.student.name || "";
      elements.inputStudentId.value = state.student.id || "";
      elements.inputStudentClass.value = state.student.className || "";
      elements.studentModal.classList.add("open");
    });
  }
  document.getElementById("btn-close-student").addEventListener("click", () => elements.studentModal.classList.remove("open"));
  elements.formStudent.addEventListener("submit", saveStudentProfile);

  // Admin Modal
  document.getElementById("btn-admin-open").addEventListener("click", openAdminModal);
  document.getElementById("btn-close-admin").addEventListener("click", () => elements.adminModal.classList.remove("open"));
  document.getElementById("btn-export-csv").addEventListener("click", exportSubmissionsCSV);
  document.getElementById("btn-clear-data").addEventListener("click", clearSubmissions);

  // Theme Toggle
  elements.themeToggle.addEventListener("click", toggleTheme);

  // Device Switcher
  document.querySelectorAll(".dev-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setViewMode(btn.dataset.view);
    });
  });

  // Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    // If modal is open, ignore
    if (document.querySelector(".modal-backdrop.open")) return;

    if (e.key === "ArrowLeft") {
      goToQuestion(state.currentIndex - 1);
    } else if (e.key === "ArrowRight") {
      goToQuestion(state.currentIndex + 1);
    } else if (["1", "2", "3", "4"].includes(e.key)) {
      const keys = ["A", "B", "C", "D"];
      const key = keys[parseInt(e.key, 10) - 1];
      selectOption(state.currentIndex, key);
    } else if (["a", "b", "c", "d", "A", "B", "C", "D"].includes(e.key)) {
      selectOption(state.currentIndex, e.key.toUpperCase());
    }
  });
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", initQuiz);
