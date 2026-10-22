// ==============================================================================
// VINUNI AV DATA TRACK - APPLICATION LOGIC (app.js)
// Comprehensive State Management, Audio Synth, 3D Flashcards, Exam & Search Engine
// Utilizing Themify Icons, Urbanist & Playwrite_VN_Guides Typography
// ==============================================================================

// --- 1. DATA DEFINITIONS ---

const MODULE_NAMES = {
  1: "Khối 1: Nhận thức 2D (Ngày 1-5)",
  2: "Khối 2: Chất lượng & Vòng đời (Ngày 6-8)",
  3: "Khối 3: Cảm biến chuyên biệt 2D (Ngày 9-11)",
  4: "Khối 4: 3D LiDAR & Multi-Sensor (Ngày 12-14)"
};

const QUIZ_BANK = [
  // Khối 1
  {
    id: 1, day: 1, module: 1,
    question: "Theo chuẩn phân loại tự động hóa SAE J3016, cấp độ nào xe tự vận hành trong miền thiết kế (ODD) nhưng yêu cầu người lái phải sẵn sàng tiếp quản khi có yêu cầu (TOR) trong vòng 4–10 giây?",
    options: ["SAE Cấp 1 (Driver Assistance)", "SAE Cấp 2 (Partial Automation)", "SAE Cấp 3 (Conditional Automation)", "SAE Cấp 4 (High Automation)"],
    correctAnswer: 2,
    explanation: "SAE Cấp 3 (Tự động hóa có điều kiện) cho phép hệ thống tự xử lý toàn bộ tác vụ lái trong miền ODD xác định, nhưng bắt buộc người lái phải sẵn sàng nhận lại quyền điều khiển khi hệ thống phát tín hiệu chuyển giao (Take-Over Request - TOR) trong khoảng 4-10 giây."
  },
  {
    id: 2, day: 1, module: 1,
    question: "Trong chuỗi xử lý nhận thức (Perception Pipeline) của xe tự hành, vai trò cốt lõi của dữ liệu gán nhãn (Ground Truth) là gì?",
    options: ["Để nén dữ liệu video thô lưu vào ổ cứng xe", "Là nguồn sự thật duy nhất để huấn luyện và tính hàm mất mát (loss function) cho mô hình AI", "Để hiển thị trực tiếp lên bảng đồng hồ táp-lô cho tài xế", "Để thay thế hoàn toàn cho cảm biến LiDAR và Radar"],
    correctAnswer: 1,
    explanation: "Mô hình học máy không thể tự phân định đúng sai trong thực tế; nhãn gán chính là nguồn sự thật duy nhất (single source of truth). Mô hình học bằng cách so sánh phán đoán với nhãn gán thông qua hàm mất mát và cập nhật trọng số."
  },
  {
    id: 3, day: 2, module: 1,
    question: "Trong bài toán phát hiện vật thể 2D cho xe tự lái, sự khác biệt căn bản giữa Truncation và Occlusion là gì?",
    options: ["Truncation là xe bị hỏng động cơ; Occlusion là xe đang dừng đèn đỏ", "Truncation là vật bị cắt cụt do mép ảnh camera; Occlusion là vật bị che khuất bởi vật thể khác trong không gian 3D", "Truncation là người đi bộ bị che; Occlusion là ô tô bị che", "Hai khái niệm này hoàn toàn đồng nghĩa"],
    correctAnswer: 1,
    explanation: "Truncation xảy ra khi một phần vật thể nằm ngoài tầm nhìn của cảm biến (bị viền khung ảnh cắt cụt). Occlusion xảy ra khi vật thể nằm trọn trong góc mở nhưng bị một đối tượng khác ở phía trước chắn tầm nhìn."
  },
  {
    id: 4, day: 2, module: 1,
    question: "Tại sao trong tập dữ liệu xe tự lái thường yêu cầu vẽ hộp bao dạng 'Amodal Bounding Box' thay vì 'Modal Bounding Box'?",
    options: ["Vì Amodal box chỉ khoanh vùng các pixel nhìn thấy rõ", "Vì Amodal box bao bọc toàn bộ kích thước vật lý ước tính của vật thể (cả phần bị che), giúp theo dõi vị trí và quỹ đạo không gian thực", "Vì Amodal box bắt buộc phải là hình elip", "Vì các công cụ không hỗ trợ dạng Modal box"],
    correctAnswer: 1,
    explanation: "Modal box chỉ bao phần pixel nhìn thấy (khiến một chiếc ô tô bị xe máy che nửa thân trông như xe ngắn 1 mét). Amodal box ước tính toàn bộ kích thước vật lý của xe, giúp hệ thống lập kế hoạch tránh va chạm chính xác."
  },
  {
    id: 5, day: 2, module: 1,
    question: "Theo nghiên cứu thực nghiệm với mô hình Faster R-CNN trên tập benchmark, loại lỗi nhãn nào gây sụt giảm mAP@50 nghiêm trọng hơn?",
    options: ["Lệch viền hộp 20% gây hại gấp đôi so với sai tên class 20%", "Sai tên class 20% gây hại gấp đôi so với lệch viền hộp 20% (-5.3 mAP so với -2.7 mAP)", "Cả hai loại lỗi đều làm giảm mAP như nhau", "Sai tên class không ảnh hưởng đến mAP"],
    correctAnswer: 1,
    explanation: "Thực nghiệm cho thấy 20% nhãn sai tên class làm mAP@50 sụt giảm 5.3 điểm, trong khi 20% lệch biên hộp chỉ làm giảm 2.7 điểm. Sai tên class làm đảo lộn hoàn toàn đặc trưng phân loại của backbone."
  },
  {
    id: 6, day: 3, module: 1,
    question: "Khi thực hiện gán nhãn video bằng cơ chế nội suy (Track Mode), hiện tượng gì xảy ra nếu xe thực tế quay đầu hoặc rẽ góc cua giữa hai keyframe?",
    options: ["Công cụ tự động uốn cong đường nội suy theo quỹ đạo xe", "Hộp nội suy tuyến tính đi thẳng nên bị văng ra khỏi thân xe thật", "Mã Track ID của xe sẽ tự động đổi sang số mới", "Độ phân giải của khung hình bị giảm sút"],
    correctAnswer: 1,
    explanation: "Thuật toán nội suy tuyến tính ngầm định chuyển động thẳng đều giữa 2 mốc keyframe. Khi xe vào cua rẽ (quỹ đạo cong), đường thẳng nối 2 mốc sẽ trượt ra khỏi vật thể. Annotator phải chèn thêm keyframe tại đỉnh khúc cua."
  },
  {
    id: 7, day: 3, module: 1,
    question: "Quy tắc bất biến cốt lõi của mã định danh (Track ID) trong chuỗi khung hình là gì?",
    options: ["Cứ sau mỗi 100 frame phải đổi một Track ID mới", "Mỗi đối tượng vật lý duy nhất giữ nguyên một Track ID từ Enter đến Exit, kể cả khi bị che khuất tạm thời", "Khi vật thể bị che khuất quá 5 frame, phải xóa ID cũ và cấp ID mới", "Hai xe đi cạnh nhau được phép dùng chung một Track ID"],
    correctAnswer: 1,
    explanation: "Bất biến định danh (Identity Invariant) quy định: 1 vật thể thực = 1 Track ID duy nhất từ khi xuất hiện đến khi rời hẳn tầm nhìn. Việc cấp ID mới sau khi hết che khuất bị coi là lỗi Đứt đoạn (Fragmentation)."
  },
  {
    id: 8, day: 4, module: 1,
    question: "Chuẩn khung xương COCO-17 định nghĩa bao nhiêu điểm mốc (keypoints) trên cơ thể người?",
    options: ["14 điểm", "17 điểm", "21 điểm", "33 điểm"],
    correctAnswer: 1,
    explanation: "COCO-17 bao gồm đúng 17 khớp nối giải phẫu: Mũi, 2 Mắt, 2 Tai, 2 Vai, 2 Khuỷu tay, 2 Cổ tay, 2 Hông, 2 Đầu gối, 2 Cổ chân."
  },
  {
    id: 9, day: 4, module: 1,
    question: "Trong quy chuẩn gán nhãn tư thế người COCO, cờ trạng thái quan sát v=1 có ý nghĩa gì?",
    options: ["Khớp nối không tồn tại trên cơ thể", "Khớp nối nằm ngoài khung hình ảnh", "Khớp nối có trong ảnh nhưng bị che khuất (người gán nhãn suy đoán tọa độ)", "Khớp nối nhìn thấy rõ ràng trên ảnh"],
    correctAnswer: 2,
    explanation: "Hệ thống cờ COCO quy ước: v=0 (không gán / ngoài ảnh), v=1 (có gán nhưng bị che khuất - occluded), v=2 (nhìn thấy rõ ràng - visible)."
  },
  {
    id: 10, day: 5, module: 1,
    question: "Tại sao định dạng nén Run-Length Encoding (RLE) được ưu tiên sử dụng để lưu trữ mặt nạ phân vùng (segmentation mask)?",
    options: ["Vì RLE nén không tổn hao bitmap nhị phân, giảm dung lượng bộ nhớ vượt trội so với lưu ma trận điểm thô", "Vì RLE có thể tự động biến ảnh 2D thành điểm 3D", "Vì RLE cho phép hiển thị ảnh không cần màn hình", "Vì chỉ có chuẩn RLE mới vẽ được hình tròn"],
    correctAnswer: 0,
    explanation: "Mặt nạ nhị phân nếu lưu thô pixel sẽ tốn hàng Megabyte cho mỗi ảnh. RLE nén chuỗi các pixel 0 và 1 liên tiếp mà không làm mất thông tin, giúp lưu trữ cực kỳ tối ưu trong các hệ thống như COCO và CVAT."
  },

  // Khối 2
  {
    id: 11, day: 6, module: 2,
    question: "Vòng đời gán nhãn dữ liệu công nghiệp (Data Annotation Lifecycle) chuẩn bao gồm bao nhiêu bước?",
    options: ["5 bước", "7 bước", "9 bước", "12 bước"],
    correctAnswer: 2,
    explanation: "Vòng đời gồm 9 bước khép kín: (1) Objective & Scope → (2) Collection & Selection → (3) Preparation & Preprocess → (4) Annotation Guideline → (5) Pilot Annotation → (6) Batch Annotation → (7) QA / QC → (8) Release → (9) Monitoring & Feedback."
  },
  {
    id: 12, day: 6, module: 2,
    question: "Lỗi 'Mất liên kết Group' (Group Key Leakage) trong khâu chia tập dữ liệu (Data Split) sẽ dẫn đến hậu quả gì?",
    options: ["Mô hình không thể bắt đầu quá trình huấn luyện", "Các ảnh gần như giống hệt nhau của cùng một đối tượng/khay rơi vào cả tập Train và Test, làm điểm Test cao giả tạo", "Dữ liệu tự động bị xóa khỏi ổ cứng", "Làm giảm tốc độ đọc ghi của ổ đĩa"],
    correctAnswer: 1,
    explanation: "Nếu chia ngẫu nhiên từng ảnh mà không khóa Group Key, ảnh chụp cùng một xe/khay ở các mili-giây kế tiếp sẽ rơi vào cả Train và Test. Mô hình 'học vẹt' câu trả lời và đạt điểm test cao ngất ngưởng nhưng thất bại hoàn toàn ngoài đời thực."
  },
  {
    id: 13, day: 6, module: 2,
    question: "Một lỗi thuộc mức độ 'Critical' trong kiểm soát chất lượng dữ liệu xe tự lái có đặc điểm và ngưỡng cho phép là gì?",
    options: ["Lỗi lệch biên 2 pixel, ngưỡng cho phép dưới 5%", "Lỗi gây ra hành vi phanh sai hoặc không phanh (bỏ sót người đi bộ, gán đèn đỏ thành xanh); ngưỡng cho phép là 0 tuyệt đối (phát hiện 1 lỗi là REJECT cả batch)", "Lỗi nhầm ô tô thành xe tải, ngưỡng cho phép 10%", "Lỗi thiếu thuộc tính màu sắc, ngưỡng cho phép 20%"],
    correctAnswer: 1,
    explanation: "Lỗi Critical trực tiếp đe dọa an toàn tính mạng (xe đâm người, vượt đèn đỏ). Ngưỡng chấp nhận trong mọi cổng chất lượng (Quality Gate) là 0 tuyệt đối. Nếu xuất hiện bất kỳ lỗi Critical nào, toàn bộ batch bị REJECT ngay lập tức."
  },
  {
    id: 14, day: 6, module: 2,
    question: "Khi một batch dữ liệu bị từ chối (Reject) ở bước QA/QC vì phát hiện lỗi có hệ thống bắt nguồn từ guideline mơ hồ, hành động nào sau đây là ĐÚNG?",
    options: ["Chỉ sửa chữa các khung hình bị Reviewer bắt lỗi rồi bàn giao lại ngay", "Đuổi việc người gán nhãn đã làm sai", "Cập nhật guideline (sinh version mới), bổ sung ví dụ phân biệt, đào tạo lại đội ngũ và gán lại toàn bộ phân đoạn bị ảnh hưởng", "Hạ thấp ngưỡng chất lượng xuống để batch được vượt qua"],
    correctAnswer: 2,
    explanation: "'Rework là sửa dữ liệu. Reject là sửa quy trình'. Nếu nguyên nhân nằm ở tài liệu guideline mà chỉ sửa vài ảnh bị bắt, tuần sau đúng lỗi đó sẽ lặp lại. Bắt buộc phải cập nhật guideline và gán lại đúng phân khúc bị lỗi."
  },
  {
    id: 15, day: 7, module: 2,
    question: "Tại sao trong bài toán dữ liệu có sự mất cân bằng lớp cực lớn (ví dụ: 95% ảnh không có người đi bộ), chỉ số Raw Agreement không còn đáng tin cậy?",
    options: ["Vì Raw Agreement không thể tính được khi mẫu số lớn hơn 100", "Vì nếu hai người gán nhãn cùng đoán bừa là 'không có người' ở tất cả ảnh, họ vẫn đạt Raw Agreement lên tới 95%", "Vì công thức Raw Agreement luôn cho ra số âm", "Vì nó không đo được kích thước pixel của hộp"],
    correctAnswer: 1,
    explanation: "Raw Agreement chỉ đếm tỷ lệ trùng khớp đơn thuần. Khi một lớp chiếm đa số tuyệt đối, việc đồng thuận do ăn may ngẫu nhiên rất cao. Cần sử dụng Cohen's Kappa để loại trừ xác suất ngẫu nhiên này."
  },
  {
    id: 16, day: 7, module: 2,
    question: "Theo nghiên cứu của Papadopoulos et al. (ICCV 2017) trên tập benchmark PASCAL VOC, mức trần đồng thuận cao nhất đo được giữa hai con người khi vẽ bounding box (IoU Agreement) là bao nhiêu?",
    options: ["Khoảng 0.50", "Khoảng 0.75", "Khoảng 0.88", "Khoảng 0.99"],
    correctAnswer: 2,
    explanation: "Mức trần đồng thuận cao nhất giữa hai người gán nhãn độc lập trên PASCAL VOC là 0.88. Do đó, việc đặt ngưỡng chất lượng IoU ≥ 0.95 là đòi hỏi phi thực tế đối với sinh lý mắt người."
  },
  {
    id: 17, day: 7, module: 2,
    question: "Tại sao tập chuẩn vàng (Golden Set / Ground Truth Set) cần được thay mới định kỳ sau mỗi 8–12 tuần?",
    options: ["Vì tập chuẩn vàng sẽ bị hết hạn bản quyền phần mềm", "Vì nếu giữ nguyên quá lâu, đội ngũ gán nhãn sẽ thuộc lòng đáp án (đo trí nhớ thay vì đo kỹ năng) theo Định luật Goodhart", "Vì định dạng file ảnh sẽ bị biến chất theo thời gian", "Vì công cụ CVAT tự động xóa job sau 60 ngày"],
    correctAnswer: 1,
    explanation: "Định luật Goodhart nêu rõ: 'Khi một thước đo trở thành mục tiêu, nó không còn là một thước đo tốt'. Đội ngũ sẽ học thuộc các khung hình test để đối phó, khiến điểm kiểm tra cao nhưng chất lượng gán lô mới lại giảm."
  },
  {
    id: 18, day: 8, module: 2,
    question: "Hiện tượng 'Thiên kiến tự động hóa' (Automation Bias / Anchoring) trong gán nhãn AI hỗ trợ (Fort & Sagot, ACL 2010) là gì?",
    options: ["Mô hình AI tự động xóa nhãn của con người", "Người gán nhãn có xu hướng lười kiểm tra và dễ dãi chấp nhận các đề xuất sai của AI vì chúng đã hiển thị sẵn trên màn hình", "Hệ thống máy chủ bị quá tải khi chạy pre-labeling", "Mô hình AI từ chối nhận ảnh chụp ban đêm"],
    correctAnswer: 1,
    explanation: "Khi có sẵn khung vẽ của AI, tâm lý con người sẽ sửa ít hơn nhiều so với tự vẽ từ đầu. Lỗi sai của mô hình AI sẽ bị con người vô tình xác nhận và chuyển hóa thành lỗi của tập dữ liệu huấn luyện."
  },
  {
    id: 19, day: 8, module: 2,
    question: "Để giảm thiểu tác động tiêu cực của Automation Bias khi đo kiểm tra chất lượng người gán, giải pháp bắt buộc là gì?",
    options: ["Bắt người gán nhãn làm việc 24/7 không nghỉ", "Duy trì một tập mẫu kiểm tra mù (Blind Sample) hoàn toàn không có gợi ý từ AI pre-labeling", "Tăng độ mờ của hình ảnh đầu vào", "Chỉ sử dụng mô hình AI của một nhà cung cấp duy nhất"],
    correctAnswer: 1,
    explanation: "Để đo lường năng lực và độ hiểu guideline thực chất của annotator, quy trình bắt buộc phải chừa ra một tập mẫu mù (blind test) không có AI pre-label để thẩm định độc lập."
  },
  {
    id: 20, day: 8, module: 2,
    question: "Trong quy trình Active Learning, tại sao không nên chỉ chọn các mẫu có độ bất định cao nhất (Uncertainty Sampling)?",
    options: ["Vì các mẫu có độ bất định cao tính toán rất tốn RAM", "Vì dễ rơi vào 'Bẫy dư thừa' (Redundancy Trap), chọn hàng ngàn khung hình gần như giống hệt nhau; cần kết hợp lọc độ đa dạng (Diversity Sampling)", "Vì mô hình AI không thể dự đoán độ bất định", "Vì luật pháp cấm sử dụng độ bất định để chọn dữ liệu"],
    correctAnswer: 1,
    explanation: "Nếu chỉ lọc theo điểm bất định, một phân đoạn video khó (như cảnh tuyết rơi 10 phút) sẽ sinh ra hàng ngàn frame có độ bất định cao như nhau. Cần thuật toán gom cụm không gian vector để chọn các mẫu vừa khó vừa đa dạng."
  },

  // Khối 3
  {
    id: 21, day: 9, module: 3,
    question: "Khi gán nhãn vạch kẻ đường (Lane Markings) dạng Polyline, quy tắc định hướng vector các điểm nút (nodes) là gì?",
    options: ["Luôn luôn vẽ từ phải sang trái màn hình", "Các đỉnh vector bắt buộc phải đi theo đúng chiều lưu thông của làn đường", "Luôn luôn vẽ từ dưới mép ảnh lên phía chân trời", "Vẽ theo chiều nào cũng được vì mô hình tự đảo ngược"],
    correctAnswer: 1,
    explanation: "Mô hình lập kế hoạch quỹ đạo (trajectory planner) sử dụng thứ tự các đỉnh polyline để xác định hướng đi. Nếu vẽ ngược chiều dòng xe chạy, xe tự hành sẽ nhận định đó là làn đường ngược chiều hoặc định tuyến sai."
  },
  {
    id: 22, day: 9, module: 3,
    question: "Để tránh hiện tượng 'Bùng nổ phân lớp' (Class Explosion) trong bài toán gán nhãn biển báo giao thông, giải pháp thiết kế ontology đúng là gì?",
    options: ["Tạo ra một class riêng cho từng biển báo kèm điều kiện thời gian và vị trí", "Sử dụng hệ phân cấp 3 tầng kết hợp đưa các biến thể phụ (biển phụ, giờ cấm, biển LED) vào trường thuộc tính (Attributes)", "Chỉ gán nhãn các biển báo hình tròn, bỏ qua tất cả biển báo khác", "Gộp toàn bộ các loại biển báo giao thông thành đúng một class duy nhất là 'Sign'"],
    correctAnswer: 1,
    explanation: "Nếu kết hợp mọi thuộc tính vào tên class (như speed_limit_50_night_led), số lượng class sẽ lên tới hàng ngàn và mỗi class có rất ít dữ liệu. Cần phân tầng: Nhóm → Hình dạng/Màu sắc → Ngữ nghĩa, và dùng thuộc tính để mở rộng."
  },
  {
    id: 23, day: 9, module: 3,
    question: "Trong bài toán nhận diện đèn tín hiệu giao thông cho xe tự hành, thuộc tính 'Relevance' (Mức độ liên quan) có vai trò gì?",
    options: ["Đo độ sáng của bóng đèn LED", "Xác định đèn tín hiệu đó có hiệu lực với làn đường mà xe tự hành đang di chuyển hay thuộc về làn rẽ nhánh độc lập khác", "Đo khoảng cách từ camera tới cột đèn", "Kiểm tra xem bóng đèn có bị cháy hay không"],
    correctAnswer: 1,
    explanation: "Tại các nút giao phức tạp, có nhiều cột đèn cho các hướng khác nhau (rẽ trái, đi thẳng, quay đầu). Nếu không gắn nhãn Relevance, xe tự lái đi thẳng có thể phanh khẩn cấp khi thấy đèn rẽ trái bật đỏ."
  },
  {
    id: 24, day: 10, module: 3,
    question: "Tại sao hệ thống giám sát người lái trong cabin (DMS) bắt buộc phải sử dụng camera cảm biến Cận Hồng Ngoại (NIR 940nm) kết hợp màn chập toàn thể (Global Shutter)?",
    options: ["Vì camera màu RGB bị cấm trang bị trong nội thất ô tô", "Để triệt tiêu hiện tượng lóa nắng từ ngoài xe, nhìn xuyên qua kính râm và tránh méo hình khi tài xế cử động đầu nhanh", "Để camera có thể chụp được ảnh màu sắc rực rỡ hơn", "Để giảm giá thành phần cứng xuống mức rẻ nhất"],
    correctAnswer: 1,
    explanation: "Bước sóng hồng ngoại 940nm không gây chói mắt người, xuyên thấu qua tròng kính râm và ổn định trong mọi điều kiện ánh sáng ngày/đêm. Global shutter chụp toàn bộ cảm biến cùng lúc, không bị méo lệch chuyển động (rolling shutter artifacts)."
  },
  {
    id: 25, day: 10, module: 3,
    question: "Chỉ số hình học sinh trắc nào được xem là tiêu chuẩn vàng trong ngành ô tô để phát hiện trạng thái ngủ gật của người lái?",
    options: ["Chỉ số BMI cơ thể", "Chỉ số PERCLOS (Tỷ lệ phần trăm thời gian mắt nhắm từ 80% trở lên trong cửa sổ quan sát 1-3 phút)", "Khoảng cách giữa hai tai", "Số lần tài xế chớp mắt trong 1 giây"],
    correctAnswer: 1,
    explanation: "PERCLOS (Percentage of Eye Closure) là chỉ số khoa học được chuẩn hóa bởi NHTSA và Euro NCAP để đánh giá độ buồn ngủ và suy giảm độ tỉnh táo của người lái."
  },
  {
    id: 26, day: 10, module: 3,
    question: "Công thức tính tỷ lệ mở mắt (Eye Aspect Ratio - EAR) dựa trên 6 điểm mốc mí mắt p1 đến p6 là gì?",
    options: ["EAR = (||p2 - p6|| + ||p3 - p5||) / (2 * ||p1 - p4||)", "EAR = ||p1 - p4|| / (||p2 - p6||)", "EAR = (p1 + p2 + p3 + p4 + p5 + p6) / 6", "EAR = 2 * ||p1 - p4|| / (||p3 - p5||)"],
    correctAnswer: 0,
    explanation: "EAR là tỷ số giữa trung bình hai khoảng cách thẳng đứng của mí mắt (||p2 - p6|| và ||p3 - p5||) chia cho hai lần khoảng cách bề ngang góc mắt (||p1 - p4||). Khi mắt nhắm, EAR tiến về 0."
  },
  {
    id: 27, day: 11, module: 3,
    question: "Hệ thống quan sát toàn cảnh (Surround View Monitoring - SVM) trên ô tô hiện đại thường bao gồm cấu hình cảm biến nào?",
    options: ["1 camera góc hẹp trên kính chắn gió", "4 camera ống kính mắt cá (fisheye) góc siêu rộng ≥ 190° đặt ở đầu, đuôi và hai gương chiếu hậu", "8 cảm biến siêu âm gắn ở cản sau", "2 camera hồng ngoại gắn trong đèn pha"],
    correctAnswer: 1,
    explanation: "Chuẩn SVM sử dụng 4 camera góc siêu rộng (từ 190° đến 210° FOV) bao quát 360 độ xung quanh thân xe, hỗ trợ đỗ xe tự động và quan sát vật cản cự ly gần."
  },
  {
    id: 28, day: 11, module: 3,
    question: "Nhược điểm chí mạng của việc gán nhãn đối tượng trên ảnh ghép mắt chim (Stitched BEV Space) trong hệ thống SVM là gì?",
    options: ["Ảnh ghép BEV có dung lượng quá nhẹ", "Mọi vật thể có chiều cao nhô lên khỏi mặt đất (như người đi bộ, cọc tiêu) sẽ bị biến dạng thị sai (parallax) kéo giãn thành vệt bệt dài bất thường", "Không thể nhìn thấy vạch kẻ đỗ xe", "Ảnh BEV không thể hiển thị trên máy tính"],
    correctAnswer: 1,
    explanation: "Phép biến đổi homography trải ảnh xuống mặt đường phẳng giả định cao độ z=0. Mọi đối tượng có chiều cao 3D nhô lên khỏi mặt đường sẽ bị kéo giãn xiên xẹo, gây biến dạng hình học nghiêm trọng."
  },

  // Khối 4
  {
    id: 29, day: 12, module: 4,
    question: "Cảm biến LiDAR đo cự ly tới vật thể bằng nguyên lý Thời gian bay (Time-of-Flight) theo công thức nào?",
    options: ["d = c * Δt", "d = (c * Δt) / 2", "d = 2 * c / Δt", "d = (c * Δt)^2"],
    correctAnswer: 1,
    explanation: "Chùm tia laser phát đi với vận tốc ánh sáng c, chạm vào vật thể rồi phản xạ quay trở lại cảm biến. Quãng đường tia sáng đi là 2d, do đó khoảng cách d = (c * Δt) / 2."
  },
  {
    id: 30, day: 12, module: 4,
    question: "Theo chuẩn hệ tọa độ VinFast và ROS REP-103 cho xe tự lái, các trục không gian X, Y, Z được định hướng như thế nào?",
    options: ["X sang phải, Y hướng tới trước, Z hướng lên trên", "X hướng tới trước, Y hướng sang trái, Z hướng thẳng lên trên", "X sang phải, Y chúi xuống dưới, Z đâm thẳng về trước", "X hướng ra sau, Y sang phải, Z chúi xuống đất"],
    correctAnswer: 1,
    explanation: "Chuẩn ROS REP-103 và VinFast quy định hệ tọa độ thân xe tuân theo quy tắc bàn tay phải: X hướng về mũi xe (forward), Y hướng sang phía cửa lái/bên trái (left), Z hướng vuông góc lên bầu trời (up)."
  },
  {
    id: 31, day: 12, module: 4,
    question: "Một hộp bao không gian 3D Bounding Box (3D Cuboid) được định nghĩa đầy đủ bằng 7 tham số nào sau đây?",
    options: ["(x, y, w, h, roll, pitch, yaw)", "(x, y, z, L, W, H, yaw)", "(xmin, ymin, zmin, xmax, ymax, zmax, color)", "(lat, long, alt, speed, accel, heading, id)"],
    correctAnswer: 1,
    explanation: "Hộp bao 3D được xác định bởi 7 bậc tự do: tâm vị trí không gian (x, y, z), kích thước vật lý (Length, Width, Height) và góc xoay hướng đầu xe quanh trục đứng (yaw)."
  },
  {
    id: 32, day: 12, module: 4,
    question: "Quy tắc thao tác chuẩn khi đặt hộp bao 3D Cuboid trong không gian điểm LiDAR là gì?",
    options: ["Chỉnh kích thước L, W, H trước rồi mới xoay hướng sau", "Luôn luôn xoay Hướng đầu xe (Heading/Yaw) đúng trước, sau đó mới tinh chỉnh kích thước (L, W, H)", "Chỉ cần bao quanh cụm điểm, hướng đầu xe không quan trọng", "Luôn cố định góc yaw = 0 ở mọi khung hình"],
    correctAnswer: 1,
    explanation: "Hướng đầu xe quyết định trục dọc của phương tiện. Nếu không xoay heading trước, việc kéo dài L và W sẽ bị lệch trục chéo, và lật ngược 180° sẽ khiến xe tự hành dự đoán xe đối diện đang lùi chiều."
  },
  {
    id: 33, day: 13, module: 4,
    question: "Ưu điểm vượt trội giúp kiến trúc PointPillars (Lang et al., CVPR 2019) đạt tốc độ xử lý thời gian thực trên xe tự lái là gì?",
    options: ["Không cần sử dụng dữ liệu LiDAR", "Nén không gian voxel 3D dọc theo trục đứng Z thành các cột 2D (pillars), cho phép áp dụng mạng tích chập 2D CNN chuẩn có tốc độ cực nhanh", "Loại bỏ hoàn toàn các lớp tích chập", "Chỉ phát hiện được vật thể ở khoảng cách dưới 5 mét"],
    correctAnswer: 1,
    explanation: "PointPillars tổ chức đám mây điểm thành các cột đứng vô tận theo trục Z (pillars), sau đó trích xuất đặc trưng bằng PointNet đơn giản và xử lý bằng 2D CNN thông thường, cho tốc độ > 60 FPS trên GPU nhúng."
  },
  {
    id: 34, day: 13, module: 4,
    question: "Hiện tượng 'Bẫy dịch chuyển cao độ Z' (Z-Translation Trap) xảy ra khi nào trong tiền gán nhãn 3D?",
    options: ["Khi xe chạy vào đường hầm ngầm", "Khi dùng checkpoint huấn luyện trên KITTI (cảm biến ở h=1.73m) áp dụng lên dữ liệu có quy ước mặt đường z=0 mà quên ma trận bù cao độ, làm toàn bộ hộp bị chìm 1.73m dưới lòng đất", "Khi cảm biến LiDAR bị bám bụi", "Khi góc quay yaw bị lệch 90 độ"],
    correctAnswer: 1,
    explanation: "KITTI đặt gốc tọa độ tại cảm biến (mặt đường ở z ≈ -1.73m). Nếu áp nguyên sang hệ dữ liệu coi mặt đường z=0 mà không trừ bù h_sensor, toàn bộ hộp của cả batch sẽ bị chìm nghỉm 1.73m."
  },
  {
    id: 35, day: 14, module: 4,
    question: "Nguyên nhân nhận thức kỹ thuật trực tiếp nào trong vụ tai nạn xe tự lái Uber ATG (Tempe, AZ, 2018) đã khiến hệ thống mất dấu vết và phanh trễ?",
    options: ["Cảm biến LiDAR bị hỏng phần cứng hoàn toàn", "Mỗi lần hệ thống đổi phân loại giữa xe con, xe đạp và vật thể lạ, nó tự động Reset Track ID, xóa sạch toàn bộ lịch sử vị trí và vận tốc đã tích lũy trước đó", "Xe bị hết xăng giữa đường", "Tài xế cố tình tăng ga lao vào chướng ngại vật"],
    correctAnswer: 1,
    explanation: "Báo cáo điều tra NTSB HAR-19/03 chỉ rõ: Việc reset Track ID mỗi khi phân loại dao động làm triệt tiêu khả năng ước lượng vector chuyển động. Xe không nhận biết được người dắt xe đạp đang băng qua đường cho tới 1.2s trước va chạm."
  },
  {
    id: 36, day: 14, module: 4,
    question: "Lỗi 'Merge' (hai vật gộp một ID) đặc biệt nguy hiểm và có tần suất xuất hiện cực cao trong môi trường giao thông nào?",
    options: ["Đường cao tốc vắng xe ở Châu Âu", "Giao thông đô thị Việt Nam (với 85-90% phương tiện là xe máy đi sát nhau thành chùm, chở nhiều người, luồn lách liên tục)", "Bãi đỗ xe ngầm không có người", "Đường sa mạc ở Arizona"],
    correctAnswer: 1,
    explanation: "Giao thông Việt Nam có mật độ xe máy cực dày. Thuật toán phân cụm điểm thô rất dễ gộp 2 xe máy đi sát hoặc người đi bộ cạnh xe máy vào chung 1 hộp, làm biến mất hoàn toàn 1 đối tượng khỏi hệ thống tự hành."
  },
  {
    id: 37, day: 14, module: 4,
    question: "Tại sao khi một chiếc xe di chuyển ra xa (ví dụ cự ly 107m, chỉ phản xạ được vài điểm LiDAR thưa thớt), annotator TUYỆT ĐỐI KHÔNG được co nhỏ kích thước hộp cuboid?",
    options: ["Vì công cụ gán nhãn sẽ tự động khóa chuột", "Vì ô tô là vật rắn cứng (Rigid Body), kích thước thật không đổi; co nhỏ hộp sẽ dạy cho mô hình AI học sai quy luật vật lý rằng xe ở xa thì bị teo nhỏ lại", "Vì xe ở xa không cần quan tâm đến an toàn", "Vì kích thước xe luôn mặc định là 10 mét"],
    correctAnswer: 1,
    explanation: "Bất biến kích thước (Dimension Invariant): Xe là vật rắn, kích thước (L, W, H) chốt ở cự ly gần (ví dụ 4.19m x 2.04m ở 16m) phải giữ nguyên ở 107m. Co hộp xuống 0.7m x 0.9m là lỗi nghiêm trọng làm sai lệch vật lý."
  },
  {
    id: 38, day: 14, module: 4,
    question: "Trong phép chiếu điểm 3D LiDAR lên ảnh camera 2D, đại lượng nào nằm ở mẫu số thể hiện nguyên lý 'vật càng ở xa đèn pin thì bóng trên tường càng nhỏ'?",
    options: ["Tiêu cự fx", "Tọa độ chiều sâu camera Z_cam (Phép chia cho Z)", "Tâm ảnh cx", "Góc quay heading"],
    correctAnswer: 1,
    explanation: "Công thức chiếu phối cảnh pinhole: u = fx * (X / Z) + cx. Chiều sâu Z nằm ở mẫu số, Z càng lớn thì tỷ số X/Z càng nhỏ, khiến hình chiếu thu nhỏ lại. Không thể khôi phục từ pixel ra mét nếu thiếu Z."
  },
  {
    id: 39, day: 14, module: 4,
    question: "Khi bật tính năng chồng ảnh LiDAR lên Camera (Overlay), nếu phát hiện toàn bộ xe cộ, nhà cửa, vạch đường đều bị lệch cùng một hướng trên nhiều khung hình, quy định xử lý là gì?",
    options: ["Kéo tất cả các hộp 3D cho khớp với hình chiếu trên ảnh camera", "TUYỆT ĐỐI KHÔNG kéo hộp 3D theo ảnh; đây là lỗi trôi hiệu chuẩn ngoại thông (Calibration Drift), phải giữ nguyên hộp trên điểm và báo cáo ESCALATE kèm metadata", "Xóa toàn bộ các hộp đã gán", "Tự ý mở file hiệu chuẩn Extrinsics.txt để sửa số ma trận"],
    correctAnswer: 1,
    explanation: "Đám mây điểm LiDAR là chuẩn không gian vật lý chính xác. Nếu mọi vật lệch cùng hướng, đó là do trôi ma trận quay ngoại thông. Kéo hộp theo ảnh sẽ phá hủy nhãn 3D ground truth. Bắt buộc phải Escalate!"
  },
  {
    id: 40, day: 14, module: 4,
    question: "Trong kiểm tra nghiệm thu chuỗi dữ liệu (Sequence Delivery Gate), lỗi nào sau đây thể hiện một vật thể bị vị trí nhảy gián đoạn khiến gia tốc tức thời vượt ngưỡng vật lý?",
    options: ["ID Switch", "Velocity Jump", "Dimension Drift", "Sparsity Error"],
    correctAnswer: 1,
    explanation: "Velocity Jump xảy ra khi một hộp bị đặt lệch ở một khung hình đơn lẻ, đòi hỏi xe phải tăng tốc tức thời (ví dụ từ 36 km/h vọt lên 216 km/h rồi tụt lại), vi phạm quy luật động học vật lý."
  }
];

const FLASHCARD_BANK = [
  { id: 1, day: 1, module: 1, category: "Cấp Độ Tự Động Hóa", front: "SAE Cấp 3 (Conditional Automation) yêu cầu gì đối với tài xế khi có cảnh báo TOR?", back: "Người lái phải sẵn sàng nhận lại quyền điều khiển (Take-Over Request - TOR) trong khoảng thời gian từ 4 đến 10 giây khi xe gặp tình huống vượt ngoài ODD." },
  { id: 2, day: 2, module: 1, category: "Dạng Bounding Box", front: "Phân biệt Amodal Box và Modal Box?", back: "• <strong>Modal Box</strong>: Chỉ khoanh vùng các pixel nhìn thấy được trên ảnh.<br>• <strong>Amodal Box</strong>: Khoanh toàn bộ kích thước vật lý ước tính của vật thể (kể cả phần bị che khuất). Xe tự lái bắt buộc dùng Amodal Box." },
  { id: 3, day: 2, module: 1, category: "Độ Nhạy Nhãn", front: "Sai tên class 20% so với Lệch biên hộp 20% - cái nào làm tụt mAP nặng hơn?", back: "Sai tên class làm tụt mAP nặng gấp đôi (-5.3 điểm mAP@50 so với -2.7 điểm). Sai tên class phá hủy đặc trưng phân loại của mô hình." },
  { id: 4, day: 3, module: 1, category: "Video Tracking", front: "Bẫy quỹ đạo cong khi dùng nội suy tuyến tính (Linear Interpolation)?", back: "Công cụ chỉ nối đường thẳng giữa 2 keyframe. Khi xe rẽ cong, hộp nội suy thẳng sẽ bị trượt khỏi thân xe. Bắt buộc phải chèn thêm keyframe tại đỉnh khúc cua." },
  { id: 5, day: 4, module: 1, category: "Pose Estimation", front: "Hệ thống cờ trạng thái COCO-17 (Visibility Flags)?", back: "• <strong>v = 0</strong>: Không gán / ngoài ảnh<br>• <strong>v = 1</strong>: Bị che khuất (occluded) nhưng suy đoán vị trí giải phẫu được<br>• <strong>v = 2</strong>: Nhìn thấy rõ ràng (visible)" },
  { id: 6, day: 5, module: 1, category: "Segmentation", front: "Mã hóa Run-Length Encoding (RLE) là gì và vì sao cần?", back: "RLE là thuật toán nén không tổn hao bitmap nhị phân của mặt nạ phân vùng, giúp giảm hàng chục lần dung lượng file lưu trữ so với lưu ma trận pixel thô." },
  { id: 7, day: 6, module: 2, category: "Vòng Đời Dữ Liệu", front: "Nêu 9 bước của Data Annotation Lifecycle?", back: "1. Objective & Scope<br>2. Collection & Selection<br>3. Preparation & Preprocess<br>4. Annotation Guideline<br>5. Pilot Annotation<br>6. Batch Annotation<br>7. QA / QC<br>8. Release<br>9. Monitoring & Feedback" },
  { id: 8, day: 6, module: 2, category: "Chất Lượng Dữ Liệu", front: "Bốn Lỗi Im Lặng phá hỏng dự án dữ liệu là gì?", back: "1. Không ai viết Objective (tranh cãi vô tận)<br>2. Mất liên kết Group (Data leakage, test cao giả)<br>3. Guideline viết bằng kết luận cảm tính<br>4. Tỷ lệ báo cáo không kèm mẫu số" },
  { id: 9, day: 6, module: 2, category: "Cổng Kiểm Soát", front: "Ngưỡng cho phép của lỗi Critical trong Quality Gate?", back: "Ngưỡng là 0 tuyệt đối! Bất kỳ lỗi Critical nào (bỏ sót người đi bộ, nhầm đèn đỏ thành xanh) đều dẫn tới lệnh REJECT toàn bộ batch dữ liệu." },
  { id: 10, day: 7, module: 2, category: "Thống Kê Chất Lượng", front: "Hệ số Cohen's Kappa giải quyết nhược điểm gì của Raw Agreement?", back: "Cohen's Kappa trừ đi phần đồng thuận do ăn may ngẫu nhiên (p_e), phản ánh đúng sự nhất quán thực chất giữa 2 người gán nhãn trong bài toán lệch lớp nặng." },
  { id: 11, day: 7, module: 2, category: "Quy Chuẩn Đo Kiểm", front: "Mức trần đồng thuận cao nhất giữa con người khi vẽ Bounding Box (PASCAL VOC)?", back: "Đạt mức 0.88 IoU Agreement. Yêu cầu tiêu chuẩn ≥ 0.95 là vượt quá giới hạn sinh lý mắt người." },
  { id: 12, day: 8, module: 2, category: "AI Pre-labeling", front: "Thiên kiến neo tự động (Automation Bias / Anchoring) là gì?", back: "Hiện tượng người gán nhãn lười kiểm tra và dễ dãi chấp nhận đề xuất sai có sẵn của AI, biến lỗi của mô hình thành lỗi của dữ liệu ground truth." },
  { id: 13, day: 8, module: 2, category: "Active Learning", front: "Bẫy dư thừa (Redundancy Trap) trong Active Learning là gì?", back: "Hiện tượng chọn toàn bộ các mẫu có độ bất định cao nhưng lại rơi vào các khung hình gần như giống hệt nhau. Cần kết hợp lọc đa dạng (Diversity Sampling)." },
  { id: 14, day: 9, module: 3, category: "Đèn Giao Thông", front: "Thuộc tính Relevance của đèn giao thông dùng để làm gì?", back: "Xác định xem tín hiệu đèn có hiệu lực với làn đường mà xe tự hành đang di chuyển hay không, tránh việc xe phanh khẩn cấp khi thấy đèn đỏ của làn rẽ nhánh khác." },
  { id: 15, day: 10, module: 3, category: "Cabin Perception", front: "Hệ thống DMS dùng loại camera và bước sóng nào? Vì sao?", back: "Dùng camera Cận Hồng Ngoại bước sóng NIR 940nm + Global Shutter để nhìn rõ mắt tài xế xuyên qua kính râm và triệt tiêu bóng lóa của ánh nắng mặt trời." },
  { id: 16, day: 10, module: 3, category: "Chỉ Số Sinh Trắc", front: "Chỉ số PERCLOS là gì?", back: "Percentage of Eye Closure: Tỷ lệ phần trăm thời gian mắt nhắm ≥ 80% trong cửa sổ quan sát từ 1 đến 3 phút. Tiêu chuẩn vàng để kích hoạt cảnh báo ngủ gật." },
  { id: 17, day: 11, module: 3, category: "SVM 360°", front: "Bộ 3 dạng méo hình học của ống kính mắt cá (Fisheye)?", back: "1. Méo hình dạng (Shape Distortion - méo hình thùng barrel)<br>2. Méo tỷ lệ (Scale Distortion - mật độ pixel giảm mạnh ở mép viền)<br>3. Mờ nhòe quang học ở biên (Edge Smearing)" },
  { id: 18, day: 12, module: 4, category: "LiDAR Physics", front: "Công thức đo cự ly Thời gian bay ToF của LiDAR?", back: "d = (c * Δt) / 2 (với c là vận tốc ánh sáng, Δt là thời gian từ lúc phát xung laser tới khi nhận xung phản xạ)." },
  { id: 19, day: 12, module: 4, category: "Hệ Tọa Độ", front: "Quy ước trục không gian theo chuẩn VinFast / ROS REP-103?", back: "X hướng tới trước (mũi xe), Y hướng sang bên trái (cửa lái), Z hướng thẳng lên trời (theo quy tắc bàn tay phải)." },
  { id: 20, day: 12, module: 4, category: "3D Cuboid", front: "Bảy tham số của hộp bao 3D Cuboid?", back: "(x, y, z, L, W, H, yaw). Trong đó (x, y, z) là tâm hộp, (L, W, H) là kích thước vật lý, và yaw là góc quay hướng đầu xe quanh trục đứng Z." },
  { id: 21, day: 12, module: 4, category: "3D Cuboid", front: "Quy tắc xoay hướng đầu xe (Heading/Yaw) trước kích thước?", back: "Bắt buộc phải xoay đúng góc Heading trước rồi mới chỉnh kích thước. Đảo góc yaw 180° khiến xe tự lái hiểu lầm xe đối diện đang lùi chiều, gây ra lệnh đánh lái thảm khốc." },
  { id: 22, day: 13, module: 4, category: "Mô Hình 3D", front: "Ý tưởng cốt lõi của kiến trúc mạng PointPillars?", back: "Nén các voxel không gian 3D theo chiều đứng trục Z thành các cột 2D (pillars), giúp tận dụng mạng backbone 2D CNN thông thường có tốc độ xử lý thời gian thực siêu nhanh (>60 FPS)." },
  { id: 23, day: 13, module: 4, category: "Bẫy Cao Độ Z", front: "Bẫy dịch chuyển cao độ trục Z (Z-Translation Trap) xảy ra do đâu?", back: "Do checkpoint huấn luyện trên KITTI có cảm biến ở h = 1.73m. Nếu áp trực tiếp lên dữ liệu quy ước mặt đường z = 0 mà quên ma trận bù trừ cao độ, toàn bộ hộp cuboid sẽ bị chìm 1.73m dưới lòng đất." },
  { id: 24, day: 14, module: 4, category: "Tai Nạn Xe Tự Lái", front: "Bài học kỹ thuật từ vụ tai nạn xe tự lái Uber ATG (2018)?", back: "Hệ thống liên tục đổi phân loại khiến Track ID bị reset liên tục → mất sạch lịch sử vị trí và vận tốc tích lũy, không dự đoán được quỹ đạo người đi bộ cho tới 1.2s trước va chạm." },
  { id: 25, day: 14, module: 4, category: "Temporal Errors", front: "Kể tên 7 lỗi theo dõi chuỗi thời gian (7 Temporal Errors)?", back: "1. ID Switch (tráo ID)<br>2. Merge (gộp 2 vật vào 1 ID)<br>3. Fragmentation (đứt đoạn cấp ID mới)<br>4. Dimension Drift (L/W/H co giãn)<br>5. Orientation Drift (Heading nhảy 180°)<br>6. Sparsity Shrinkage (co hộp theo điểm xa)<br>7. Velocity Jump (vận tốc nhảy vọt phi vật lý)" },
  { id: 26, day: 14, module: 4, category: "Sensor Fusion", front: "Phải làm gì khi phát hiện lỗi trôi hiệu chuẩn (Calibration Drift)?", back: "TUYỆT ĐỐI KHÔNG kéo hộp cuboid 3D theo ảnh camera bị trôi! Giữ nguyên vị trí hộp trên đám mây điểm LiDAR và lập tức ESCALATE lên đội pipeline kèm metadata: [frame, tên_camera, chiều_lệch]." }
];

const CHEAT_SHEETS = [
  {
    title: "Vòng Đời 9 Bước (Data Annotation Lifecycle)",
    category: "Chất lượng & Quy trình",
    tags: "lifecycle quy trinh 9 buoc chat luong contract gate",
    html: `
      <div class="table-responsive-wrapper">
        <table class="data-table">
          <thead>
            <tr><th>Bước</th><th>Tên công đoạn</th><th>Artifact bàn giao</th><th>Điều kiện Gate</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>1</strong></td><td>Objective & Scope</td><td>Tài liệu Objective 1 trang</td><td>Data Owner ký phê duyệt</td></tr>
            <tr><td><strong>2</strong></td><td>Collection & Selection</td><td>File thô + Data Ledger</td><td>Khớp số lượng, đủ provenance</td></tr>
            <tr><td><strong>3</strong></td><td>Preparation & Preprocess</td><td>Bộ eligible + Group split</td><td>Khóa cứng group key, 0% rò rỉ</td></tr>
            <tr><td><strong>4</strong></td><td>Annotation Guideline</td><td>Guideline có version + Schema</td><td>Người mới gán mẫu đạt 100%</td></tr>
            <tr><td><strong>5</strong></td><td>Pilot Annotation</td><td>Báo cáo Pilot + Reference</td><td>Độ đồng thuận vượt ngưỡng</td></tr>
            <tr><td><strong>6</strong></td><td>Batch Annotation</td><td>Candidate labels + Escalations</td><td>Đúng schema, đủ trường bắt buộc</td></tr>
            <tr><td><strong>7</strong></td><td>QA / QC</td><td>Báo cáo QC + Action plan</td><td>Critical = 0, Major &le; 1-2%</td></tr>
            <tr><td><strong>8</strong></td><td>Release</td><td>Release packet v1.0 + Data card</td><td>Đủ 6 câu hỏi gate, có chữ ký</td></tr>
            <tr><td><strong>9</strong></td><td>Monitoring & Feedback</td><td>Báo cáo theo dõi + Error analysis</td><td>Quy lỗi thực tế về các bước</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    title: "Bảng Phân Cấp Mức Độ Lỗi (Defect Severity)",
    category: "Kiểm soát chất lượng",
    tags: "severity critical major minor defect loi quy trinh gate",
    html: `
      <div class="table-responsive-wrapper">
        <table class="data-table">
          <thead>
            <tr><th>Mức độ</th><th>Ngưỡng</th><th>Đặc điểm lỗi</th><th>Hành động bắt buộc</th></tr>
          </thead>
          <tbody>
            <tr><td><span class="status-pill status-pill-danger">Critical</span></td><td><strong>0 tuyệt đối</strong></td><td>Làm xe phanh sai hoặc không phanh: sót người đi bộ, nhầm đèn đỏ thành xanh</td><td>REJECT toàn bộ batch</td></tr>
            <tr><td><span class="status-pill status-pill-warning">Major</span></td><td>&le; 1–2%</td><td>Học sai có hệ thống: nhầm xe con thành xe tải, tráo ID, quên cờ occluded</td><td>REWORK phân khúc lỗi</td></tr>
            <tr><td><span class="status-pill status-pill-info">Minor</span></td><td>&le; 3–5%</td><td>Lệch nhỏ không đổi quyết định lái: lệch viền 2-3px, thiếu thuộc tính phụ</td><td>ACCEPT & ghi log sửa sau</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    title: "Bảng Tra Cứu 7 Lỗi Theo Dõi Thời Gian (7 Temporal Errors)",
    category: "Theo dõi 3D & Hợp nhất",
    tags: "temporal errors switch merge fragmentation drift sparsity velocity jump tracking",
    html: `
      <div class="table-responsive-wrapper">
        <table class="data-table">
          <thead>
            <tr><th>Tên lỗi</th><th>Dấu hiệu nhận biết</th><th>Hành động khắc phục</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>1. ID Switch</strong></td><td>Hai track đi sát nhau tráo đổi ID cho nhau</td><td>Lọc từng ID, sửa tại frame tiếp xúc</td></tr>
            <tr><td><strong>2. Merge</strong></td><td>Hai vật đứng sát (xe máy chở khách) bị gom 1 hộp</td><td>Tách làm 2 cuboid với 2 ID riêng</td></tr>
            <tr><td><strong>3. Fragmentation</strong></td><td>Vật sau khi bị che ngắn hiện lại bị cấp ID mới</td><td>Giữ nguyên Track ID ban đầu</td></tr>
            <tr><td><strong>4. Dimension Drift</strong></td><td>Kích thước L, W, H co giãn dần dần qua các frame</td><td>Khóa cứng kích thước chốt ở frame gần</td></tr>
            <tr><td><strong>5. Orientation Drift</strong></td><td>Heading nhảy giật cục hoặc lật ngược 180°</td><td>Bám sát vector di chuyển thực tế</td></tr>
            <tr><td><strong>6. Sparsity Shrinkage</strong></td><td>Hộp bị co nhỏ lại chỉ bao vài điểm phản xạ xa</td><td>Giữ kích thước chuẩn của frame dày</td></tr>
            <tr><td><strong>7. Velocity Jump</strong></td><td>Hộp đặt lệch 1 frame làm tốc độ nhảy vọt phi lý</td><td>Hiệu chỉnh lại vị trí hộp bị lệch</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    title: "So Sánh Quy Chuẩn Các Hệ Tọa Độ Trong Ngành AV",
    category: "Hệ tọa độ & Toán học",
    tags: "toa do coordinate rep-103 ros kitti nuscenes x y z",
    html: `
      <div class="table-responsive-wrapper">
        <table class="data-table">
          <thead>
            <tr><th>Tiêu chuẩn</th><th>Trục X</th><th>Trục Y</th><th>Trục Z</th><th>Gốc tọa độ</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>VinFast / ROS REP-103</strong></td><td>Hướng tới trước</td><td>Hướng sang trái</td><td>Hướng lên trên</td><td>Tâm xe / Gốc cảm biến</td></tr>
            <tr><td><strong>KITTI (Camera)</strong></td><td>Hướng sang phải</td><td>Chúi xuống đất</td><td>Đâm thẳng tới trước</td><td>Tâm quang học camera</td></tr>
            <tr><td><strong>KITTI (LiDAR)</strong></td><td>Hướng tới trước</td><td>Hướng sang trái</td><td>Hướng lên trên</td><td>Tâm cảm biến Velodyne</td></tr>
            <tr><td><strong>nuScenes</strong></td><td>Hướng sang phải</td><td>Hướng tới trước</td><td>Hướng lên trên</td><td>Tâm trục sau thân xe</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    title: "Các Công Thức Kỹ Thuật Quan Trọng Cần Ghi Nhớ",
    category: "Công thức toán học",
    tags: "cong thuc math tof ear mar perclos kappa z offset",
    html: `
      <div class="formula-card-box"><strong>Đo cự ly ToF LiDAR:</strong> d = (c · &Delta;t) / 2</div>
      <div class="formula-card-box"><strong>Bán kính vòng quét kênh nâng:</strong> R<sub>i</sub> = h<sub>cảm biến</sub> / tan(|&phi;<sub>i</sub>|)</div>
      <div class="formula-card-box"><strong>Hệ số Cohen's Kappa:</strong> &kappa; = (p<sub>o</sub> &minus; p<sub>e</sub>) / (1 &minus; p<sub>e</sub>)</div>
      <div class="formula-card-box"><strong>Tỷ lệ mở mắt:</strong> EAR = (||p<sub>2</sub> &minus; p<sub>6</sub>|| + ||p<sub>3</sub> &minus; p<sub>5</sub>||) / (2 · ||p<sub>1</sub> &minus; p<sub>4</sub>||)</div>
      <div class="formula-card-box"><strong>Nội suy tuyến tính:</strong> <b>p</b>(t) = (1 &minus; &alpha;) · <b>p</b>(t<sub>k</sub>) + &alpha; · <b>p</b>(t<sub>k+1</sub>)</div>
      <div class="formula-card-box"><strong>Bù cao độ trục Z:</strong> z<sub>gốc</sub> = z<sub>mô hình</sub> + h<sub>cảm biến</sub> + z<sub>mặt đường</sub></div>
    `
  }
];

// --- 2. GLOBAL APP STATE ---
let currentQuestions = [];
let userAnswers = {};
let isExamSubmitted = false;
let examTimerInterval = null;
let timeLeftSeconds = 45 * 60;
let soundEnabled = true;

// Practice Mode Live Stopwatch State
let practiceSeconds = 0;
let practiceTimerInterval = null;
let isPracticeTimerPaused = false;

let currentFlashcardIndex = 0;
let filteredFlashcards = [...FLASHCARD_BANK];
let learnedCardIds = JSON.parse(localStorage.getItem("vinuni_learned_cards") || "[]");

// --- 3. WEB AUDIO SYNTHESIZER ---
const audioCtx = (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined')
  ? new (window.AudioContext || window.webkitAudioContext)()
  : null;

function playSound(type) {
  if (!soundEnabled || !audioCtx) return;
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  if (type === 'correct') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(659.25, now);
    osc.frequency.exponentialRampToValueAtTime(830.61, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(987.77, now + 0.16);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc.start(now);
    osc.stop(now + 0.35);
  } else if (type === 'wrong') {
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.18);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    osc.start(now);
    osc.stop(now + 0.22);
  } else if (type === 'flip') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(560, now + 0.06);
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.start(now);
    osc.stop(now + 0.08);
  }
}

// --- 4. TOAST NOTIFICATION ENGINE (THEMIFY ICON AWARE) ---
function showToast(message, iconClass = 'ti-info-alt') {
  let shelf = document.getElementById('toastShelf');
  if (!shelf) {
    shelf = document.createElement('div');
    shelf.id = 'toastShelf';
    shelf.className = 'toast-shelf';
    document.body.appendChild(shelf);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `<i class="${iconClass}" style="color: var(--brand-primary); font-size: 16px;"></i><span>${message}</span>`;
  shelf.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// --- 5. THEME & TABS SWITCHING ---
function initTheme() {
  const saved = localStorage.getItem("vinuni_theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeButtonUI(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("vinuni_theme", next);
  updateThemeButtonUI(next);
  showToast(next === "dark" ? "Đã bật giao diện tối" : "Đã bật giao diện sáng", "ti-shine");
}

function updateThemeButtonUI(theme) {
  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.innerHTML = theme === "dark" 
      ? '<i class="ti-shine"></i> Sáng' 
      : '<i class="ti-shine"></i> Tối';
    btn.setAttribute("title", theme === "dark" ? "Chuyển sang Giao diện Sáng" : "Chuyển sang Giao diện Tối");
  }
}

function switchTab(tabName) {
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));

  const targetBtn = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
  if (targetBtn) targetBtn.classList.add("active");

  const targetPane = document.getElementById(`${tabName}-tab`);
  if (targetPane) targetPane.classList.add("active");

  const floatingHud = document.getElementById("floatingQuizHud");
  if (floatingHud) {
    floatingHud.style.display = (tabName === "quiz") ? "flex" : "none";
  }

  if (tabName === "flashcards") {
    renderFlashcard();
  } else if (tabName === "cheatsheet") {
    renderCheatSheets(CHEAT_SHEETS);
  } else if (tabName === "history") {
    renderHistory();
  }
}

// --- 6. QUIZ CONTROLLER (PRACTICE & EXAM MODES) ---
function startPracticeTimer() {
  clearInterval(practiceTimerInterval);
  practiceSeconds = 0;
  isPracticeTimerPaused = false;
  updatePracticeTimerDisplay();

  const icon = document.getElementById("practiceTimerIcon");
  if (icon) icon.className = "ti-control-pause";
  const chip = document.getElementById("practiceTimer");
  if (chip) chip.classList.remove("paused");

  const hudBadge = document.getElementById("hudTimerBadge");
  if (hudBadge) hudBadge.classList.remove("paused", "urgent");
  const hudIcon = document.getElementById("hudTimerToggleIcon");
  if (hudIcon) {
    hudIcon.className = "ti-control-pause";
    hudIcon.style.display = "inline-block";
  }
  const hudLabel = document.getElementById("hudTimerLabel");
  if (hudLabel) hudLabel.innerText = "Thời gian:";

  practiceTimerInterval = setInterval(() => {
    if (!isPracticeTimerPaused) {
      practiceSeconds++;
      updatePracticeTimerDisplay();
    }
  }, 1000);
}

function updatePracticeTimerDisplay() {
  const mins = Math.floor(practiceSeconds / 60);
  const secs = practiceSeconds % 60;
  const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  const el = document.getElementById("practiceTimerDisplay");
  if (el) el.innerText = timeStr;

  const hudEl = document.getElementById("hudTimerDisplay");
  if (hudEl) hudEl.innerText = timeStr;
}

function togglePracticeTimer() {
  isPracticeTimerPaused = !isPracticeTimerPaused;
  const icon = document.getElementById("practiceTimerIcon");
  const chip = document.getElementById("practiceTimer");
  const hudIcon = document.getElementById("hudTimerToggleIcon");
  const hudBadge = document.getElementById("hudTimerBadge");

  if (isPracticeTimerPaused) {
    if (icon) icon.className = "ti-control-play";
    if (chip) chip.classList.add("paused");
    if (hudIcon) hudIcon.className = "ti-control-play";
    if (hudBadge) hudBadge.classList.add("paused");
    showToast("Đã tạm dừng đếm thời gian làm bài", "ti-control-pause");
  } else {
    if (icon) icon.className = "ti-control-pause";
    if (chip) chip.classList.remove("paused");
    if (hudIcon) hudIcon.className = "ti-control-pause";
    if (hudBadge) hudBadge.classList.remove("paused");
    showToast("Tiếp tục tính thời gian làm bài", "ti-control-play");
  }
}

function handleHudTimerClick() {
  const mode = document.getElementById("quizModeSelect").value;
  if (mode === "practice") {
    togglePracticeTimer();
  } else {
    const mins = Math.floor(timeLeftSeconds / 60);
    const secs = timeLeftSeconds % 60;
    showToast(`Thời gian làm bài thi còn lại: ${mins} phút ${secs} giây`, "ti-timer");
  }
}

function handleModeChange() {
  const mode = document.getElementById("quizModeSelect").value;
  const filterGroup = document.getElementById("filterGroup");
  const startBtn = document.getElementById("startExamBtn");
  const submitBtn = document.getElementById("submitExamBtn");
  const examTimerBadge = document.getElementById("examTimer");
  const practiceTimerBadge = document.getElementById("practiceTimer");
  const resultDiv = document.getElementById("examResult");
  const progressBanner = document.getElementById("quizProgressBanner");
  const hudLabel = document.getElementById("hudTimerLabel");
  const hudTimerVal = document.getElementById("hudTimerDisplay");
  const hudIcon = document.getElementById("hudTimerToggleIcon");
  const hudBadge = document.getElementById("hudTimerBadge");

  clearInterval(examTimerInterval);
  clearInterval(practiceTimerInterval);
  if (resultDiv) resultDiv.style.display = "none";
  isExamSubmitted = false;
  userAnswers = {};

  if (mode === "exam") {
    if (filterGroup) filterGroup.style.display = "none";
    if (practiceTimerBadge) practiceTimerBadge.style.display = "none";
    if (startBtn) {
      startBtn.style.display = "inline-flex";
      startBtn.innerHTML = '<i class="ti-control-play"></i> Bắt Đầu Thi Thử (45 Phút)';
    }
    if (submitBtn) submitBtn.style.display = "none";
    if (examTimerBadge) {
      examTimerBadge.style.display = "inline-flex";
      examTimerBadge.classList.remove("urgent");
      document.getElementById("timerDisplay").innerText = "45:00";
    }
    if (progressBanner) progressBanner.style.display = "none";

    if (hudLabel) hudLabel.innerText = "Còn lại:";
    if (hudTimerVal) hudTimerVal.innerText = "45:00";
    if (hudIcon) hudIcon.style.display = "none";
    if (hudBadge) hudBadge.classList.remove("paused", "urgent");

    document.getElementById("questionContainer").innerHTML = `
      <div style="text-align: center; padding: 48px 20px;">
        <i class="ti-timer" style="font-size: 48px; color: var(--brand-primary); margin-bottom: 16px; display: inline-block;"></i>
        <h3 style="font-size: 21px; font-weight: 800; margin-bottom: 8px;">Chế Độ Thi Thử Giữa Kỳ Chuẩn Hóa</h3>
        <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 24px; font-size: 15px;">
          Đề thi gồm 40 câu hỏi trắc nghiệm xáo trộn từ toàn bộ 14 ngày học (Nhận thức 2D, Chất lượng, Cabin DMS, SVM 360°, LiDAR 3D). Thời gian: 45 phút.
        </p>
        <button class="btn btn-lg" onclick="startExam()">
          <i class="ti-control-play"></i> Bắt Đầu Làm Bài Ngay
        </button>
      </div>
    `;
  } else {
    if (filterGroup) filterGroup.style.display = "flex";
    if (practiceTimerBadge) practiceTimerBadge.style.display = "inline-flex";
    if (startBtn) startBtn.style.display = "none";
    if (submitBtn) submitBtn.style.display = "none";
    if (examTimerBadge) examTimerBadge.style.display = "none";
    if (progressBanner) progressBanner.style.display = "flex";

    if (hudLabel) hudLabel.innerText = "Thời gian:";
    if (hudIcon) hudIcon.style.display = "inline-block";
    if (hudBadge) hudBadge.classList.remove("paused", "urgent");

    loadQuestions();
    startPracticeTimer();
  }
}

function loadQuestions() {
  const modFilter = document.getElementById("moduleFilter").value;
  if (modFilter === "all") {
    currentQuestions = [...QUIZ_BANK];
  } else {
    const modNum = parseInt(modFilter);
    currentQuestions = QUIZ_BANK.filter(q => q.module === modNum);
  }
  userAnswers = {};
  isExamSubmitted = false;
  renderQuestions();
  updateProgressTracker();
}

function updateProgressTracker() {
  const mode = document.getElementById("quizModeSelect").value;
  const progressBanner = document.getElementById("quizProgressBanner");
  if (!progressBanner) return;

  if (mode === "exam" && !document.getElementById("startExamBtn").style.display.includes("none")) {
    progressBanner.style.display = "none";
    return;
  }
  progressBanner.style.display = "flex";

  const total = currentQuestions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const percent = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

  const countEl = document.getElementById("progressCountText");
  const fillEl = document.getElementById("progressTrackFill");
  if (countEl) countEl.innerText = `Đã trả lời: ${answeredCount} / ${total} câu (${percent}%)`;
  if (fillEl) fillEl.style.width = `${percent}%`;

  const hudProgress = document.getElementById("hudProgressText");
  if (hudProgress) hudProgress.innerText = `${answeredCount} / ${total} câu (${percent}%)`;
}

function renderQuestions() {
  const container = document.getElementById("questionContainer");
  const mode = document.getElementById("quizModeSelect").value;

  if (currentQuestions.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--text-secondary);">Không tìm thấy câu hỏi phù hợp.</div>`;
    return;
  }

  let html = "";
  currentQuestions.forEach((q, idx) => {
    const qNum = idx + 1;
    const moduleLabel = MODULE_NAMES[q.module] || `Khối ${q.module}`;
    const isAnswered = userAnswers[q.id] !== undefined;

    html += `
      <div class="question-item ${isAnswered ? 'answered-card' : ''}" id="q-card-${q.id}">
        <div class="question-meta">
          <div class="meta-badges">
            <span class="badge-tag badge-module-${q.module}">
              <i class="ti-tag"></i> ${moduleLabel}
            </span>
            <span class="badge-day">
              <i class="ti-calendar"></i> Ngày ${q.day}
            </span>
          </div>
          <div style="font-size: 13.5px; font-weight: 700; color: var(--text-secondary);">
            Câu ${qNum} / ${currentQuestions.length}
          </div>
        </div>
        <div class="question-text">${q.question}</div>
        <div class="options-grid">
    `;

    const markers = ["A", "B", "C", "D"];
    q.options.forEach((opt, optIdx) => {
      let optClass = "option-btn";
      const isSelected = userAnswers[q.id] === optIdx;

      if (mode === "practice") {
        if (isAnswered) {
          if (optIdx === q.correctAnswer) optClass += " correct";
          else if (isSelected) optClass += " wrong";
        }
      } else if (isExamSubmitted) {
        if (optIdx === q.correctAnswer) optClass += " correct";
        else if (isSelected) optClass += " wrong";
      } else if (isSelected) {
        optClass += " selected";
      }

      const isDisabled = (mode === 'practice' && isAnswered) || isExamSubmitted;

      html += `
        <button class="${optClass}" onclick="selectOption(${q.id}, ${optIdx})" ${isDisabled ? 'disabled' : ''}>
          <span class="option-marker">${markers[optIdx]}</span>
          <span>${opt}</span>
        </button>
      `;
    });

    html += `</div>`;

    // Explanation Box
    const showExpl = (mode === "practice" && isAnswered) || isExamSubmitted;
    html += `
      <div class="explanation-box ${showExpl ? 'show' : ''}" id="expl-${q.id}">
        <div class="explanation-title">
          <i class="ti-light-bulb"></i> Giải thích chi tiết:
        </div>
        <div>${q.explanation}</div>
      </div>
    </div>`;
  });

  container.innerHTML = html;
  renderJumpDrawerGrid();
}

function selectOption(qId, optIdx) {
  const mode = document.getElementById("quizModeSelect").value;
  userAnswers[qId] = optIdx;

  const currentQ = currentQuestions.find(q => q.id === qId);
  const isCorrect = currentQ && currentQ.correctAnswer === optIdx;

  if (mode === "practice") {
    playSound(isCorrect ? 'correct' : 'wrong');
    renderQuestions();
  } else {
    playSound('flip');
    const qCard = document.getElementById(`q-card-${qId}`);
    if (qCard) {
      qCard.classList.add('answered-card');
      qCard.querySelectorAll(".option-btn").forEach((btn, idx) => {
        btn.classList.toggle("selected", idx === optIdx);
      });
    }
  }

  updateProgressTracker();
  renderJumpDrawerGrid();
}

function startExam() {
  document.getElementById("startExamBtn").style.display = "none";
  document.getElementById("submitExamBtn").style.display = "inline-flex";
  document.getElementById("examResult").style.display = "none";
  userAnswers = {};
  isExamSubmitted = false;

  currentQuestions = [...QUIZ_BANK].sort(() => 0.5 - Math.random());
  renderQuestions();
  updateProgressTracker();

  timeLeftSeconds = 45 * 60;
  clearInterval(examTimerInterval);
  const timerBadge = document.getElementById("examTimer");
  timerBadge.style.display = "inline-flex";
  timerBadge.classList.remove("urgent");

  const hudLabel = document.getElementById("hudTimerLabel");
  if (hudLabel) hudLabel.innerText = "Còn lại:";
  const hudBadge = document.getElementById("hudTimerBadge");
  if (hudBadge) hudBadge.classList.remove("paused", "urgent");
  const hudIcon = document.getElementById("hudTimerToggleIcon");
  if (hudIcon) hudIcon.style.display = "none";
  const hudTimerVal = document.getElementById("hudTimerDisplay");
  if (hudTimerVal) hudTimerVal.innerText = "45:00";

  examTimerInterval = setInterval(() => {
    timeLeftSeconds--;
    const mins = Math.floor(timeLeftSeconds / 60);
    const secs = timeLeftSeconds % 60;
    const displayStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    const timerDisplay = document.getElementById("timerDisplay");
    if (timerDisplay) timerDisplay.innerText = displayStr;

    if (hudTimerVal) hudTimerVal.innerText = displayStr;

    if (timeLeftSeconds <= 300) {
      timerBadge.classList.add("urgent");
      if (hudBadge) hudBadge.classList.add("urgent");
    }

    if (timeLeftSeconds <= 0) {
      clearInterval(examTimerInterval);
      alert("Đã hết 45 phút làm bài! Hệ thống tự động thu và chấm bài thi của bạn.");
      submitExam();
    }
  }, 1000);

  showToast("Bài thi 45 phút đã bắt đầu! Chúc bạn làm bài thật tốt.", "ti-timer");
}

function submitExam() {
  if (isExamSubmitted) return;

  const answeredCount = Object.keys(userAnswers).length;
  if (answeredCount < currentQuestions.length) {
    const unanswered = currentQuestions.length - answeredCount;
    if (!confirm(`Bạn còn ${unanswered} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài ngay không?`)) {
      return;
    }
  }

  clearInterval(examTimerInterval);
  isExamSubmitted = true;

  document.getElementById("submitExamBtn").style.display = "none";
  const startBtn = document.getElementById("startExamBtn");
  startBtn.style.display = "inline-flex";
  startBtn.innerHTML = '<i class="ti-reload"></i> Thi Lại Đề Khác';

  let correctCount = 0;
  let modStats = {
    1: { c: 0, t: 0, name: "Khối 1: 2D Perception" },
    2: { c: 0, t: 0, name: "Khối 2: Quality & Lifecycle" },
    3: { c: 0, t: 0, name: "Khối 3: Cabin & SVM 360°" },
    4: { c: 0, t: 0, name: "Khối 4: 3D LiDAR & Fusion" }
  };

  currentQuestions.forEach(q => {
    modStats[q.module].t++;
    if (userAnswers[q.id] === q.correctAnswer) {
      correctCount++;
      modStats[q.module].c++;
    }
  });

  const percent = Math.round((correctCount / currentQuestions.length) * 100);

  const scorePercentEl = document.getElementById("scorePercentInside");
  const scoreSummaryEl = document.getElementById("scoreSummary");
  const circleFg = document.getElementById("scoreCircleFg");

  if (scorePercentEl) scorePercentEl.innerText = `${percent}%`;
  if (scoreSummaryEl) {
    scoreSummaryEl.innerText = `Bạn đã trả lời đúng ${correctCount} / ${currentQuestions.length} câu hỏi (${percent}%).`;
  }

  if (circleFg) {
    const circumference = 2 * Math.PI * 70;
    const offset = circumference - (percent / 100) * circumference;
    circleFg.style.strokeDashoffset = offset;
    circleFg.style.stroke = percent >= 80 ? 'var(--success)' : (percent >= 50 ? 'var(--warning)' : 'var(--danger)');
  }

  for (let m = 1; m <= 4; m++) {
    const p = modStats[m].t > 0 ? Math.round((modStats[m].c / modStats[m].t) * 100) : 0;
    const statValEl = document.getElementById(`statK${m}`);
    if (statValEl) {
      statValEl.innerText = `${p}% (${modStats[m].c}/${modStats[m].t})`;
      statValEl.style.color = p >= 80 ? 'var(--success)' : (p >= 50 ? 'var(--warning)' : 'var(--danger)');
    }
  }

  const resultDiv = document.getElementById("examResult");
  resultDiv.style.display = "block";
  resultDiv.scrollIntoView({ behavior: 'smooth' });

  const usedSeconds = 45 * 60 - timeLeftSeconds;
  const uMins = Math.floor(usedSeconds / 60);
  const uSecs = usedSeconds % 60;
  const timeTakenStr = `${uMins} phút ${uSecs} giây`;
  const timeTakenEl = document.getElementById("examTimeTakenText");
  if (timeTakenEl) {
    timeTakenEl.innerHTML = `<i class="ti-timer"></i> Thời gian hoàn thành bài thi: <strong>${timeTakenStr}</strong>`;
  }
  saveHistory(percent, correctCount, currentQuestions.length, timeTakenStr);

  if (percent >= 80) {
    triggerConfetti();
    playSound('correct');
    showToast("Chúc mừng! Bạn đã đạt kết quả xuất sắc", "ti-medall");
  } else {
    showToast("Đã hoàn thành bài thi! Xem lại các câu giải thích bên dưới.", "ti-check-box");
  }

  renderQuestions();
}

function resetQuiz() {
  const mode = document.getElementById("quizModeSelect").value;
  if (mode === "exam") {
    handleModeChange();
  } else {
    userAnswers = {};
    renderQuestions();
    updateProgressTracker();
    startPracticeTimer();
    showToast("Đã làm mới câu hỏi & khởi động lại bộ đếm giờ!", "ti-reload");
  }
}

// --- 7. QUESTION JUMP DRAWER ---
function toggleJumpDrawer() {
  const modal = document.getElementById("jumpModal");
  if (!modal) return;
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function renderJumpDrawerGrid() {
  const grid = document.getElementById("jumpGrid");
  if (!grid) return;

  let html = "";
  currentQuestions.forEach((q, idx) => {
    const num = idx + 1;
    const isAnswered = userAnswers[q.id] !== undefined;
    html += `
      <div class="jump-node ${isAnswered ? 'answered' : ''}" onclick="jumpToQuestion(${q.id})">
        ${num}
      </div>
    `;
  });
  grid.innerHTML = html;
}

function jumpToQuestion(qId) {
  toggleJumpDrawer();
  const el = document.getElementById(`q-card-${qId}`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.style.transform = 'scale(1.02)';
    el.style.transition = 'transform 0.25s ease';
    setTimeout(() => { el.style.transform = 'none'; }, 400);
  }
}

// --- 8. FLASHCARD ENGINE ---
function renderFlashcard() {
  if (filteredFlashcards.length === 0) {
    document.getElementById("cardCategory").innerText = "Thông báo";
    document.getElementById("cardDay").innerText = "";
    document.getElementById("cardFrontText").innerText = "Không có thẻ nào phù hợp với bộ lọc hiện tại!";
    document.getElementById("cardBackText").innerText = "Hãy chọn bộ lọc 'Tất cả thẻ' để tiếp tục ôn tập nhé.";
    document.getElementById("flashcardCounter").innerHTML = `Thẻ 0/0`;
    return;
  }

  if (currentFlashcardIndex >= filteredFlashcards.length) currentFlashcardIndex = 0;
  if (currentFlashcardIndex < 0) currentFlashcardIndex = filteredFlashcards.length - 1;

  const card = filteredFlashcards[currentFlashcardIndex];
  const isLearned = learnedCardIds.includes(card.id);

  const scene = document.getElementById("flashcardScene");
  if (scene) scene.classList.remove("flipped");

  document.getElementById("cardCategory").innerHTML = isLearned 
    ? `${card.category} <span style="color: var(--success); font-weight:800;"><i class="ti-check"></i> ĐÃ THUỘC</span>`
    : card.category;

  document.getElementById("cardDay").innerHTML = `<i class="ti-calendar"></i> Ngày ${card.day} &bull; Khối ${card.module}`;
  document.getElementById("cardFrontText").innerHTML = card.front;
  document.getElementById("cardBackText").innerHTML = card.back;

  const counterEl = document.getElementById("flashcardCounter");
  if (counterEl) {
    counterEl.innerHTML = `Thẻ <span class="active-counter">${currentFlashcardIndex + 1}</span> / ${filteredFlashcards.length} &bull; Đã thuộc: ${learnedCardIds.length}/${FLASHCARD_BANK.length}`;
  }
}

function flipCard() {
  const scene = document.getElementById("flashcardScene");
  if (scene) {
    scene.classList.toggle("flipped");
    playSound('flip');
  }
}

function nextCard() {
  currentFlashcardIndex = (currentFlashcardIndex + 1) % filteredFlashcards.length;
  renderFlashcard();
}

function prevCard() {
  currentFlashcardIndex = (currentFlashcardIndex - 1 + filteredFlashcards.length) % filteredFlashcards.length;
  renderFlashcard();
}

function markCard(learned) {
  if (filteredFlashcards.length === 0) return;
  const card = filteredFlashcards[currentFlashcardIndex];
  if (learned) {
    if (!learnedCardIds.includes(card.id)) {
      learnedCardIds.push(card.id);
      showToast(`Đã đánh dấu thuộc thẻ #${card.id}!`, "ti-check");
      playSound('correct');
    }
  } else {
    learnedCardIds = learnedCardIds.filter(id => id !== card.id);
    showToast(`Đã đưa thẻ #${card.id} vào danh sách cần ôn lại!`, "ti-alert");
  }
  localStorage.setItem("vinuni_learned_cards", JSON.stringify(learnedCardIds));
  nextCard();
}

function filterFlashcards() {
  const filterVal = document.getElementById("flashcardFilter").value;
  if (filterVal === "all") {
    filteredFlashcards = [...FLASHCARD_BANK];
  } else if (filterVal === "unlearned") {
    filteredFlashcards = FLASHCARD_BANK.filter(c => !learnedCardIds.includes(c.id));
  } else {
    const mod = parseInt(filterVal);
    filteredFlashcards = FLASHCARD_BANK.filter(c => c.module === mod);
  }
  currentFlashcardIndex = 0;
  renderFlashcard();
}

// Flashcard Keyboard Shortcuts
window.addEventListener("keydown", (e) => {
  const flashcardTab = document.getElementById("flashcards-tab");
  if (flashcardTab && flashcardTab.classList.contains("active")) {
    if (e.code === "Space") {
      e.preventDefault();
      flipCard();
    } else if (e.code === "ArrowRight") {
      nextCard();
    } else if (e.code === "ArrowLeft") {
      prevCard();
    }
  }
});

// --- 9. CHEAT SHEET & SEARCH LOGIC ---
function renderCheatSheets(items) {
  const container = document.getElementById("cheatListContainer");
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-secondary);">
        <i class="ti-search" style="font-size: 32px; display: block; margin-bottom: 8px;"></i>
        Không tìm thấy mục nào phù hợp với từ khóa tra cứu.
      </div>
    `;
    return;
  }

  let html = "";
  items.forEach(c => {
    html += `
      <div class="cheat-card-item">
        <div class="cheat-header">
          <div class="cheat-title-text">
            <i class="ti-book"></i>
            <span>${c.title}</span>
          </div>
          <span class="cheat-tag-badge">${c.category}</span>
        </div>
        ${c.html}
      </div>
    `;
  });
  container.innerHTML = html;
}

function searchCheatSheet() {
  const kw = document.getElementById("cheatSearchInput").value.toLowerCase().trim();
  if (!kw) {
    renderCheatSheets(CHEAT_SHEETS);
    return;
  }
  const matched = CHEAT_SHEETS.filter(c =>
    c.title.toLowerCase().includes(kw) ||
    c.category.toLowerCase().includes(kw) ||
    c.tags.toLowerCase().includes(kw) ||
    c.html.toLowerCase().includes(kw)
  );
  renderCheatSheets(matched);
}

function setCheatSearchTag(tag) {
  const input = document.getElementById("cheatSearchInput");
  if (input) {
    input.value = tag;
    searchCheatSheet();
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// --- 10. HISTORY & ANALYTICS ---
function saveHistory(score, correct, total, timeTaken) {
  const history = JSON.parse(localStorage.getItem("vinuni_exam_history") || "[]");
  history.unshift({
    date: new Date().toLocaleString("vi-VN"),
    score: score,
    correct: correct,
    total: total,
    timeTaken: timeTaken || "--"
  });
  if (history.length > 20) history.pop();
  localStorage.setItem("vinuni_exam_history", JSON.stringify(history));
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem("vinuni_exam_history") || "[]");
  const container = document.getElementById("historyList");
  const statsOverview = document.getElementById("historyOverviewTiles");
  if (!container) return;

  if (history.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-secondary);">
        <i class="ti-bar-chart" style="font-size: 36px; display: block; margin-bottom: 8px;"></i>
        Chưa có lịch sử làm bài thi. Hãy sang tab <strong>Luyện Thi Trắc Nghiệm</strong> và chọn chế độ Thi Thử để kiểm tra kiến thức nhé!
      </div>
    `;
    if (statsOverview) statsOverview.innerHTML = "";
    return;
  }

  const totalAttempts = history.length;
  const avgScore = Math.round(history.reduce((acc, h) => acc + h.score, 0) / totalAttempts);
  const highestScore = Math.max(...history.map(h => h.score));
  const passCount = history.filter(h => h.score >= 80).length;

  if (statsOverview) {
    statsOverview.innerHTML = `
      <div class="overview-stat-tile">
        <div class="num">${totalAttempts}</div>
        <div class="label"><i class="ti-time"></i> Tổng Lần Thi Thử</div>
      </div>
      <div class="overview-stat-tile">
        <div class="num" style="color: var(--brand-accent);">${avgScore}%</div>
        <div class="label"><i class="ti-stats-up"></i> Điểm Trung Bình</div>
      </div>
      <div class="overview-stat-tile">
        <div class="num" style="color: var(--success);">${highestScore}%</div>
        <div class="label"><i class="ti-cup"></i> Điểm Cao Nhất</div>
      </div>
      <div class="overview-stat-tile">
        <div class="num" style="color: #B87C2B;">${passCount}</div>
        <div class="label"><i class="ti-medall"></i> Lần Đạt Xuất Sắc (&ge;80%)</div>
      </div>
    `;
  }

  let html = `
    <div class="table-responsive-wrapper">
      <table class="data-table">
        <thead>
          <tr><th>Thời Gian</th><th>Thời Lượng Làm Bài</th><th>Số Câu Đúng</th><th>Điểm Số (%)</th><th>Đánh Giá</th></tr>
        </thead>
        <tbody>
  `;

  history.forEach(h => {
    const badgeClass = h.score >= 80 ? "status-pill-success" : (h.score >= 50 ? "status-pill-warning" : "status-pill-danger");
    const statusText = h.score >= 80 ? "XUẤT SẮC" : (h.score >= 50 ? "ĐẠT YÊU CẦU" : "CẦN ÔN LẠI");
    html += `
      <tr>
        <td>${h.date}</td>
        <td><i class="ti-timer" style="color: var(--brand-primary); font-size: 12px; margin-right: 4px;"></i><strong>${h.timeTaken || "--"}</strong></td>
        <td><strong>${h.correct}</strong> / ${h.total}</td>
        <td><span style="font-family: var(--font-mono); font-weight:800; font-size:15px;">${h.score}%</span></td>
        <td><span class="status-pill ${badgeClass}">${statusText}</span></td>
      </tr>
    `;
  });

  html += `</tbody></table></div>`;
  container.innerHTML = html;
}

function clearHistory() {
  if (confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử các lần thi thử không?")) {
    localStorage.removeItem("vinuni_exam_history");
    renderHistory();
    showToast("Đã xóa sạch lịch sử làm bài!", "ti-trash");
  }
}

// --- 11. CONFETTI CELEBRATION GENERATOR ---
function triggerConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#778873", "#A1BC98", "#DCCFC0", "#FDF6ED", "#63735F", "#8DA685"];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 18,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      alpha: 1
    });
  }

  let animationFrame;
  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.rotation += p.vRot;
      p.alpha -= 0.009;

      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(updateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  updateConfetti();
}

// --- 12. INITIALIZATION ON DOM READY ---
window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadQuestions();
  renderFlashcard();
  startPracticeTimer();
});
