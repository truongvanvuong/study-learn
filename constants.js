// ==============================================================================
// VINUNI AV DATA TRACK - COMPREHENSIVE KNOWLEDGE BANK (constants.js)
// 120 Rigorous Multi-Choice Questions (30 per module, Days 1 - 14)
// Perfectly Balanced Answer Distribution: 30 A (25%), 30 B (25%), 30 C (25%), 30 D (25%)
// Standard Exam Simulator: 60 Questions | 90 Minutes
// 50 High-Yield 3D Flashcards & 10 Comprehensive Cheatsheets
// ==============================================================================

const QUIZ_BANK = [
  // ==================== KHOI 1: NHAN THUC 2D (NGAY 1 - 5: 30 CAU) ====================
  {
    id: 1, day: 1, module: 1,
    question: "Khi phân tích bước ngoặt lịch sử của Deep Learning năm 2012 với mạng AlexNet và bộ dữ liệu ImageNet (14 triệu ảnh, 49.000 người gán nhãn tại 167 quốc gia), nhận định nào sau đây phản ánh đúng nhất sự dịch chuyển vai trò của con người qua 4 làn sóng AI?",
    options: [
      "Thuật toán mạng nơ-ron đã có nền tảng từ năm 1958 nhưng chỉ thực sự bùng nổ khi con người dịch chuyển vai trò từ tự viết luật và chọn đặc trưng sang kiến tạo dữ liệu có nhãn quy mô hàng triệu mẫu",
      "Sự xuất hiện của mạng nơ-ron tích chập đã loại bỏ hoàn toàn sự phụ thuộc vào nhãn của con người vì mô hình có thể tự suy luận quy luật vật lý từ ảnh thô",
      "Con người chuyển từ việc cung cấp các ví dụ có nhãn sang tự tay thiết kế các bộ lọc đặc trưng hình học như HOG hay Viola-Jones để giảm tải cho GPU",
      "Đến làn sóng thứ tư với các mô hình nền tảng (Foundation Models / VLA), con người không còn phải tham gia kiểm chứng đầu ra vì mô hình đã đạt tỷ lệ lỗi 3,6% thấp hơn mức 5,1% của người thử"
    ],
    correctAnswer: 0,
    explanation: "Theo bài giảng Ngày 1 (Slide 11, 18–25), ý tưởng mạng nơ-ron (perceptron) đã có từ năm 1958 nhưng phải đợi đến năm 2012 mới bùng nổ nhờ hội đủ 3 điều kiện, trong đó điều kiện tiên quyết số 1 là bộ dữ liệu ImageNet gồm 14 triệu ảnh được gán nhãn và xác nhận độc lập. Qua 4 làn sóng (AI cổ điển → ML → DL → LLM/Foundation), vai trò của con người không mất đi mà dịch chuyển từ viết luật → chọn đặc trưng → tạo ví dụ có nhãn → chấm điểm, xếp hạng và kiểm chứng đầu ra."
  },
  {
    id: 2, day: 1, module: 1,
    question: "Trong quá trình huấn luyện mô hình phát hiện vật thể hiện đại (như YOLO11 và YOLO26), cơ chế tối ưu hóa hàm mất mát (Loss function) và bộ gán nhãn động TAL (Task-Aligned Assigner) tương tác với dữ liệu nhãn (Ground Truth) như thế nào?",
    options: [
      "Mô hình sử dụng đạo hàm của chỉ số mAP50-95 để cập nhật trọng số trực tiếp sau mỗi batch, do đó khi giá trị Loss trên tập huấn luyện giảm thì chỉ số mAP trên tập kiểm tra chắc chắn sẽ tăng tỷ lệ thuận",
      "Mô hình trực tiếp tối ưu hóa hàm Loss (gồm CIoU, DFL, BCE ở YOLO11) chứ không tối ưu trực tiếp mAP; bộ gán TAL dùng độ trùng IoU và điểm phân loại để chọn ô dự đoán được học, nên box nhãn vẽ lệch sẽ làm đổi phép gán ô",
      "Bộ gán TAL cố định mỗi vật thể với đúng một khung mẫu (anchor box) duy nhất trước khi huấn luyện, nên việc vẽ box rộng hơn vật thể 15% chỉ làm giảm tốc độ hội tụ chứ không ảnh hưởng đến kích thước box lúc suy luận",
      "Ở thế hệ YOLO26, việc loại bỏ thành phần DFL (Distribution Focal Loss) và bỏ bước hậu xử lý NMS giúp mô hình tự động sửa lại các nhãn bị gán sai lớp trong tập dữ liệu huấn luyện mà không cần người duyệt"
    ],
    correctAnswer: 1,
    explanation: "Theo Slide 30, 32 và 55 (Ngày 1), mô hình học máy chỉ tối ưu hóa hàm Loss (với YOLO11 gồm 3 phần: CIoU đo độ trùng box, DFL đo phân bố vị trí cạnh box, và BCE đo sai số phân loại; YOLO26 bỏ DFL và mặc định không cần NMS) chứ không tối ưu trực tiếp mAP. Đặc biệt, bộ gán TAL dùng chính box trong nhãn để quyết định ô dự đoán nào được học; nếu nhãn lệch có hệ thống (ví dụ rộng quá 15%), phép gán sẽ lệch theo và mô hình sẽ học rất giỏi 'đáy dốc của một bài toán sai' (Label Ceiling)."
  },
  {
    id: 3, day: 1, module: 1,
    question: "Khi thực hiện Bước 5 (Chia tập dữ liệu Train / Validation / Test) cho dự án cảnh báo va chạm từ video hành trình tại Hà Nội, tại sao việc trộn ngẫu nhiên toàn bộ các khung hình (random frame split) lại bị coi là lỗi nghiêm trọng?",
    options: [
      "Làm mất thứ tự thời gian của chuỗi video khiến trình đọc dữ liệu (DataLoader) của PyTorch không thể giải mã được định dạng nén màu RGB",
      "Khiến dung lượng bộ nhớ đệm tăng gấp ba lần do cùng một đoạn video phải lưu trữ lặp lại ở cả ba thư mục huấn luyện, tinh chỉnh và kiểm tra",
      "Các khung hình liền kề trong cùng một clip gần như giống hệt nhau về bối cảnh và vật thể, khiến 'đề thi' lọt vào 'sách bài tập' và tạo ra điểm đánh giá Test cao giả tạo",
      "Làm mất cân bằng số lượng mẫu giữa các lớp đối tượng hiếm (như xe cứu thương) và các lớp đối tượng phổ biến (như xe máy) trong từng batch"
    ],
    correctAnswer: 2,
    explanation: "Theo Slide 31 và 47 (Ngày 1), việc chia ngẫu nhiên từng ảnh chỉ đúng với các bộ ảnh độc lập như COCO nhưng hoàn toàn sai với dữ liệu cắt từ video. Các frame liền nhau trong cùng một clip có nền đường, ánh sáng và phương tiện gần như trùng khớp; nếu chia ngẫu nhiên theo frame, mô hình chỉ cần 'học thuộc lòng' bối cảnh ở tập Train để đạt điểm cao giả tạo trên tập Test nhưng sẽ thất bại khi gặp cảnh đường phố mới. Do đó bắt buộc phải chia theo đơn vị clip (group split)."
  },
  {
    id: 4, day: 1, module: 1,
    question: "Nghiên cứu của Northcutt et al. (NeurIPS 2021) về lỗi nhãn trong các bộ dữ liệu chuẩn (benchmark) cùng nguyên lý 'Ground truth xuất hiện hai lần' cho chúng ta bài học thực chiến nào trong kiểm soát chất lượng dữ liệu?",
    options: [
      "Lỗi ngẫu nhiên trong tập huấn luyện nguy hiểm hơn lỗi có hệ thống vì nó làm hàm mất mát dao động mạnh và ngăn cản thuật toán Gradient Descent hội tụ",
      "Ground truth là sự thật khách quan tuyệt đối của thế giới vật lý, nên hai nhóm gán nhãn độc lập làm việc cẩn thận trên cùng một bộ ảnh chắc chắn sẽ tạo ra hai bộ nhãn trùng khít 100%",
      "Khi sử dụng các mô hình có kiến trúc đủ sâu, mạng nơ-ron sẽ tự động triệt tiêu các lỗi có hệ thống trong tập huấn luyện miễn là tập kiểm tra đạt độ sạch trên 90%",
      "Ngay cả tập kiểm tra của ImageNet cũng có tới 5,8% nhãn sai (đủ làm đảo thứ hạng giữa ResNet-18 và ResNet-50); nếu cùng một lỗi hệ thống xuất hiện ở cả nhãn Train và nhãn Test, điểm đánh giá sẽ chứng nhận lỗi đó là đúng"
    ],
    correctAnswer: 3,
    explanation: "Theo Slide 53–57 (Ngày 1), Ground truth không phải sự thật tuyệt đối mà là một thỏa thuận được ghi chép theo guideline, và nó xuất hiện hai lần: ở nhãn Train (dạy model) và nhãn Test (chấm model). Nếu một nhóm áp dụng cùng một quy ước sai có hệ thống cho cả hai tập, điểm đánh giá sẽ thưởng cho chính lỗi đó. Thực tế, Northcutt et al. (NeurIPS 2021) chỉ ra trung bình 10 tập benchmark có ít nhất 3,3% nhãn test sai (riêng ImageNet là 5,8%), và khi sửa lại nhãn đúng, ResNet-18 có thể vượt qua ResNet-50."
  },
  {
    id: 5, day: 1, module: 1,
    question: "Một mô hình phát hiện vật thể chạy thử nghiệm trên ảnh đường phố Việt Nam (với ngưỡng tự tin ≥ 0,5) cho kết quả: phát hiện 2/2 ô tô, 1/2 người đi bộ, và 0/4 xe máy. Tại sao bài giảng nhấn mạnh không được chỉ nhìn vào tỷ lệ bỏ sót tổng thể 62,5% (bỏ sót 5/8 vật thể)?",
    options: [
      "Vì ngưỡng độ tự tin 0,5 là xác suất toán học tuyệt đối, nên việc lọc bỏ các dự đoán dưới 0,5 đã làm sai lệch phân phối thống kê của toàn bộ tập dữ liệu",
      "Vì số lượng mẫu thử nghiệm quá nhỏ khiến sai số phương sai lớn, bắt buộc phải gộp chung tất cả các lớp lại mới tính được diện tích dưới đường cong PR",
      "Vì con số trung bình 62,5% che khuất sự thật rằng mô hình hoạt động hoàn hảo trên lớp ô tô (bỏ sót 0%) nhưng lại mù hoàn toàn trước lớp xe máy (bỏ sót 100%), đòi hỏi phải bổ sung dữ liệu đặc thù theo từng lớp",
      "Vì mô hình chưa được huấn luyện lại từ trọng số ngẫu nhiên (train from scratch) mà đang dùng trọng số học trước trên tập COCO nên không có chỉ số lớp cho xe máy"
    ],
    correctAnswer: 2,
    explanation: "Theo Slide 46–50 (Ngày 1), con số tổng hợp 62,5% bỏ sót làm lu mờ điểm mù nghiêm trọng: một lớp không hỏng chút nào (ô tô: 0% bỏ sót) trong khi một lớp hỏng hoàn toàn (xe máy: 100% bỏ sót). Trong bài toán an toàn giao thông, việc đo lường bắt buộc phải tách riêng theo từng lớp (per-class recall/miss rate) và từng điều kiện (ngày/đêm/mưa) để Vòng lặp dữ liệu (Data Engine) thu thập và gán nhãn bổ sung đúng các ca khó mà mô hình đang yếu."
  },
  {
    id: 6, day: 1, module: 1,
    question: "Khi so sánh các kiến trúc xây dựng hệ thống tự hành năm 2026 (Modular, End-to-end, Foundation Model, VLA) và quy tắc pháp lý về dữ liệu tại Việt Nam, phát biểu nào sau đây là ĐÚNG?",
    options: [
      "Mô hình VLA (như NVIDIA Alpamayo-R1) cần nhãn là chuỗi lời giải thích lý do lái do máy gán nháp và người duyệt; đồng thời theo NĐ 356/2025/NĐ-CP và Luật BVDLCN 91/2025/QH15, mặt người và biển số xe là dữ liệu cá nhân nên tuyệt đối không được đưa lên cloud/AI công cộng",
      "Kiến trúc End-to-end (như Tesla FSD v12+) chuyển thẳng từ ảnh camera sang lệnh lái nên đã loại bỏ hoàn toàn nhu cầu sử dụng tập dữ liệu đánh giá (evaluation set) do con người xác nhận trước khi xe lăn bánh",
      "Khi sử dụng công cụ AI hỗ trợ vẽ nháp như SAM 3 (tăng năng suất hơn 2 lần), các nhãn ứng viên có điểm nội bộ trên 0,90 tương đương xác suất đúng 90% nên có thể đưa thẳng vào làm Ground Truth",
      "Theo quy định thực hành của khóa học, học viên được phép tải ảnh chụp cabin xe thật có mặt tài xế và biển số xe lên Google Colab miễn là chỉ sử dụng phục vụ mục đích học tập nội bộ"
    ],
    correctAnswer: 0,
    explanation: "Theo Slide 42, 51, 62 và 67 (Ngày 1): (1) Các mô hình VLA (Vision-Language-Action) như Alpamayo-R1 kết hợp 'nhìn → giải thích → lái', đòi hỏi dữ liệu chuỗi lý do do máy gán nháp và con người kiểm duyệt trong vòng lặp; (2) Dù theo kiến trúc nào, tập đánh giá do người xác nhận vẫn là bằng chứng an toàn bắt buộc; (3) Theo Luật BVDLCN 91/2025/QH15 và NĐ 356/2025/NĐ-CP, hình ảnh khuôn mặt và biển số xe là dữ liệu cá nhân, tuyệt đối cấm đưa lên AI hay cloud công cộng."
  },
  {
    id: 7, day: 2, module: 1,
    question: "Cho một bức ảnh có kích thước 1920 × 1080 pixel. Trong file nhãn định dạng chuẩn Ultralytics YOLO (.txt), một đối tượng được ghi là `2 0.5 0.5 0.1 0.2`. Nếu chuyển đổi chính xác box này sang định dạng COCO JSON `[x, y, w, h]` và định dạng kết quả in ra của model `[x1, y1, x2, y2]` (tính bằng pixel), kết quả nào sau đây là ĐÚNG?",
    options: [
      "COCO: [960, 540, 192, 216] và Model output: [960, 540, 1152, 756]",
      "COCO: [864, 432, 192, 216] và Model output: [864, 432, 1056, 648]",
      "COCO: [432, 864, 216, 192] và Model output: [432, 864, 648, 1056]",
      "COCO: [864, 432, 1056, 648] và Model output: [960, 540, 192, 216]"
    ],
    correctAnswer: 1,
    explanation: "Theo Slide 10, 66 và 78 (Ngày 2): Định dạng YOLO lưu `[cx, cy, w, h]` chuẩn hóa theo kích thước ảnh (0–1). Với ảnh 1920×1080: tâm `cx = 0.5 × 1920 = 960`, `cy = 0.5 × 1080 = 540`; chiều rộng `w = 0.1 × 1920 = 192`, chiều cao `h = 0.2 × 1080 = 216`. Tọa độ góc trên-trái là `x1 = 960 - 192/2 = 864`, `y1 = 540 - 216/2 = 432`; góc dưới-phải là `x2 = 864 + 192 = 1056`, `y2 = 432 + 216 = 648`. Do đó chuẩn COCO `[x, y, w, h]` là `[864, 432, 192, 216]` và chuẩn hai góc `[x1, y1, x2, y2]` là `[864, 432, 1056, 648]`. Nếu đọc nhầm tâm thành góc trên-trái, mọi box sẽ bị lệch đúng nửa kích thước."
  },
  {
    id: 8, day: 2, module: 1,
    question: "Khi đưa một ảnh kích thước 640 × 640 vào mô hình YOLO11, phần Head tạo ra chính xác bao nhiêu ứng viên dự đoán (candidates) trước khi lọc, và cơ chế loại bỏ box trùng lặp ở thế hệ YOLO26 / YOLOv10 có sự thay đổi cốt lõi nào so với YOLO11?",
    options: [
      "Tạo ra 25.200 ứng viên từ 3 lưới đặc trưng (mỗi ô 3 anchor); YOLO26 sử dụng thuật toán Soft-NMS để làm mờ dần điểm tự tin của các box chồng lấn thay vì xóa hẳn",
      "Tạo ra 1.470 ứng viên trên lưới 7×7; YOLO26 loại bỏ hoàn toàn ngưỡng điểm tin cậy (confidence threshold) nhờ sử dụng bộ giải mã Transformer",
      "Tạo ra 10.647 ứng viên từ 9 khung mẫu k-means; YOLO26 chuyển sang gom cụm các box trùng nhau bằng thuật toán trung bình có trọng số",
      "Tạo ra 8.400 ứng viên từ 3 lưới 80×80, 40×40 và 20×20 (mỗi ô 1 dự đoán anchor-free); YOLO26 và YOLOv10 dùng cơ chế ghép một-một (one-to-one) lúc chạy để bỏ bước lọc NMS, giúp tránh lỗi NMS xóa nhầm vật ở cảnh đông"
    ],
    correctAnswer: 3,
    explanation: "Theo Slide 20, 21, 26, 28 và 56 (Ngày 2): Với ảnh 640×640, YOLO11 (anchor-free, mỗi ô 1 dự đoán) tính toán trên 3 lưới: `80×80 (6.400 ô) + 40×40 (1.600 ô) + 20×20 (400 ô) = 8.400 ứng viên` (trong khi YOLOv5 dùng 3 khung mẫu mỗi ô nên có `8.400 × 3 = 25.200 ứng viên`). Ở các cảnh đông đúc (như CrowdHuman trung bình 22,6 người/ảnh hoặc ngã tư xe máy chen nhau), hai vật thật đứng sát nhau có IoU > 0,7 sẽ bị bước NMS của YOLO11 xóa nhầm. YOLOv10 và YOLO26 giải quyết bằng cách huấn luyện hai đầu (một-nhiều và một-một) và khi suy luận dùng đầu một-một để bỏ NMS (từ bản Ultralytics 8.4.142 cần bật `nms=False`)."
  },
  {
    id: 9, day: 2, module: 1,
    question: "Giả sử một vật thể có kích thước thật trên ảnh là 200 × 100 pixel. Nếu người gán nhãn vẽ một box 'lỏng' rộng và cao hơn 10% (tức 220 × 110 pixel, bao trùm hoàn toàn box thật), hoặc nếu vẽ lệch 5 pixel trên vật nhỏ (20 × 40 px) so với vật lớn (200 × 100 px), các chỉ số đánh giá sẽ phản ứng như thế nào?",
    options: [
      "Box lỏng 10% có IoU = 0,64 nên sẽ bị loại ngay ở cổng kiểm soát chất lượng QC 0,7 và làm chỉ số mAP50 sụt giảm hơn 50% chỉ sau 10 epoch huấn luyện",
      "Box lỏng 10% có IoU ≈ 0,83 nên vẫn vượt qua ngưỡng mAP50 và 7/10 ngưỡng của mAP50-95 nhưng làm đích học của model bị phình to; mặt khác, cùng lệch 5 pixel khiến IoU của box nhỏ (20×40) tụt mạnh xuống 0,60 trong khi box lớn vẫn đạt 0,95",
      "Chỉ số IoU bất biến với tỷ lệ kích thước (scale-invariant), do đó việc lệch 5 pixel trên box nhỏ 20×40 pixel hay trên box lớn 200×100 pixel đều làm giảm chính xác 0,05 điểm IoU như nhau",
      "Nếu toàn bộ box trong tập Train đều vẽ rộng hơn 10% còn tập Val vẫn vẽ sát, chỉ số mAP50-95 sẽ giữ nguyên không đổi còn mAP50 sẽ giảm mạnh nhất"
    ],
    correctAnswer: 1,
    explanation: "Theo Slide 34 và 41 (Ngày 2): (1) Khi box 200×100 px (diện tích 20.000) bị vẽ lỏng 10% mỗi chiều thành 220×110 px (diện tích 24.200), tỷ số `IoU = 20.000 / 24.200 = 1 / 1,21 ≈ 0,83`. Giá trị 0,83 này dễ dàng vượt qua mAP50, vượt qua cổng QC 0,7 và qua được 7/10 ngưỡng của mAP50-95 (chỉ trượt ở 0,85; 0,90; 0,95). Tuy nhiên, nó dạy cho model một đích học to hơn vật thật, làm sai lệch bước ước lượng khoảng cách phía sau. (2) Ngược lại, với vật ở xa kích thước nhỏ (20×40 px), chỉ cần lệch 5 px là IoU tụt thẳng xuống 0,60, trong khi vật lớn 200×100 px lệch 5 px vẫn đạt IoU 0,95."
  },
  {
    id: 10, day: 2, module: 1,
    question: "Trong quá trình thiết kế Label Schema trước khi gán nhãn (Class Design), quy tắc hai câu hỏi nào được sử dụng để quyết định nên tách hai đối tượng trông khác nhau thành hai lớp (Classes) riêng biệt hay gộp thành một lớp kèm thuộc tính (Attribute)?",
    options: [
      "Câu 1: Hai vật thể có cùng màu sắc và kích thước pixel trung bình không? Câu 2: Bộ dữ liệu COCO gốc có tách sẵn hai lớp này không?",
      "Câu 1: Số lượng ảnh của mỗi loại có vượt quá 1.500 ảnh và 10.000 box không? Câu 2: Kiến trúc mạng đang dùng là CNN hay Transformer?",
      "Câu 1: Hệ thống phía sau (planning/control) có xử lý chúng khác nhau không? Câu 2: Nhìn trên một bức ảnh tĩnh đơn lẻ, con người có phân biệt chắc chắn được hai loại này không?",
      "Câu 1: Hai đối tượng có bao giờ xuất hiện trong cùng một khung hình không? Câu 2: Độ đồng thuận IoU giữa hai người gán có đạt trên 0,88 không?"
    ],
    correctAnswer: 2,
    explanation: "Theo Slide 42 và 43 (Ngày 2), nguyên tắc cốt lõi là: `Class = vật thể là gì`, `Attribute = trạng thái của nó`. Chỉ tách thành hai lớp riêng khi CẢ HAI câu hỏi đều trả lời là 'Có': (1) Hệ thống phía sau có xử lý chúng khác nhau không? và (2) Nhìn một ảnh tĩnh có phân biệt chắc chắn không? Ví dụ: 'xe buýt' và 'ô tô con' trả lời 'Có' cho cả hai → tách thành 2 lớp. Nhưng 'ô tô đang đỗ' và 'ô tô đang chạy' tuy phía sau xử lý khác nhau (Có) nhưng nhìn một ảnh tĩnh không phải lúc nào cũng phân biệt chắc chắn được (Không) → giữ 1 lớp `car` và thêm thuộc tính `parked`. Còn 'xe tải đỏ' và 'xe tải xanh' phía sau xử lý như nhau → gộp 1 lớp, không cần thuộc tính."
  },
  {
    id: 11, day: 2, module: 1,
    question: "Theo khung phân tích lỗi TIDE (Bolya et al., ECCV 2020) được trình bày ở Ngày 2, sự khác biệt giữa lỗi `Loc`, `Dupe` và `Bkgnd` là gì, và nghiên cứu này đã phát hiện ra sự thật đáng kinh ngạc nào về tập dữ liệu chuẩn COCO?",
    options: [
      "Loc là đúng lớp nhưng box lệch (0,1 ≤ IoU < 0,5); Dupe là hai box dự đoán cho cùng một vật (do NMS); Bkgnd là báo có vật ở nơi không có box nhãn (IoU < 0,1) — và trong 100 lỗi Bkgnd tự tin nhất của Mask R-CNN trên COCO, có tới 57 lỗi thực chất do chính dữ liệu nhãn bị thiếu hoặc sai",
      "Loc là báo có ở nền trống (IoU < 0,1); Dupe là sai lớp nhưng đúng vị trí; và 80% lỗi của YOLO trên COCO là do kích thước ảnh đầu vào quá nhỏ",
      "Loc là bỏ sót vật thể nhỏ ở xa; Dupe là gộp hai vật thể đứng cạnh nhau thành một box; và 57% số box trong COCO bị lệch tâm quá nửa kích thước vật",
      "Loc, Dupe và Bkgnd đều là lỗi phần cứng của cảm biến camera khi chụp ban đêm; nghiên cứu chỉ ra việc đổi sang mô hình DETR sẽ triệt tiêu 100% cả ba lỗi này"
    ],
    correctAnswer: 0,
    explanation: "Theo Slide 85 (Ngày 2), TIDE phân định 6 kiểu sai của detector: `Cls` (IoU ≥ 0,5 nhưng sai lớp), `Loc` (đúng lớp nhưng box lệch với 0,1 ≤ IoU < 0,5), `Both` (vừa sai lớp vừa lệch box), `Dupe` (hai box cho một vật — gợi ý kiểm tra NMS), `Bkgnd` (báo có ở chỗ không có box ground truth nào với IoU < 0,1), và `Missed` (vật có box nhưng không dự đoán nào khớp). Đặc biệt, khi kiểm tra 100 lỗi 'Bkgnd' có điểm tự tin cao nhất của Mask R-CNN trên tập COCO, các tác giả phát hiện 57 lỗi thực chất truy nguyên về chính lỗi của bộ nhãn ground truth (quên vẽ box, cờ crowd, hoặc lớp mơ hồ)."
  },
  {
    id: 12, day: 2, module: 1,
    question: "Khi phân tích kết quả huấn luyện 50 epoch của Ultralytics YOLO (với cấu hình mặc định `mosaic=1.0`, `close_mosaic=10`, `patience=100`) và đọc bảng đánh giá trên tập Validation, nhận định kỹ thuật nào sau đây là CHÍNH XÁC?",
    options: [
      "Nếu tập Validation bị người gán nhãn bỏ sót nhiều box của các vật thể có thật trong ảnh, chỉ số Recall của lớp đó trên bảng kết quả sẽ tụt giảm thê thảm trong khi Precision tăng vọt",
      "Tham số `patience=100` sẽ tự động ngắt quá trình huấn luyện ở epoch 40 ngay khi tính năng ghép ảnh Mosaic vừa tắt để ngăn chặn hiện tượng học thuộc lòng (overfitting)",
      "Khi xuất dữ liệu từ CVAT bằng định dạng `Ultralytics YOLO Detection 1.0`, mọi thuộc tính như `occluded`, `truncated`, `parked` đều được tự động lưu vào cột thứ 6 của file `.txt` để mô hình học",
      "Nếu tập Validation bị thiếu box nhãn, các dự đoán đúng của mô hình tại vị trí đó sẽ bị chấm nhầm thành báo động giả (False Positive) làm tụt Precision; đồng thời `close_mosaic=10` giúp tắt ghép 4 ảnh ở 10 epoch cuối để mô hình làm quen lại với ảnh thật nguyên bản"
    ],
    correctAnswer: 3,
    explanation: "Theo Slide 76, 81, 82 và 83 (Ngày 2): (1) Trong 50 epoch, từ epoch 1–40 mô hình học trên ảnh ghép 4 (`mosaic=1.0`), và từ epoch 41–50 (`close_mosaic=10`, kế thừa từ YOLOX) mô hình tắt mosaic để làm quen lại với phân phối ảnh thật không bị cắt ghép; với `patience=100`, dừng sớm không kích hoạt trong 50 epoch. (2) Nếu tập Val bị thiếu box ground truth, khi model đoán đúng vật thể ở đó, công cụ chấm không tìm thấy box nhãn để ghép nên phạt thành False Positive (báo nhầm), làm tụt **Precision** chứ không phải Recall! (3) Định dạng file `.txt` của YOLO chỉ lưu 5 số `class_id cx cy w h`, mọi attribute như `occluded` đều bị mất nên phải lưu kèm bản `CVAT for images 1.1`."
  },
  {
    id: 13, day: 3, module: 1,
    question: "Trong Bước 2 (Đoán vị trí) và Bước 4 (Cập nhật) của một bộ theo dõi đa đối tượng (Tracker) sử dụng bộ lọc Kalman (Kalman Filter), cơ chế toán học nào diễn ra khi một đối tượng đang theo dõi bị che khuất hoàn toàn trong 3 frame liên tiếp rồi xuất hiện trở lại ở frame thứ 4?",
    options: [
      "Trong 3 frame bị che, do không có box mới để trộn nên bộ lọc chỉ thực hiện bước đoán khiến độ bất định (sai số ±) nở rộng dần; khi vật hiện lại ở frame thứ 4, vì độ bất định của phần đoán đã rất lớn nên phép trộn gán trọng số gần như tuyệt đối (ví dụ 0,94) cho box đo mới",
      "Ngay tại frame đầu tiên không tìm thấy box, bộ lọc Kalman lập tức đặt vận tốc của đối tượng về 0 và giữ nguyên tọa độ hộp đứng yên tại chỗ cho đến khi hết 30 frame",
      "Trong suốt thời gian bị che khuất, bộ lọc Kalman tự động quay lui lịch sử (backtracking) để chạy lại mạng trích xuất đặc trưng CNN trên toàn bộ các frame trước đó nhằm giữ độ bất định không đổi",
      "Khi vật xuất hiện trở lại sau 3 frame bị che, bộ lọc Kalman luôn chia đều trọng số 50% cho vị trí dự đoán và 50% cho vị trí box mới bất chấp kích thước của vật thể"
    ],
    correctAnswer: 0,
    explanation: "Theo Slide 17, 18 và 22 (Ngày 3), Kalman Filter hoạt động theo nguyên lý: Đoán trước (vị trí cũ + vận tốc), rồi sửa (trộn) bằng box đo mới theo độ tin cậy. Ví dụ ở frame thường: đoán `123 ± 9`, đo `130 ± 5`, trọng số dành cho box mới là `9² / (9² + 5²) = 81 / 106 ≈ 0,76`, vị trí sau trộn là `123 + 0,76 × (130 - 123) = 128,3`. Khi vật bị che, không có box đo để trộn nên tracker chỉ đoán, làm độ bất định nở dần (`±8 → ±12 → ±16 px`) và vị trí đoán trôi dần. Khi vật hiện lại, vì phần đoán kém chắc chắn hơn hẳn so với box mới, box mới nhận trọng số rất cao (ví dụ 0,94), tức tracker gần như tin hẳn vào box mới."
  },
  {
    id: 14, day: 3, module: 1,
    question: "Thuật toán ByteTrack (Zhang et al., ECCV 2022) giải quyết bài toán người đi bộ hoặc xe máy bị che khuất một nửa (khiến điểm tự tin của detector sụt giảm) bằng cơ chế hai lượt ghép cặp như thế nào?",
    options: [
      "Hạ ngưỡng khởi tạo track mới (`new_track_thresh`) xuống 0,05 để mọi box điểm thấp đều được cấp ngay một mã ID mới, sau đó gộp các ID trùng nhau ở cuối video",
      "Sử dụng mạng ReID 2048 chiều ở ngay lượt 1 cho tất cả các box có điểm tự tin dưới 0,25 để tìm lại đối tượng đã mất dấu quá 60 frame",
      "Chia dự đoán thành hai nhóm: Lượt 1 ghép các box điểm cao (≥ 0,25) với mọi track; Lượt 2 lấy các box điểm thấp (0,1 < điểm < 0,25) chỉ ghép với các track đang theo còn thừa sau Lượt 1 (yêu cầu IoU ≥ 0,5), còn box điểm thấp không khớp sẽ bị bỏ chứ không mở ID mới",
      "Chỉ giữ lại cặp track–box có điểm IoU cao nhất ở từng dòng theo phương pháp tham lam (greedy matching) thay vì giải bài toán tối ưu tổng chi phí cho toàn bảng"
    ],
    correctAnswer: 2,
    explanation: "Theo Slide 20, 24 và 25 (Ngày 3): Khi một người đi bộ bị xe khác che một nửa, detector vẫn phát hiện được nhưng điểm tự tin tụt xuống thấp (ví dụ 0,18). Các tracker cũ vứt bỏ toàn bộ box dưới ngưỡng 0,25 khiến track bị đứt đoạn (tách track). ByteTrack giữ lại các box điểm thấp (`0,1 < điểm < 0,25`) để đưa vào **Lượt 2**, nhưng chỉ ghép chúng với các track *đang theo còn thừa* từ Lượt 1 dựa trên vị trí (`IoU ≥ 0,5`). Nếu box điểm thấp không khớp với track nào đang theo (như nhiễu nền), nó sẽ bị hủy bỏ hoàn toàn chứ tuyệt đối không được mở một track mới nhằm tránh sinh ra track rác."
  },
  {
    id: 15, day: 3, module: 1,
    question: "Xét một đoạn video dài 10 frame có 2 vật thể A và B. Giả sử detector hoạt động hoàn hảo ở mọi frame (FN = 0, FP = 0), nhưng tại frame thứ 6 hai vật đi cắt qua nhau khiến tracker đổi chỗ mã định danh (id 1 và id 2 tráo cho nhau từ frame 6 đến frame 10). Giá trị MOTA và IDF1 của đoạn video này lần lượt là bao nhiêu, và điều đó phản ánh bản chất gì?",
    options: [
      "MOTA = 50% và IDF1 = 90%; điều này chứng tỏ MOTA nhạy gấp đôi IDF1 đối với các lỗi tráo đổi danh tính ở giữa video",
      "MOTA = 90% và IDF1 = 50%; điều này chứng tỏ MOTA chỉ đếm lỗi từng frame nên bị chi phối bởi chất lượng detector, còn IDF1 chấm sự toàn vẹn danh tính trên cả clip nên phản ánh đúng việc hỏng hồ sơ quỹ đạo từ frame 6 trở đi",
      "MOTA = 80% và IDF1 = 80%; vì cả hai chỉ số đều lấy tổng số lần đổi ID chia cho tổng số lượng vật thể xuất hiện trong toàn bộ 10 frame",
      "MOTA = 95% và IDF1 = 75%; vì hai vật đổi chỗ cho nhau tại một thời điểm chỉ được tính là 1 lỗi IDSW duy nhất trong công thức CLEAR MOT"
    ],
    correctAnswer: 1,
    explanation: "Theo Slide 34–37 (Ngày 3): Tổng số box thật trong cả clip là `10 frame × 2 vật = 20 box`. Tại frame 6, hai vật A và B đổi chỗ ID cho nhau nên mỗi vật bị tính 1 lần đổi ID, tổng cộng `IDSW = 2` (với `FN = 0, FP = 0`). Khi đó: `MOTA = 1 - (0 + 0 + 2) / 20 = 18/20 = 90%` — con số rất cao gần như không báo động điều gì. Ngược lại, `IDF1` ghép mỗi ID với một vật thật cho toàn bộ clip: trong 10 frame, mỗi ID chỉ nằm đúng trên vật của nó trong 5 frame đầu và nằm sai trên vật kia trong 5 frame sau (`IDTP = 10, IDFP = 10, IDFN = 10`), dẫn đến `IDF1 = (2 × 10) / (2 × 10 + 10 + 10) = 20 / 40 = 50%`. Do đó, với các bài toán cần giữ danh tính để tính vận tốc và dự đoán quỹ đạo như xe tự lái, bắt buộc phải đọc IDF1 và HOTA."
  },
  {
    id: 16, day: 3, module: 1,
    question: "Một chiếc xe máy đi khuất hoàn toàn sau xe buýt trong 2 giây rồi xuất hiện trở lại trên video quay ở tốc độ 30 ảnh/giây (30 fps). Khi đối chiếu giữa thiết kế của các tracker trong Ultralytics (với `track_buffer = 30`) và quy tắc tạo Ground Truth trong CVAT Track Mode, khẳng định nào sau đây là ĐÚNG?",
    options: [
      "Tham số `track_buffer = 30` của Ultralytics có đơn vị là 30 giây, do đó sau 2 giây bị che khuất, cả ByteTrack và BoT-SORT đều tự động giữ lại đúng mã ID cũ cho chiếc xe máy",
      "Trong CVAT Track Mode, khi xe máy khuất sau xe buýt, người gán nhãn phải bật cờ `Outside` (phím O) ở frame bắt đầu khuất để xóa hẳn mã ID cũ và tạo một track mới khi xe hiện ra",
      "Nếu bật thêm nhánh ngoại hình ReID (`with_reid: True`) trong BoT-SORT mà vẫn giữ nguyên `track_buffer = 30`, mạng ReID sẽ tự động tìm lại và khôi phục mã ID cũ cho chiếc xe máy sau 2 giây bị che",
      "Vì `track_buffer = 30` đếm theo số frame (tương đương đúng 1 giây ở video 30 fps), nên sau 2 giây (60 frame) không khớp, tracker đã xóa hẳn track cũ và sẽ cấp ID mới (dù có bật ReID); còn trong Ground Truth, người gán phải giữ nguyên 1 ID (hoặc dùng `Merge` phím M) và bật cờ `Occluded` (phím Q) cho đoạn bị che"
    ],
    correctAnswer: 3,
    explanation: "Theo Slide 21, 31, 49–53, 75 và 94 (Ngày 3): (1) `track_buffer = 30` đếm theo **frame** chứ không đếm theo giây. Ở video 30 fps, 2 giây tương ứng với 60 frame (> 30 frame), nên track tạm mất đã bị chuyển sang trạng thái **Xoá** (id không dùng lại). Ngay cả khi bật ReID trong BoT-SORT, ReID chỉ so sánh với các track chưa bị xóa và còn chồng lên vùng đoán, nên không thể cứu được vật khuất quá `track_buffer`. (2) Trong CVAT, bị che tạm thời phải dùng cờ `Occluded` (phím Q, xuất ra `visibility = 0` trong MOT 1.1) để giữ liền mạch ID; cờ `Outside` (phím O) chỉ dùng khi vật thực sự rời khỏi khung hình (nếu quên bấm Outside ở cuối track sẽ gây lỗi **Box treo** ở chỗ trống đến hết clip)."
  },
  {
    id: 17, day: 3, module: 1,
    question: "Khi cấu hình nhánh nhận diện lại ngoại hình (ReID) và bù chuyển động camera (GMC) cho các bộ theo dõi trong Ultralytics (BoT-SORT, Deep OC-SORT, TrackTrack), cơ chế kỹ thuật và 'bẫy' thực tế nào sau đây cần đặc biệt lưu ý?",
    options: [
      "Tùy chọn `model: auto` trong file cấu hình ReID của Ultralytics sẽ tự động tải một mạng OSNet 2048 chiều chuyên biệt đã huấn luyện trên 40.671 chiếc xe của bộ dữ liệu VERI-Wild",
      "Việc bật ReID luôn luôn làm tăng điểm HOTA và IDF1 trên mọi loại cảnh quay, đặc biệt là trên bộ dữ liệu DanceTrack nơi các vũ công mặc đồng phục giống hệt nhau và đổi hướng liên tục",
      "BoT-SORT chỉ xét dáng vẻ khi thỏa mãn đồng thời ngưỡng chồng lấn vị trí (`proximity_thresh`) và ngưỡng tương đồng cosine (`appearance_thresh`), đồng thời trộn đều vector nhớ theo tỷ lệ 0,9 cũ + 0,1 mới; trong khi Deep OC-SORT trộn linh hoạt theo điểm tự tin của box để tránh nạp vector bị che/nhòe vào bộ nhớ",
      "Từ phiên bản Ultralytics 8.4.76 trở đi, nếu người dùng chạy lệnh `yolo track` mà không khai báo tham số `tracker=`, hệ thống sẽ mặc định chạy thuật toán SORT (2016) không có bù chuyển động camera"
    ],
    correctAnswer: 2,
    explanation: "Theo Slide 61–66 và 72–73 (Ngày 3): (1) BoT-SORT chỉ tin dáng vẻ khi box đủ chồng lên chỗ đoán (`IoU > proximity_thresh = 0,5`) VÀ độ giống cosine đủ cao, đồng thời cập nhật vector nhớ theo công thức cố định `0,9 × nhớ cũ + 0,1 × vector mới` (khiến cả box bị che cũng bị trộn vào). Deep OC-SORT cải tiến bằng cách trộn nhiều hay ít tùy thuộc vào điểm tự tin của box (điểm 0,3 bỏ qua; điểm 1,0 trộn 5%) để tránh nạp vector hỏng khi vật bị che. (2) Bẫy của `model: auto`: nó chỉ lấy lại đặc trưng 64 số của detector (vốn dạy để phát hiện chứ không phải để phân biệt từng cá thể), hoặc lặng lẽ đổi sang `yolo26n-cls.pt` nếu dùng model không NMS. (3) Từ bản 8.4.76, tracker mặc định của Ultralytics là `TrackTrack` (có `min_track_len = 3` và bật sẵn bù camera)."
  },
  {
    id: 18, day: 3, module: 1,
    question: "Trong Trạm 5 của bài thực hành Tracking (Kiểm tra Ground Truth và chạy Script chấm điểm so sánh với output của Ultralytics), quy trình tự kiểm 3 lượt tua và hai lỗi kỹ thuật nào có thể làm hỏng hoàn toàn kết quả đánh giá?",
    options: [
      "Tự kiểm Tầng 1 gồm 3 lượt (phát nhanh 2× nhìn số ID nhấp nháy; nhảy tới frame đầu/cuối từng track bắt lỗi quên bấm Outside gây box treo; tua đến giữa đoạn dài bắt lỗi box trôi); khi chấm điểm phải kiểm tra lỗi lệch chỉ số frame bắt đầu (0 hay 1) và lỗi quên đổi hệ tọa độ từ tâm chuẩn hóa `[0, 1]` của tracker sang góc trái-trên theo pixel của `gt.txt`",
      "Bỏ qua bước tự kiểm của người vẽ để nhảy thẳng sang bước so sánh tự động bằng script; hai lỗi làm hỏng điểm số là bật cờ Occluded cho vật bị che và gán mã ID không trùng số thứ tự với ID của tracker",
      "Phải chạy thử tracker của máy trước rồi dùng kết quả đó sửa lại Ground Truth; hai lỗi thường gặp là đặt quá ít keyframe ở đoạn đi thẳng và dùng màu box khác nhau cho các lớp",
      "Chỉ cần kiểm tra số lượng dòng trong file `gt.txt` bằng với số lượng file trong thư mục `labels/`; nếu mã ID của tracker là `7` còn mã ID trong ground truth là `3` thì script chấm điểm sẽ báo lỗi lệch danh tính"
    ],
    correctAnswer: 0,
    explanation: "Theo Slide 79, 83–89 (Ngày 3): (1) Quy tắc bất di bất dịch là phải tạo và tự kiểm Ground Truth **trước** khi chạy tracker để tránh thiên kiến nghiêng theo máy. Tầng 1 (Tự kiểm, ~10 phút) rẻ nhất và bắt được nhiều lỗi nhất qua 3 lượt tua: phát nhanh 2× nhìn số ID; kiểm frame đầu/cuối bắt **Box treo** (quên bấm `Outside`); kiểm giữa đoạn keyframe xa bắt **Box trôi** (quên thêm keyframe khi xe rẽ/đổi tốc độ). (2) Công cụ chấm không so sánh giá trị số của ID (ID 7 vẫn khớp hoàn hảo với ID 3), nhưng nếu bị **lệch 1 frame** (do cách đánh số từ 0 hay từ 1 giữa `clip_1.txt` và `gt.txt`) hoặc **quên đổi hệ tọa độ** (từ `xc, yc, w, h` miền `[0, 1]` sang `x, y, w, h` góc trái-trên tính bằng pixel), IoU sẽ tụt về gần 0 và MOTA ra số âm mà chương trình không hề báo lỗi cú pháp."
  },
  {
    id: 19, day: 4, module: 1,
    question: "Khi đối chiếu cấu trúc dữ liệu của một khung xương người theo chuẩn COCO-17 với các định dạng xuất file dùng trong kiểm thử và huấn luyện mô hình Pose Estimation, khẳng định nào sau đây là ĐÚNG?",
    options: [
      "Mỗi người được biểu diễn bằng 34 con số tọa độ `(x, y)` cộng với 19 con số biểu diễn độ dài của 19 đoạn xương nối giữa các khớp, tổng cộng là 53 con số trong file COCO JSON",
      "Trong cấu hình `data.yaml` của YOLO Pose, việc đặt `kpt_shape: [17, 2]` hay `[17, 3]` đều cho kết quả huấn luyện giống hệt nhau vì mô hình tự động suy luận cờ che khuất từ độ sáng của pixel",
      "Nếu xuất dữ liệu từ CVAT sang định dạng `YOLO 1.1` thông thường, hệ thống sẽ tự động nén 17 điểm khớp và cờ trạng thái `v` vào cùng một mảng nhị phân để giảm dung lượng lưu trữ",
      "Mỗi người trong chuẩn COCO Keypoints có đúng 51 con số ứng với `17 × (x, y, v)`, còn trong file `.txt` của Ultralytics YOLO Pose mỗi dòng có 56 con số (gồm 5 số của lớp + box và 51 số của 17 khớp với `kpt_shape: [17, 3]`); 19 đường nối chỉ dùng để hiển thị giúp con người bắt lỗi chứ mô hình chỉ học 17 điểm chấm"
    ],
    correctAnswer: 3,
    explanation: "Theo Slide 6–8 và 45 (Ngày 4): (1) Một nhãn Pose chuẩn COCO-17 bao gồm 17 điểm có tên theo thứ tự cố định (0: mũi; 1–4: mắt/tai trái rồi phải; 5–10: vai/khuỷu/cổ tay trái rồi phải; 11–16: hông/gối/cổ chân trái rồi phải), mỗi điểm gồm 3 số `(x, y, v)` tạo thành `17 × 3 = 51` con số. Trong định dạng Ultralytics YOLO Pose, mỗi dòng gồm `5 (class + box) + 51 = 56` con số với `kpt_shape: [17, 3]`. Nếu chọn nhầm `YOLO 1.1` thường, toàn bộ 17 điểm sẽ biến mất không một dòng cảnh báo; nếu `kpt_shape` là `[17, 2]` (34 số hoặc 39 số/dòng), toàn bộ cờ visibility đã bị vứt bỏ. (2) COCO nêu rõ: 19 đường nối (edges) chỉ dùng để vẽ cho người nhìn (giúp bắt lỗi cắt chéo trong 1 giây), còn model chỉ học 17 điểm."
  },
  {
    id: 20, day: 4, module: 1,
    question: "Trong thước đo OKS (Object Keypoint Similarity — đóng vai trò tương tự như IoU đối với bài toán Pose), tại sao bán kính dung sai (`per-keypoint sigma`) tại khớp hông lại lớn gấp khoảng 4 lần so với tại mắt (ví dụ ~10,8 px so với ~2,5 px trên người cao 100 px), và điều này dẫn đến quy tắc thực hành nào?",
    options: [
      "Vì khớp hông chuyển động với vận tốc lớn gấp 4 lần mắt khi người đi bộ chạy qua đường nên camera thường bị nhòe chuyển động (motion blur) ở phần thân dưới",
      "Vì COCO đo độ lệch thực tế giữa nhiều người gán nhãn độc lập trên 5.000 bức ảnh: mắt có bề mặt nhìn thấy rõ nên mọi người chấm rất sát nhau, còn hông nằm sau lớp quần áo chỉ là ước lượng giải phẫu; đồng thời với các model dùng heatmap (nhỏ hơn ảnh 4 lần mỗi chiều), việc chấm đúng tên khớp quan trọng hơn nhiều so với căn chỉnh lệch 1–2 pixel",
      "Vì trong hệ thống giám sát tài xế DMS, thông tin từ khớp hông hoàn toàn không có giá trị sử dụng nên COCO nới rộng dung sai để bỏ qua việc chấm điểm khớp này",
      "Vì mắt có kích thước vật lý lớn hơn khớp hông trên ảnh thu nhỏ nên thuật toán tích chập (CNN) cần vùng tiếp nhận (receptive field) nhỏ hơn ở mắt"
    ],
    correctAnswer: 1,
    explanation: "Theo Slide 11, 12, 14 và 15 (Ngày 4): Các hằng số dung sai `sigma` của OKS không phải do nhóm tác giả tự nghĩ ra mà được đo thực nghiệm từ sự bất đồng giữa nhiều người gán nhãn trên cùng 5.000 tấm ảnh. Ở mắt, mũi, tai có chi tiết bề mặt rõ ràng nên mọi người chấm gần như trùng nhau (dung sai nhỏ ~2,5 px). Ngược lại, khớp hông nằm bên dưới quần áo, không có điểm mốc bề mặt nào để nhìn mà hoàn toàn là ước lượng giải phẫu nên độ lệch giữa người với người rất lớn (dung sai ~10,8 px, gấp ~4 lần mắt). Hơn nữa, vì tấm heatmap của model thường có độ phân giải bằng 1/4 ảnh gốc (1 ô heatmap = 4×4 pixel ảnh), lệch 2 pixel gần như không ảnh hưởng tới model, nhưng sai tên khớp (trái/phải) sẽ dạy model học sai vĩnh viễn."
  },
  {
    id: 21, day: 4, module: 1,
    question: "Khi phân tích các nhánh kiến trúc ước lượng tư thế người (Top-down, Bottom-up, Single-shot và Vision Transformer), nhận định nào sau đây phản ánh chính xác bản chất kỹ thuật và sự đánh đổi của từng dòng mô hình?",
    options: [
      "Top-down (như HRNet) tìm box người trước rồi cắt/phóng to để tìm khớp nên chính xác cao nhưng thời gian chạy tăng theo số người và nếu detector bỏ sót ai thì người đó mất pose; Bottom-up (như OpenPose dùng PAF) chạy 1 lượt nhưng dễ gom nhầm ở đám đông; còn YOLO-Pose đoán thẳng box + 17 điểm trong 1 lượt không qua heatmap (sang bản YOLO26-Pose tăng +7,2 AP ở n-tier nhờ bỏ NMS và dùng RLE)",
      "Bottom-up (như MediaPipe) bắt buộc phải chạy mạng trích xuất đặc trưng riêng biệt cho từng người trong ảnh nên tốn gấp 27 lần số phép tính so với HRNet khi có 20 người",
      "ViTPose sử dụng các lớp tích chập CNN 3×3 đặc thù được thiết kế riêng cho cấu trúc xương người nên đạt tốc độ nhanh nhất trên thiết bị di động mà không cần nhiều dữ liệu huấn luyện",
      "OpenPose thuộc nhánh Top-down sử dụng cơ chế Mixture of Experts (MoE) để tách riêng chuyên gia đoán mặt, chuyên gia đoán bàn tay và chuyên gia đoán động vật trên cùng một khung hình"
    ],
    correctAnswer: 0,
    explanation: "Theo Slide 10, 13, 21–29 (Ngày 4): (1) **Top-down** (HRNet, MediaPipe) tìm người trước rồi cắt từng người ra đoán khớp: 3 người = 3 lượt chạy, độ chính xác cao nhưng phụ thuộc hoàn toàn vào detector đầu vào. (2) **Bottom-up** (OpenPose với Part Affinity Fields - PAF) tìm mọi khớp trên ảnh trong 1 lượt rồi mới gom nhóm xem khớp nào thuộc về ai: tốc độ ổn định dù có 20 người, nhưng đám đông chồng lấn dễ gom nhầm xương. (3) **Single-shot** (YOLOv8/11/26-Pose) chia lưới P3/P4/P5 đoán thẳng box + 17 tọa độ trong 1 forward pass không qua heatmap; từ YOLO11n-Pose (50,0 AP) sang YOLO26n-Pose (57,2 AP, cùng ~2,9M tham số) tăng +7,2 AP nhờ bỏ NMS/DFL và tính tọa độ bằng RLE. (4) **ViTPose** dùng Vision Transformer trơn (cắt ảnh thành patch 16×16 áp self-attention nhìn toàn cục ngay từ lớp đầu), và **ViTPose++** dùng Mixture of Experts (MoE) cho nhiều bài toán pose."
  },
  {
    id: 22, day: 4, module: 1,
    question: "Trong bài toán gán nhãn tư thế tài xế trong cabin xe (DMS/OMS) trên công cụ CVAT, cổ tay phải của tài xế nằm khuất sau vô-lăng và phần đầu gối bị cắt khuất ở ngoài mép dưới của khung hình. Người gán nhãn phải thao tác và đặt cờ trạng thái như thế nào để không rơi vào 'bẫy' làm hỏng dữ liệu huấn luyện?",
    options: [
      "Xóa điểm cổ tay phải và điểm đầu gối khỏi khung xương 17 điểm để mô hình chỉ tập trung học các khớp nhìn thấy rõ trên bề mặt ảnh",
      "Với cổ tay sau vô-lăng: vẫn đặt chấm tại vị trí ước lượng giải phẫu và bấm phím Q (Occluded → xuất ra v = 1, vẫn được tính điểm OKS); với đầu gối ngoài mép ảnh: không đặt chấm và bấm phím O (Outside → xuất ra v = 0 0 0, loại khỏi OKS); tuyệt đối không dùng phím H (Hidden) vì nó chỉ ẩn trên màn hình chứ vẫn xuất ra v = 2",
      "Bấm phím H (Hidden) cho điểm cổ tay phải để CVAT tự động ghi giá trị v = 1 vào file xuất, và kéo điểm đầu gối ra ngoài rìa ảnh mà không cần bấm phím nào",
      "Tick chọn cả hai ô Occluded và Outside cho cổ tay bị vô-lăng che để CVAT xuất ra mã trạng thái đặc biệt v = 3 dành riêng cho các khớp bị che khuất một phần trong cabin"
    ],
    correctAnswer: 1,
    explanation: "Theo Slide 9, 16, 36–41 (Ngày 4): (1) Khớp còn nằm trong khung hình nhưng bị vật khác (vô-lăng, đùi, ba-lô) che khuất thì bắt buộc vẫn phải đặt chấm ước lượng và gán cờ Occluded (phím Q hoặc /, xuất ra v = 1, vẫn được đưa vào tính điểm OKS). Nếu xóa điểm đó hoặc đánh Outside, ta sẽ dạy model rằng 'cổ tay biến mất mỗi khi đặt sau vô-lăng'. (2) Khớp nằm ngoài mép khung hình thì gán cờ Outside (phím O, xuất ra 0.00 0.00 0, bị loại khỏi OKS). Lưu ý trong code CVAT: outside thắng occluded, nếu tick cả hai sẽ xuất ra v = 0. (3) Bẫy chết người của nút Hidden (phím H): trên màn hình nó làm điểm biến mất trông giống hệt Outside, nhưng thực chất chỉ để đỡ rối mắt người vẽ chứ không được lưu vào dữ liệu — khi export điểm đó vẫn xuất ra v = 2 ở vị trí cũ mà không có bất kỳ cảnh báo nào!"
  },
  {
    id: 23, day: 4, module: 1,
    question: "Tại sao lỗi 'Đảo trái/phải' (ví dụ gán nhầm left_wrist thành right_wrist khi tài xế quay mặt về phía camera) lại được bài giảng đánh giá là lỗi nguy hiểm nhất trong gán nhãn Pose và thường xảy ra ở những bức ảnh nào?",
    options: [
      "Chỉ xảy ra ở những bức ảnh chụp ban đêm quá tối; lỗi này làm hàm mất mát OKS chia cho 0 khiến chương trình huấn luyện bị dừng đột ngột",
      "Chỉ xảy ra khi hai người đứng chồng lên nhau; lỗi này làm số lượng điểm trong file xuất tăng từ 17 lên 34 điểm khiến mạng nơ-ron không đọc được file",
      "Thường xảy ra ở chính những bức ảnh dễ, rõ ràng khi người gán chủ quan làm nhanh mà quên rằng trái/phải phải tính theo cơ thể người trong ảnh; chỉ cần 5% nhãn bị đảo, kết hợp với phép lật ảnh ngang (flip augmentation) lúc train sẽ khiến heatmap của một khớp mọc lên hai đỉnh ở hai bên và làm hệ thống DMS đoán sai một nửa số lần",
      "Thường xảy ra khi người gán sử dụng tính năng Setup skeleton → From model; lỗi này làm bán kính dung sai của khớp vai bị thu hẹp xuống bằng 0"
    ],
    correctAnswer: 2,
    explanation: "Theo Slide 2, 18, 42 và 50 (Ngày 4): Quy tắc số 1 của Pose là trái/phải luôn tính theo cơ thể của người trong ảnh, không tính theo phía trái/phải của bức ảnh (khi người quay mặt về phía camera, tay trái của họ nằm ở bên phải bức ảnh nhưng vẫn phải ghi là left_wrist). Điều bất ngờ là lỗi đảo trái/phải hiếm khi xảy ra ở ảnh khó mà lại xảy ra nhiều nhất ở ảnh dễ, rõ ràng khi annotator làm nhanh. Hậu quả: nếu cổ tay trái/phải bị đảo ở 5% số ảnh, mô hình học rằng 'cổ tay trái đôi khi nằm ở bên phải' → tấm heatmap của một khớp mọc lên hai đỉnh → hơn nữa quá trình train còn lật ảnh ngang (horizontal flip) để tăng cường dữ liệu nên nhãn sai được dạy lặp lại hai lần ở cả hai chiều lật, khiến hệ thống DMS ('tay nào rời vô-lăng?') phán đoán sai tới một nửa số lần!"
  },
  {
    id: 24, day: 4, module: 1,
    question: "Khi thực hiện Kiểm tra chất lượng (QC) cho một lô dữ liệu Pose Estimation (gồm bộ khung thân 17 điểm và bộ mở rộng mặt/bàn tay), thứ tự 3 lượt kiểm tra 'rẻ trước, đắt sau' và cách đọc bảng Visibility Report nào sau đây là ĐÚNG?",
    options: [
      "Phải mở từng ảnh ở mức phóng đại 200% ngay từ đầu để đo khoảng cách pixel của toàn bộ 17 khớp, sau đó mới gộp chung 21 điểm bàn tay và 5 điểm mặt vào cùng một topology 43 điểm",
      "Dùng tính năng Quality Control bằng OKS của CVAT sau khi đã tick cờ Outside cho toàn bộ các khung xương để hệ thống chấm điểm nhanh hơn",
      "Nếu hai người gán nhãn độc lập trên cùng một tập ảnh có tỷ lệ cờ v = 1 lệch nhau rất lớn ở khớp tai và khớp hông, phải lập tức kỷ luật người có số lượng v = 1 cao hơn vì người đó lười quan sát",
      "Thực hiện Lượt 1 (bật đường nối, không zoom, 1 giây/người để bắt lỗi xương cắt chéo ở thân do đảo trái/phải hoặc xương kéo dài sang người bên cạnh) → Lượt 2 (chạy script đếm num_keypoints và so Visibility Report để phát hiện lỗi xóa khớp bị che hoặc chỗ guideline còn mơ hồ) → Lượt 3 (zoom 200% trên vài mẫu); đồng thời bộ bàn tay (21 điểm) + mặt (5 điểm) phải dựng ở một skeleton label riêng chứ không trộn vào topology 17 điểm"
    ],
    correctAnswer: 3,
    explanation: "Theo Slide 17, 34, 49–56 (Ngày 4): (1) Quy trình QC 3 lượt tối ưu chi phí: Lượt 1 (Lượt hình dáng, 1 giây/người): bật 19 đường nối, không phóng to — vì bộ xương người gần như không bao giờ tự cắt chéo ở thân (trừ khi vặn mình), thấy cắt chéo là bắt được ngay lỗi Đảo trái/phải, thấy đường nối vọt dài ra ngoài là bắt được lỗi Nhầm người. Lượt 2 (Lượt đếm): chạy script kiểm tra num_keypoints (nếu thấp hơn 17 ở hầu hết người là bắt được lỗi Xóa khớp bị che) và đối chiếu Visibility Report (nếu hai người lệch hẳn nhau về tỷ lệ v=1 hay v=0, nguyên tắc là nghi guideline trước, đừng nghi người). Lượt 3 (Lượt phóng to 200%): đắt nhất nên chỉ làm cuối cùng trên vài mẫu. (2) Ngoài ra, trong công cụ Quality Control của CVAT, nếu gắn Outside cho toàn bộ skeleton thì nó sẽ bị loại khỏi báo cáo OKS; và bộ tay/mặt (21 điểm/bàn tay + 5 điểm mặt) bắt buộc phải tạo thành một skeleton label riêng vì topology bị khóa cứng ngay khi tạo task."
  },
  {
    id: 25, day: 5, module: 1,
    question: "Khi phân tích hợp đồng đầu ra (output contract) của ba bài toán Semantic, Instance và Panoptic Segmentation cùng quy ước gán nhãn mặt đường trong bộ dữ liệu xe tự lái BDD100K, nhận định nào sau đây là CHÍNH XÁC?",
    options: [
      "Trong Semantic Segmentation, hai chiếc ô tô đứng cạnh nhau được cấp hai mã định danh (instance ID) riêng biệt để hệ thống đếm được số lượng xe trên đường",
      "Semantic trả lời mỗi pixel thuộc lớp nào (gộp các vật cùng lớp thành một vùng), Instance tách riêng mask cho từng vật đếm được ('things'), còn Panoptic ghép cả nền không đếm được ('stuff') và vật ('things') sao cho mọi pixel đều có lớp và mỗi pixel chỉ thuộc về tối đa một chủ sở hữu (owner); đồng thời nhãn mặt đường như BDD100K là bằng chứng ngữ cảnh chức năng chứ không chỉ là màu pixel",
      "Trong BDD100K, nhãn directly drivable và alternatively drivable được phân biệt thuần túy bằng màu sắc của nhựa đường trên từng pixel độc lập mà không phụ thuộc vào vị trí làn của xe tự hành (ego vehicle)",
      "Trong Panoptic Segmentation, một điểm ảnh nằm ở rìa của hai chiếc xe đỗ sát nhau được phép mang đồng thời hai mã instance_id khác nhau để tránh mất chi tiết biên"
    ],
    correctAnswer: 1,
    explanation: "Theo Slide 7, 10–14 và 44 (Ngày 5): (1) Cùng một bề mặt nhựa đường, hợp đồng dữ liệu BDD100K phân chia thành directly drivable (làn xe ego đang chạy trực tiếp) và alternatively drivable (làn bên cạnh có thể chuyển sang) — điều này chứng minh mask là bằng chứng ngữ cảnh chức năng chứ không đơn thuần là màu sắc pixel. (2) Về cấu trúc đầu ra: Semantic gán lớp cho mọi pixel nhưng không phân biệt các cá thể cùng lớp; Instance tạo mask và ID riêng cho từng vật đếm được ('things') nhưng bỏ trống nền; Panoptic (Kirillov et al., CVPR 2019) thống nhất cả stuff (đường, bầu trời) và things (người, xe) thành một phân vùng phủ kín toàn ảnh theo quy tắc nghiêm ngặt: một owner duy nhất cho mỗi pixel (không để pixel vô chủ và không chồng lấn owner)."
  },
  {
    id: 26, day: 5, module: 1,
    question: "Xét mô hình Tiny U-Net cho bài toán phân vùng nhị phân (binary segmentation) nhận đầu vào là lô ảnh x có kích thước [8, 3, 256, 256]. Trong quá trình lan truyền tiến (forward pass) và tính hàm mất mát với nn.BCEWithLogitsLoss(), luồng biến đổi kích thước tensor và quy tắc toán học nào sau đây là ĐÚNG?",
    options: [
      "Sau lớp MaxPool2d(2) đầu tiên, kích thước không gian giảm còn 128 × 128; ở nhánh giải mã, skip connection nối đặc trưng cùng độ phân giải từ encoder sang decoder bằng torch.cat([up, skip], dim=1); lớp head xuất ra logits có shape [8, 1, 256, 256] và được truyền thẳng vào BCEWithLogitsLoss mà tuyệt đối không đi qua hàm sigmoid trước đó",
      "Lớp head ở cuối mạng phải có 2 kênh đầu ra [8, 2, 256, 256] và bắt buộc phải áp dụng hàm torch.sigmoid(logits) trước khi đưa vào BCEWithLogitsLoss() để tránh hiện tượng tràn số học",
      "Đường nối tắt skip connection trong U-Net thực hiện phép nhân từng phần tử (element-wise multiplication) giữa đặc trưng 32 × 32 của đáy encoder với đặc trưng 256 × 256 của đầu ra",
      "Trong vòng lặp kiểm định (Validation), mô hình vẫn phải gọi lệnh loss.backward() trên từng lô ảnh để tính được chỉ số Dice và IoU chính xác ở ngưỡng threshold"
    ],
    correctAnswer: 0,
    explanation: "Theo Slide 17–26, 30 và 90–91 (Ngày 5): (1) Với đầu vào [B, 3, H, W] = [8, 3, 256, 256], sau khối enc1 (block(3, 16) với padding=1 giữ nguyên H, W) và MaxPool2d(2), tensor có shape [8, 16, 128, 128]. (2) Tại nhánh Decoder, sau khi phóng đại (ConvTranspose2d), đặc trưng được nối tắt (skip connection) với đặc trưng cùng độ phân giải của Encoder theo chiều kênh dim=1 (torch.cat([up, skip], dim=1)) để kết hợp ngữ cảnh ('là gì') với chi tiết biên ('ở đâu'). (3) Đầu ra logits của bài toán nhị phân có đúng 1 kênh [8, 1, 256, 256] (mỗi vị trí 1 điểm thô logit z từ âm vô cùng đến dương vô cùng). Hàm nn.BCEWithLogitsLoss() đã gộp sẵn sigmoid và Binary Cross Entropy bằng công thức log-sum-exp ổn định số học, nên tuyệt đối không gọi sigmoid trước khi đưa vào loss; chỉ dùng torch.sigmoid(logits) ở bước suy luận/validation (trong khối with torch.no_grad():) để lấy xác suất so với ngưỡng threshold."
  },
  {
    id: 27, day: 5, module: 1,
    question: "Trong khâu tiền xử lý và nạp dữ liệu (Dataset & Paired Transform) cho bài toán Segmentation, hai lỗi kỹ thuật 'thầm lặng' nào sẽ phá hủy hoàn toàn chất lượng huấn luyện dù chương trình không hề báo lỗi?",
    options: [
      "Lưu file mask dưới định dạng ảnh nén không tổn hao PNG và sử dụng phép lật ngang (TF.hflip) có cùng tham số ngẫu nhiên cho cả ảnh và mask",
      "Sử dụng kiểu dữ liệu float32 cho tensor ảnh đầu vào và kiểm tra điều kiện mask.unique() ⊆ {0, 1} ở cuối hàm __getitem__",
      "Ghép cặp hai thư mục ảnh và mask chỉ bằng lệnh zip(sorted(images), sorted(masks)) (khiến thứ tự chữ cái xếp img10 đứng trước img2 làm lệch cặp ảnh–mask), và dùng phép nội suy mượt bilinear (hoặc bật antialias) khi resize mask chứa class ID khiến mask nhị phân {0, 1} sinh ra các giá trị ma 0.25, 0.5, 0.75",
      "Đặt tên file ảnh và file mask theo cùng một mã image_id trong bảng manifest.csv và thực hiện chia tập dữ liệu theo khóa nhóm group_id (khay/clip/ngày)"
    ],
    correctAnswer: 2,
    explanation: "Theo Slide 9, 39, 40, 41 và 89 (Ngày 5): Có hai bẫy kỹ thuật cực kỳ phổ biến làm hỏng dữ liệu Segmentation một cách thầm lặng: (1) Ghép cặp sai (Pairing mismatch): Nếu ghép hai thư mục bằng zip(sorted(...)) theo thứ tự bảng chữ cái (lexicographical sort), file img10.png sẽ đứng trước img2.png, làm ảnh này bị ghép nhầm với mask của ảnh khác nếu tên file không được đệm số 0 hoặc không đối chiếu qua manifest. (2) Nội suy sai khi Resize mask: Ảnh RGB dùng nội suy mượt (bilinear / antialias=True), nhưng Mask lưu class_id rời rạc bắt buộc phải dùng interpolation=NEAREST. Nếu dùng nội suy mượt (bilinear) hay lưu file nén có tổn hao (JPEG) hoặc bật anti-alias khi vẽ, các pixel ở biên giữa 0 và 1 sẽ bị trung bình hóa thành 0.25; 0.5; 0.75 — tức là sinh ra các lớp 'ma' không hề tồn tại trong schema!"
  },
  {
    id: 28, day: 5, module: 1,
    question: "Khi gán nhãn Segmentation cho một vật thể bị một cây cột che cắt ngang ở giữa (tạo thành hai mảnh nhìn thấy rời nhau trên ảnh) hoặc một vật thể có lỗ thủng ở giữa (như chiếc vòng/bánh xe), quy chuẩn biểu diễn hình học và kiểm định xuất file nào sau đây là ĐÚNG?",
    options: [
      "Hai mảnh nhìn thấy của cùng một vật bị cột che bắt buộc phải được cấp hai mã instance_id khác nhau vì thuật toán rasterize không cho phép một đối tượng gồm nhiều thành phần liên thông",
      "Khi một vật thể bị cắt bởi mép khung hình ảnh, người gán nhãn phải kéo rộng các đỉnh Polygon vượt ra ngoài mép ảnh để ước lượng toàn bộ phần diện tích nằm ngoài camera",
      "Định dạng Polygon với một đường gấp khúc khép kín tự cắt nhau (self-intersecting) là cách chuẩn xác nhất để biểu diễn lỗ thủng vì mọi thư viện đồ họa đều tô màu giống hệt nhau",
      "Cùng một instance_id có thể trải trên nhiều thành phần nhìn thấy (multi-component) tùy theo quy ước visible-only hay amodal của hợp đồng dữ liệu; vùng nền rỗng bên trong vật phải được định nghĩa tường minh là lỗ (hole) vì một đường viền contour đơn lẻ không biểu diễn được; và sau khi export sang Polygon/RLE bắt buộc phải chạy kiểm tra khép kín (round-trip: import lại → rasterize → overlay lên ảnh gốc)"
    ],
    correctAnswer: 3,
    explanation: "Theo Slide 42–47 (Ngày 5): (1) Multi-component: Khi một vật thể bị che ở giữa tạo thành 2 mảnh nhìn thấy rời nhau, cả hai mảnh đó vẫn thuộc về cùng một instance_id (dự án phải chốt rõ trong contract là gán visible-only chỉ phần thấy được hay amodal đoán cả phần bị che). (2) Hole & Border: Vùng nền nằm lọt bên trong vật phải được biểu diễn rõ là lỗ (hole), một contour đơn không đủ; còn vật chạm mép ảnh thì mask dừng đúng ở mép ảnh, tuyệt đối không tưởng tượng phần ngoài ảnh. Polygon tự cắt nhau (self-intersecting) sẽ bị các thư viện rasterize khác nhau. (3) Round-trip verification: Việc xuất file (export) thành công không phải là bằng chứng dữ liệu đúng. Bắt buộc phải đi trọn vòng: Tool native → Export (Polygon/RLE/PNG) → Import lại → Rasterize ra mask → Overlay lên ảnh thật + kiểm tra unique class IDs để tránh lỗi nhầm bảng màu RGB/palette thành class ID hoặc sai thứ tự đọc RLE (row-major vs column-major)."
  },
  {
    id: 29, day: 5, module: 1,
    question: "Cho kết quả so khớp giữa một mask dự đoán và mask thật trên một bức ảnh có: TP = 48 pixel, FP = 24 pixel, FN = 8 pixel, và TN = 9.920 pixel. Hãy tính chính xác chỉ số IoU và Dice của vùng đối tượng (foreground), đồng thời chỉ ra quy ước xử lý đúng khi gặp một bức ảnh có cả Ground Truth và Prediction đều rỗng (không có vết dập nào)?",
    options: [
      "IoU = 0,60 và Dice = 0,75 (lỗi chính là tô thừa do FP = 24 lớn gấp 3 lần FN = 8); với ca 'rỗng / rỗng', ghi nhận là đúng âm tính (true-negative case) và tách riêng báo cáo độ chính xác trên tập rỗng chứ không đưa vào trung bình cộng (mean) IoU/Dice của foreground",
      "IoU = 0,75 và Dice = 0,60 (lỗi chính là bỏ sót); với ca 'rỗng / rỗng', gán cứng IoU = 0 và Dice = 0 rồi cộng trực tiếp vào mean IoU của toàn tập để phạt mô hình",
      "IoU = 0,9968 và Dice = 0,9984 vì phải cộng cả 9.920 pixel nền đúng (TN) vào tử số và mẫu số; với ca 'rỗng / rỗng', loại bỏ hoàn toàn bức ảnh đó khỏi báo cáo kiểm định",
      "IoU = 0,50 và Dice = 0,667; với ca 'rỗng / rỗng', luôn gán IoU = 1,0 và gộp chung vào mean foreground IoU để nâng điểm trung bình cho các bộ dữ liệu có 90% ảnh không lỗi"
    ],
    correctAnswer: 0,
    explanation: "Theo Slide 49, 53–58 (Ngày 5): (1) Chỉ số IoU và Dice của lớp đối tượng (foreground) chỉ sử dụng TP, FP, FN và loại bỏ TN để nền lớn (99% diện tích ảnh) không làm tăng điểm giả tạo: IoU = TP / (TP + FP + FN) = 48 / (48 + 24 + 8) = 48 / 80 = 0,60. Hệ số Dice đếm phần giao hai lần: Dice = 2×TP / (2×TP + FP + FN) = 96 / (96 + 24 + 8) = 96 / 128 = 0,75 (hoặc tính qua hệ thức Dice = 2×IoU / (1 + IoU) = 1,2 / 1,6 = 0,75). Vì FP = 24 lớn hơn nhiều so với FN = 8, lỗi chính của dự đoán này là tô thừa (over-segmentation). (2) Với các ca Mask rỗng (Slide 56): nếu rỗng / có mask (FP case) hoặc có mask / rỗng (FN case) thì gán IoU = Dice = 0; nhưng nếu là rỗng / rỗng (mẫu âm tính đoán đúng), công thức 0 / 0 không xác định — quy ước chuẩn là ghi nhận đúng âm tính, báo cáo riêng số ca rỗng và accuracy trên ca rỗng, không đưa vào mean IoU/Dice của foreground để tránh làm méo chỉ số."
  },
  {
    id: 30, day: 5, module: 1,
    question: "Khi đánh giá độ nhạy của IoU theo kích thước vật thể (với cùng lỗi mất viền biên d = 5 px trên hình vuông cạnh L = 400 px so với L = 40 px) và so sánh quy trình sử dụng mô hình nền tảng gợi ý mask (như SAM / SAM 2 / SAM 3) trong thực tế, kết luận nào sau đây là ĐÚNG?",
    options: [
      "Cùng mất viền biên 5 px quanh vật, cả hình vuông lớn L = 400 px và hình vuông nhỏ L = 40 px đều đạt IoU ≈ 0,95; do đó chỉ cần nhìn một con số Mean Dice tổng hợp là đủ để nghiệm thu hệ thống",
      "Với SAM (Segment Anything), mỗi khi người gán nhãn nhấp thêm một điểm (point prompt) trên cùng bức ảnh, mô hình bắt buộc phải chạy lại bộ mã hóa ảnh (Image Encoder) nặng hàng trăm triệu tham số từ đầu",
      "Cùng mất viền d = 5 px, vật lớn (L = 400) vẫn đạt IoU ≈ 0,951 nhưng vật nhỏ (L = 40) tụt thê thảm xuống IoU = 0,5625 (và hai vật mảnh như sợi dây lệch nhau 2 px có thể có IoU ≈ 0); mặt khác, khi dùng SAM/SAM 2 để gợi ý mask, nó không thay thế được Data Contract/Schema và trong video lỗi ở frame đầu có thể lan truyền xa qua bộ nhớ (prompt propagation) nên bắt buộc phải có bước kiểm duyệt và Failure Audit (6 overlay bắt buộc)",
      "Trong kiến trúc Mask R-CNN gốc, nhánh dự đoán mask xuất ra trực tiếp bản đồ nhị phân có độ phân giải bằng đúng kích thước ảnh gốc 1920 × 1080 trước khi đưa qua bộ lọc RoIAlign"
    ],
    correctAnswer: 2,
    explanation: "Theo Slide 45, 62, 70, 75–80 và 95–98 (Ngày 5): (1) Độ nhạy biên theo kích thước: Một hình vuông cạnh L bị hụt viền d = 5 px ở cả hai phía sẽ còn lõi (L - 2d)². Với vật lớn L = 400, IoU = 390² / 400² = 0,950625 (rất cao); nhưng với vật nhỏ L = 40, IoU = 30² / 40² = 900 / 1600 = 0,5625 (tụt thê thảm dù cùng lệch 5 px!). Với vật mảnh (dây điện, cọc tiêu) hoặc nhánh mask 28 × 28 mặc định của Mask R-CNN, chi tiết biên rất dễ bị mất. (2) Cơ chế SAM & AI hỗ trợ: SAM (2023) tách riêng Image Encoder (tính đặc trưng ảnh 1 lần duy nhất) và Prompt Encoder + Lightweight Mask Decoder (chạy siêu nhẹ nhiều lần khi đổi điểm/box). SAM 2 (2024) thêm bộ nhớ streaming cho video nhưng nếu mask ở frame đầu sai, lỗi sẽ bị nhớ và lan truyền đi xa (prompt propagation). Do đó, AI gợi ý không bao giờ thay thế được Schema/Data Contract, cần đo thời gian sửa công bằng theo thiết kế chéo (crossover A/B) và luôn phải xuất 6 overlay bắt buộc trong Failure Audit (test tốt nhất, tệ nhất, FP nhiều nhất, FN nhiều nhất, foreground nhỏ nhất, và hai đường bất đồng nhất)."
  },

  // ==================== KHOI 2: CHAT LUONG & VONG DOI DU LIEU (NGAY 6 - 8: 30 CAU) ====================
  {
    id: 31, day: 6, module: 2,
    question: "Tại Bước 2 (Collection & Selection), nhóm thu thập nhận về 120 file ảnh thô. Qua kiểm tra tự động, phát hiện 10 file bị hỏng cấu trúc byte và 10 file có mã băm (hash) trùng lặp hoàn toàn với các ảnh khác. Quy trình xử lý sổ cái (Data Ledger) và báo cáo số lượng nào sau đây là ĐÚNG chuẩn?",
    options: [
      "Xóa vĩnh viễn cả 20 file lỗi và trùng khỏi ổ cứng, sau đó ghi nhận Collected = 100 và Eligible = 100 để đồng bộ hóa số liệu",
      "Chuyển 10 file hỏng vào vùng cách ly (Quarantine), gộp 10 file trùng bằng liên kết họ (family links) và chốt Eligible = 100",
      "Giữ nguyên cả 120 file đưa vào tập Train nhưng gắn cờ cảnh báo để mô hình tự động giảm trọng số hàm mất mát khi huấn luyện",
      "Đưa cả 20 file hỏng và trùng vào tập Validation nhằm kiểm tra độ bền vững của mô hình trước nhiễu dữ liệu thực tế"
    ],
    correctAnswer: 1,
    explanation: "Theo nguyên tắc đối soát số lượng (Reconcile Counts): 120 Collected = 10 Corrupt (đưa vào Quarantine để lưu bằng chứng giải thích vì sao thiếu) + 10 Duplicate (giữ 1 bản, ghi family links chứ không xóa mù) + 100 Eligible được phép đi vào bước chia Split."
  },
  {
    id: 32, day: 6, module: 2,
    question: "Một tập dữ liệu gồm 100 ảnh chụp từ 10 khay trái cây với số lượng ảnh mỗi khay lần lượt là (30, 20, 10, 10, 5, 5, 5, 5, 5, 5). Khi chạy hàm GroupShuffleSplit với tham số test_size = 0.2 và kết quả chọn trúng 2 khay có 10 ảnh và 5 ảnh vào tập Test, nhận định kỹ thuật nào sau đây là ĐÚNG?",
    options: [
      "Hàm chạy sai do lỗi tràn bộ nhớ vì tập Test chỉ nhận được 15% tổng số ảnh thay vì đúng 20% như tham số đã khai báo",
      "Cần phải chuyển 5 ảnh ngẫu nhiên từ các khay ở tập Train sang tập Test để ép tỷ lệ ảnh về đúng chuẩn 80/20",
      "Tham số test_size đếm theo số lượng Group (2/10 khay = 20%) nên tỷ lệ ảnh thực tế (15/100 ảnh) bị lệch là hoàn toàn bình thường",
      "Phải chạy thuật toán Augmentation nhân bản các ảnh trong tập Test lên thêm 5 ảnh trước khi khóa danh sách phân chia"
    ],
    correctAnswer: 2,
    explanation: "Trong GroupShuffleSplit, tham số test_size = 0.2 tính trên đơn vị Group (chọn 2 trên 10 khay) chứ không đếm từng bức ảnh. Do kích thước các khay không đều nhau, tỷ lệ ảnh thực tế sẽ trôi (15/100 ảnh = 15%); vì vậy báo cáo bắt buộc phải ghi rõ cả số lượng group lẫn số lượng ảnh."
  },
  {
    id: 33, day: 6, module: 2,
    question: "Theo nghiên cứu thực nghiệm với mô hình Faster R-CNN + ResNet-50 trên tập benchmark PASCAL VOC 2007 được trích dẫn trong bài giảng, sự suy giảm hiệu năng mAP@50 khi dữ liệu huấn luyện bị nhiễu nhãn diễn ra như thế nào?",
    options: [
      "Lệch tọa độ box 20% làm mAP tụt 5.3 điểm (xuống 72.9), gây hại gấp đôi so với gán sai tên class 20% (chỉ tụt 2.7 điểm)",
      "Mô hình tự động triệt tiêu được tới 40% lỗi sai tên class mà không làm giảm điểm mAP@50 quá 1.5 điểm so với dữ liệu sạch",
      "Cả hai loại lỗi lệch tọa độ box 20% và sai tên class 20% đều làm mAP suy giảm mức tương đương nhau là 14.1 điểm",
      "Gán sai tên class 20% làm mAP tụt 5.3 điểm (từ 78.2 xuống 72.9), gây hại gần gấp đôi so với lệch tọa độ box 20% (tụt 2.7 điểm)"
    ],
    correctAnswer: 3,
    explanation: "Số liệu thực nghiệm trên PASCAL VOC 2007 chỉ rõ: Tập dữ liệu sạch đạt 78.2 mAP@50; nếu 20% box bị lệch biên thì mAP còn 75.5 (-2.7 điểm), nhưng nếu 20% bị gán sai tên class thì mAP sụt xuống 72.9 (-5.3 điểm). Sai tên class phá hủy đặc trưng phân loại nặng gấp đôi lỗi lệch biên."
  },
  {
    id: 34, day: 6, module: 2,
    question: "Khi thiết lập một công việc kiểm chuẩn (Ground Truth Job) trên nền tảng CVAT v2.74 để chấm điểm tự động cho bài toán gán nhãn Video ở chế độ nội suy (Track Mode), thao tác cấu hình nào là BẮT BUỘC để hệ thống tính toán được báo cáo chất lượng?",
    options: [
      "Chuyển đồng thời cả hai trường của Ground Truth Job sang đúng trạng thái stage = acceptance và state = completed",
      "Sử dụng tính năng Consensus với 3 bản sao độc lập và bấm gộp (merge) đè lên công việc gốc trước khi xuất báo cáo",
      "Bật chế độ Honeypot trong lúc tạo Task để hệ thống tự động trộn ngẫu nhiên các khung hình kiểm tra vào luồng video",
      "Đặt thông số Max validations per job bằng 0 và giữ Ground Truth Job ở trạng thái stage = validation, state = in progress"
    ],
    correctAnswer: 0,
    explanation: "Với dữ liệu Video + Track mode, Honeypot không hoạt động được mà bắt buộc phải dùng Ground Truth Job riêng. Đặc biệt, sau khi gán xong đáp án chuẩn và lưu lại, người quản lý phải đổi đồng thời stage = acceptance VÀ state = completed; nếu thiếu một trong hai vế, CVAT sẽ im lặng không tính điểm mà không báo lỗi."
  },
  {
    id: 35, day: 6, module: 2,
    question: "Reviewer tiến hành kiểm tra ngẫu nhiên (Random Audit) 20 bức ảnh đơn đối tượng từ một lô 100 ảnh. Kết quả ghi nhận: 2 ảnh bị gán sai tên class, 2 ảnh bị bỏ sót hoàn toàn vật thể (missing object), và trong số các ảnh được gán đủ vật thể thì có 3 ảnh bị vẽ lệch khung bao. Tỷ lệ lỗi lệch hình học (Geometry Error Rate) của mẫu audit này là bao nhiêu?",
    options: [
      "Đạt mức 15.0% (lấy 3 ca lệch khung bao chia cho tổng số 20 bức ảnh nằm trong mẫu kiểm tra ngẫu nhiên)",
      "Đạt mức 3.0% (lấy 3 ca lệch khung bao suy rộng trực tiếp trên tổng quy mô toàn bộ lô dữ liệu là 100 bức ảnh)",
      "Đạt mức 35.0% (cộng tổng 2 ca sai class, 2 ca bỏ sót và 3 ca lệch khung bao rồi chia cho cỡ mẫu 20 ảnh)",
      "Đạt mức 16.7% (lấy 3 ca lệch khung bao chia cho 18 bức ảnh thực sự có cặp đối tượng tương ứng để so sánh hình học)"
    ],
    correctAnswer: 3,
    explanation: "Mỗi loại lỗi có một mẫu số (tập hợp so sánh hợp lệ - eligible comparisons) riêng. Vì có 2 ảnh bị bỏ sót vật thể nên không tồn tại cặp khung bao để đo độ khớp IoU; mẫu số của lỗi hình học chỉ còn 20 - 2 = 18 ảnh. Do đó tỷ lệ lỗi hình học là 3 / 18 = 16.7%."
  },
  {
    id: 36, day: 6, module: 2,
    question: "Khi kiểm tra chéo hai khung bao của Annotator A (diện tích 5.76) và Annotator B (diện tích 6.76) vẽ cho cùng một vật thể, phần diện tích giao nhau (Intersection) đo được là 1.3 × 2.1 = 2.73. Chỉ số IoU Agreement giữa hai người là bao nhiêu và mang ý nghĩa gì?",
    options: [
      "IoU ≈ 0.44; chứng tỏ Annotator A đã vẽ đúng chuẩn quy tắc hơn Annotator B vì có khung bao gọn và diện tích nhỏ hơn",
      "IoU ≈ 0.28; phản ánh độ khớp hình học rất thấp (dưới mốc 0.75), cần kiểm tra lại quy tắc biên vẽ trong guideline nhưng chưa kết luận ai đúng",
      "IoU ≈ 0.40; cho thấy cả hai người gán nhãn đều mắc lỗi bất cẩn cá nhân và cần phải bị trừ điểm trên bảng xếp hạng năng lực",
      "IoU ≈ 0.22; vượt qua ngưỡng chấp nhận tối thiểu của ngành xe tự hành nên có thể tự động lấy trung bình cộng hai khung bao"
    ],
    correctAnswer: 1,
    explanation: "Diện tích phần hợp (Union) = A + B - Giao = 5.76 + 6.76 - 2.73 = 9.79. Do đó IoU = 2.73 / 9.79 ≈ 0.28 (rất thấp so với mốc quy ước 0.75 là Good và 0.85 là Excellent). Con số này chỉ đo mức độ trùng khớp hình học giữa hai người chứ không tự khẳng định ai đúng ai sai."
  },
  {
    id: 37, day: 6, module: 2,
    question: "Trên một mẫu kiểm định chất lượng của dự án xe tự hành có 90 chiếc ô tô (gán đúng 90/90) và 10 người đi bộ (chỉ gán đúng 5/10, bỏ sót 5 người). Nếu cổng chất lượng (Quality Gate) đặt ngưỡng đậu ở mức 80%, cách thiết lập chỉ số nào sau đây là ĐÚNG về mặt an toàn?",
    options: [
      "Đặt cổng trên chỉ số Micro Average Recall (đạt 95/100 = 95%) để phản ánh chính xác chất lượng tổng thể của đại đa số vật thể trong lô",
      "Đặt cổng trên trung bình cộng giữa Micro Average và Macro Average (đạt 85%) nhằm cân bằng giữa chi phí làm lại và tiến độ dự án",
      "Đặt cổng trên chỉ số Macro Average (75%) hoặc Worst Label Recall (50%) để chặn đứng lô dữ liệu vì lớp người đi bộ bị bỏ sót tới một nửa",
      "Loại bỏ lớp người đi bộ ra khỏi báo cáo thống kê của lô này vì cỡ mẫu 10 đối tượng là quá nhỏ để tính toán độ tin cậy"
    ],
    correctAnswer: 2,
    explanation: "Micro Average đạt 95% (95/100) do bị lớp đông (90 chiếc xe) chi phối, che giấu hoàn toàn việc bỏ sót 50% người đi bộ. Trong khi đó Macro Average = (100% + 50%)/2 = 75% và Worst Label = 50% đều báo trượt (< 80%). Với xe tự lái, cổng chất lượng bắt buộc phải đặt ở Worst Label hoặc Macro Average vì lớp hiếm mới là nơi gây tai nạn chết người."
  },
  {
    id: 38, day: 6, module: 2,
    question: "Để đánh giá năng lực của một Reviewer, giảng viên âm thầm cấy (seed) 4 lỗi đã biết vào một tập gồm 20 bức ảnh hoàn toàn sạch (tổng cộng 24 ảnh). Sau khi rà soát, Reviewer gắn cờ báo lỗi tổng cộng 5 ảnh, trong đó có 3 ảnh thuộc nhóm lỗi đã cấy và 2 ảnh là ảnh sạch bị bắt nhầm. Bộ ba chỉ số (Recall, FPR, FDR) của Reviewer này lần lượt là:",
    options: [
      "Recall = 75.0%, False Positive Rate (FPR) = 10.0%, và False Discovery Rate (FDR) = 40.0%",
      "Recall = 60.0%, False Positive Rate (FPR) = 40.0%, và False Discovery Rate (FDR) = 10.0%",
      "Recall = 75.0%, False Positive Rate (FPR) = 8.3%, và False Discovery Rate (FDR) = 25.0%",
      "Recall = 80.0%, False Positive Rate (FPR) = 10.0%, và False Discovery Rate (FDR) = 20.0%"
    ],
    correctAnswer: 0,
    explanation: "Ba chỉ số đo lường Reviewer có ba mẫu số hoàn toàn khác nhau: (1) Recall = số lỗi cấy tìm được / tổng số lỗi đã cấy = 3/4 = 75%; (2) FPR = số item sạch bị giơ cờ nhầm / tổng số item sạch = 2/20 = 10%; (3) FDR = số cờ báo nhầm / tổng số cờ đã giơ = 2/5 = 40%."
  },
  {
    id: 39, day: 6, module: 2,
    question: "Hai chuyên viên gán nhãn độc lập phân loại 100 bức ảnh thành 2 lớp (Có lỗi / Tốt). Tỷ lệ đồng thuận quan sát được là p_o = 0.86, nhưng do dữ liệu lệch lớp nặng nên xác suất đồng thuận ngẫu nhiên theo phân phối biên lên tới p_e = 0.80. Hệ số Cohen's Kappa (κ) bằng bao nhiêu và hàm ý điều gì?",
    options: [
      "κ = 0.86; chứng tỏ hai người gán nhãn có sự thống nhất rất cao và bộ quy tắc guideline đã hoàn toàn rõ ràng",
      "κ = 0.06; khẳng định cả hai chuyên viên gán nhãn đều làm việc cẩu thả và cần bị thay thế ngay khỏi dự án",
      "κ = 0.30; cho thấy sau khi trừ phần đồng thuận ăn may do lệch lớp, mức độ nhất quán thực chất trên các ca khó còn rất thấp",
      "κ = 0.70; đạt ngưỡng tiêu chuẩn công nghiệp để bỏ qua bước kiểm định đối chiếu với tập chuẩn Reference"
    ],
    correctAnswer: 2,
    explanation: "Áp dụng công thức Cohen's Kappa: κ = (p_o - p_e) / (1 - p_e) = (0.86 - 0.80) / (1 - 0.80) = 0.06 / 0.20 = 0.30. Khi Raw Agreement cao (86%) nhưng Kappa thấp (0.30), nguyên nhân là do dữ liệu bị lệch lớp nặng khiến đồng thuận ngẫu nhiên chiếm phần lớn, đồng thời hai người vẫn bất đồng mạnh ở các ca thuộc lớp hiếm."
  },
  {
    id: 40, day: 6, module: 2,
    question: "Ở Bước 9 (Monitoring & Error Analysis) sau khi phát hành dataset v1.0, nhóm vận hành nhận thấy mô hình dự đoán đúng với độ chính xác rất cao trên đúng các lớp đã định nghĩa, nhưng công nhân nhà máy vẫn liên tục phàn nàn rằng hệ thống không giúp họ phân loại được các quả cần đóng gói xuất khẩu. Dấu hiệu này chỉ về lỗi ở bước nào trong Lifecycle?",
    options: [
      "Lỗi ở Bước 6 (Batch Annotation): Cần yêu cầu đội ngũ gán nhãn vẽ lại biên mặt nạ khít hơn ở cấp độ từng pixel",
      "Lỗi ở Bước 4 (Annotation Guideline): Cần bổ sung thêm các ví dụ phân biệt giữa vết dập và bóng tối vào tài liệu hướng dẫn",
      "Lỗi ở Bước 2 (Data Collection): Cần quay lại dây chuyền để thu thập bổ sung thêm hàng ngàn bức ảnh ở ca làm việc ban đêm",
      "Lỗi ở Bước 1 (Objective & Scope): Định nghĩa sai mục tiêu và quyết định nghiệp vụ mà bộ dữ liệu cần phục vụ ngay từ đầu"
    ],
    correctAnswer: 3,
    explanation: "Bảng phân tích lỗi (Error Analysis) ở Bước 9 chỉ rõ 4 dấu hiệu quy về 4 bước khác nhau: Model sai ở ảnh người rất thống nhất → lỗi Model; Model sai ở ảnh người hay bất đồng → lỗi Guideline (Bước 4); Model sai ở nguồn mới → thiếu dữ liệu (Bước 2); còn 'Model đúng nhưng người vận hành vẫn kêu' → Sai Objective, phải quay về Bước 1 xem lại quyết định cần phục vụ."
  },
  {
    id: 41, day: 7, module: 2,
    question: "Một đối tượng trên ảnh có kích thước 1600 × 1200 pixel được lưu trong CVAT dưới dạng <box xtl='797' ytl='870' xbr='965' ybr='928'>. Khi chuyển đổi (convert) sang định dạng COCO JSON và định dạng YOLO .txt, cách biểu diễn tọa độ hình học của khung bao này sẽ thay đổi như thế nào?",
    options: [
      "COCO lưu [797, 870, 965, 928] theo pixel tuyệt đối; còn YOLO lưu [0.498, 0.725, 0.603, 0.773] theo tọa độ hai góc đã chuẩn hóa",
      "COCO lưu [797, 870, 168, 58] gồm góc trên-trái và rộng-cao; còn YOLO lưu [0.551, 0.749, 0.105, 0.048] gồm tâm box và kích thước chuẩn hóa",
      "Cả COCO và YOLO đều lưu tọa độ tâm [881, 899] kèm chiều rộng 168 và chiều cao 58, chỉ khác nhau ở định dạng file JSON và TXT",
      "COCO tự động chuyển đổi khung bao thành mặt nạ đa giác 4 đỉnh; còn YOLO làm tròn toàn bộ tọa độ về số nguyên gần nhất"
    ],
    correctAnswer: 1,
    explanation: "Bẫy tọa độ giữa 3 định dạng: CVAT lưu 2 góc (xtl=797, ytl=870, xbr=965, ybr=928); COCO lưu [x_min, y_min, width, height] = [797, 870, 965-797=168, 928-870=58]; YOLO lưu [x_center/W, y_center/H, w/W, h/H] = [881/1600=0.551, 899/1200=0.749, 168/1600=0.105, 58/1200=0.048] kèm chỉ số class ở đầu dòng."
  },
  {
    id: 42, day: 7, module: 2,
    question: "Trong thực nghiệm kiểm chứng rò rỉ dữ liệu (Data Leakage) trên cùng một tập dữ liệu video hành trình và cùng một kiến trúc mô hình Ultralytics YOLO, sự chênh lệch điểm mAP trên tập Validation giữa các phương thức chia dữ liệu đã được ghi nhận ra sao?",
    options: [
      "Chia sạch theo clip đạt 0.486 mAP; khi rò rỉ 20% theo frame thì mAP vọt lên 0.701; và khi rò rỉ hoàn toàn thì đạt tới 0.835 mAP",
      "Chia sạch theo clip đạt 0.701 mAP; khi rò rỉ 20% theo frame thì mAP tăng nhẹ lên 0.725; và khi rò rỉ hoàn toàn thì đạt 0.835 mAP",
      "Chia ngẫu nhiên theo frame luôn làm mAP giảm từ 0.835 xuống 0.486 do hiện tượng quá khớp (overfitting) trên các khung hình liền kề",
      "Rò rỉ dưới 20% số khung hình hầu như không làm thay đổi mAP (biến thiên dưới 0.01 điểm) nhờ cơ chế chuẩn hóa Batch Normalization"
    ],
    correctAnswer: 0,
    explanation: "Thí nghiệm thực tế trong bài giảng Ngày 7 chứng minh: Với split sạch (cắt theo clip/scene), mAP thực chất chỉ đạt 0.486. Chỉ cần rò rỉ 20% các khung hình liền kề (cách nhau 1/30 giây) giữa Train và Val, mAP đã phồng giả tạo lên 0.701, và nếu bốc ngẫu nhiên hoàn toàn theo frame thì mAP vọt lên 0.835 (gần gấp đôi sự thật)."
  },
  {
    id: 43, day: 7, module: 2,
    question: "Đội dữ liệu đã tuân thủ nghiêm ngặt quy tắc chia tập dữ liệu theo từng đoạn video (Clip-level Split) để không có hai frame của cùng một clip nằm ở cả Train và Validation. Tuy nhiên, trong bài toán nhận diện làn đường và bản đồ trực tuyến (Online Mapping), kiểm toán viên vẫn kết luận tập dữ liệu bị rò rỉ (Data Leakage). Nguyên nhân gốc rễ là gì?",
    options: [
      "Do đội ngũ kỹ sư đã chạy các phép biến đổi tăng cường dữ liệu (Data Augmentation) riêng biệt trên tập Train sau khi chia",
      "Do các đoạn video khác nhau được quay vào các ngày khác nhau nhưng lại đi qua cùng một nút giao lộ (Intersection/Location Leakage)",
      "Do định dạng file video đầu vào sử dụng chuẩn nén H.264 làm trùng lặp các khung hình chính (I-frames) giữa các tập",
      "Do tỷ lệ phân chia số lượng clip giữa tập Train, Validation và Test không tuân thủ đúng tỷ lệ vàng 70/15/15"
    ],
    correctAnswer: 1,
    explanation: "Theo Case B (Split theo clip vẫn có thể leak): Tính độc lập phụ thuộc vào bản chất bài toán chứ không chỉ phụ thuộc vào Clip ID. Với bài toán gắn với cấu trúc hạ tầng hoặc camera cố định, nếu cùng một giao lộ (intersection/route) xuất hiện ở cả Train và Val dù quay khác ngày, mô hình sẽ học thuộc lòng bối cảnh địa điểm đó (location memorization)."
  },
  {
    id: 44, day: 7, module: 2,
    question: "Khi kiểm tra bảng đối soát 5 con số (Loss-check Table) sau khi chuyển đổi 500 ảnh từ định dạng gốc sang YOLO export, kỹ sư thấy tổng số ảnh (500) và tổng số đối tượng (4,820) khớp tuyệt đối 100%. Tuy nhiên, số lượng từng lớp bị thay đổi: car (từ 2,900 thành 1,140), person (từ 1,140 thành 780), bicycle (từ 780 thành 2,900) và thuộc tính occlusion rơi về 0. Chẩn đoán nào sau đây là ĐÚNG?",
    options: [
      "File xuất ra bị lỗi cú pháp nghiêm trọng khiến trình huấn luyện YOLO sẽ lập tức dừng hoạt động và báo lỗi (crash) ngay ở epoch đầu tiên",
      "Chỉ cần sửa lại tên nhãn trong file data.yaml là có thể khôi phục được toàn bộ 4,820 giá trị thuộc tính occlusion đã bị mất",
      "Thuật toán chuyển đổi đã tự động cân bằng lại phân phối lớp (class rebalancing) để giúp mô hình học tốt hơn trên lớp xe đạp hiếm gặp",
      "Đây là lỗi im lặng do đảo thứ tự bảng ánh xạ nhãn (class-map reorder) kết hợp với đặc tính làm rơi thuộc tính của định dạng hẹp YOLO"
    ],
    correctAnswer: 3,
    explanation: "Theo Case C (Conversion Detective): Tổng số 4,820 object khớp nhau tạo cảm giác an toàn giả tạo, và pipeline huấn luyện hoàn toàn không crash. Thực chất, thứ tự ID trong class-map đã bị tráo vòng quanh (car -> bicycle -> person -> car) làm đảo lộn ngữ nghĩa, đồng thời định dạng YOLO cơ bản là cái phễu một chiều làm rớt toàn bộ trường thuộc tính occlusion."
  },
  {
    id: 45, day: 7, module: 2,
    question: "Để chứng minh một quy trình chuyển đổi định dạng dữ liệu không làm mất mát thông tin ngữ nghĩa (Lossless Candidate), kỹ sư dữ liệu phải thực hiện quy trình kiểm thử khứ hồi (Round-trip Test) gồm 4 bước theo đúng trình tự nào?",
    options: [
      "Xuất file YOLO từ CVAT → Huấn luyện thử 5 epoch → Chạy mô hình dự đoán lại trên tập ảnh gốc → So sánh mAP với ngưỡng 0.80",
      "Nén thư mục ảnh thành file ZIP → Tính mã băm SHA256 → Giải nén sang thư mục khác → Kiểm tra lại dung lượng byte của từng bức ảnh",
      "Xuất bản gốc Datumaro (1) → Xuất bản đích COCO/YOLO (2) → Nhập bản đích vào một Task mới (3) → Xuất lại Datumaro lần hai (4) rồi đối chiếu với (1)",
      "Nhập trực tiếp file COCO/YOLO đè lên chính Task CVAT đang làm việc → Bấm nút Save → Kiểm tra xem giao diện có hiện cảnh báo đỏ hay không"
    ],
    correctAnswer: 2,
    explanation: "Quy trình Round-trip Test chuẩn gồm 4 bước: (1) Export Datumaro source (định dạng rộng giữ nguyên bản) → (2) Export sang định dạng đích COCO/YOLO → (3) Import gói COCO/YOLO đó vào một Task MỚI hoàn toàn (tuyệt đối không import đè lên task cũ) → (4) Export từ task mới ra lại Datumaro lần 2 và so sánh với bước 1."
  },
  {
    id: 46, day: 7, module: 2,
    question: "Một bức ảnh frame_000301.jpg có độ phân giải 1600 × 1200, dung lượng 284 KB và thời gian chỉnh sửa là 2026-03-04 08:14. Nếu một người vô tình sửa đổi màu sắc của đúng 1 pixel trên ảnh và giữ nguyên tên file, dung lượng KB cũng như timestamp, phương pháp kỹ thuật nào giúp phát hiện chắc chắn sự thay đổi này?",
    options: [
      "Kiểm tra đối chiếu chuỗi mã băm mật mã học SHA256 của từng file được ghi nhận trong tài liệu tờ khai Manifest",
      "Sử dụng lệnh kiểm tra kích thước khung hình và định dạng không gian màu RGB trong bước khám phá dữ liệu ban đầu (EDA)",
      "Đếm lại tổng số lượng khung bao (bounding boxes) trong file nhãn .txt đi kèm với bức ảnh đó xem có bị lệch hay không",
      "Kiểm tra tên thư mục chứa tập dữ liệu xem có được đặt hậu tố đánh dấu phiên bản kiểu data_final_v2_FIXED hay không"
    ],
    correctAnswer: 0,
    explanation: "Ngày tháng (timestamp), tên file và dung lượng (file size KB) đều có thể giữ nguyên hoặc bị làm giả khi chỉ thay đổi 1 pixel. Tuy nhiên, hàm băm SHA256 có tính chất thác đổ (avalanche effect): chỉ cần 1 bit hoặc 1 pixel thay đổi, chuỗi hash sẽ biến đổi hoàn toàn (ví dụ từ a3f9c1... sang 7e20bb...), cung cấp bằng chứng bất biến về tính toàn vẹn."
  },
  {
    id: 47, day: 7, module: 2,
    question: "Theo bảng phân loại dữ liệu (Data Classification Sheet) và bối cảnh vận hành tuân thủ pháp luật bảo vệ dữ liệu tại Việt Nam (Luật 91/2025/QH15, Nghị định 356/2025 và Nghị định 330/2026), quy định quản trị đối với dữ liệu Mức 2 (Personal basic) và Mức 3 (Sensitive/raw) khác nhau như thế nào?",
    options: [
      "Mức 2 là dữ liệu nhãn đã tách rời khỏi ảnh (lưu 1 năm); Mức 3 là ảnh đã làm mờ mặt và biển số (lưu 180 ngày cho cả đội cùng xem)",
      "Mức 3 mặc định được cung cấp cho mọi chuyên viên gán nhãn trong mọi bài toán để họ nhìn rõ ngữ cảnh giao thông trước khi chạy làm mờ",
      "Cả Mức 2 và Mức 3 đều được phép tải về máy tính cá nhân của chuyên viên gán nhãn trong vòng 7 ngày nếu có cam kết bảo mật bằng miệng",
      "Mức 2 là ảnh đã làm mờ mặt/biển số (annotator được giao xem, lưu 180 ngày); Mức 3 là video thô có mặt, biển số, GPS (chỉ 2-3 người có khóa được xem, lưu 30 ngày)"
    ],
    correctAnswer: 3,
    explanation: "Bảng Data Classification 4 mức quy định: Mức 0 (Public - guideline, không hạn); Mức 1 (Internal - labels tách khỏi ảnh, cả đội xem, lưu 1 năm); Mức 2 (Personal basic - ảnh đã blur mặt/biển số, chỉ annotator được giao mới được xem, hạn lưu 180 ngày); Mức 3 (Sensitive/raw - footage thô chứa mặt, biển số, GPS, chỉ 2-3 người có khóa truy cập, hạn lưu tối đa 30 ngày)."
  },
  {
    id: 48, day: 7, module: 2,
    question: "Trong báo cáo kiểm toán quyền riêng tư (Privacy Audit) của một lô dữ liệu giao thông tại Việt Nam, tỷ lệ làm mờ chính xác tổng thể (Aggregate Accuracy) đạt tới 99.2% (tức Miss Rate trung bình chỉ 0.8%). Tuy nhiên, khi tách theo lát cắt (slice), tỷ lệ bỏ sót trên biển số xe máy (Motorcycle plates) lên tới 11.3% và khuôn mặt ban đêm là 4.8%. Quyết định nào tại Release Gate là ĐÚNG?",
    options: [
      "Cho phép phát hành (Release) ngay vì độ chính xác tổng thể 99.2% đã vượt xa tiêu chuẩn 95% của các bộ dữ liệu quốc tế",
      "Chặn phát hành (Block/Rework): Hạ ngưỡng confidence của bộ phát hiện, chạy bổ sung mô hình chuyên biệt cho xe máy/ban đêm và kiểm toán lại theo từng slice",
      "Xóa toàn bộ các bức ảnh có chứa xe máy và cảnh ban đêm ra khỏi tập dữ liệu để đưa tỷ lệ lỗi của mọi lát cắt về mức 0%",
      "Tăng ngưỡng (threshold) của công cụ làm mờ tự động lên cao hơn để ảnh trông sạch đẹp hơn và giảm số lượng vùng bị làm mờ thừa"
    ],
    correctAnswer: 1,
    explanation: "Theo Case D: Chỉ số trung bình 99.2% bị chi phối bởi ảnh ban ngày và biển số ô tô dễ nhận diện, làm che khuất điểm mù nghiêm trọng trên biển số xe máy (miss rate 11.3% - mức Critical tại Việt Nam) và khuôn mặt ban đêm (4.8%). Với privacy, sai số phải nghiêng về phía làm mờ thừa (hạ threshold để giảm sót) và bắt buộc phải Block để rework đúng slice bị thủng."
  },
  {
    id: 49, day: 7, module: 2,
    question: "Sau khi đã làm mờ hoàn toàn 100% khuôn mặt và biển số xe trên toàn bộ khung hình (Miss Rate = 0%), lô dữ liệu vẫn bị đánh trượt tại cổng kiểm soát quyền riêng tư (Privacy Gate). Nguyên nhân nào sau đây giải thích đúng nhất tình huống này (Case E)?",
    options: [
      "Do tập dữ liệu vẫn còn lưu giữ các định danh dư thừa (Residual Identifiers) như lộ trình GPS, timestamp, EXIF, mã xe hoặc ảnh phản chiếu trên kính",
      "Do thuật toán làm mờ Gaussian làm giảm độ sắc nét của các biển báo giao thông và đèn tín hiệu ở khu vực lân cận",
      "Do việc làm mờ làm thay đổi mã băm SHA256 của bức ảnh so với phiên bản dữ liệu thô ban đầu được lưu trong DVC remote",
      "Do quy định pháp lý bắt buộc phải xóa bỏ hoàn toàn mọi phương tiện giao thông cá nhân ra khỏi khung hình trước khi huấn luyện"
    ],
    correctAnswer: 0,
    explanation: "Quyền riêng tư (Privacy) không chỉ nằm ở các pixel khuôn mặt hay biển số. Theo Case E (Blur rồi vẫn leak), dù ảnh đã làm mờ tốt nhưng các trường siêu dữ liệu như chuỗi tọa độ GPS route, dấu thời gian (timestamp), EXIF, vehicle ID hoặc hình ảnh phản chiếu qua cửa kính vẫn cho phép suy ngược (re-identify) nơi ở, nơi làm việc và thói quen của cá nhân."
  },
  {
    id: 50, day: 7, module: 2,
    question: "Nhóm kỹ sư AI báo cáo một mô hình đạt 0.72 mAP và cung cấp cho bạn 4 thành phần: file trọng số model.pt, mã Git commit SHA của code huấn luyện, tên thư mục dữ liệu 'data_final_v2.zip', và bản báo cáo điểm số. Vì sao bạn vẫn KHÔNG THỂ tái lập (reproduce) chính xác lần chạy này?",
    options: [
      "Vì thiếu thông tin về loại màn hình hiển thị và hệ điều hành mà chuyên viên gán nhãn đã sử dụng trong quá trình vẽ khung bao",
      "Vì mô hình học sâu luôn khởi tạo trọng số trên đám mây nên theo nguyên lý toán học là không bao giờ có thể tái tạo lại kết quả tương đương",
      "Vì tên file zip không phải là định danh phiên bản bất biến; gói bàn giao đang thiếu mã băm dataset hash/DVC rev, danh sách split membership, version của guideline/transform và random seed",
      "Vì thiếu bản hợp đồng lao động có chữ ký tay của từng chuyên viên gán nhãn đã tham gia vào dự án từ ngày đầu tiên"
    ],
    correctAnswer: 2,
    explanation: "Theo Case F: Một tên file như 'data_final_v2.zip' hoàn toàn có thể bị ghi đè nội dung bên trong mà vẫn giữ nguyên tên. Để tái lập (reproduce) một lần chạy, bắt buộc phải có Dataset Passport/Manifest đầy đủ gồm: mã băm bất biến (SHA256 / DVC revision), danh sách phân chia tập (split membership list), phiên bản guideline, phiên bản script chuyển đổi/làm mờ và hạt giống ngẫu nhiên (random seed)."
  },
  {
    id: 51, day: 8, module: 2,
    question: "Sự khác biệt kiến trúc cốt lõi giữa mô hình Segment Anything thế hệ thứ 3 (SAM 3, phát hành 11/2025) so với thế hệ SAM 1 / SAM 2 trước đó và giới hạn kỹ thuật của nó khi tích hợp trong CVAT là gì?",
    options: [
      "SAM 3 chỉ nhận đầu vào là các cú nhấp chuột từng điểm đơn lẻ trên từng vật thể nhưng có khả năng tự động sinh hộp bao 3D Cuboid cho dữ liệu đám mây điểm LiDAR",
      "SAM 3 chuyển sang cơ chế Promptable Concept Segmentation (nhập text prompt hoặc ảnh mẫu để khoanh toàn bộ instance cùng khái niệm), nhưng trong CVAT bị giới hạn tối đa 200 đối tượng/khung hình",
      "SAM 3 đạt điểm số CGF1 là 85.0 trên tập SA-Co (vượt xa chuyên viên con người là 74.2) và được phát hành dưới giấy phép mở hoàn toàn Apache 2.0 không giới hạn thương mại",
      "SAM 3 sử dụng kiến trúc ngôn ngữ lớn để tự động viết lại tài liệu Guideline và không bị ảnh hưởng bởi các vật thể nhỏ hoặc bị che khuất"
    ],
    correctAnswer: 1,
    explanation: "SAM 1 và SAM 2 là công cụ tương tác điểm (mỗi prompt trả về 1 object, giấy phép Apache 2.0). SAM 3 (19/11/2025, giấy phép SAM License giới hạn thương mại) tạo bước nhảy vọt sang pre-labeling theo khái niệm: 1 text prompt hoặc image exemplar trả về toàn bộ instance khớp kèm mask và ID (đạt 65.0 CGF1 so với người là 74.2). Trong CVAT, SAM 3 có giới hạn cứng 200 objects/frame (vượt quá sẽ bị bỏ qua im lặng)."
  },
  {
    id: 52, day: 8, module: 2,
    question: "Khi thực hiện tiền gán nhãn (pre-labeling) cho các phương tiện đặc thù của giao thông Việt Nam như 'xe ba gác chở tôn', 'xe máy kẹp ba' hoặc 'xe đẩy hàng rong', chiến lược lựa chọn mô hình và phương thức truy vấn nào sau đây là TỐI ƯU nhất?",
    options: [
      "Sử dụng các mô hình phát hiện từ vựng mở bằng văn bản (như Grounding DINO hoặc YOLO-World) với câu mô tả tiếng Anh thật dài và chi tiết",
      "Giao toàn bộ việc khoanh vẽ khung bao tọa độ pixel của các phương tiện này cho mô hình ngôn ngữ thị giác lớn (VLM) xử lý tự động",
      "Sử dụng truy vấn hình ảnh mẫu (Visual Prompt / Image Exemplar) trên SAM 3 hoặc T-Rex Label với một ảnh mẫu chuẩn không bị che khuất, sau đó chuyển sang fine-tune YOLO26/RF-DETR khi đã chốt danh mục nhãn cố định",
      "Đặt ngưỡng tin cậy (Confidence Threshold) của mô hình nhận diện tổng quát lên mức 0.95 để lọc lấy các khung hình chuẩn xác nhất"
    ],
    correctAnswer: 2,
    explanation: "Các phương tiện đặc thù tại Việt Nam không có danh từ định danh ngắn gọn trong tiếng Anh (điểm mù của text prompt trên Grounding DINO/YOLO-World). Giải pháp chuẩn là dùng Visual Prompt (chọn ảnh mẫu exemplar chuẩn, không bị che trên SAM 3 hoặc T-Rex Label) để định vị hình thái tương đồng; và khi dự án đã có tập chuẩn (Gold Set) với schema cố định thì fine-tune mô hình chuyên biệt như YOLO26 hoặc RF-DETR."
  },
  {
    id: 53, day: 8, module: 2,
    question: "Trong quy trình gán nhãn có sự hỗ trợ của AI, mô hình Ngôn ngữ - Thị giác (Vision-Language Model - VLM) nên được ứng dụng vào khâu nào và cần kiểm soát rủi ro gì?",
    options: [
      "Dùng VLM để thay thế hoàn toàn các mô hình detector trong việc xác định tọa độ biên hộp bao (bounding box) và mặt nạ phân vùng chính xác tới từng pixel",
      "Dùng VLM để tự động xóa sạch các nhãn cũ (Clean old annotations) mỗi khi phát hiện sự bất đồng giữa hai chuyên viên gán nhãn",
      "Dùng VLM để tự động ký duyệt phát hành gói dữ liệu (Release Packet) vì câu trả lời văn bản của VLM rất trôi chảy và có độ tin cậy toán học tuyệt đối",
      "Dùng VLM để điền thuộc tính ngữ cảnh (như màu đèn tín hiệu, chữ trên biển báo) sau khi đã có box từ detector, đồng thời giữ cờ source = auto để người duyệt và tự quyết định tính liên quan (relevance)"
    ],
    correctAnswer: 3,
    explanation: "VLM đọc hiểu ngữ cảnh và trả lời văn bản rất tốt nhưng định vị tọa độ biên (box/mask) rất kém. Do đó, chỉ dùng VLM để bổ sung thuộc tính (attribute) sau khi Detector/SAM đã khoanh box. Đặc biệt, vì văn bản của VLM rất trôi chảy dễ gây chủ quan, các nhãn này phải giữ trạng thái source = auto cho đến khi con người thẩm định, và việc phán đoán đèn nào có hiệu lực với làn xe chạy (relevance) bắt buộc phải do người quyết định."
  },
  {
    id: 54, day: 8, module: 2,
    question: "Dựa trên nghiên cứu về sự hiệu chuẩn mạng nơ-ron hiện đại (Guo et al., ICML 2017; Küppers et al., CVPRW 2020), nhận định nào sau đây phản ánh ĐÚNG bản chất của điểm tự tin (Confidence Score) do mô hình phát hiện vật thể xuất ra?",
    options: [
      "Mạng nơ-ron sâu thường mắc lỗi tự tin thái quá (over-confident); điểm confidence chỉ có giá trị xếp hạng (ranking) giữa các box của cùng một mô hình trên cùng phân phối ảnh",
      "Điểm confidence 0.90 của lớp phổ biến (như ô tô) và 0.90 của lớp hiếm (như trẻ em) mang mức độ tin cậy thống kê hoàn toàn ngang bằng nhau",
      "Điểm confidence 0.95 đảm bảo xác suất vật thể đó đúng lớp là 95% và khung bao đã ôm khít tối thiểu 95% diện tích thực của vật thể",
      "Điểm confidence tỷ lệ nghịch với kích thước pixel của vật thể nên luôn đạt giá trị cao nhất ở các đối tượng người đi bộ ở cự ly trên 60 mét"
    ],
    correctAnswer: 0,
    explanation: "Nghiên cứu của Guo et al. (2017) chỉ rõ mạng nơ-ron hiện đại chưa được hiệu chuẩn (uncalibrated) và mắc lỗi tự tin thái quá có hệ thống: mô hình có thể chấm 0.98 cho một box hoàn toàn sai hoặc lệch mất nửa thân xe, và điểm 0.9 của class 'car' không thể so ngang với 0.9 của class 'child'. Confidence thực chất chỉ là đại lượng xếp hạng (ranking) nội bộ."
  },
  {
    id: 55, day: 8, module: 2,
    question: "Theo kết quả thực nghiệm đánh giá mô hình SAM trên bài toán phân vùng đối tượng đường phố (KITTI, BDD100K, Mapillary - Journal of Imaging 2025) và nghiên cứu tâm lý học lao động của Fort & Sagot (ACL 2010), nghịch lý nào xảy ra khi áp dụng Pre-labeling?",
    options: [
      "Mô hình đạt IoU rất cao trên vật nhỏ ở xa (0.59–0.64) nhưng lại thất bại trên vật lớn ở gần; đồng thời làm giảm năng suất của người mới bắt đầu",
      "Pre-label giúp cả người yếu lẫn chuyên gia giỏi nhất đều đạt độ chính xác tuyệt đối 99.9%, nhưng làm tăng thời gian gán nhãn lên gấp ba lần",
      "Mô hình gần như vô dụng trên vật thể nhỏ/ở xa (IoU tụt xuống 0.01–0.19 đúng vào vùng an toàn sống còn); và pre-label nâng người yếu lên (94.1% → 97.1%) nhưng lại kéo chuyên gia giỏi nhất tụt xuống (98.1% → 95.8%)",
      "Các lỗi sót lại sau khi sửa pre-label đều là lỗi ngẫu nhiên phân tán nên sẽ tự động triệt tiêu nhau hoàn toàn khi đưa vào huấn luyện"
    ],
    correctAnswer: 2,
    explanation: "Hai con số thực nghiệm cốt lõi của Ngày 8: (1) SAM rất giỏi tô vật lớn (IoU 0.59–0.64) nhưng sụp đổ trên vật nhỏ/ở xa như người đi bộ cách 60m, xe máy cuối hàng (IoU chỉ đạt 0.01–0.19); (2) Nghiên cứu của Fort & Sagot chứng minh pre-label kéo mọi người về mức của máy: người yếu tăng từ 94.1% lên 97.1%, nhưng người giỏi nhất bị tụt từ 98.1% xuống 95.8% do Thiên kiến tự động hóa (Automation Bias)."
  },
  {
    id: 56, day: 8, module: 2,
    question: "Khi kiểm định chất lượng công việc thẩm định nhãn AI (Pre-label Review), quản lý dự án cần phân biệt hai khái niệm 'Residual Error' và 'New Error', đồng thời thiết kế quy trình thao tác cho chuyên viên như thế nào để chống lại lỗi bỏ sót (False Negative)?",
    options: [
      "Residual Error là lỗi do người sửa làm hỏng nhãn đúng của máy; chuyên viên nên bật sẵn lớp nhãn AI ngay từ đầu và chỉ tập trung chỉnh sửa các khung bao đã hiển thị",
      "Residual Error là lỗi của AI mà người không phát hiện ra, còn New Error là nhãn AI vốn đúng nhưng người sửa thành sai; chuyên viên phải quét mắt nhìn ảnh gốc tìm vật bị sót TRƯỚC khi bật lớp nhãn AI",
      "Nếu tỷ lệ chấp thuận (Accept Rate) của một chuyên viên đạt 99% thì chứng tỏ Residual Error bằng 0 và không cần chèn thêm khung hình chuẩn (Gold Frame) vào lô",
      "Nên phân công những chuyên gia gán nhãn giỏi nhất vào việc bấm duyệt sửa nhãn AI hàng loạt để tối ưu hóa tốc độ xử lý của toàn đội"
    ],
    correctAnswer: 1,
    explanation: "Residual Error (lỗi sót lại) là lỗi do mô hình sinh ra mà annotator bỏ lọt; New Error (lỗi phát sinh mới) là pre-label vốn đúng nhưng annotator lại sửa thành sai. Để chống Automation Bias và bắt lỗi False Negative (bỏ sót vật thể - trạng thái Added), quy tắc bắt buộc là: quét mắt nhìn ảnh gốc TRƯỚC khi bật hiển thị lớp nhãn AI, và không giao việc sửa pre-label đại trà cho chuyên gia giỏi nhất (dành họ cho Gold Set và Edge Cases)."
  },
  {
    id: 57, day: 8, module: 2,
    question: "Trong kỹ thuật tái dựng cảnh thực sang mô phỏng 3D bằng mạng nơ-ron (Neural Reconstruction với NeuRAD - CVPR-W 2024) và sinh dữ liệu bằng NVIDIA Cosmos, giới hạn thực nghiệm nào về khoảng cách miền (Sim2Real Gap) đã được chứng minh?",
    options: [
      "Khi chuyển từ ảnh thật sang ảnh tái dựng, mAP của các mô hình nhận thức giữ nguyên không đổi, kể cả khi dịch chuyển camera ảo sang làn bên cạnh 5 mét",
      "Cơ chế Cosmos Predict (tự tưởng tượng khung hình tương lai) luôn bảo toàn chính xác 100% nhãn ground truth ban đầu tốt hơn cơ chế Cosmos Transfer",
      "Khi trộn dữ liệu để huấn luyện, tỷ lệ 1 ảnh thật : 10 ảnh ảo luôn mang lại hiệu năng cao gấp ba lần so với tỷ lệ 1 ảnh thật : 0.5 ảnh ảo",
      "Khi đo trên ảnh tái dựng, mAP suy giảm từ 24% (BEVFormer) đến 58% (FCOS3D); chỉ cần dịch camera ảo 1 mét sang bên để mô phỏng lấn làn thì mAP tụt thêm 13–18%"
    ],
    correctAnswer: 3,
    explanation: "Nghiên cứu 'Are NeRFs ready for autonomous driving?' (CVPR-W 2024) chỉ ra: Trên cùng một cảnh, ảnh tái dựng làm mAP tụt 58% với FCOS3D (32.2 → 13.5), 48% với PETR (38.6 → 20.2) và 24% với BEVFormer (38.4 → 29.1). Nghịch lý góc nhìn: chỉ cần dịch camera 1m sang bên (nơi cần mô phỏng nhất), mAP tụt thêm 13–18%. Ngoài ra, chỉ Cosmos Transfer (giữ control map) mới bảo toàn nhãn, còn Cosmos Predict dễ sinh ảo giác; và tỷ lệ trộn tối ưu là 1 thật : 0.5 ảo (lên 1:1 sẽ bị domain shift triệt tiêu lợi ích)."
  },
  {
    id: 58, day: 8, module: 2,
    question: "Theo Quy chuẩn Châu Âu EU 2022/1426 (Annex III) về phê duyệt kiểu loại cho xe tự hành, vai trò pháp lý của dữ liệu mô phỏng (Synthetic Data) và mối quan hệ của nó với dữ liệu thực địa được quy định như thế nào?",
    options: [
      "Mô phỏng không bao giờ được phép thay thế hoàn toàn thử nghiệm thực tế; nhà sản xuất bắt buộc phải chứng minh mối tương quan chặt chẽ (correlation) bằng thước đo duy nhất là dữ liệu thực địa đã được con người gán nhãn chuẩn",
      "Mô phỏng có thể thay thế hoàn toàn 100% các bài thử nghiệm vật lý trên đường thực tế nếu nhà sản xuất sử dụng công cụ đạt chuẩn đồ họa Unreal Engine",
      "Dữ liệu mô phỏng vẫn phải trải qua quy trình làm mờ khuôn mặt và biển số nghiêm ngặt theo đúng Luật Bảo vệ Dữ liệu Cá nhân trước khi đưa vào huấn luyện",
      "Sự phát triển của dữ liệu tổng hợp sẽ xóa bỏ hoàn toàn nhu cầu tuyển dụng chuyên viên gán nhãn con người trong vòng 2 năm tới"
    ],
    correctAnswer: 0,
    explanation: "Quy chuẩn EU 2022/1426 quy định dứt khoát: 'Mô phỏng không bao giờ được phép thay thế hoàn toàn cho các bài thử nghiệm vật lý trên đường thực tế'. Để kết quả mô phỏng được chấp nhận làm bằng chứng an toàn, phải chứng minh được tương quan (correlation) với thế giới thực thông qua dữ liệu thực địa đã được gán nhãn chuẩn xác (labeled real data). Do đó, synthetic data không xóa bỏ mà càng khuếch đại giá trị của dữ liệu thật có nhãn chuẩn."
  },
  {
    id: 59, day: 8, module: 2,
    question: "Trong vòng lặp Active Learning cho bài toán Object Detection, mô hình chấm độ bất định (Uncertainty) cho từng box nhưng công cụ gán nhãn lại giao việc theo từng khung hình (frame). Khi so sánh các chiến lược tính điểm và hàm gộp điểm (Sum, Mean, Max), kết luận nào sau đây là ĐÚNG về mặt kỹ thuật và kinh tế?",
    options: [
      "Ba chiến lược Least Confidence, Margin và Entropy luôn cho kết quả khác biệt hoàn toàn ngay cả trong bài toán phân loại nhị phân 2 lớp",
      "Hàm gộp Sum ưu tiên chọn ảnh đông vật thể nên rất có lợi nếu dự án trả tiền theo số lượng bức ảnh, nhưng ưu thế này biến mất hoàn toàn nếu khoán việc trả tiền theo từng bounding box; trong khi đó nghiên cứu của Probst et al. (2022) chứng minh kết hợp Margin + Max đạt hiệu quả tối ưu",
      "Hàm gộp Mean luôn đạt hiệu quả cao nhất trong việc săn tìm một vật thể dị thường hiếm gặp nằm giữa khung hình thông thoáng",
      "Chỉ cần chọn Top-200 khung hình có điểm Uncertainty cao nhất từ một video 30 FPS là đã đảm bảo được tính đa dạng tuyệt đối mà không cần bước gom cụm đặc trưng"
    ],
    correctAnswer: 1,
    explanation: "Trong bài toán Detection, hàm Sum cộng dồn điểm của mọi box nên luôn kéo về các ảnh đông phương tiện: nếu tính chi phí theo bức ảnh thì 'lãi' nhiều box, nhưng ở Việt Nam thường tính chi phí theo từng bounding box nên ưu thế kinh tế của Sum biến mất! Về mặt thuật toán, Probst et al. (2022) chứng minh Margin (chênh lệch P1 - P2 cho cặp class dễ nhầm) kết hợp hàm Max (bắt frame có ít nhất 1 vật dị thường) mới là tối ưu nhất."
  },
  {
    id: 60, day: 8, module: 2,
    question: "Một dự án xe tự hành áp dụng Active Learning để chọn ra 5.000 ảnh từ kho 100.000 ảnh thô. Trong quá trình vận hành, đội kỹ sư đối mặt với 3 chế độ thất bại điển hình: Cold Start, Collective Outlier và Model Coupling. Giải pháp quản trị và công cụ xử lý nào sau đây là ĐÚNG?",
    options: [
      "Ở vòng lặp đầu tiên (Cold Start), nên dùng ngay điểm Uncertainty của mô hình chưa huấn luyện để lọc lấy các bức ảnh bị nhòe nặng hoặc che khuất 95% (Collective Outlier)",
      "Hàm compute_mistakenness trong công cụ FiftyOne có khả năng tự động sửa trực tiếp toàn bộ các nhãn sai của con người mà không cần bước kiểm duyệt lại",
      "Một tập dữ liệu được chọn tối ưu riêng cho kiến trúc mô hình A chắc chắn sẽ luôn đạt hiệu quả cao hơn tập chọn ngẫu nhiên khi chuyển sang huấn luyện kiến trúc mô hình B ở 6 tháng sau",
      "Khi chưa có mô hình hoặc ở vòng 0, có thể dùng hàm compute_uniqueness của FiftyOne để chọn mẫu đa dạng; kết hợp Ensemble Scoring + Diversity Sampling giúp đạt hiệu năng vượt baseline chỉ với 42% lượng dữ liệu; đồng thời phải lưu trữ manifest độc lập vì dữ liệu luôn sống lâu hơn kiến trúc mô hình (outlives models)"
    ],
    correctAnswer: 3,
    explanation: "Ba bẫy lớn của Active Learning: (1) Cold Start: vòng đầu model còn non nên uncertainty vô nghĩa → dùng compute_uniqueness của FiftyOne (không cần nhãn hay model, chạy ngay từ vòng 0); (2) Collective Outlier: ảnh nhòe nặng/che 95% có uncertainty cực cao nhưng không học được; (3) Model Coupling: dữ liệu chọn theo điểm yếu của Model A có thể thua cả chọn ngẫu nhiên khi đổi sang Model B ('Annotated data often outlives models'). Kết hợp Ensemble Scoring + Diversity Sampling trong thực tế giúp vượt baseline khi chỉ cần gán nhãn 42% dữ liệu."
  },

  // ==================== KHOI 3: CAM BIEN CHUYEN BIET 2D (NGAY 9 - 11: 30 CAU) ====================
  {
    id: 61, day: 9, module: 3,
    question: "Trong bài toán Road Elements, sự khác biệt cốt lõi về mặt bản chất giữa 'Lane Marking', 'Lane Boundary' và 'Lane Centerline' khi thiết kế nhãn cho hệ thống tự hành là gì?",
    options: [
      "Lane Marking và Lane Boundary đều là đa giác khép kín (polygon) bao quanh toàn bộ mặt đường; còn Lane Centerline là hộp bao 2D khoanh vùng các mũi tên chỉ hướng trên mặt nhựa",
      "Lane Marking là đường tâm ảo của làn xe; Lane Boundary là vạch sơn vật lý bắt buộc nhìn thấy rõ bằng camera; Lane Centerline là ranh giới phân cách giữa mặt đường nhựa và vỉa hè",
      "Lane Marking là vạch sơn vật lý nhìn thấy trên ảnh; Lane Boundary là ranh giới logic của làn (có thể ẩn hoặc đứt đoạn); Lane Centerline là đường tâm phục vụ lập kế hoạch quỹ đạo (planning/topology)",
      "Ba khái niệm này hoàn toàn đồng nhất trong không gian ảnh 2D và chỉ khác tên gọi tùy theo định dạng xuất dữ liệu của từng công cụ gán nhãn như CVAT, Labelbox hay Scale AI"
    ],
    correctAnswer: 2,
    explanation: "Theo slide 11 (Day 9), không được trộn lẫn 3 khái niệm: Lane Marking là vạch kẻ vật lý nhìn thấy trên mặt đường (gán bằng polyline); Lane Boundary là ranh giới logic của một làn (có thể không nhìn thấy đầy đủ); còn Lane Centerline là đường giữa làn phục vụ bài toán planning/map/topology (như tập dữ liệu OpenLane-V2)."
  },
  {
    id: 62, day: 9, module: 3,
    question: "Khi gán nhãn vạch kẻ đường (Lane Marking) bằng công cụ Polyline trong CVAT, nếu một chiếc xe tải phía trước che khuất hoàn toàn một đoạn vạch kẻ giữa khung hình và guideline không cho phép nội suy (interpolation), thao tác xử lý chuẩn là gì?",
    options: [
      "Dùng một đường Polyline duy nhất nối xuyên thẳng qua gầm xe tải và bật cờ thuộc tính visibility = visible cho toàn tuyến",
      "Kéo đường Polyline vòng theo biên giới hạn của bánh xe tải để tránh đè lên vùng pixel của phương tiện giao thông",
      "Chuyển đổi hình học từ dạng Polyline sang dạng Polygon để khoanh vùng toàn bộ khoảng trống ước lượng bên dưới gầm xe tải",
      "Dừng điểm nút Polyline ngay tại ranh giới bị xe tải che khuất và tách phần vạch nhìn thấy phía sau xe thành một Polyline độc lập"
    ],
    correctAnswer: 3,
    explanation: "Theo quy tắc Polyline Annotation Rules (slide 12 & 14 - Day 9): Bắt đầu từ nơi marking nhìn thấy rõ, dừng khi bị che khuất hoặc biến mất. Nếu xe che vạch, tuyệt đối không nối xuyên qua vật che (trừ khi guideline yêu cầu nội suy amodal), mà phải tách thành hai đoạn polyline rời tại điểm khuất."
  },
  {
    id: 63, day: 9, module: 3,
    question: "Trong thiết kế Schema thuộc tính cho vạch kẻ đường (Lane Attributes), tại sao trường 'confidence / needs_review' được nhấn mạnh là KHÔNG phải thuộc tính Ground Truth (GT)?",
    options: [
      "Vì trường này chỉ đóng vai trò cờ vận hành (operational flag) giúp đánh dấu các ca nhập nhằng để Reviewer kiểm tra và đưa vào Decision Log",
      "Vì trường này dùng để lưu trữ điểm số xác suất đầu ra (softmax score) trực tiếp từ mô hình phát hiện làn đường tự động",
      "Vì công cụ CVAT không cho phép xuất các thuộc tính dạng chuỗi ký tự hoặc boolean ra định dạng chuẩn BDD100K hay COCO",
      "Vì độ tự tin của vạch kẻ đường đã được mã hóa tự động thông qua mật độ điểm nút (point density) trên đường gấp khúc Polyline"
    ],
    correctAnswer: 0,
    explanation: "Theo slide 13 (Day 9), các thuộc tính như style (solid/dashed/mixed), color (white/yellow), type (single/double/curb/crosswalk) là ngữ nghĩa Ground Truth để huấn luyện AI; riêng 'confidence / needs_review' không phải là thuộc tính vật lý của đường mà là cờ quy trình để báo hiệu ca khó cho đội QA/Reviewer."
  },
  {
    id: 64, day: 9, module: 3,
    question: "Khi phân vùng không gian di chuyển (Drivable Area) theo chuẩn phân tách kiểu BDD100K, tiêu chí nào phân biệt chính xác giữa vùng 'Direct Drivable' và vùng 'Alternative Drivable'?",
    options: [
      "Direct Drivable là mọi vùng bề mặt rải nhựa asphalt nhìn thấy được; Alternative Drivable là vùng vỉa hè, đảo giao thông hoặc lề cỏ khi khẩn cấp",
      "Direct Drivable là làn đường hiện tại xe tự hành được phép đi thẳng hợp lệ; Alternative Drivable là làn lân cận hoặc làn rẽ cần chuyển làn mới vào được",
      "Direct Drivable là phần đường dành riêng cho xe buýt và xe đạp; Alternative Drivable là phần làn đường chính mà xe tự hành (ego vehicle) đang chạy",
      "Direct Drivable là vùng mặt đường gần đầu xe dưới 20m; Alternative Drivable là vùng mặt đường ở xa sát đường chân trời (horizon) bị mờ nhòe"
    ],
    correctAnswer: 1,
    explanation: "Theo slide 18 (Day 9), Direct Drivable là vùng hiện tại ego vehicle đang đi theo luật/lộ trình chính (không gồm vỉa hè, đảo giao thông, làn ngược chiều cấm vượt). Alternative Drivable là vùng có thể di chuyển trong một số tình huống (như làn kế bên cùng chiều hoặc làn rẽ hợp lệ) phục vụ lập kế hoạch chuyển làn."
  },
  {
    id: 65, day: 9, module: 3,
    question: "Tại sao trong kiểm thử chất lượng (QC) cho bài toán Drivable Area, một đa giác (Polygon) đạt chỉ số giao trên hợp (IoU) tổng thể rất cao (> 0.92) vẫn có thể bị đánh giá là lỗi nghiêm trọng (Major/Critical Defect) cần phải làm lại (Rework)?",
    options: [
      "Vì chỉ số IoU vùng lớn làm lu mờ lỗi tràn biên (boundary leakage) ăn lấn vài pixel lên vỉa hè (sidewalk) hoặc bó vỉa (curb) ngay sát mũi xe ego",
      "Vì đa giác đó không được vẽ nối kéo dài xuyên qua các phương tiện đang đỗ tới tận đường chân trời của khung hình",
      "Vì người gán nhãn đã tạo lỗ thủng (hole) hoặc cắt ranh giới bao quanh các đảo giao thông (island) và xe đang đỗ thay vì tô kín toàn bộ mặt đường",
      "Vì người gán nhãn sử dụng ít hơn 200 điểm đỉnh (vertices) trên các đoạn đường thẳng làm giảm dung lượng file xuất JSON"
    ],
    correctAnswer: 0,
    explanation: "Theo slide 20 & 22 (Day 9), Drivable Area có diện tích pixel rất lớn nên IoU tổng thể dễ đạt mức cao. Tuy nhiên, nếu biên polygon tràn lên sidewalk/curb hoặc điền đè qua đảo giao thông gần ego vehicle, hệ thống điều khiển (planner) sẽ học rằng vỉa hè có thể chạy lên được, gây nguy cơ tai nạn trực tiếp."
  },
  {
    id: 66, day: 9, module: 3,
    question: "Theo quy trình cây quyết định (Decision Tree) 5 bước để gán nhãn thuộc tính 'Relevance' cho đèn tín hiệu giao thông (Traffic Light), khi đèn nằm rõ trong tầm nhìn nhưng bị lóa hoặc thiếu bằng chứng hình học để xác định nó thuộc nhánh đường nào, người gán nhãn phải xử lý ra sao?",
    options: [
      "Mặc định gán nhãn ego_relevant = true cho tất cả các đèn màu đỏ để đảm bảo xe tự hành luôn phanh an toàn tối đa",
      "Xóa bỏ hoàn toàn hộp bao (Bounding Box) của đèn giao thông đó khỏi khung hình để tránh gây nhiễu cho bộ phát hiện",
      "Sử dụng giá trị thuộc tính not_relevant hoặc unknown_relevance theo đúng quy định của schema và tuyệt đối không suy đoán cảm tính",
      "Tự động sao chép thuộc tính Relevance của cột đèn gần nhất ở phía bên trái sang cột đèn đang bị khuất hoặc thiếu bằng chứng"
    ],
    correctAnswer: 2,
    explanation: "Theo slide 26 (Day 9) - Traffic light relevance decision tree: Sau khi xét FOV/visibility (B1), nhánh đường/làn dựa trên vị trí/mũi tên/gantry (B2), hướng đi của ego (B3) và đối tượng điều khiển (B4), nếu ở Bước 5 thiếu bằng chứng thực tế thì bắt buộc phải dùng not_relevant hoặc unknown_relevance theo schema, tuyệt đối không đoán."
  },
  {
    id: 67, day: 9, module: 3,
    question: "Khi thực hiện QC chuỗi thời gian (Temporal Consistency) cho đèn giao thông qua video, hiện tượng nào sau đây là tín hiệu cảnh báo lỗi gán nhãn (QC Signal) cần kiểm tra lại ngay?",
    options: [
      "Trạng thái màu đèn (state) chuyển tiếp tuần tự từ xanh sang vàng rồi sang đỏ trong khi thuộc tính relevance của đèn đó giữ nguyên",
      "Thuộc tính màu đèn chuyển sang trạng thái unknown trong 3 khung hình liên tiếp khi một chiếc xe tải lớn chạy ngang che khuất hoàn toàn cột đèn",
      "Đèn tín hiệu dành cho người đi bộ (pedestrian light) giữ nguyên trạng thái red và thuộc tính not_relevant trong suốt toàn bộ đoạn video",
      "Cùng một cột đèn ở vị trí cố định trên giá long môn nhưng thuộc tính relevance liên tục nhảy đổi giữa relevant và not_relevant qua các frame kế tiếp"
    ],
    correctAnswer: 3,
    explanation: "Theo slide 27 (Day 9): Qua chuỗi video, trạng thái màu đèn (state) có thể thay đổi theo chu kỳ logic (green -> yellow -> red), nhưng mức độ liên quan (relevance) với làn xe ego thường ổn định. Hiện tượng cùng một đèn lúc thì relevant, lúc thì not_relevant gọi là 'Relevance drift' (trôi thuộc tính liên quan) – một lỗi QC điển hình."
  },
  {
    id: 68, day: 9, module: 3,
    question: "Để giải quyết bài toán 'Bùng nổ phân lớp' (Class Explosion) khi danh mục có tới hơn 500 loại biển báo giao thông khác nhau, cấu trúc phân cấp (Hierarchy) 3 tầng kết hợp thuộc tính nào được khuyến nghị trong bài giảng?",
    options: [
      "Level 1: Kích thước pixel -> Level 2: Khoảng cách tới camera -> Level 3: Góc nghiêng biển báo; kèm thuộc tính thời tiết",
      "Level 1: sign_family (nhóm biển) -> Level 2: sign_type (loại biển) -> Level 3: exact_code/symbol (nếu đọc rõ); kèm thuộc tính readable, occluded, relevant_to_ego, temporary",
      "Level 1: Màu sắc viền -> Level 2: Chất liệu phản quang -> Level 3: Chiều cao cột đỡ; kèm thuộc tính tên nhà sản xuất biển báo",
      "Level 1: Biển nội đô -> Level 2: Biển cao tốc -> Level 3: Biển nông thôn; và tạo thêm class mới ngay mỗi khi gặp một biển báo hiếm"
    ],
    correctAnswer: 1,
    explanation: "Theo slide 31 & 34 (Day 9), để tránh tạo hàng trăm class phẳng gây chậm trễ và bất đồng giữa các annotator, hệ thống cần chia 3 tầng: Level 1 (sign_family: regulatory, warning, guide, temporary), Level 2 (sign_type), Level 3 (exact_code/symbol nếu đủ rõ) và tách các tính chất biến thiên (readable, occluded, relevant_to_ego, temporary) thành Attributes."
  },
  {
    id: 69, day: 9, module: 3,
    question: "Khi gặp một cột biển báo có nhiều bảng biển xếp chồng lên nhau (Stacked Signs) mang ý nghĩa điều khiển khác nhau (ví dụ: biển cấm rẽ trái ở trên và biển giới hạn tốc độ ở dưới), quy tắc xác định đơn vị gán nhãn (Unit of Annotation) chuẩn là gì?",
    options: [
      "Vẽ một hộp bao (Bounding Box) lớn duy nhất ôm trọn cả cột sắt lẫn toàn bộ các bảng biển báo trên cột đó",
      "Dùng công cụ Polyline để kẻ một đường thẳng đứng nối tâm của các bảng biển báo từ đỉnh cột xuống sát mặt đất",
      "Chỉ vẽ hộp bao cho bảng biển báo nằm ở vị trí cao nhất trên cột và bỏ qua tất cả các bảng biển nằm phía dưới",
      "Tách riêng và vẽ hộp bao độc lập cho từng bảng biển báo (sign panel) có ý nghĩa riêng, không gộp chung cả trụ đỡ"
    ],
    correctAnswer: 3,
    explanation: "Theo slide 32 & 34 (Day 9) về 'Box what? sign panel, symbol, or sign group?': Với Stacked signs (nhiều panel trên cùng một cột), nếu mỗi panel mang ý nghĩa khác nhau thì bắt buộc phải tách và vẽ box quanh từng sign panel riêng biệt, tránh lấy cả cột (pole) hoặc gộp chung làm mất ngữ nghĩa từng biển."
  },
  {
    id: 70, day: 9, module: 3,
    question: "Trong chiến lược thu thập dữ liệu (Data Collection) và lấy mẫu kiểm định (QA Sampling Plan) cho bài toán Road Elements, nguyên tắc nào sau đây giúp ngăn chặn rò rỉ dữ liệu (Data Leakage) và đảm bảo phát hiện lỗi ở các tình huống khó?",
    options: [
      "Chia dữ liệu theo đơn vị clip/lộ trình/địa điểm/thời gian (split by clip/route/location/time) và lấy mẫu quá mức (oversample) các lát cắt khó như giao lộ, ban đêm, mưa lóa, biển báo nhỏ ở xa",
      "Chia tập Train/Val/Test bằng cách bốc ngẫu nhiên từng khung hình (random frame split) và chỉ lấy mẫu QA trên các đoạn đường thẳng trời nắng",
      "Gộp chung toàn bộ dữ liệu vào tập huấn luyện và dùng chính độ tự tin (confidence score) của mô hình detector làm nhãn chuẩn vàng (Gold Set)",
      "Giữ cố định một bộ Gold Set duy nhất gồm 10 ảnh đường cao tốc suốt toàn bộ dự án mà không cần làm mới (refresh) hay gắn thẻ phân loại (slice tags)"
    ],
    correctAnswer: 0,
    explanation: "Theo slide 40, 41 & 42 (Day 9): Để tránh Data Leakage, bắt buộc phải chia tập dữ liệu theo clip/route/location/time thay vì random frame. Đồng thời, QA không thể chỉ lấy mẫu ngẫu nhiên mà phải thực hiện slice-based sampling (oversample giao lộ, chói lóa, mưa đêm, vạch mờ, đèn/biển nhỏ ở xa) và làm mới Gold Set (5-15%) định kỳ."
  },
  {
    id: 71, day: 10, module: 3,
    question: "So sánh giữa hệ thống DMS (Driver Monitoring System) và OMS (Occupant Monitoring System) trong khoang lái thông minh, nhận định nào sau đây phản ánh ĐÚNG vị trí lắp đặt, phạm vi quan sát và cấu trúc điểm mốc (Landmarks) của từng hệ thống?",
    options: [
      "DMS dùng camera fisheye gắn trần xe quét 17 điểm toàn thân mọi hành khách; OMS dùng camera hồng ngoại trên trụ lái quét 50 điểm khuôn mặt tài xế",
      "Cả DMS và OMS đều chỉ lắp đặt ở cản trước của xe để phát hiện người đi bộ cắt ngang đầu xe nhưng sử dụng hai thuật toán xử lý ảnh khác nhau",
      "DMS đặt trên trụ lái/táp-lô tập trung vào khuôn mặt và mắt tài xế (50 điểm mốc mặt); OMS dùng camera góc rộng gắn trần xe giám sát toàn bộ khoang hành khách (nhiều bộ 17 điểm pose toàn thân)",
      "DMS chỉ hoạt động trên các dòng xe tự hành hoàn toàn cấp độ L4/L5 (Robotaxi); trong khi OMS chỉ được phép trang bị trên các dòng xe số sàn cấp độ L0"
    ],
    correctAnswer: 2,
    explanation: "Theo slide 5, 6, 8, 23 & 37 (Day 10): DMS đặt ở trụ lái/táp-lô nhìn thẳng vào mặt và mắt tài xế (sử dụng 50 facial landmarks) để đánh giá mức độ tỉnh táo/sẵn sàng tiếp quản (đặc biệt sống còn ở xe L2/L3). OMS gắn trên trần xe với ống kính góc siêu rộng (fisheye) nhìn toàn bộ khoang xe (dùng bộ 17 keypoints toàn thân cho mỗi người) để giám sát tư thế, dây an toàn và trẻ em bị bỏ quên."
  },
  {
    id: 72, day: 10, module: 3,
    question: "Trên các dòng xe tự động hóa có điều kiện (SAE Level 3, ví dụ Mercedes-Benz Drive Pilot), hệ thống DMS đóng vai trò tiên quyết như thế nào đối với tín hiệu Yêu cầu tiếp quản (Takeover Request - TOR)?",
    options: [
      "DMS tự động đánh lái và phanh xe thay cho hệ thống ADAS mỗi khi phát hiện phía trước có chướng ngại vật trên đường cao tốc",
      "DMS chỉ cho phép kích hoạt chế độ rời tay khỏi vô-lăng và đảm bảo phát tín hiệu TOR an toàn khi camera xác nhận mắt tài xế vẫn mở và đầu hướng về phía trước",
      "DMS làm mờ toàn bộ khuôn mặt tài xế theo thời gian thực để bảo mật quyền riêng tư trước khi gửi hình ảnh lên màn hình giải trí trung tâm",
      "DMS sẽ tự động tắt nguồn toàn bộ cảm biến trong khoang lái ngay khi xe chuyển từ chế độ lái thủ công sang chế độ tự hành cấp độ 3"
    ],
    correctAnswer: 1,
    explanation: "Theo slide 8 & 9 (Day 10): Ở cấp độ SAE L2/L3, xe vẫn cần con người tiếp quản khi gặp tình huống vượt khả năng xử lý. Hệ thống L3 thương mại chỉ cho phép tài xế rời tay khỏi vô-lăng khi DMS xác nhận mắt vẫn mở, đầu hướng về phía trước, và không thể phát TOR an toàn nếu không biết tài xế có đủ tỉnh táo để nhận lại quyền điều khiển hay không."
  },
  {
    id: 73, day: 10, module: 3,
    question: "Giả sử trên một khung hình camera DMS, 6 điểm mốc quanh viền mắt tài xế có tọa độ pixel lần lượt là: góc mắt trái p1(100, 200), góc mắt phải p4(140, 200); các cặp điểm mí trên và mí dưới tương ứng là p2(113, 194), p6(113, 206) và p3(127, 195), p5(127, 205). Theo công thức của Soukupová & Čech (2016), chỉ số Eye Aspect Ratio (EAR) của mắt này bằng bao nhiêu?",
    options: [
      "EAR = 0.1375",
      "EAR = 0.5500",
      "EAR = 0.2750",
      "EAR = 1.8182"
    ],
    correctAnswer: 2,
    explanation: "Theo công thức tại slide 20 (Day 10): EAR = (||p2 - p6|| + ||p3 - p5||) / (2 * ||p1 - p4||). Ta có khoảng cách dọc thứ nhất ||p2 - p6|| = |194 - 206| = 12 px; khoảng cách dọc thứ hai ||p3 - p5|| = |195 - 205| = 10 px; khoảng cách ngang góc mắt ||p1 - p4|| = |100 - 140| = 40 px. Thay vào công thức: EAR = (12 + 10) / (2 * 40) = 22 / 80 = 0.2750."
  },
  {
    id: 74, day: 10, module: 3,
    question: "Tại sao trong các hệ thống DMS thương mại, chỉ số PERCLOS (Wierwille et al., FHWA 1994) kết hợp với chỉ số MAR (Mouth Aspect Ratio) lại giúp phát hiện trạng thái buồn ngủ đáng tin cậy hơn việc chỉ xét ngưỡng EAR trên một khung hình đơn lẻ?",
    options: [
      "Vì một cú chớp mắt sinh lý bình thường cũng làm EAR tụt xuống gần 0 trong vài frame; PERCLOS tính tỷ lệ % thời gian mắt nhắm ≥ 80% trong cửa sổ ~1 phút giúp lọc bỏ chớp mắt, còn MAR tăng cao kéo dài 1–2 giây bắt được hành vi ngáp sớm",
      "Vì chỉ số EAR không thể tính toán được trên ảnh hồng ngoại đen trắng (IR), nên bắt buộc phải thay thế hoàn toàn bằng phép đo chiều rộng miệng MAR",
      "Vì PERCLOS đo tần số nhịp tim của tài xế qua vô-lăng, trong khi MAR đo âm lượng tiếng ngáy của tài xế thông qua hệ thống micro trong cabin",
      "Vì chỉ số EAR chỉ giảm xuống khi tài xế mở to mắt nhìn đường, còn khi tài xế nhắm mắt ngủ gật thì giá trị EAR sẽ tăng vọt lên mức cực đại"
    ],
    correctAnswer: 0,
    explanation: "Theo slide 20, 21 & 22 (Day 10): Một cú chớp mắt bình thường diễn ra rất nhanh (chỉ vài frame) cũng làm EAR sụt giảm. Nếu chỉ đặt ngưỡng trên 1 frame sẽ báo động giả liên tục. PERCLOS đếm % thời gian mắt nhắm ≥ 80% trong cửa sổ thời gian (thường 1 phút, ngưỡng buồn ngủ ~15%) để giữ lại xu hướng nhắm mắt kéo dài; còn MAR tăng vọt và giữ mức cao trong 1–2 giây giúp bắt dấu hiệu ngáp (yawning) – triệu chứng sớm trước khi mắt díu lại."
  },
  {
    id: 75, day: 10, module: 3,
    question: "Trong bộ cấu trúc 50 điểm mốc khuôn mặt (50 Facial Landmarks) sử dụng cho bài toán DMS của khóa học, số lượng điểm mốc được phân bổ vào từng vùng giải phẫu như thế nào?",
    options: [
      "Lông mày trái/phải: 4 + 4 điểm; Sống mũi: 6 điểm; Mắt trái/phải: 6 + 6 điểm; Môi ngoài: 16 điểm; Môi trong: 8 điểm (Tổng 50 điểm)",
      "Lông mày trái/phải: 6 + 6 điểm; Sống mũi: 8 điểm; Mắt trái/phải: 5 + 5 điểm; Môi ngoài: 10 điểm; Môi trong: 10 điểm (Tổng 50 điểm)",
      "Viền hàm dưới: 17 điểm; Lông mày: 10 điểm; Sống mũi: 9 điểm; Mắt trái/phải: 4 + 4 điểm; Môi ngoài: 6 điểm (Tổng 50 điểm)",
      "Lông mày trái/phải: 5 + 5 điểm; Sống mũi: 4 điểm; Mắt trái/phải: 8 + 8 điểm; Môi ngoài: 12 điểm; Môi trong: 8 điểm (Tổng 50 điểm)"
    ],
    correctAnswer: 3,
    explanation: "Theo bảng phân bổ tại slide 23 & 32 (Day 10), bộ 50 điểm khuôn mặt của khóa học bao gồm: Lông mày trái/phải: 5 + 5 (10 điểm, tính góc mày); Sống mũi: 4 điểm (mốc tham chiếu ước lượng góc nghiêng đầu); Mắt trái/phải: 8 + 8 (16 điểm, tính EAR); Môi ngoài: 12 điểm và Môi trong: 8 điểm (20 điểm môi, tính MAR và độ mở miệng)."
  },
  {
    id: 76, day: 10, module: 3,
    question: "Để phát hiện chính xác hành vi 'Rời mắt khỏi đường' (Eyes-off-road) và phân biệt với hành vi 'Sử dụng điện thoại' (Phone use), hệ thống DMS cần kết hợp những tín hiệu hình học nào?",
    options: [
      "Chỉ cần dùng duy nhất 4 điểm trên sống mũi để biết tài xế đang nhìn vào gương chiếu hậu hay đang bấm màn hình điện thoại",
      "Ước lượng góc đầu 3 trục (Yaw: quay trái/phải, Pitch: cúi/ngẩng, Roll: nghiêng) kết hợp vị trí con ngươi để suy ra hướng nhìn (gaze); riêng hành vi dùng điện thoại cần kết hợp thêm hướng nhìn cúi xuống với keypoint bàn tay/vai",
      "Chỉ cần đo tỷ lệ mở miệng MAR; nếu miệng tài xế mở rộng quá 2 giây thì hệ thống kết luận ngay là tài xế đang rời mắt khỏi đường để dùng điện thoại",
      "Đếm số lượng hành khách ngồi ở ghế sau thông qua camera OMS để suy ra tài xế có đang sử dụng điện thoại di động hay không"
    ],
    correctAnswer: 1,
    explanation: "Theo slide 11 & 24 (Day 10): Từ vị trí tương đối của mắt – mũi – miệng, hệ thống ước lượng Head Pose theo 3 trục Yaw (quay trái/phải), Pitch (cúi/ngẩng), Roll (nghiêng) kết hợp vị trí con ngươi để xác định Gaze (hướng nhìn) phục vụ phát hiện Eyes-off-road. Đối với Phone use, chỉ khuôn mặt là chưa đủ mà phải kết hợp hướng nhìn cúi xuống (Pitch) với tư thế tay/vai (keypoints tay/vai)."
  },
  {
    id: 77, day: 10, module: 3,
    question: "Khi gán nhãn 50 điểm mốc khuôn mặt trên ảnh hồng ngoại (IR) của DMS, nếu tài xế đeo kính có gọng dày hoặc xuất hiện đốm phản xạ ánh sáng IR (glare) trên tròng kính che khuất một phần viền mắt, quy tắc xử lý chuẩn trong CVAT là gì?",
    options: [
      "Ước lượng vị trí giải phẫu thực của mí mắt bên dưới gọng kính/đốm lóa, đặt điểm mốc vào đúng vị trí đó và bật thuộc tính occluded=1 (tương đương v=1)",
      "Dịch chuyển các điểm mốc viền mắt ra nằm đè lên viền ngoài của gọng kính nơi có độ tương phản pixel rõ nét nhất",
      "Xóa bỏ các điểm mốc bị gọng kính che hoặc bật cờ outside=1 để bộ huấn luyện bỏ qua hoàn toàn vùng mắt đó",
      "Hủy bỏ toàn bộ khung hình có người đeo kính vì camera hồng ngoại hoàn toàn không được phép sử dụng cho người đeo kính"
    ],
    correctAnswer: 0,
    explanation: "Theo slide 18, 32 & 33 (Day 10): Dữ liệu DMS/OMS trong CVAT kế thừa quy tắc 3 trạng thái của COCO-17 nhưng đổi tên thuộc tính: occluded=0/1 thay cho v=2/1 và outside=1 thay cho v=0. Khi gọng kính hoặc đốm sáng IR che viền mắt, annotator vẫn phải ước lượng theo giải phẫu khuôn mặt để đặt điểm và bật cờ occluded=1, tuyệt đối không bỏ trống (chỉ bật outside=1 khi điểm thực sự ra ngoài khung hình)."
  },
  {
    id: 78, day: 10, module: 3,
    question: "So sánh hai kiến trúc học sâu nhận diện hành vi từ chuỗi khung xương (Skeleton-based Action Recognition) là ST-GCN (Yan et al., AAAI 2018) và PoseC3D (Duan et al., CVPR 2022), điểm khác biệt cốt lõi về biểu diễn dữ liệu và độ bền vững (robustness) của chúng là gì?",
    options: [
      "ST-GCN biến mỗi khung hình thành ảnh màu RGB 2D; còn PoseC3D chỉ sử dụng mạng hồi quy tuyến tính đơn giản trên một khung hình tĩnh duy nhất",
      "ST-GCN không cần thông tin kết nối các khớp xương; trong khi PoseC3D bắt buộc phải sử dụng cảm biến LiDAR 3D quét ngoài trời mới hoạt động được",
      "ST-GCN biểu diễn khớp thành đỉnh đồ thị không gian-thời gian theo topology cố định; còn PoseC3D chuyển mỗi khớp/cạnh thành các bản đồ nhiệt 2D (heatmaps) xếp chồng thành khối 4D (C×T×H×W) đưa vào mạng 3D-CNN nên bền vững hơn trước sai số ước lượng keypoint",
      "Cả hai mô hình đều tính toán chỉ số EAR và MAR bằng công thức toán học cố định chứ không học đặc trưng từ dữ liệu gán nhãn"
    ],
    correctAnswer: 2,
    explanation: "Theo slide 26, 27, 28 & 29 (Day 10): ST-GCN coi các keypoint là đỉnh của đồ thị nối theo topology skeleton và xếp qua thời gian để tích chập đồ thị (nhưng nhạy cảm nếu tọa độ điểm đơn lẻ bị lệch). Ngược lại, PoseC3D biến mỗi khớp/limb thành một heatmap 2D (đốm sáng mờ xác suất), xếp theo trục thời gian thành khối 4 chiều (C×T×H×W) rồi đưa qua mạng 3D-CNN, giúp mô hình bền vững (robust) hơn nhiều khi keypoint estimator có nhiễu."
  },
  {
    id: 79, day: 10, module: 3,
    question: "Tại sao hệ thống giám sát khoang xe OMS sử dụng thị giác máy tính (Computer Vision) lại vượt trội hơn cảm biến cơ học truyền thống trong bài toán kiểm tra dây an toàn (Seatbelt Detection) và bung túi khí (Airbag Deployment)?",
    options: [
      "Vì camera OMS có thể tự động thắt dây an toàn cơ học giúp hành khách ngay khi xe bắt đầu lăn bánh trên đường",
      "Vì OMS xác nhận trực quan vị trí dây vắt qua người (không bị đánh lừa khi gài chốt khóa giả sau lưng) và nhận diện tư thế ngồi thực tế (cúi người, nằm ngả) để điều chỉnh lực bung túi khí không gây chấn thương",
      "Vì camera OMS không bao giờ gặp hiện tượng che khuất (occlusion) ngay cả khi hành khách ngồi ghế sau bị lưng ghế trước che khuất",
      "Vì hệ thống OMS chỉ cần 1 điểm keypoint duy nhất ở mũi là có thể xác định được toàn bộ tư thế xương sống và trạng thái dây đai của 5 người"
    ],
    correctAnswer: 1,
    explanation: "Theo slide 12 (Day 10): Cảm biến khóa đai cơ học rất dễ bị 'đánh lừa' bằng cách cắm chốt giả hoặc gài dây vòng ra sau lưng; OMS dùng thị giác xác nhận dây an toàn thực sự vắt qua thân người. Ngoài ra, OMS phân tích pose toàn thân (ngồi thẳng, cúi sát táp-lô, nằm ngả) – thông tin sống còn để hệ thống điều khiển túi khí (airbag) quyết định cách bung an toàn, tránh gây nguy hiểm cho người ngồi sai tư thế (out-of-position)."
  },
  {
    id: 80, day: 10, module: 3,
    question: "Khi gán nhãn chuỗi video OMS quay từ camera ống kính mắt cá (Fisheye) gắn trên trần xe với nhiều người ngồi trong cabin, thách thức kỹ thuật nào đòi hỏi người gán nhãn phải đặc biệt cẩn trọng?",
    options: [
      "Mọi đường thẳng giải phẫu đều giữ nguyên tính thẳng tuyệt đối ở rìa ảnh fisheye nên chỉ cần đặt 2 keyframe ở đầu và cuối video dài 10 phút",
      "Chỉ được phép gán nhãn cho một người duy nhất trong mỗi khung hình nên phải xóa toàn bộ hộp bao của hành khách ngồi ở hàng ghế sau",
      "Tất cả các khớp bị lưng ghế trước hoặc ghế trẻ em che khuất đều phải gán cờ outside=1 để xóa khỏi cấu trúc đồ thị khung xương",
      "Độ méo phi tuyến mạnh ở rìa ống kính fisheye làm tay/chân thẳng trông bị cong và khiến nội suy tuyến tính giữa hai keyframe xa nhau bị 'cắt góc' lệch khỏi quỹ đạo khớp thật, đồng thời cần duy trì Track ID riêng cho từng người qua các vùng che khuất nặng"
    ],
    correctAnswer: 3,
    explanation: "Theo slide 38 & 39 (Day 10): Gán nhãn OMS trên ảnh fisheye trần xe có 3 thách thức lớn: (1) Đa đối tượng (mỗi người một box person + bộ 17 điểm + Track ID xuyên suốt); (2) Occlusion dày đặc do ghế trước/ghế trẻ em che (vẫn phải ước lượng giải phẫu và đặt occluded=1); (3) Độ méo fisheye không đều giữa tâm và rìa khiến nội suy tuyến tính (linear interpolation) giữa 2 keyframe cách xa bị 'cắt góc' sai lệch so với chuyển động cong trên ảnh."
  },
  {
    id: 81, day: 11, module: 3,
    question: "Ống kính mắt cá (Fisheye Lens) trong hệ thống camera quan sát toàn cảnh 360° (SVM) gây ra 3 sự biến đổi hình học cốt lõi nào làm phá vỡ các giả định của guideline camera phẳng (Pinhole Camera) thông thường?",
    options: [
      "Đảo ngược màu sắc RGB thành ảnh âm bản; phóng đại vật thể ở xa lớn hơn vật thể ở gần; và tự động xóa phông nền",
      "Làm mất hoàn toàn khả năng ghi hình ở tốc độ thấp dưới 20 km/h; chỉ nhìn thấy vật thể phát sáng; và tự động nắn thẳng mọi vạch kẻ đỗ xe",
      "Biến dạng hình học (Shape: đường thẳng bị uốn cong); biến thiên tỷ lệ mạnh (Scale: kích thước pixel thay đổi đột ngột theo vị trí tâm/rìa); và suy giảm chất lượng vùng biên (Edge: tối góc vignetting, mờ nhòe, cắt cụt)",
      "Biến tất cả các đa giác khép kín thành các đoạn thẳng rời rạc; làm tăng gấp đôi độ phân giải ở 4 góc ảnh; và triệt tiêu hoàn toàn hiện tượng che khuất"
    ],
    correctAnswer: 2,
    explanation: "Theo slide 7 (Day 11-1), Fisheye distortion phá vỡ 3 giả định quen thuộc của camera thường: (1) Shape: đường thẳng ngoài đời thực bị uốn thành đường cong, khiến bounding box không còn 'tự nhiên'; (2) Scale: cùng một vật thể nhưng kích thước pixel thay đổi cực mạnh khi đi từ tâm ra rìa ảnh (scale collapse); (3) Edge: vùng rìa chịu hiện tượng tối góc (vignetting), nhòe quang học (blur), cắt cụt (truncation)."
  },
  {
    id: 82, day: 11, module: 3,
    question: "Khi gán nhãn vạch kẻ ô đỗ xe (Parking Line) hoặc bó vỉa (Curb) bị uốn cong mạnh trên ảnh gốc mắt cá (Raw Fisheye Image), nguyên tắc hình học 'Đừng nắn thẳng dữ liệu bằng tay' (Do not mentally undistort) yêu cầu người gán nhãn thực hiện như thế nào?",
    options: [
      "Chỉ chấm đúng 2 điểm đầu và cuối để nối thành một đoạn thẳng tuyệt đối vì ngoài đời thực vạch kẻ ô đỗ xe luôn được sơn thẳng",
      "Dùng hộp bao chữ nhật 2D (Bounding Box) thay thế hoàn toàn cho Polyline để bao quanh mọi vạch kẻ đường bị cong ở vùng rìa ống kính",
      "Tự ý tưởng tượng và vẽ nối dài đường Polyline xuyên qua gầm xe đang đỗ cũng như phần cản xe (ego bumper) để tạo thành ô đỗ xe khép kín",
      "Đặt đủ mật độ điểm nút (control points) dọc theo độ cong thực tế nhìn thấy trên mặt phẳng ảnh và ngắt đoạn (break polyline) khi vạch bị xe khác hoặc thân xe ego che khuất"
    ],
    correctAnswer: 3,
    explanation: "Theo slide 11, 20 & 29 (Day 11-1) và mục C1 Rule LIN-01/02/03 (Day 11-2): Người gán nhãn phải bám sát bằng chứng pixel thực tế trên mặt phẳng ảnh (image plane), tuyệt đối không 'tự khử méo trong đầu' (mentally undistort) để kéo thẳng vạch. Phải thêm đủ điểm tại các vị trí thay đổi độ cong (curvature changes) và ngắt polyline ngay khi vạch bị khuất sau chướng ngại vật, thân xe ego hoặc đường ghép (seam)."
  },
  {
    id: 83, day: 11, module: 3,
    question: "Trong quy chuẩn gán nhãn đối tượng gần xe (Near-object Detection) của khóa học cho hệ thống SVM (Rules OBJ-01 đến OBJ-06), một chiếc ô tô ở rìa phải ảnh bị mép khung hình cắt mất 30% thân xe, trong khi một người đi bộ ở giữa ảnh bị một chiếc SUV đỗ phía trước che khuất phần chân. Cách gán thuộc tính đúng cho hai đối tượng này là gì?",
    options: [
      "Ô tô gán: truncated=true, occluded=false, edge_zone=true; Người đi bộ gán: occluded=true, truncated=false (box cả hai đều chỉ bao phần visible extent)",
      "Cả ô tô và người đi bộ đều phải vẽ hộp bao mở rộng vượt ra ngoài mép ảnh và xuyên qua chiếc SUV để ước lượng toàn bộ phần bị khuất",
      "Ô tô gán: occluded=true, truncated=false, edge_zone=false; Người đi bộ gán: occluded=false, truncated=true, edge_zone=true",
      "Xóa bỏ cả hai đối tượng khỏi tập dữ liệu Ground Truth vì bất kỳ đối tượng nào không nhìn thấy đủ 100% diện tích đều bị coi là nhiễu cảm biến"
    ],
    correctAnswer: 0,
    explanation: "Theo bảng quy tắc A2 & A3 trang 3-4 (Day 11-2): Trong quy ước SVM của khóa học, hộp bao bám theo phần nhìn thấy (visible extent - OBJ-01). Thuộc tính 'truncated=true' chỉ dùng khi vật bị cắt bởi biên ảnh (image border) hoặc thân xe ego (OBJ-02) kèm 'edge_zone=true' do nằm ở dải biến dạng rìa (OBJ-04). Ngược lại, người đi bộ bị xe khác che khuất nhưng không chạm biên ảnh thì gán 'occluded=true, truncated=false' (OBJ-03)."
  },
  {
    id: 84, day: 11, module: 3,
    question: "Trên ảnh ghép toàn cảnh từ trên xuống (Stitched / Surround Composite BEV), tại đường ranh giới ghép nối (Seam Zone) giữa camera trước và camera hông trái, bánh xe của một chiếc sedan xuất hiện lặp lại thành hai hình ảnh rời nhau (Duplicate Artifact). Người gán nhãn phải xử lý tình huống này như thế nào?",
    options: [
      "Vẽ hai hộp bao road_object độc lập cho cả hai hình ảnh bánh xe để mô hình học được rằng có hai phương tiện đang đi sát nhau",
      "Đánh dấu dải đường ghép bằng đa giác ignore_region (reason=stitch_seam) và chỉ giữ một nhãn đối tượng vật lý theo đúng chính sách composite, không nhân đôi số lượng GT",
      "Dùng phần mềm chỉnh sửa ảnh xóa trắng toàn bộ khu vực đường ghép trước khi tải dữ liệu lên hệ thống quản lý CVAT",
      "Tự động cộng gộp tọa độ của hai mảnh ghép bằng một hộp bao khổng lồ chiếm nửa khung hình BEV mà không cần gắn bất kỳ cờ thuộc tính nào"
    ],
    correctAnswer: 1,
    explanation: "Theo slide 8, 10, 22, 23 (Day 11-1) và trang 8, 11 (Day 11-2): Ảnh Stitched/Composite thường sinh ra lỗi cắt cụt hoặc nhân đôi vật thể tại đường ghép (stitch seam). Đây là artifact của phép chiếu ghép ảnh chứ không phải hai vật thể thật. Phải khoanh vùng dải lỗi bằng 'ignore_region' (reason=stitch_seam) và tuân thủ nguyên tắc không tạo hai Ground Truth vật lý cho cùng một đối tượng bị lặp tại seam."
  },
  {
    id: 85, day: 11, module: 3,
    question: "Tại sao việc gán nhãn tường minh các vùng 'Ignore Regions' (như ego_body, lens_border, stitch_seam, unreadable) lại được coi là một phần bắt buộc của Ground Truth chứ không phải là 'bỏ qua công việc'?",
    options: [
      "Vì các vùng ignore_region giúp làm tăng số lượng đa giác trên mỗi khung hình để người gán nhãn được tính thêm thù lao theo số điểm click chuột",
      "Vì mô hình AI sẽ sử dụng trực tiếp đa giác ego_body và lens_border để tính toán vận tốc di chuyển của các phương tiện ở làn đường đối diện",
      "Vì công cụ CVAT bắt buộc mọi pixel trên khung ảnh 1280×800 đều phải được phủ kín bởi ít nhất một lớp nhãn đa giác thì mới cho phép lưu file",
      "Vì nếu không đánh dấu ignore_region, quá trình huấn luyện (loss calculation) và đánh giá (evaluation) sẽ phạt oan mô hình hoặc ép mô hình học nhiễu tại những vùng bất khả kháng (như viền đen ống kính, vỏ xe ego, vết bùn che mờ)"
    ],
    correctAnswer: 3,
    explanation: "Theo slide 23 (Day 11-1) và mục D1 trang 7-8 (Day 11-2): Vùng viền đen quang học ở 4 góc ảnh fisheye (lens_border), phần cản/vỏ xe tự hành lọt vào camera (ego_body), đường ghép lỗi (stitch_seam) hay vùng bùn nước che mờ (unreadable) không chứa thông tin cảnh vật hợp lệ. Gán nhãn ignore_region giúp loại trừ các pixel này khỏi hàm tính Loss và Metric đánh giá, bảo vệ mô hình khỏi bị phạt sai."
  },
  {
    id: 86, day: 11, module: 3,
    question: "Khi thực hiện gán nhãn đa giác vùng trống có thể di chuyển gần xe (Free-space / Drivable-near-vehicle Polygon) cho hệ thống hỗ trợ đỗ xe SVM, sai lầm phổ biến nhất của người gán nhãn và trọng tâm kiểm soát chất lượng (QC Focus) là gì?",
    options: [
      "Sai lầm là vẽ vùng thực sự xe đi được thay vì tô hết mặt nhựa; trọng tâm QC chỉ cần kiểm tra ranh giới ở xa cách xe trên 50 mét",
      "Sai lầm là loại trừ phần cản xe (ego body) ra khỏi đa giác free-space; trọng tâm QC là bắt buộc đa giác phải bao trùm lên cả nắp capo và bánh xe chặn (wheel stopper)",
      "Sai lầm là tô toàn bộ bề mặt có kết cấu giống mặt đường (road texture) kể cả phần khuất sau xe đỗ/người đi bộ; trọng tâm QC đặt mức nghiêm trọng cao nhất (P0) cho lỗi biên ở ngay sát thân xe (near-ego boundary)",
      "Sai lầm là gắn thuộc tính blocked_by cho các chướng ngại vật; trọng tâm QC là yêu cầu nối liền một đa giác duy nhất xuyên qua các cột bê tông trong hầm đỗ xe"
    ],
    correctAnswer: 2,
    explanation: "Theo slide 19, 28 (Day 11-1) và mục B1, B2 trang 4-5 (Day 11-2): Lỗi phổ biến nhất là annotator vẽ 'road surface' (mọi nơi có màu nhựa đường) thay vì 'drivable by ego vehicle' (vùng thực sự khả thi để xe lùi/đỗ ở tốc độ thấp), hoặc tự suy diễn vùng đất khuất sau xe van/người đi bộ. Lỗi ranh giới ngay sát xe (near-ego boundary error) có mức độ nguy hiểm P0 vì dẫn tới va chạm trực tiếp khi đánh lái cự ly gần."
  },
  {
    id: 87, day: 11, module: 3,
    question: "Trong bài toán theo dõi đối tượng qua chuỗi video (Temporal Tracking) trên camera lùi/hông Fisheye, tại sao người gán nhãn được cảnh báo 'Không được quá tin tưởng vào nội suy tự động ở vùng rìa' (Do not over-trust interpolation in fisheye edge zones)?",
    options: [
      "Vì ở vùng rìa ống kính mắt cá, chuyển động và hình dạng hộp bao biến dạng phi tuyến rất nhanh (edge warp), khiến nội suy tuyến tính giữa hai keyframe bị lệch khỏi thân đối tượng",
      "Vì tính năng Track Mode của công cụ CVAT tự động bị vô hiệu hóa hoàn toàn mỗi khi tọa độ hộp bao vượt quá nửa bên phải của khung hình",
      "Vì các đối tượng khi đi vào vùng rìa ảnh fisheye luôn đứng yên tuyệt đối trong không gian thực nên không cần sử dụng bất kỳ keyframe nào",
      "Vì khi đối tượng rời khỏi trường nhìn (FOV) của camera fisheye, công cụ nội suy sẽ tự động bật cờ Outside=true mà con người không cần đánh dấu"
    ],
    correctAnswer: 0,
    explanation: "Theo slide 21 (Day 11-1) và mục E1, E2 trang 8-9 (Day 11-2): Khi người đi bộ hoặc phương tiện di chuyển từ vùng tâm ra vùng rìa ống kính fisheye, độ méo quang học làm kích thước và hình học của vật biến đổi (warp) phi tuyến tính rất nhanh trên mặt phẳng ảnh. Thuật toán nội suy tuyến tính giữa 2 keyframe (ví dụ từ frame 106 đến 112) sẽ tạo ra hộp bao bị trượt lệch ở frame 109, đòi hỏi phải chèn thêm corrective keyframe dày hơn ở vùng rìa và bật Outside khi vật rời FOV."
  },
  {
    id: 88, day: 11, module: 3,
    question: "Khi một chiếc SUV xuất hiện đồng thời trong vùng chồng lấn góc nhìn (Overlap Zone) của cả camera sau (rear) và camera hông phải (right) tại cùng một mốc thời gian (timestamp), chính sách gán nhãn xuyên camera (Cross-camera Consistency) nào sau đây là ĐÚNG?",
    options: [
      "Luôn luôn xóa bỏ hộp bao trên camera hông phải và chỉ giữ lại hộp bao trên camera sau trong mọi dự án để tiết kiệm bộ nhớ lưu trữ",
      "Nếu mục tiêu sản phẩm là huấn luyện bộ phát hiện độc lập trên từng camera (per-camera detector) thì giữ nguyên nhãn ở cả hai camera; nếu là bài toán hợp nhất (Fused/BEV) thì gán thêm correspondence_id khi có đủ bằng chứng đồng bộ timestamp và calibration_version hợp lệ",
      "Bắt buộc người gán nhãn phải tự ước lượng bằng mắt thường để ghép nối ID giữa hai camera ngay cả khi bị lệch mốc thời gian (timestamp) và không có thông số hiệu chuẩn",
      "Chuyển toàn bộ các đối tượng nằm trong vùng chồng lấn giữa hai camera thành vùng ignore_region để không phải xử lý bài toán đồng nhất thực thể"
    ],
    correctAnswer: 1,
    explanation: "Theo slide 22 (Day 11-1) và mục F1, F2 trang 10 (Day 11-2): Chính sách gán nhãn phụ thuộc vào mục tiêu đầu ra (Product target). Với Per-camera detector, mỗi ảnh là một mẫu huấn luyện độc lập nên tuyệt đối không xóa box ở camera này chỉ vì camera kia đã gán. Với Fused/BEV perception, cần liên kết qua correspondence_id kèm metadata calibration_version và đồng bộ timestamp; nếu bằng chứng mơ hồ thì phải escalate thay vì đoán mò."
  },
  {
    id: 89, day: 11, module: 3,
    question: "Trong tình huống thực tế (Incident Exercise - Slide 48): Đội AI huấn luyện mô hình phát hiện vật thể trên tập dữ liệu hỗn hợp 4 camera SVM và đạt chỉ số mAP tổng thể rất cao (0.91), nhưng đội QA phát hiện mô hình bỏ sót hàng loạt chướng ngại vật trên camera lùi (rear camera) trong hầm đỗ xe. Nguyên nhân hệ thống và bài học vận hành dữ liệu ở đây là gì?",
    options: [
      "Nguyên nhân chắc chắn 100% là do người gán nhãn làm sai và cách khắc phục duy nhất là sửa lại các nhãn đúng trên ảnh fisheye cho khớp với dự đoán sai của mô hình",
      "Khi chỉ số mAP tổng thể đã vượt qua ngưỡng 0.90 thì mọi lỗi bỏ sót trên camera lùi đều là chấp nhận được và có thể phát hành (release) ngay lập tức lên xe thương mại",
      "Chỉ số mAP tổng thể đã bị che lấp bởi các khung hình dễ từ camera trước/ngoài trời; việc thiếu phân tách đánh giá theo lát cắt (slice metrics: camera_id + zone + ODD parking garage) và thiếu Gold Set riêng cho từng camera đã bỏ lọt lỗi nghiêm trọng ở camera lùi",
      "Camera lùi có đặc tính quang học, phân phối lớp đối tượng và hồ sơ lỗi (error profile) hoàn toàn giống hệt với camera gắn kính chắn gió phía trước"
    ],
    correctAnswer: 2,
    explanation: "Theo slide 6, 34, 35, 37 & 48 (Day 11-1) và mục 7.2, 7.3 (Day 11-2): Một chiếc xe có 4 camera SVM (front, rear, left, right) ứng với 4 góc lắp, phân phối đối tượng và hồ sơ lỗi (bias) khác hẳn nhau. Nếu chỉ nhìn một con số 'overall accuracy / mAP' hoặc chỉ lấy Gold Set từ camera trước, điểm số sẽ cao giả tạo trong khi camera lùi ở hầm đỗ xe (hard slice) thất bại nặng. Bắt buộc phải tách báo cáo QA và thiết kế Gold Set/Sampling Plan theo từng camera_id + center/edge/seam + điều kiện chiếu sáng."
  },
  {
    id: 90, day: 11, module: 3,
    question: "Xu hướng các mô hình AI hiện đại cho hệ thống SVM 360° (như FisheyeBEVDet, FisheyePETR, FisheyeGaussianLift, OmniStereo, FishRoPE) thay đổi cách tiếp cận với độ méo ống kính mắt cá như thế nào, và điều đó đặt ra yêu cầu gì cho đội ngũ làm dữ liệu?",
    options: [
      "Thay vì khử méo ảnh thô sang ảnh phẳng (rectification/undistort) gây mất góc nhìn rìa và biến dạng nội suy, các mô hình này nhúng trực tiếp hình học cầu/fisheye vào kiến trúc mạng; do đó dữ liệu gán nhãn bắt buộc phải giữ đúng không gian cảm biến kèm đầy đủ metadata (camera_id, annotation_space, calibration_version)",
      "Các mô hình mới yêu cầu con người phải tự cắt ghép và vẽ lại từng pixel ảnh mắt cá thành ảnh phẳng bằng phần mềm đồ họa trước khi đưa vào mạng nơ-ron",
      "Các mô hình thế hệ mới hoàn toàn không cần đến bất kỳ dữ liệu gán nhãn 2D, 3D hay thông số hiệu chuẩn camera nào mà tự động sinh ra bản đồ đỗ xe",
      "Tất cả các mô hình này đều quy định chỉ gán nhãn các vật thể nằm trong bán kính 50 pixel tính từ tâm ảnh và xóa bỏ toàn bộ vùng biên của 4 camera"
    ],
    correctAnswer: 0,
    explanation: "Theo slide 43 & 45 (Day 11-1) và trang 2, 6, 7 (Day 11-2): Thay vì 'undistort rồi cầu may' (gây mất thông tin vùng rìa và tạo artifacts), các nghiên cứu mới như FisheyeBEVDet/FisheyePETR (biểu diễn hình học cầu), FisheyeGaussianLift (nâng pixel lên 3D Gaussians có độ bất định rồi hợp nhất sang BEV không cần khử méo), hay FishRoPE (Projective Rotary Position Embedding) làm việc trực tiếp với hình học fisheye. Vì vậy, annotator không chỉ vẽ nhiều box hơn mà phải bảo toàn tính chính xác theo annotation_space thực tế và cung cấp đầy đủ camera-aware metadata (camera_id, calibration_version, edge/ignore flags) hoặc sử dụng chuẩn góc điểm (corner/keypoint schema như ParkScape cho parking slot)."
  },

  // ==================== KHOI 4: 3D LIDAR & FUSION (NGAY 12 - 14: 30 CAU) ====================
  {
    id: 91, day: 12, module: 4,
    question: "Một cảm biến LiDAR phát xung laser tới mục tiêu cách xe 100 m khi xe đang chạy trên cao tốc với vận tốc 120 km/h (≈ 33,3 m/s). Với vận tốc ánh sáng c = 3 × 10^8 m/s, thời gian bay khứ hồi Δt của xung và quãng đường xe di chuyển được trong khoảng thời gian Δt đó xấp xỉ bao nhiêu?",
    options: [
      "Δt ≈ 1,33 μs và xe dịch chuyển khoảng 44 micromet (gây nhòe điểm theo phương dọc)",
      "Δt ≈ 0,33 μs và xe chỉ dịch chuyển khoảng 11 micromet (coi như đứng yên trong 1 xung)",
      "Δt ≈ 6,70 μs và xe dịch chuyển khoảng 2,2 milimet (cần bù chuyển động cho từng xung)",
      "Δt ≈ 0,67 μs và xe chỉ dịch chuyển khoảng 22 micromet (coi như đứng yên trong 1 xung)"
    ],
    correctAnswer: 3,
    explanation: "Theo nguyên lý Time-of-Flight (Slide 7 - Ngày 12): d = (c × Δt) / 2 ⇒ Δt = 2d / c = 200 / (3 × 10^8) ≈ 0,67 μs. Trong 0,67 μs này, xe chạy 33,3 m/s chỉ dịch chuyển quãng đường s = v × Δt ≈ 22 micromet (nhỏ hơn đường kính sợi tóc), nên trong một xung đo, vật và xe coi như đứng yên."
  },
  {
    id: 92, day: 12, module: 4,
    question: "Giả sử cảm biến LiDAR được gắn trên nóc xe ở độ cao h = 2,0 m so với mặt đường phẳng. Xét hai kênh tia laser chúc xuống có góc nâng (elevation angle) lần lượt là φ1 = -25° và φ2 = -2°. Khoảng cách bán kính vòng quét chạm đất (R = h / tan|φ|) giữa hai kênh này chênh lệch nhau xấp xỉ bao nhiêu mét?",
    options: [
      "Chênh lệch khoảng 53,0 m (vòng gần cách 4,3 m; vòng xa cách 57,3 m)",
      "Chênh lệch khoảng 46,0 m (vòng gần cách 11,3 m; vòng xa cách 57,3 m)",
      "Chênh lệch khoảng 15,6 m (vòng gần cách 4,3 m; vòng xa cách 19,9 m)",
      "Chênh lệch khoảng 38,4 m (vòng gần cách 7,0 m; vòng xa cách 45,4 m)"
    ],
    correctAnswer: 0,
    explanation: "Theo công thức bán kính vòng quét trên mặt đất R = h / tan(|φ|) (Slide 11 - Ngày 12): Với h = 2 m, tại φ1 = -25° ta có R1 = 2 / tan(25°) ≈ 4,3 m; tại φ2 = -2° ta có R2 = 2 / tan(2°) ≈ 57,3 m. Độ chênh lệch bán kính giữa hai vòng là 57,3 - 4,3 = 53,0 m, giải thích vì sao càng ra xa các vòng ring càng thưa dần."
  },
  {
    id: 93, day: 12, module: 4,
    question: "Vì sao các cảm biến LiDAR 64 kênh dùng cho xe tự lái (như Velodyne HDL-64) thường thiết kế mật độ tia laser tập trung dày quanh phương ngang (góc nâng 0°) và thưa dần khi chúc xuống đất, thay vì chia đều góc giữa mọi kênh?",
    options: [
      "Để giảm công suất tiêu thụ điện của các diode phát xung laser ở vùng góc chúc sâu dưới gầm xe",
      "Vì ở cự ly xa, cùng một độ lệch góc dọc sẽ tạo ra khoảng hở chiều cao rất lớn khiến vật xa bị mất điểm",
      "Để tránh hiện tượng giao thoa sóng ánh sáng khi các tia laser phản xạ từ mặt nhựa đường lên",
      "Vì vùng mặt đất gần xe đã có cảm biến IMU và camera góc rộng đo đạc thay thế hoàn toàn LiDAR"
    ],
    correctAnswer: 1,
    explanation: "Theo Slide 10 & 11 (Ngày 12), khoảng cách theo phương đứng giữa hai tia ở cự ly d tỉ lệ với d × Δφ. Ở cự ly xa (quanh phương ngang 0°), chỉ một độ lệch góc nhỏ cũng làm các tia tách xa nhau theo chiều cao. Do đó phải nhồi nhiều tia quanh 0° để vật thể ở xa vẫn nhận được đủ nhiều vòng điểm giúp nhận diện hình khối."
  },
  {
    id: 94, day: 12, module: 4,
    question: "Khi mở một frame point cloud trên công cụ gán nhãn, nếu bạn chỉ nhìn thấy các điểm phân bố trong một vùng hình quạt (hình nêm) phía trước mũi xe mà hoàn toàn không có các vòng tròn đồng tâm 360° bao quanh xe, điều này phản ánh đặc trưng của loại cảm biến nào?",
    options: [
      "Cảm biến LiDAR cơ khí quay 360° bị lỗi bộ mã hóa góc quay (encoder) ở nửa thân sau của xe",
      "Dữ liệu point cloud đã bị bộ lọc tiền xử lý cắt bỏ toàn bộ các điểm có tọa độ x > 0 trong ego frame",
      "Cảm biến LiDAR dạng quét nêm hướng trước (như Hesai AT128, Luminar Iris, Valeo Scala)",
      "Cảm biến LiDAR số hóa (Digital LiDAR) như Ouster OS1-64 hoạt động ở chế độ tiết kiệm băng thông"
    ],
    correctAnswer: 2,
    explanation: "Theo Slide 15 & 16 (Ngày 12), hình thái đám mây điểm phụ thuộc vào cơ chế quét: các dòng quay cơ khí 360° (Velodyne, Hesai Pandar, Ouster OS1) tạo ra các vòng đồng tâm quanh xe; trong khi các dòng hybrid/solid-state hướng trước (Hesai AT128, Luminar Iris, RoboSense M-series, Valeo Scala) chỉ quét vùng hình quạt (nêm) phía trước mũi xe."
  },
  {
    id: 95, day: 12, module: 4,
    question: "Khi đánh giá thuộc tính Cường độ phản xạ (Intensity) của điểm LiDAR trong thực tế gán nhãn, nhận định nào sau đây là ĐÚNG về bản chất vật lý và nguyên tắc sử dụng?",
    options: [
      "Mặt nhựa đường có intensity rất cao còn vạch sơn kẻ đường có intensity thấp do hấp thụ tia hồng ngoại",
      "Intensity phụ thuộc độ phản xạ bề mặt, góc tới và vật liệu; chỉ dùng hỗ trợ nhận diện chứ không thay thế tọa độ hình học XYZ",
      "Mỗi lớp đối tượng (Vehicle, Pedestrian) có một hằng số intensity cố định giúp phân loại tự động chính xác",
      "Intensity quyết định trực tiếp kích thước chiều cao H của hộp bao 3D Cuboid khi quan sát trên Front view"
    ],
    correctAnswer: 1,
    explanation: "Theo Slide 30–32 (Ngày 12), Intensity đo cường độ tín hiệu phản xạ quay về (lưu 8–16 bit), phụ thuộc vào hệ số phản xạ ρ của vật liệu, khoảng cách và góc tới (vạch sơn phản quang rất sáng, nhựa đường hấp thụ nên tối). Tuy nhiên trên thân xe hay người, intensity biến thiên theo từng bộ phận nên chỉ đóng vai trò hỗ trợ, còn bằng chứng hình học (X, Y, Z) luôn là yếu tố quyết định khi đặt cuboid."
  },
  {
    id: 96, day: 12, module: 4,
    question: "Trong hệ tọa độ thân xe (Ego Frame) chuẩn ROS REP-103 áp dụng trong guideline VinFast (X hướng trước, Y hướng trái, Z hướng lên), một cụm điểm đối tượng có tọa độ tâm P = (-12,5; -3,2; 0,8) mét nằm ở vị trí nào so với xe tự hành?",
    options: [
      "Cách phía trước mũi xe 12,5 m, lệch sang làn bên phải 3,2 m và cao hơn gốc tọa độ 0,8 m",
      "Cách phía sau đuôi xe 12,5 m, lệch sang làn bên trái 3,2 m và thấp hơn gốc tọa độ 0,8 m",
      "Cách phía trước mũi xe 12,5 m, lệch sang làn bên trái 3,2 m và cao hơn gốc tọa độ 0,8 m",
      "Cách phía sau đuôi xe 12,5 m, lệch sang làn bên phải 3,2 m và cao hơn gốc tọa độ 0,8 m"
    ],
    correctAnswer: 3,
    explanation: "Theo quy ước Ego Frame (Slide 33 - Ngày 12): Trục X dương hướng ra phía trước (x < 0 là phía sau xe); Trục Y dương hướng sang bên trái (y < 0 là bên phải xe); Trục Z dương hướng lên trên. Do đó P = (-12,5; -3,2; 0,8) nằm ở phía sau xe 12,5 m, bên phải xe 3,2 m và cao hơn gốc ego 0,8 m."
  },
  {
    id: 97, day: 12, module: 4,
    question: "Khi chuyển đổi dữ liệu hoặc đọc thông số giữa các bộ dữ liệu công khai (KITTI, nuScenes, Waymo), điểm khác biệt cốt lõi nào về gốc tọa độ (0,0,0) và quy ước trục dễ gây lệch vị trí nhất nếu sao chép nguyên tọa độ mà không transform?",
    options: [
      "KITTI Velodyne đặt gốc tại tâm LiDAR trên nóc xe; nuScenes đặt gốc tại giữa trục sau (chỗ IMU); KITTI Camera dùng hệ trục X phải, Y xuống, Z trước",
      "Tất cả các bộ dữ liệu đều đặt gốc (0,0,0) tại tâm cảm biến LiDAR trên nóc nhưng ngược chiều trục Z",
      "Waymo Vehicle đặt gốc tại tâm kính chắn gió trước; còn nuScenes đặt gốc trên mặt đất ngay dưới mũi xe",
      "KITTI Velodyne dùng hệ tọa độ Đông-Bắc-Lên (ENU); còn Waymo Global gắn cố định gốc tọa độ vào tâm trục sau của xe"
    ],
    correctAnswer: 0,
    explanation: "Theo bảng đối chiếu tại Slide 34 & 35 (Ngày 12): KITTI Velodyne đặt gốc ở tâm LiDAR trên nóc (X trước, Y trái, Z lên); KITTI Camera đặt nhãn ở hệ camera (X phải, Y xuống, Z trước); nuScenes ego đặt gốc ở giữa trục sau tại vị trí IMU; Waymo vehicle đặt ở giữa trục sau trên mặt đất; Waymo global dùng East-North-Up tại vị trí xe bắt đầu log."
  },
  {
    id: 98, day: 12, module: 4,
    question: "Theo quy chuẩn 5 lớp đối tượng (Taxonomy Robotaxi 3D) và nguyên tắc xử lý tình huống mơ hồ trong Ngày 12, người gán nhãn phải xử lý thế nào khi gặp một cụm điểm ở xa quá thưa hoặc nằm lưng chừng giữa hai lớp (ví dụ nghi ngờ giữa Two-wheels và Pedestrian)?",
    options: [
      "Tạm gán vào lớp Obstacle để đảm bảo xe tự hành vẫn phanh tránh va chạm an toàn",
      "Nội suy kích thước theo phỏng đoán cá nhân và chọn lớp có tần suất xuất hiện nhiều hơn trong cảnh",
      "Kiểm tra đủ 3 góc chiếu và các frame lân cận; nếu vẫn mơ hồ giữa hai lớp hoặc quá thưa thì ghi nhận và Escalate, tuyệt đối không đoán",
      "Bỏ qua không vẽ hộp bao 3D cho cụm điểm đó để tránh làm giảm độ chính xác Precision của mô hình"
    ],
    correctAnswer: 2,
    explanation: "Theo Slide 37, 40 & 41 (Ngày 12), phân class đúng là kết quả tra cứu guideline và kiểm tra đủ 3 view (Top/Front/Side) cùng các frame lân cận. Khi gặp case nằm giữa hai lớp, cụm quá thưa không đủ bằng chứng hình học hoặc nghi ngờ lỗi dữ liệu, nguyên tắc bắt buộc là ghi nhận và Escalate, không được tự ý đoán hay bỏ qua."
  },
  {
    id: 99, day: 12, module: 4,
    question: "Trong 7 tham số của một 3D Cuboid, nếu hai hộp bao trên cùng một chiếc ô tô đang đỗ đứng yên có cùng tọa độ tâm (x, y, z) và cùng kích thước (L, W, H) nhưng góc hướng đầu (yaw/heading) lệch nhau 180°, hệ thống đánh giá mô hình sẽ xử lý như thế nào?",
    options: [
      "Coi hai hộp là hai nhãn hoàn toàn khác nhau vì vật đứng yên vẫn có hướng đầu (heading), lật 180° là lỗi sai hướng nghiêm trọng",
      "Coi hai nhãn là tương đương nhau vì hình hộp chữ nhật có tính đối xứng hình học qua tâm",
      "Chỉ tính là lỗi nếu chiếc xe đó đang di chuyển với vận tốc lớn hơn 5 km/h trên đường",
      "Tự động lấy giá trị tuyệt đối của góc yaw nên sai số góc 180° sẽ được triệt tiêu về 0°"
    ],
    correctAnswer: 0,
    explanation: "Theo Slide 43 & 44 (Ngày 12), khối hộp có tính đối xứng nhưng mũi tên chỉ hướng (heading) thì không: 2 box cùng center/L/W/H mà heading lệch 180° là 2 nhãn khác nhau hoàn toàn (khiến xe tự lái hiểu nhầm xe đang đi ngược chiều). Ngay cả khi object đứng yên, nó vẫn có hướng đầu vật lý bắt buộc phải gán đúng trên Top view."
  },
  {
    id: 100, day: 12, module: 4,
    question: "Tại sao quy trình thao tác vẽ và kiểm tra 3D Cuboid bắt buộc phải phối hợp cả 3 góc chiếu (Top, Side, Front) theo đúng thứ tự 'xoay Heading ở Top trước, rồi mới chỉnh L/W và kiểm tra Z/H/đáy ở Side/Front'?",
    options: [
      "Vì công cụ phần mềm CVAT khóa cứng các thanh trượt kích thước L và W cho đến khi người dùng thay đổi góc yaw khác 0",
      "Vì góc chiếu Top không nhìn thấy độ cao Z/H (dễ làm hộp bay hoặc xuyên đất), còn góc chiếu Front không thấy chiều dài L; nếu không khóa đúng Heading trước thì kéo L/W sẽ bị lệch chéo",
      "Vì góc chiếu Side là góc duy nhất nhìn thấy được toàn bộ 7 tham số của hộp bao cùng một lúc",
      "Vì xoay Heading sau cùng trên góc chiếu Front sẽ giúp tự động căn chỉnh tâm hộp vào mặt phẳng đường"
    ],
    correctAnswer: 1,
    explanation: "Theo Slide 36, 44 & 45 (Ngày 12): Top view cho biết (x, y, L, W, yaw) nhưng mù về độ cao; Front view cho biết (W, H, đáy) nhưng mù về chiều dài L; Side view cho biết (z, H, đáy). Phải xoay Heading chuẩn trên Top view trước để định hình trục dọc thân xe, sau đó mới áp L/W bám sát biên điểm và dùng Side/Front để đặt đáy chạm mặt đất (ground contact)."
  },
  {
    id: 101, day: 13, module: 4,
    question: "Khi phân biệt 6 bài toán cốt lõi trên đám mây điểm 3D (Classification, Detection, Segmentation, Tracking, Registration, SLAM), sự khác biệt bản chất giữa Registration và SLAM là gì?",
    options: [
      "Registration gán nhãn từng điểm riêng lẻ, còn SLAM vẽ hộp bao 3D Cuboid cho các phương tiện đang di chuyển",
      "Hai thuật ngữ hoàn toàn đồng nghĩa vì bất kỳ thuật toán ghép hai lần quét nào cũng tự động sinh ra bản đồ toàn cục và loop closure",
      "Registration chỉ hoạt động trên ảnh camera 2D, còn SLAM hoạt động độc quyền trên cảm biến LiDAR trong nhà",
      "Registration là bài toán hình học căn chỉnh hai đám mây điểm bằng một phép xoay và tịnh tiến (như ICP, NDT); còn SLAM là bài toán hệ thống chạy liên tục để vừa định vị quỹ đạo xe vừa dựng bản đồ"
    ],
    correctAnswer: 3,
    explanation: "Theo Slide 6, 11–13 (Ngày 13): Registration là bài toán hình học tìm một phép biến đổi (xoay R, tịnh tiến T) để ghép hai đám mây điểm trùng hệ trục (dùng ICP, NDT) mà chưa có quỹ đạo hay bản đồ. Trong khi đó, SLAM là hệ thống chạy theo thời gian thực gồm nhiều mô-đun (scan matching/registration, odometry, loop closure, pose graph optimization) để xuất ra cả bản đồ lẫn quỹ đạo xe."
  },
  {
    id: 102, day: 13, module: 4,
    question: "Đám mây điểm LiDAR có tính chất 'bất biến hoán vị' (đảo thứ tự các dòng điểm trong file thì hình học cảnh vật không đổi). Kiến trúc mạng PointNet (Qi et al., CVPR 2017) đã giải quyết tính chất này bằng cơ chế toán học nào và nhược điểm của nhánh Point-based (như PointNet++, PointRCNN) trên cảnh đường phố là gì?",
    options: [
      "Dùng mạng tích chập 3D đặc (Dense 3D CNN) trên lưới ô vuông; nhược điểm là làm mất hoàn toàn thông tin chiều cao Z",
      "Sắp xếp các điểm theo thứ tự khoảng cách từ gần đến xa rồi đưa vào mạng RNN; nhược điểm là không phát hiện được xe đang đỗ",
      "Đưa từng điểm qua cùng một mạng MLP chia sẻ trọng số rồi gộp bằng hàm đối xứng Max-Pooling; nhược điểm là bước nhóm điểm lân cận rất chậm khi cảnh có hàng trăm nghìn điểm",
      "Chiếu toàn bộ điểm xuống mặt phẳng ảnh 2D ngay từ đầu; nhược điểm là không thể dự đoán được góc quay yaw"
    ],
    correctAnswer: 2,
    explanation: "Theo Slide 15, 17, 20 & 24 (Ngày 13): PointNet xử lý tập điểm không có thứ tự bằng cách cho mỗi điểm đi qua chung một MLP rồi dùng phép gộp đối xứng Max-Pooling (đảo thứ tự điểm kết quả không đổi). PointNet++ và PointRCNN bổ sung bước lấy mẫu và gom nhóm lân cận (sampling & grouping) để giữ hình học sắc nét, nhưng chi phí tìm lân cận trên hàng trăm nghìn điểm của cả con phố khiến tốc độ suy luận rất chậm."
  },
  {
    id: 103, day: 13, module: 4,
    question: "Trong nhánh kiến trúc Voxel-based, mô hình SECOND (Yan et al., 2018) đã cải tiến điểm nghẽn tính toán nào của VoxelNet (Zhou & Tuzel, 2018) để tăng tốc độ phát hiện 3D?",
    options: [
      "Thay thế hoàn toàn lưới Voxel 3D bằng các cột đứng Pillar 2D để không phải chia ô theo chiều cao",
      "Bỏ qua các bước trích xuất đặc trưng học sâu và dùng thuật toán phân cụm hình học cổ điển",
      "Giảm số lượng tham số đầu ra của hộp bao từ 7 bậc tự do xuống còn 4 bậc tự do như ảnh 2D",
      "Sử dụng tích chập thưa (Sparse Convolution) để chỉ tính toán trên các ô voxel thực sự có điểm, bỏ qua phần lớn không gian trống trên phố"
    ],
    correctAnswer: 3,
    explanation: "Theo Slide 18, 20 & 25 (Ngày 13): VoxelNet cắt không gian thành lưới 3D đều nhau nhưng dùng tích chập 3D dày đặc (dense 3D convolution), phải trả giá tính toán cho cả các khoảng không rộng lớn không có điểm. SECOND khắc phục bằng cách áp dụng Sparse Convolution — chỉ tính toán trên các voxel có điểm LiDAR rơi vào, giúp tăng tốc độ vượt trội mà vẫn giữ được cấu trúc lưới 3D."
  },
  {
    id: 104, day: 13, module: 4,
    question: "Kiến trúc PointPillars (Lang et al., CVPR 2019) biến đổi đám mây điểm thành hộp bao 3D thông qua chuỗi 4 bước xử lý theo đúng thứ tự nào sau đây?",
    options: [
      "Chia lưới Voxel 3D → Tích chập 3D thưa → Chiếu sang ảnh camera → Hồi quy bằng Transformer",
      "Chia cột đứng ( không cắt theo Z) → Dùng PointNet nhỏ học vector đặc trưng từng cột → Rải thành ảnh giả (Pseudo-image) nhìn từ trên → Chạy Backbone CNN 2D và Detection Head (SSD)",
      "Chiếu điểm thành ảnh độ sâu (Range Image) → Chạy mạng phân đoạn 2D → Gom cụm điểm → Khớp khung mẫu CAD 3D",
      "Tìm tâm đối tượng bằng Heatmap → Gom điểm lân cận bằng PointNet++ → Tích chập 3D → Xuất tọa độ hộp bao"
    ],
    correctAnswer: 1,
    explanation: "Theo Slide 19 & 26 (Ngày 13), 4 bước cốt lõi của PointPillars gồm: (1) Chia mặt đất thành các cột đứng (Pillars) không cắt theo chiều cao z; (2) Dùng một mạng PointNet nhỏ học một vector đặc trưng cho mỗi cột; (3) Rải các vector này thành một bức ảnh giả (pseudo-image) nhìn từ trên xuống (BEV); (4) Đưa vào mạng CNN 2D và head SSD để dự đoán class, score và 7 tham số cuboid."
  },
  {
    id: 105, day: 13, module: 4,
    question: "Vì sao PointPillars được chọn làm checkpoint pre-label phổ biến nhất trong thực hành gán nhãn, và 3 hệ quả kỹ thuật mà người sửa nhãn (annotator) phải đặc biệt cảnh giác khi sửa đầu ra của nó là gì?",
    options: [
      "Vì nó nhanh và xuất sẵn cuboid; nhưng do gộp chiều cao Z sớm nên dễ sai chiều cao H/đáy, nhạy cảm với kích thước ô pillar (0,16m vs 0,32m), và góc Heading (yaw) vẫn là điểm yếu dù score cao",
      "Vì nó đạt độ chính xác tuyệt đối về góc quay yaw; người sửa chỉ cần kiểm tra tên class mà không cần xem lại kích thước L, W, H",
      "Vì nó không phụ thuộc vào quy ước trục tọa độ Z; người sửa chỉ cần xóa các hộp có điểm tin cậy (score) dưới 0,9",
      "Vì nó tự động kết hợp ảnh camera RGB; nhưng thường làm toàn bộ các hộp trong batch bị dịch chuyển sang ngang một hằng số cố định"
    ],
    correctAnswer: 0,
    explanation: "Theo Slide 20, 28 & 43 (Ngày 13), PointPillars chạy rất nhanh (nhờ CNN 2D trên BEV) nhưng người sửa nhãn phải nắm rõ 3 hệ quả: (1) Gộp chiều cao sớm khiến xe cao và xe thấp có thể chung footprint trên ảnh giả, mất chi tiết chiều cao ở bước CNN; (2) Thay đổi cỡ pillar (ví dụ 0,16 m vs 0,32 m) sẽ làm đổi số điểm trong cột và đổi hộp; (3) Heading là điểm yếu — điểm confidence score cao chỉ đảm bảo class khá chắc, không đảm bảo mũi tên hướng đầu xe đúng."
  },
  {
    id: 106, day: 13, module: 4,
    question: "Điểm đột phá trong cách biểu diễn đối tượng của mô hình CenterPoint (Yin et al., CVPR 2021) so với các detector dùng hộp neo (anchor-based) trước đó là gì, và tại sao nó lại tạo tiền đề thuận lợi cho bài toán Tracking ở Ngày 14?",
    options: [
      "Biểu diễn mỗi đối tượng bằng một lưới đa giác lồi 3D gồm 24 đỉnh thay vì hộp chữ nhật 7 tham số",
      "Loại bỏ hoàn toàn bước chia voxel/pillar và dự đoán trực tiếp quỹ đạo từ ảnh camera đơn mục",
      "Bỏ cơ chế anchor xoắn góc, tìm đối tượng như một điểm tâm (center) trên bản đồ nhiệt BEV rồi hồi quy trực tiếp kích thước, chiều cao, yaw và vector vận tốc 2D",
      "Sử dụng cố định một kích thước hộp duy nhất cho mọi phương tiện giao thông để chống hiện tượng trôi kích thước"
    ],
    correctAnswer: 2,
    explanation: "Theo Slide 21 & 27 (Ngày 13), CenterPoint bỏ các hộp neo (anchor-free) mà dùng head dự đoán bản đồ nhiệt (heatmap) để tìm tâm xe trên mặt phẳng BEV, sau đó từ vị trí tâm hồi quy ra chiều cao, kích thước (L, W, H), góc yaw và cả vận tốc. Chính thông tin tâm và vector vận tốc này là cầu nối trực tiếp sang bài toán 3D Tracking qua chuỗi thời gian ở Ngày 14."
  },
  {
    id: 107, day: 13, module: 4,
    question: "Trên cùng tập kiểm tra KITTI test set (class Car, mức Moderate, ngưỡng IoU = 0,7), mô hình PointPillars dùng LiDAR đạt AP_3D = 74,99%, trong khi mô hình CaDDN chỉ dùng 1 camera (monocular) đạt AP_3D = 13,41%. Nhận định nào sau đây phản ánh đúng mối quan hệ giữa xe chạy bằng Camera (như Tesla) và dữ liệu LiDAR?",
    options: [
      "Mô hình camera-based 3D detection tự sinh ra nhãn chuẩn (ground truth) từ ảnh 2D mà không cần đến cảm biến LiDAR",
      "Xe thương mại có thể vận hành bằng hệ thống camera, nhưng Ground Truth 3D (đơn vị mét) dùng để huấn luyện và chấm điểm các mô hình camera đó vẫn phải lấy từ cuboid gán trên LiDAR",
      "Sự chênh lệch AP_3D chứng tỏ camera không thể nhận diện được tên class của phương tiện giao thông",
      "Khi chấm điểm mô hình camera-based 3D như RTM3D hay CaDDN, người ta chỉ so sánh diện tích pixel trên ảnh 2D chứ không so sánh hộp 3D"
    ],
    correctAnswer: 1,
    explanation: "Theo Slide 32–35 (Ngày 13): Cần tách bạch hai việc: xe thương mại (như Tesla) có thể chạy nhận thức bằng camera trên đường, nhưng để dạy và chấm điểm (benchmark) các mô hình dự đoán 3D từ camera (như CaDDN, RTM3D), ngành công nghiệp vẫn phải dùng 3D cuboid đo từ LiDAR làm đáp án gốc (Ground Truth). Người gán nhãn LiDAR chính là người viết 'đề thi' chuẩn bằng mét cho cả mô hình LiDAR lẫn mô hình Camera."
  },
  {
    id: 108, day: 13, module: 4,
    question: "Khi sử dụng kiến thức về kích thước điển hình của lớp đối tượng (Dimension Prior) để gán nhãn các vật ở xa hoặc bị che khuất một phần, quy tắc nghiệp vụ nào sau đây là ĐÚNG?",
    options: [
      "Chỉ vẽ hộp bao vừa khít phần điểm LiDAR nhìn thấy được, tuyệt đối không mở rộng hộp ra vùng không có điểm phản xạ",
      "Luôn ép mọi chiếc xe con trong dataset về đúng một kích thước cố định theo thông số trung bình của bài báo khoa học",
      "Dùng kích thước hộp bao để quyết định tên class của đối tượng thay cho việc tra cứu định nghĩa trong guideline",
      "Dùng Dimension Prior để ước lượng phần thân xe bị khuất và kiểm tra hộp quá to/nhỏ; nhưng nếu cụm điểm thực tế dài hơn kích thước điển hình (sau khi đã loại trừ lỗi dính 2 vật) thì phải tin vào đám mây điểm"
    ],
    correctAnswer: 3,
    explanation: "Theo Slide 4 & 38 (Ngày 13): Dimension prior giúp ước lượng phần bị che khuất (vì hộp phải ôm trọn cả vật theo guideline VinFast) và phát hiện hộp bất thường. Tuy nhiên, Dimension prior không dùng để chọn class, và khi cụm điểm thực tế của một vật dài hơn kích thước điển hình (đã kiểm tra không phải 2 vật gộp lại), người gán nhãn bắt buộc phải ưu tiên tin vào bằng chứng điểm thực tế."
  },
  {
    id: 109, day: 13, module: 4,
    question: "Một pipeline pre-label dùng checkpoint PointPillars huấn luyện trên tập KITTI (cảm biến Velodyne đặt trên nóc xe ở độ cao h_sensor = 1,73 m; mặt đường nằm ở z ≈ -1,73 m). Dữ liệu nguồn (.pcd) của dự án có mặt đường ước lượng tại z_ground = 0,04 m và một tâm xe thật nằm ở độ cao z_source = 0,84 m. Hỏi: (1) Tọa độ z_model đưa vào mạng là bao nhiêu? (2) Nếu kỹ sư quên bước cộng trả lại độ cao sau khi chạy model, hộp xuất ra trên CVAT sẽ nằm ở độ cao nào?",
    options: [
      "(1) z_model = +2,53 m; (2) Hộp xuất ra trên CVAT sẽ bay lơ lửng ở độ cao +2,53 m trên không trung",
      "(1) z_model = -1,73 m; (2) Hộp xuất ra trên CVAT sẽ nằm chuẩn xác trên mặt đường tại z = 0,00 m",
      "(1) z_model = -0,93 m; (2) Hộp xuất ra trên CVAT sẽ bị chìm xuống dưới mặt đường tại z = -0,93 m (lệch đúng 1,77 m)",
      "(1) z_model = +0,80 m; (2) Hộp xuất ra trên CVAT sẽ bị chìm xuống độ sâu z = -1,73 m"
    ],
    correctAnswer: 2,
    explanation: "Áp dụng công thức phép tịnh tiến theo Z tại Slide 48 (Ngày 13): Trước khi chạy model, phải dịch điểm từ frame nguồn sang frame KITTI theo công thức: z_model = z_source - z_ground - h_sensor = 0,84 - 0,04 - 1,73 = -0,93 m. Sau khi model dự đoán hộp tại z_model ≈ -0,93 m, đúng ra phải cộng ngược: z_source = z_model + h_sensor + z_ground = -0,93 + 1,73 + 0,04 = +0,84 m. Nếu quên bước đổi ngược này, hộp trên CVAT sẽ giữ nguyên giá trị -0,93 m (chìm sâu dưới mặt đường z=0,04 m một khoảng đúng bằng 1,77 m)!"
  },
  {
    id: 110, day: 13, module: 4,
    question: "Khi mở một job pre-label mới trên CVAT và chuyển sang góc nhìn nghiêng (Side View), bạn phát hiện toàn bộ 50 hộp bao phương tiện trong cả batch đều nằm chìm dưới mặt đường một khoảng đồng nhất khoảng 1,73 m. Quy trình xử lý chuẩn xác nhất là gì?",
    options: [
      "Dừng sửa từng cạnh, giữ nguyên hiện trạng và Escalate ngay lập tức cả batch vì đây là lỗi quên dịch ngược trục Z của pipeline tiền xử lý",
      "Xóa toàn bộ các hộp pre-label đó đi và tiến hành vẽ lại từ đầu trên đám mây điểm trống",
      "Dùng chuột kéo thủ công từng hộp trong 50 hộp lên cao 1,73 m cho chạm mặt đường để kịp tiến độ bàn giao",
      "Chỉ sửa những xe ở gần dưới 30 m còn các xe ở xa bị chìm thì giữ nguyên vì không ảnh hưởng đến IoU BEV"
    ],
    correctAnswer: 0,
    explanation: "Theo Slide 46, 47 & 50 (Ngày 13): 'Một hộp lệch là một xe. Mọi hộp lệch cùng một hằng số là pipeline.' Khi cả batch cùng nổi hoặc cùng chìm một khoảng (~1,73 m), đó là lỗi transform hệ tọa độ trong pipeline pre-label. Nếu annotator tự tay kéo 50 hộp về mặt đất thì sẽ làm 'giấu lỗi pipeline' và tốn công sức vô ích. Quy định bắt buộc là dừng lại và Escalate cả batch để sửa bằng 1 dòng code cộng bù Z."
  },
  {
    id: 111, day: 14, module: 4,
    question: "Theo báo cáo điều tra của Ủy ban An toàn Giao thông Quốc gia Mỹ (NTSB HAR-19/03) về vụ tai nạn xe tự lái Uber ATG tại Tempe, Arizona (2018) và thống kê California DMV (2024–2025), nguyên nhân kỹ thuật trực tiếp nào khiến hệ thống nhận thức dù đã phát hiện nạn nhân từ 5,6 giây trước va chạm nhưng vẫn không kịp phanh?",
    options: [
      "Cảm biến LiDAR Velodyne trên nóc xe bị hỏng hoàn toàn mạch phát laser khi đi vào vùng bóng tối",
      "Ma trận hiệu chuẩn ngoại thông (Extrinsic) giữa camera và radar bị lệch 4 độ làm hộp bao rơi xuống mặt đường",
      "Thuật toán nội suy tuyến tính giữa hai keyframe bị trượt ra ngoài khi xe tự hành đang vào khúc cua gấp",
      "Hệ thống liên tục đổi phân loại đối tượng (xe con ↔ xe đạp ↔ vật thể lạ) và mỗi lần đổi class lại Reset Track ID thành vật mới, làm xóa sạch lịch sử vị trí và vận tốc tích lũy trước đó"
    ],
    correctAnswer: 3,
    explanation: "Theo Slide 5 & 6 (Ngày 14), trong suốt 5 giây từ khi phát hiện (5,6s trước va chạm), hệ thống của Uber ATG liên tục dao động phân loại giữa xe con, xe đạp và vật không xác định. Mỗi lần đổi class, tracker coi đó là một object hoàn toàn mới (reset Track ID), xóa bỏ toàn bộ lịch sử vị trí và vận tốc đã tính, dẫn đến việc chỉ nhận ra quỹ đạo cắt ngang đường ở 1,2s cuối cùng — quá muộn để phanh. Báo cáo California DMV cũng chỉ ra 17% disengagement đến từ perception và nguyên nhân #1 là ước lượng sai hành vi/quỹ đạo của road user khác."
  },
  {
    id: 112, day: 14, module: 4,
    question: "Trong mẫu dữ liệu thực tế Track 94 (Ngày 14), một chiếc SUV tiến lại gần xe tự hành từ cự ly 107 m (Frame 3, chỉ có vài điểm LiDAR ở đuôi xe) đến cự ly 16 m (Frame 65, cụm điểm dày đặc giúp chốt kích thước chuẩn L = 4,19 m; W = 2,04 m; H = 1,82 m). Khi gán nhãn cho Frame 3 ở cự ly 107 m, người gán nhãn phải xử lý kích thước và góc hướng (heading) như thế nào?",
    options: [
      "Khóa giữ nguyên kích thước 4,19 × 2,04 × 1,82 m đã chốt ở Frame 65 và xác định chiều mũi tên heading dựa trên ảnh camera kết hợp hướng di chuyển của cả track",
      "Xóa bỏ nhãn ở Frame 3 vì cụm điểm thưa ở cự ly 107 m không thể xác định được đâu là đầu và đuôi xe",
      "Co nhỏ kích thước hộp ở Frame 3 xuống còn 0,7 × 0,9 m cho vừa khít cụm điểm thưa để tăng độ chính xác hình học",
      "Giữ nguyên chiều rộng W = 2,04 m nhưng giảm một nửa chiều dài L ở Frame 3 do tia laser chỉ chiếu tới mặt sau của xe"
    ],
    correctAnswer: 0,
    explanation: "Theo Slide 8, 9, 11 & 12 (Ngày 14): Ô tô là vật rắn (rigid body), kích thước không co giãn theo khoảng cách. Nếu co box ở Frame 3 xuống 0,7 × 0,9 m (lỗi Sparsity shrinkage), mô hình AI sẽ học sai quy luật vật lý rằng xe ở xa bị teo nhỏ lại. Do đó, phải chốt L/W/H ở frame điểm dày (Frame 65: 4,19 × 2,04 × 1,82 m) rồi giữ nguyên bộ số đó cho Frame 3, đồng thời lấy hướng đầu xe (heading) từ ảnh camera và quỹ đạo di chuyển của cả sequence."
  },
  {
    id: 113, day: 14, module: 4,
    question: "Xét vòng đời 5 trạng thái của một Track (Enter → Visible → Occluded → Reappear → Exit) và cơ chế nội suy Keyframe trên công cụ gán nhãn. Giả sử một chiếc xe đi vào cảnh ở Frame 1, bắt đầu rẽ cua tại Frame 15, bị xe buýt che khuất hoàn toàn từ Frame 30 đến Frame 34 và xuất hiện lại ở Frame 35. Cách đặt Keyframe và quản lý Track ID nào sau đây là ĐÚNG?",
    options: [
      "Cấp ID 1 tại Frame 1, kết thúc ID 1 tại Frame 29; sau đó tạo một Track ID 2 hoàn toàn mới tại Frame 35 khi xe xuất hiện lại",
      "Giữ duy nhất một Track ID từ đầu đến cuối; đặt Keyframe tại Frame 1 (Enter), chèn thêm Keyframe tại đỉnh khúc cua Frame 15, đặt Keyframe ngay trước khi khuất (Frame 29) và ngay khi hiện lại (Frame 35), sau đó kiểm tra lại mọi frame nội suy",
      "Chỉ đặt 2 Keyframe tại Frame 1 và Frame 60 để công cụ tự động nối đường cong qua khúc cua Frame 15 và đoạn bị che",
      "Trong suốt các Frame 30–34 khi xe bị che khuất hoàn toàn, người gán nhãn tự phán đoán vị trí ngẫu nhiên và đổi hướng heading 180° ở từng frame"
    ],
    correctAnswer: 1,
    explanation: "Theo Slide 10, 13, 14 & 61 (Ngày 14): (1) ID chỉ cấp một lần lúc Enter và giữ nguyên qua giai đoạn Occluded → Reappear cho tới khi Exit (tạo ID mới ở Frame 35 sẽ gây lỗi Fragmentation). (2) Công cụ chỉ nội suy tuyến tính (nối đường thẳng) giữa hai keyframe, nên khi xe rẽ cong ở Frame 15 bắt buộc phải chèn thêm keyframe tại khúc cua để hộp không văng khỏi cụm điểm. (3) Khi bị che ở Frame 30–34, phải đặt keyframe chặn ngay trước lúc mất điểm (Frame 29) và ngay khi hiện lại (Frame 35), rồi duyệt kiểm tra toàn bộ các frame nội suy."
  },
  {
    id: 114, day: 14, module: 4,
    question: "Khi kiểm tra bảng thông số của một chuỗi gán nhãn (Sequence QC), bạn phát hiện đối tượng mang Track ID 12 (tốc độ lấy mẫu LiDAR là 10 Hz, tức Δt = 0,1 giây/frame) có tọa độ dọc trục X qua 4 frame liên tiếp như sau: Frame 39 (x = 11,5 m), Frame 40 (x = 12,5 m), Frame 41 (x = 18,5 m), Frame 42 (x = 19,5 m). Đây là loại lỗi temporal nào và thông số vận tốc tức thời chỉ ra điều gì?",
    options: [
      "Lỗi ID Switch: vận tốc giữ đều ở mức 36 km/h nhưng đối tượng đã bị tráo đổi nhãn với một chiếc xe đang đi chiều ngược lại",
      "Lỗi Dimension Drift: chiều dài L của chiếc xe đã bị kéo giãn thêm 6,0 m tại thời điểm Frame 41",
      "Lỗi Velocity Jump (nhảy vận tốc): vận tốc giữa Frame 40 và 41 vọt lên 60 m/s (216 km/h) rồi tụt ngay về 10 m/s (36 km/h) ở Frame 42, chứng tỏ hộp bao ở Frame 41 bị đặt lệch vị trí",
      "Không có lỗi gán nhãn: đây là quá trình phanh khẩn cấp hợp lý về mặt vật lý của phương tiện trên đường đô thị"
    ],
    correctAnswer: 2,
    explanation: "Theo Slide 24 & 25 (Ngày 14): Giữa Frame 39→40 và 41→42, xe đi được Δx = 1,0 m trong 0,1s ⇒ vận tốc v = 10 m/s (36 km/h). Nhưng từ Frame 40→41, vị trí nhảy từ 12,5 m lên 18,5 m (Δx = 6,0 m trong 0,1s), đòi hỏi vận tốc tức thời vọt lên 60 m/s (216 km/h) rồi lập tức giảm về 36 km/h ở frame kế tiếp. Vật lý không cho phép gia tốc tức thời như vậy — đây là lỗi Velocity Jump do đặt sai vị trí box ở Frame 41."
  },
  {
    id: 115, day: 14, module: 4,
    question: "Tại sao lỗi 'Merge' (hai vật thể thực bị gộp chung vào một cuboid và mang một Track ID duy nhất) lại được cảnh báo là đặc biệt nghiêm trọng và có tần suất cao gấp bội khi triển khai xe tự hành tại các đô thị Việt Nam so với khi dùng nguyên bộ quy tắc từ dataset nước ngoài?",
    options: [
      "Vì lưu lượng giao thông đô thị Việt Nam có 85–90% là xe máy thường chở 2–3 người, đi sát nhau thành cụm và lách làn liên tục khiến đám mây điểm dính liền nhau, dễ làm biến mất một đối tượng khỏi hệ thống",
      "Vì cảm biến LiDAR tại Việt Nam sử dụng bước sóng ngắn hơn nên chùm tia bị tán xạ trong không khí ẩm",
      "Vì đường phố Việt Nam không có vạch kẻ phân làn nên mô hình AI tự động gộp tất cả ô tô trên đường thành một khối",
      "Vì tần số quét của camera trên xe Robotaxi tại Việt Nam thấp hơn một nửa so với chuẩn Waymo và nuScenes"
    ],
    correctAnswer: 0,
    explanation: "Theo Slide 19 & 20 (Ngày 14), các dataset nước ngoài chủ yếu là ô tô đi cách xa nhau. Ngược lại, tại đô thị Việt Nam, xe máy chiếm 85–90% lưu lượng, thường chở 2–3 người và di chuyển sát nhau thành chùm hoặc đi cạnh người đi bộ. Trên point cloud, hai đối tượng đứng sát rất dễ dính thành một cụm điểm duy nhất. Nếu gộp chung vào 1 cuboid (lỗi Merge), một đối tượng sẽ biến mất hoàn toàn khỏi dataset và hệ thống tránh va chạm. Cần mở ảnh camera cùng frame để tách thành 2 cuboid với 2 ID riêng biệt."
  },
  {
    id: 116, day: 14, module: 4,
    question: "Khi hai phương tiện A và B đi sát cạnh nhau khiến hộp bao trên Camera và LiDAR chồng lấn gần hết (dễ gây lỗi ID Switch hoặc Merge), cảm biến Radar hỗ trợ phân tách hai xe bằng nguyên lý nào và giới hạn vật lý của nó là gì?",
    options: [
      "Radar chụp ảnh nhiệt độ động cơ của từng xe để phân biệt; nhưng sẽ thất bại đối với các dòng xe điện không tỏa nhiệt",
      "Radar đọc biển số xe bằng sóng vô tuyến tần số cao; nhưng chỉ hoạt động được ở cự ly dưới 5 mét khi đỗ xe",
      "Radar phát tia laser mật độ siêu cao để cắt nhỏ đám mây điểm; nhưng bị mù hoàn toàn khi trời tối hoặc có mưa lớn",
      "Radar đo trực tiếp vận tốc xuyên tâm (dọc theo tia nhìn từ radar tới vật) bằng hiệu ứng Doppler để tách hai xe có tốc độ khác nhau (ví dụ 40 km/h vs 15 km/h); nhưng sẽ không tách được nếu hai vật có cùng vận tốc xuyên tâm (như cùng cắt ngang trước mũi xe)"
    ],
    correctAnswer: 3,
    explanation: "Theo Slide 21 (Ngày 14), Radar đo vận tốc xuyên tâm (radial velocity - dọc theo tia nhìn radar–vật) nhờ hiệu ứng Doppler một cách độc lập với độ phân giải vị trí. Do đó khi xe A (40 km/h) và xe B (15 km/h) đi sát nhau, Radar vẫn tách được dễ dàng. Tuy nhiên, giới hạn cốt lõi là Radar chỉ đo được thành phần vận tốc dọc theo tia nhìn: nếu hai vật có cùng vận tốc xuyên tâm (ví dụ đi song song cùng tốc độ hoặc cùng cắt ngang vuông góc trước mặt radar), hiệu ứng Doppler sẽ giống hệt nhau và phải quay lại dùng Camera + LiDAR."
  },
  {
    id: 117, day: 14, module: 4,
    question: "Trong bài toán hiệu chuẩn cảm biến (Sensor Calibration) để chiếu điểm 3D LiDAR lên ảnh 2D Camera, sự khác biệt giữa tham số Nội thông (Intrinsic) và Ngoại thông (Extrinsic) cũng như cách xác định chúng bằng tấm bia bàn cờ (Checkerboard - phương pháp Zhang 2000) là gì?",
    options: [
      "Intrinsic mô tả vị trí lắp đặt cảm biến trên khung xe; Extrinsic mô tả tiêu cự và độ méo của thấu kính camera",
      "Intrinsic (fx, fy, cx, cy, hệ số méo) mô tả quang học bên trong camera được tìm bằng cách chụp bàn cờ ở nhiều góc; còn Extrinsic (ma trận xoay R, tịnh tiến T 4×4) mô tả vị trí/góc tương đối giữa các cảm biến khi cả Camera và LiDAR cùng nhìn tấm bia",
      "Chỉ cần chụp đúng 1 tấm ảnh bàn cờ ở một góc duy nhất là giải được nghiệm duy nhất cho cả tiêu cự lẫn vị trí lắp LiDAR",
      "Annotator bắt buộc phải tự tay tính lại ma trận Intrinsic và sửa file Extrinsics.txt mỗi khi mở một frame mới trên CVAT"
    ],
    correctAnswer: 1,
    explanation: "Theo Slide 34–37 (Ngày 14): Intrinsic trả lời 'bản thân camera nhìn méo thế nào' (tiêu cự fx, fy, tâm ảnh cx, cy, hệ số méo ống kính) — cần chụp bàn cờ biết trước kích thước ô ở nhiều góc khác nhau để nắn thẳng cạnh cong. Extrinsic trả lời 'cảm biến đặt ở đâu và xoay thế nào so với xe/cảm biến kia' (ma trận biến đổi 4×4 gồm R, T) — tìm được khi cả Camera (đo góc pixel) và LiDAR (đo mặt phẳng mét) cùng quan sát một tấm bia. Trong bộ calib của rig thực hành, ma trận camera đã ở dạng ego → camera nên nhân thẳng không cần lấy nghịch đảo."
  },
  {
    id: 118, day: 14, module: 4,
    question: "Cho một camera trước đã hiệu chuẩn có tiêu cự fx = 1840 px, fy = 1840 px và tâm quang học tại (cx, cy) = (960, 540) px (bỏ qua hệ số méo ống kính). Một điểm P trên gương chiếu hậu ô tô sau khi chuyển sang hệ tọa độ Camera có tọa độ là (X, Y, Z) = (2,0; -0,5; 8,0) mét. Theo mô hình camera lỗ kim (Pinhole model), điểm P sẽ chiếu lên ảnh 2D tại tọa độ pixel (u, v) nào?",
    options: [
      "(u, v) = (1190, 482) pixel",
      "(u, v) = (500, 655) pixel",
      "(u, v) = (1420, 425) pixel",
      "(u, v) = (1880, 310) pixel"
    ],
    correctAnswer: 2,
    explanation: "Áp dụng công thức phép chiếu lỗ kim (Pinhole projection) tại Slide 45 (Ngày 14): u = fx × (X / Z) + cx và v = fy × (Y / Z) + cy. Thay số: u = 1840 × (2,0 / 8,0) + 960 = 1840 × 0,25 + 960 = 460 + 960 = 1420 px; v = 1840 × (-0,5 / 8,0) + 540 = 1840 × (-0,0625) + 540 = -115 + 540 = 425 px. Vậy điểm rơi vào tọa độ (1420, 425) pixel."
  },
  {
    id: 119, day: 14, module: 4,
    question: "Dựa vào phương trình chiếu phối cảnh u = fx·(X/Z) + cx, v = fy·(Y/Z) + cy và quy tắc đối chiếu đa cảm biến (Slide 45, 48–51 Ngày 14), tại sao người gán nhãn TUYỆT ĐỐI KHÔNG được suy ngược kích thước mét (L, W, H) từ một bức ảnh 2D hoặc tự dựng cuboid 3D khi đám mây điểm LiDAR bị mất điểm hoàn toàn (do kính trong suốt, mưa hấp thụ hoặc quá xa)?",
    options: [
      "Vì mọi vật thể nhìn thấy được trên ảnh camera thì bắt buộc cũng phải phản xạ lại ít nhất 100 điểm LiDAR",
      "Vì độ phân giải màu sắc của camera quá cao làm làm tràn bộ nhớ đệm của công cụ dựng hình 3D",
      "Vì góc mở ngang (FOV) của camera trước luôn rộng gấp 3 lần góc quét của cảm biến LiDAR 360 độ",
      "Vì tọa độ chiều sâu Z nằm ở mẫu số nên phép chiếu 3D → 2D là phép chiếu mất thông tin chiều sâu (nhiều điểm 3D khác nhau trên cùng một tia nhìn đều rơi vào đúng 1 pixel), không có phép biến đổi ngược duy nhất từ pixel ra mét"
    ],
    correctAnswer: 3,
    explanation: "Theo Slide 45, 50 & 51 (Ngày 14): Phép chiếu 3D sang 2D thực hiện chia cho chiều sâu Z (giống bóng đèn pin trên tường: vật ở xa Z lớn thì hình chiếu nhỏ lại, như Track 94 ở 16m lớn gấp ~6 lần ở 107m). Do mọi điểm 3D nằm trên cùng một tia chiếu đều hội tụ về đúng 1 pixel trên ảnh, phép chiếu này không có đường quay lại (bài toán nghịch đảo bất định). Do đó khi LiDAR mất điểm hoàn toàn, tuyệt đối không được dựng cuboid chỉ từ ảnh hay phóng L/W/H theo cảm giác ảnh, mà phải ghi nhận thiếu bằng chứng (evidence) theo đúng guideline."
  },
  {
    id: 120, day: 14, module: 4,
    question: "Khi đối chiếu giữa đám mây điểm LiDAR và ảnh Camera (Sensor Fusion Overlay), có 4 nguyên nhân chính dẫn đến hiện tượng không trùng khớp 2D–3D: (1) Khác biệt FOV, (2) Occlusion chéo cảm biến, (3) Sparse points, và (4) Calibration drift. Trong tình huống bạn thấy một chiếc xe nằm lệch ngang ~12 m có cụm điểm LiDAR rất rõ nhưng mở ảnh camera trước (CAM_P_F, góc mở ~55°) lại hoàn toàn không thấy xe đâu, nguyên nhân và cách xử lý đúng là gì?",
    options: [
      "Lỗi Calibration drift: phải dừng gán nhãn và Escalate toàn bộ sequence lên đội kỹ thuật phần cứng",
      "Khác biệt góc mở (FOV): chiếc xe nằm trong vùng quét 360° của LiDAR nhưng nằm ngoài hình nêm 55° của camera trước; vẫn phải gán nhãn cuboid theo point cloud và chuyển sang xem camera hông nếu có",
      "Lỗi False Positive của LiDAR: phải xóa bỏ cụm điểm đó đi vì nếu không xuất hiện trên camera trước thì chắc chắn là nhiễu",
      "Lỗi Occlusion: chiếc xe đã bị chính mui xe tự hành che khuất nên phải gán nhãn thuộc tính bị che 100% và không vẽ hộp"
    ],
    correctAnswer: 1,
    explanation: "Theo Slide 49 & 53 (Ngày 14): Camera trước (CAM_P_F) chỉ có góc mở (FOV) hình nêm khoảng 55°, trong khi LiDAR quét toàn cảnh 360° quanh xe. Một chiếc xe đi lệch ngang ~12 m hoàn toàn nằm ngoài vùng nhìn của camera trước nhưng vẫn có đầy đủ điểm LiDAR. Nguyên tắc xử lý: không được suy diễn 'không thấy trên ảnh = không có object', mà phải gán nhãn cuboid bình thường dựa trên bằng chứng point cloud và đổi sang góc camera phụ (camera hông/sau) tương ứng để kiểm tra class."
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
  { id: 26, day: 14, module: 4, category: "Sensor Fusion", front: "Phải làm gì khi phát hiện lỗi trôi hiệu chuẩn (Calibration Drift)?", back: "TUYỆT ĐỐI KHÔNG kéo hộp cuboid 3D theo ảnh camera bị trôi! Giữ nguyên vị trí hộp trên đám mây điểm LiDAR và lập tức ESCALATE lên đội pipeline kèm metadata: [frame, tên_camera, chiều_lệch]." },
// ==================== KHỐI 1: FLASHCARDS BỔ SUNG (CHUYÊN SÂU) ====================
  {
    id: 27, day: 1, module: 1, category: "Huấn Luyện & Dữ Liệu",
    front: "Bộ gán nhãn động TAL (Task-Aligned Assigner) và Cấu trúc hàm Loss trong YOLO11 vs YOLO26?",
    back: "• <strong>Hàm Loss YOLO11</strong>: Gồm 3 thành phần: <code>CIoU</code> (độ trùng khớp hộp) + <code>DFL</code> (phân bố vị trí cạnh hộp) + <code>BCE</code> (phân loại nhãn). Sang <strong>YOLO26</strong>: loại bỏ DFL và dùng cơ chế đối sánh một-một (One-to-One) để không cần bước lọc NMS.<br>• <strong>Bộ gán TAL</strong>: Dùng chính hộp nhãn Ground Truth (kết hợp IoU và điểm phân loại) để chọn ô dự đoán nào được học. Box vẽ lệch sẽ làm đổi phép gán ô và tạo ra trần chất lượng (Label Ceiling)."
  },
  {
    id: 28, day: 2, module: 1, category: "Chẩn Đoán Lỗi Detector",
    front: "Sáu kiểu lỗi phát hiện vật thể theo khung phân tích TIDE (Bolya et al., ECCV 2020)?",
    back: "1. <strong>Cls</strong>: Đúng vị trí (IoU &ge; 0.5) nhưng gán sai lớp.<br>2. <strong>Loc</strong>: Đúng lớp nhưng hộp bị lệch (0.1 &le; IoU &lt; 0.5).<br>3. <strong>Both</strong>: Vừa sai lớp vừa lệch hộp.<br>4. <strong>Dupe</strong>: Hai hộp cùng dự đoán cho một vật thể (lỗi NMS).<br>5. <strong>Bkgnd</strong>: Báo có vật ở nơi không có nhãn (IoU &lt; 0.1 — 57% ca tự tin nhất trên COCO là do nhãn bị bỏ sót!).<br>6. <strong>Missed</strong>: Vật thể có nhãn nhưng mô hình bỏ lọt hoàn toàn."
  },
  {
    id: 29, day: 3, module: 1, category: "Thước Đo Tracking",
    front: "Phân biệt 3 chỉ số đánh giá Tracker: MOTA, IDF1 và HOTA?",
    back: "• <strong>MOTA</strong>: <code>1 &minus; (FN + FP + IDSW) / số_box_thật</code>. Chấm theo từng frame độc lập, bị chi phối mạnh bởi detector (FN, FP), ít nhạy khi bị đổi ID ở giữa clip.<br>• <strong>IDF1</strong>: <code>2·IDTP / (2·IDTP + IDFP + IDFN)</code>. Ghép cặp 1-1 trên toàn bộ clip để đo sự toàn vẹn danh tính (đổi ID giữa video thì toàn bộ nửa sau bị tính sai).<br>• <strong>HOTA</strong>: <code>&radic;(DetA &times; AssA)</code>. Cân bằng hài hòa giữa độ chính xác phát hiện (DetA) và độ chính xác liên kết quỹ đạo (AssA)."
  },
  {
    id: 30, day: 3, module: 1, category: "Thuật Toán Tracking",
    front: "Cơ chế lọc hai lượt của ByteTrack và giới hạn của track_buffer?",
    back: "• <strong>Lượt 1</strong>: Ghép các hộp điểm cao (&ge; 0.25) với mọi track đang hoạt động.<br>• <strong>Lượt 2</strong>: Giữ lại các hộp điểm thấp (0.1 &lt; điểm &lt; 0.25 do vật bị che khuất) để chỉ ghép với <em>track đang theo còn thừa</em> (yêu cầu IoU &ge; 0.5); không khớp thì hủy bỏ chứ không mở ID mới.<br>• <strong>track_buffer = 30</strong>: Đếm theo <strong>số khung hình (frame)</strong>, không đếm theo giây. Quá 30 frame không tìm thấy thì track bị xóa vĩnh viễn (kể cả khi bật ReID)."
  },
  {
    id: 31, day: 4, module: 1, category: "Đánh Giá Pose & Công Cụ",
    front: "Thước đo OKS (Object Keypoint Similarity) và Bẫy phím Hidden (H) trong CVAT?",
    back: "• <strong>OKS &amp; Per-keypoint Sigma</strong>: Mỗi khớp có bán kính dung sai riêng đo từ độ lệch giữa các chuyên viên trên 5.000 ảnh COCO. Dung sai ở <strong>hông lớn gấp ~4 lần ở mắt</strong> (~10.8 px so với ~2.5 px trên người cao 100 px) vì hông nằm sau quần áo. Đúng khớp quan trọng hơn đúng pixel!<br>• <strong>Bẫy phím H (Hidden)</strong>: Trông giống <code>Outside</code> trên màn hình nhưng chỉ để đỡ rối mắt, <strong>không được lưu vào file xuất</strong> (khi export vẫn xuất ra <code>v = 2</code>)."
  },
  {
    id: 32, day: 5, module: 1, category: "Kỹ Thuật Segmentation",
    front: "Quy tắc bất biến trong Paired Transform &amp; Kiểm tra khép kín (Round-trip) cho Mask?",
    back: "• <strong>Paired Transform</strong>: Ảnh RGB và Mask phải dùng chung tham số biến đổi hình học (crop/flip). Khi đổi kích thước (resize), ảnh dùng nội suy mượt (bilinear), nhưng <strong>Mask bắt buộc dùng <code>NEAREST</code></strong> để không sinh ra các giá trị thập phân (lớp ma) ở biên viền.<br>• <strong>Round-trip Check</strong>: Sau khi export sang Polygon/RLE/PNG, bắt buộc phải import và rasterize ngược lại rồi <strong>overlay lên ảnh gốc</strong> để kiểm tra biên, lỗ thủng (hole) và class ID."
  },

  // ==================== KHỐI 2: FLASHCARDS BỔ SUNG (CHUYÊN SÂU) ====================
  {
    id: 33, day: 6, module: 2, category: "Thống Kê QC",
    front: "Ba chỉ số đánh giá năng lực Reviewer trên tập lỗi gài sẵn (Recall, FPR, FDR) có mẫu số khác nhau thế nào?",
    back: "• <strong>Recall</strong> = Số lỗi gài tìm được / Tổng số lỗi đã gài (thấp &rArr; nguy cơ lọt lỗi nguy hiểm).<br>• <strong>FPR</strong> = Số item sạch bị cắm cờ nhầm / Tổng số item sạch (cao &rArr; tốn công đi kiểm tra lại).<br>• <strong>FDR</strong> = Số cờ báo nhầm / Tổng số cờ đã giơ (cao &rArr; annotator mất niềm tin vào nhận xét của reviewer)."
  },
  {
    id: 34, day: 6, module: 2, category: "Đo Lường Đa Lớp",
    front: "Phân biệt Micro, Macro và Worst-class Recall? Nên đặt Quality Gate ở chỉ số nào?",
    back: "• <strong>Micro Recall</strong>: Gộp chung toàn bộ mẫu lại tính (bị các lớp đông áp đảo hoàn toàn).<br>• <strong>Macro Recall</strong>: Tính riêng từng lớp rồi lấy trung bình cộng (lớp hiếm ngang quyền với lớp phổ biến).<br>• <strong>Worst-class Recall</strong>: Điểm số của lớp có tỷ lệ nhận diện tệ nhất.<br>&rArr; <strong>Quality Gate bắt buộc phải đặt ở Macro hoặc Worst-class</strong> (đặc biệt các lớp an toàn như người đi bộ, chướng ngại vật hiếm)."
  },
  {
    id: 35, day: 7, module: 2, category: "Chuyển Đổi Định Dạng",
    front: "Bẫy tọa độ giữa 3 định dạng CVAT XML, COCO JSON và YOLO TXT?",
    back: "• <strong>CVAT XML</strong>: Lưu tọa độ 2 góc đối diện <code>(xtl, ytl, xbr, ybr)</code> theo pixel tuyệt đối.<br>• <strong>COCO JSON</strong>: Lưu góc trên-trái và kích thước hộp <code>[x_min, y_min, width, height]</code> theo pixel.<br>• <strong>YOLO TXT</strong>: Lưu tọa độ tâm hộp và kích thước đã chuẩn hóa <code>[x_center, y_center, w, h]</code> trong đoạn [0, 1] (đồng thời làm rơi rụng toàn bộ thuộc tính phụ)."
  },
  {
    id: 36, day: 7, module: 2, category: "Bảo Mật & Pháp Lý",
    front: "4 mức phân loại dữ liệu (Data Classification) và hạn lưu trữ theo Governance (Luật 91/2025/QH15)?",
    back: "• <strong>Mức 0 (Public)</strong>: Guideline, danh mục nhãn (công khai, không giới hạn).<br>• <strong>Mức 1 (Internal)</strong>: File nhãn tách khỏi ảnh thô (nội bộ dự án, lưu tối đa 1 năm).<br>• <strong>Mức 2 (Personal basic)</strong>: Ảnh đã làm mờ mặt và biển số xe (annotator được giao, lưu tối đa 180 ngày).<br>• <strong>Mức 3 (Sensitive/raw)</strong>: Video thô chưa làm mờ + tọa độ GPS (chỉ 2-3 người có khóa mã hóa, lưu tối đa 30 ngày)."
  },
  {
    id: 37, day: 8, module: 2, category: "Thẩm Định Pre-label",
    front: "4 trạng thái cấu thành AI Error Profile và sự khác biệt giữa Residual Error vs New Error?",
    back: "• <strong>4 trạng thái</strong>: Accepted (AI đúng), Edited (người sửa lệch/class), Deleted (xóa False Positive), Added (vẽ bù False Negative bị sót).<br>• <strong>Residual Error</strong>: Lỗi do AI sinh ra mà annotator nhìn sót không phát hiện được.<br>• <strong>New Error</strong>: Nhãn AI ban đầu vốn đúng nhưng annotator sửa thành sai (thường do không nắm vững guideline)."
  },
  {
    id: 38, day: 8, module: 2, category: "Synthetic Data & Sim2Real",
    front: "Nghịch lý góc nhìn trong tái dựng 3D (NeRF/3DGS) và quy định pháp lý EU 2022/1426?",
    back: "• <strong>Nghịch lý góc nhìn</strong>: Chuyển sang ảnh tái dựng làm mAP tụt từ 24% đến 58%; chỉ cần dịch camera ảo 1m sang bên để mô phỏng lấn làn, mAP tụt thêm 13–18%.<br>• <strong>EU 2022/1426</strong>: Dữ liệu mô phỏng không bao giờ được phép thay thế hoàn toàn thử nghiệm đường thực; nhà sản xuất bắt buộc phải chứng minh tương quan chặt chẽ bằng dữ liệu thực địa có nhãn chuẩn."
  },

  // ==================== KHỐI 3: FLASHCARDS BỔ SUNG (CHUYÊN SÂU) ====================
  {
    id: 39, day: 9, module: 3, category: "Road Elements",
    front: "Phân biệt Lane Marking, Lane Boundary và Lane Centerline trong bài toán nhận thức làn đường?",
    back: "• <strong>Lane Marking</strong>: Vạch sơn vật lý nhìn thấy trên mặt đường nhựa (gán bằng Polyline kèm thuộc tính kiểu dáng/màu sắc).<br>• <strong>Lane Boundary</strong>: Ranh giới logic phân chia làn xe chạy (có thể bị mờ hoặc không có vạch sơn).<br>• <strong>Lane Centerline</strong>: Đường tâm ảo ở giữa làn đường, phục vụ bài toán lập kế hoạch quỹ đạo (Planning) và bản đồ Topology (OpenLane-V2)."
  },
  {
    id: 40, day: 9, module: 3, category: "Drivable & Signs",
    front: "Phân biệt vùng Direct Drivable với Alternative Drivable và cấu trúc Ontology 3 tầng cho biển báo?",
    back: "• <strong>Drivable Area</strong>: <em>Direct</em> là làn chính xe tự hành đang lưu thông hợp lệ; <em>Alternative</em> là làn liền kề hoặc làn rẽ xe có thể chuyển sang khi cần.<br>• <strong>Ontology 3 tầng</strong>: Tầng 1 (<code>sign_family</code>: cấm/nguy hiểm/chỉ dẫn/tạm thời) &rarr; Tầng 2 (<code>sign_type</code>) &rarr; Tầng 3 (<code>exact_symbol</code>) kết hợp đưa biến thể phụ vào Attributes để chống bùng nổ class."
  },
  {
    id: 41, day: 10, module: 3, category: "Cabin Perception",
    front: "Cấu trúc bộ 50 điểm mốc khuôn mặt (DMS) và sự khác biệt giữa chỉ số EAR, MAR, PERCLOS?",
    back: "• <strong>50 Facial Landmarks</strong>: Mắt (2 &times; 8 = 16), Lông mày (2 &times; 5 = 10), Sống mũi (4), Môi ngoài (12), Môi trong (8).<br>• <strong>EAR</strong>: Tỷ lệ mở mắt đo theo từng frame.<br>• <strong>MAR</strong>: Tỷ lệ mở miệng (tăng cao liên tục 1–2s báo hiệu tài xế đang ngáp sớm).<br>• <strong>PERCLOS</strong>: Tỷ lệ % thời gian mắt nhắm &ge; 80% trong cửa sổ 1 phút (ngưỡng báo động buồn ngủ &ge; 15%)."
  },
  {
    id: 42, day: 10, module: 3, category: "Action Recognition",
    front: "So sánh kiến trúc ST-GCN (2018) và PoseC3D (2022) trong nhận diện hành vi từ chuỗi Keypoint?",
    back: "• <strong>ST-GCN</strong>: Coi mỗi khớp là một đỉnh đồ thị nối theo khung xương, tích chập đồng thời theo không gian–thời gian (rất nhạy cảm nếu tọa độ một điểm đơn lẻ bị nhiễu).<br>• <strong>PoseC3D</strong>: Biến mỗi khớp thành bản đồ nhiệt 2D (Heatmap), xếp chồng theo thời gian thành khối 4D <code>[C &times; T &times; H &times; W]</code> đưa qua mạng <strong>3D-CNN</strong>, giúp bền vững hơn hẳn trước sai số ước lượng tọa độ."
  },
  {
    id: 43, day: 11, module: 3, category: "SVM 360° Rules",
    front: "Quy tắc phân biệt Truncated vs Occluded và nguyên tắc 'Không tự khử méo trong đầu' (No Mental Undistort)?",
    back: "• <strong>No Mental Undistort</strong>: Bám sát bằng chứng pixel trên ảnh fisheye thô (vạch kẻ cong thì vẽ polyline cong theo ảnh, tuyệt đối không kéo thẳng theo tưởng tượng).<br>• <strong>Truncated = true</strong>: Vật thể bị cắt cụt bởi mép khung hình ảnh hoặc vỏ xe tự hành (<code>ego_body</code>).<br>• <strong>Occluded = true</strong>: Vật thể nằm trọn trong vùng nhìn nhưng bị đối tượng khác trong cảnh che khuất."
  },
  {
    id: 44, day: 11, module: 3, category: "SVM QA & Space",
    front: "Tại sao phải khai báo Annotation Space (Raw / Stitched / BEV), đánh dấu Ignore Regions và tách Gold Set theo từng Camera ID?",
    back: "• <strong>Annotation Space</strong>: Ngăn chặn dịch chuyển ngữ nghĩa ngầm và phân biệt lỗi gán nhãn với lỗi ghép ảnh/hiệu chuẩn camera.<br>• <strong>Ignore Regions</strong> (<code>ego_body, lens_border, stitch_seam, unreadable</code>): Bảo vệ mô hình khỏi bị phạt oan ở vùng không có bằng chứng hình ảnh.<br>• <strong>Per-camera Gold Set</strong>: 4 camera quanh xe có góc đặt và phân phối lỗi khác nhau; nếu chỉ nhìn mAP gộp sẽ che giấu lỗi nguy hiểm ở camera lùi/hông."
  },

  // ==================== KHỐI 4: FLASHCARDS BỔ SUNG (CHUYÊN SÂU) ====================
  {
    id: 45, day: 12, module: 4, category: "Hình Học Quét LiDAR",
    front: "Công thức tính bán kính vòng quét chạm đất R của từng kênh LiDAR và ý nghĩa với phân bố mật độ điểm?",
    back: "<strong>R = h / tan(|&phi;|)</strong> (với <em>h</em> là độ cao lắp cảm biến LiDAR, <em>&phi;</em> là góc nâng âm chúc xuống mặt đường).<br>• Góc chúc càng sâu (|&phi;| lớn) &rarr; bán kính R nhỏ (vùng gần xe mật độ điểm rất dày).<br>• Góc quét sát phương ngang (&phi; &rarr; 0&deg;) &rarr; bán kính R rất lớn (càng ra xa các vòng quét càng thưa, do đó cảm biến cao cấp phải tập trung dày đặc tia quét quanh 0&deg;)."
  },
  {
    id: 46, day: 12, module: 4, category: "Kiểm Soát 3 Góc Chiếu",
    front: "Mỗi góc chiếu (Top, Front, Side) trong không gian 3D trả lời tham số nào và mù thông tin gì?",
    back: "• <strong>Top View (BEV)</strong>: Khóa chặt <em>x, y, L, W, yaw (góc xoay hướng xe)</em> — nhưng mù hoàn toàn về cao độ <em>z</em> và chiều cao <em>H</em>.<br>• <strong>Side View</strong>: Khóa chặt <em>z, H</em> và vị trí <em>đáy chạm mặt đường (ground contact)</em> dọc thân xe.<br>• <strong>Front View</strong>: Kiểm tra bề rộng <em>W</em>, chiều cao <em>H</em> và độ nghiêng — nhưng mù hoàn toàn về chiều dài <em>L</em>."
  },
  {
    id: 47, day: 13, module: 4, category: "6 Bài Toán Point Cloud",
    front: "Phân biệt nhanh 6 bài toán xử lý đám mây điểm 3D (Classification, Detection, Segmentation, Tracking, Registration, SLAM)?",
    back: "• <strong>Classification</strong>: 1 cụm điểm đã cắt sẵn &rarr; 1 tên lớp đối tượng.<br>• <strong>Detection</strong>: Toàn cảnh đám mây điểm &rarr; nhãn lớp + 7 tham số hộp cuboid 3D từng vật.<br>• <strong>Segmentation</strong>: Gán nhãn lớp cho từng điểm laser rời rạc (không có hướng xoay).<br>• <strong>Tracking</strong>: Duy trì 1 mã Track ID duy nhất xuyên suốt chuỗi thời gian.<br>• <strong>Registration</strong>: Căn chỉnh 2 đám mây điểm về chung một hệ tọa độ <code>(R, T)</code>.<br>• <strong>SLAM</strong>: Ước lượng quỹ đạo di chuyển của xe đồng thời dựng bản đồ môi trường liên tục."
  },
  {
    id: 48, day: 13, module: 4, category: "Kiến Trúc 3D Detector",
    front: "Sự đánh đổi cốt lõi giữa 3 họ mô hình: Point-based (PointNet++), Voxel-based (SECOND) và Pillar-based (PointPillars)?",
    back: "• <strong>Point-based (PointNet++)</strong>: Giữ nguyên điểm laser thô &rarr; bảo toàn hình học sắc nét nhất nhưng tìm lân cận rất chậm, không chạy realtime được.<br>• <strong>Voxel-based (SECOND)</strong>: Cắt thể tích thành các voxel 3D + Sparse Conv &rarr; cân bằng tối ưu giữa độ chính xác hình học và tốc độ.<br>• <strong>Pillar-based (PointPillars)</strong>: Nén chiều cao Z thành các cột đứng (pillars) &rarr; dùng 2D CNN tốc độ siêu nhanh (rất chuộng cho pre-label), nhưng mất chi tiết cao độ và dễ lệch hướng xoay."
  },
  {
    id: 49, day: 14, module: 4, category: "Vòng Đời Track & Keyframe",
    front: "5 trạng thái vòng đời của một Track và quy tắc đặt Keyframe khi xe rẽ cong hoặc bị che khuất?",
    back: "• <strong>5 trạng thái</strong>: <em>Enter &rarr; Visible &rarr; Occluded &rarr; Reappear &rarr; Exit</em> (Duy trì duy nhất 1 ID từ Enter đến Exit; khi hiện lại sau che là Reappear, tuyệt đối không cấp ID mới).<br>• <strong>Quy tắc Keyframe</strong>: Công cụ gán nhãn chỉ nối nội suy thẳng tuyến tính giữa 2 keyframe. Bắt buộc phải cắm keyframe tại: thời điểm vào cảnh (Enter), <strong>đỉnh khúc cua khi xe bắt đầu đổi hướng</strong>, ngay trước khi bị che và ngay khi vừa hiện ra."
  },
  {
    id: 50, day: 14, module: 4, category: "4 Nguyên Nhân Lệch 2D–3D",
    front: "Bốn nguyên nhân khiến hình chiếu 2D (Camera) và 3D (LiDAR) không trùng nhau cùng cách xử lý chuẩn?",
    back: "1. <strong>Khác góc mở FOV</strong>: LiDAR quét 360&deg; thấy xe, camera trước góc 55&deg; không thấy &rarr; Gán theo bằng chứng LiDAR, chuyển sang camera hông nếu có.<br>2. <strong>Occlusion chéo cảm biến</strong>: Vật chắn 1 trong 2 loại cảm biến &rarr; Ghi nhận theo cảm biến còn bằng chứng.<br>3. <strong>Điểm LiDAR thưa (Sparse points)</strong>: Ảnh camera rõ nét nhưng LiDAR chỉ có vài điểm &rarr; Tuyệt đối không tự phóng to hộp theo cảm giác ảnh; lấy kích thước chuẩn từ frame dày.<br>4. <strong>Lỗi trôi hiệu chuẩn (Calibration drift)</strong>: Mọi vật thể đều bị lệch cùng chiều trên nhiều frame liên tiếp &rarr; Không kéo lệch hộp, ghi log và <strong>Escalate</strong> lên đội ngũ kỹ thuật."
  }
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
  },
{
    title: "Bảng Đối Chiếu 3 Định Dạng Nhãn 2D (YOLO vs COCO vs Pascal VOC / CVAT)",
    category: "Kỹ thuật 2D & Chuyển đổi",
    tags: "format yolo coco voc cvat bndbox toa do pixel normalized conversion",
    html: `
      <div class="table-responsive-wrapper">
        <table class="data-table">
          <thead>
            <tr><th>Tiêu chí</th><th>YOLO (.txt)</th><th>COCO (.json)</th><th>Pascal VOC / CVAT XML</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Tọa độ lưu trữ</strong></td><td><code>class cx cy w h</code></td><td><code>[x_min, y_min, width, height]</code></td><td><code>&lt;bndbox&gt; xmin, ymin, xmax, ymax</code></td></tr>
            <tr><td><strong>Đơn vị đo</strong></td><td>Chuẩn hóa [0.0, 1.0] theo kích thước ảnh</td><td>Pixel thực tế (tọa độ nguyên / thực)</td><td>Pixel thực tế (tọa độ 2 góc chéo)</td></tr>
            <tr><td><strong>Gốc tọa độ (0, 0)</strong></td><td>Góc trên-trái ảnh</td><td>Góc trên-trái ảnh</td><td>Góc trên-trái ảnh (lưu ý 0 vs 1-indexed)</td></tr>
            <tr><td><strong>Cấu trúc lưu trữ</strong></td><td>1 file <code>.txt</code> riêng cho từng ảnh</td><td>1 file <code>.json</code> tổng chứa toàn bộ tập ảnh</td><td>1 file <code>.xml</code> / ảnh hoặc 1 file lớn</td></tr>
            <tr><td><strong>Thuộc tính (Attributes)</strong></td><td><span class="status-pill status-pill-danger">Rơi mất hoàn toàn</span> (chỉ giữ 5 số)</td><td><span class="status-pill status-pill-success">Bảo toàn</span> qua object <code>attributes</code></td><td><span class="status-pill status-pill-success">Bảo toàn</span> qua các thẻ XML lồng nhau</td></tr>
            <tr><td><strong>Bẫy kỹ thuật</strong></td><td>Đọc nhầm tâm <code>(cx, cy)</code> thành góc trên-trái làm lệch nửa hộp</td><td>Lẫn lộn giữa <code>(xmax, ymax)</code> và <code>(width, height)</code></td><td>Lệch chỉ số 0-index và 1-index giữa các parser</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    title: "Bảng Phân Tích & So Sánh 4 Cảm Biến Cốt Lõi Trên Xe Tự Hành",
    category: "Cảm biến & Vật lý",
    tags: "sensor camera lidar radar ultrasonic fov range thoi tiet vat ly",
    html: `
      <div class="table-responsive-wrapper">
        <table class="data-table">
          <thead>
            <tr><th>Cảm biến</th><th>Phổ / Tần số</th><th>Cự ly đo</th><th>Góc mở (FOV)</th><th>Ưu thế vượt trội</th><th>Điểm mù / Hạn chế vật lý</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Camera (RGB/NIR)</strong></td><td>400–700 nm (RGB)<br>940 nm (DMS NIR)</td><td>0 – 150m+</td><td>30&deg; (Tele) đến<br>190&deg; (Fisheye)</td><td>Độ phân giải cực cao, nhận diện màu sắc, biển báo, vạch kẻ, tín hiệu đèn</td><td>Chói sáng ngược nắng, sương mù, ban đêm; mất chiều sâu trực tiếp (phải ước lượng)</td></tr>
            <tr><td><strong>LiDAR (ToF)</strong></td><td>905 nm (phổ thông)<br>1550 nm (an toàn mắt)</td><td>0.5 – 200m</td><td>360&deg; (Cơ học) hoặc<br>120&deg; (Solid-state)</td><td>Đo khoảng cách chính xác từng mm, tạo hình học 3D trực tiếp, không phụ thuộc ánh sáng</td><td>Mưa to, sương mù dày (hấp thụ/tán xạ laser), bề mặt kính trong suốt; giá thành cao</td></tr>
            <tr><td><strong>Radar (4D Imaging)</strong></td><td>77 – 79 GHz<br>(Sóng milimet)</td><td>1 – 250m+</td><td>Góc ngang 90&deg;–120&deg;<br>Góc nâng hẹp</td><td>Đo trực tiếp vận tốc xuyên tâm qua hiệu ứng Doppler; xuyên sương mù, mưa tuyết, đêm tối</td><td>Độ phân giải góc thấp hơn LiDAR; nhiều bóng ma phản xạ kim loại (ghost reflections)</td></tr>
            <tr><td><strong>Ultrasonic (Siêu âm)</strong></td><td>40 – 50 kHz<br>(Sóng âm cơ học)</td><td>0.15 – 5m</td><td>Hình nón hẹp<br>60&deg; – 80&deg;</td><td>Chi phí rất rẻ, đo cự ly cực gần siêu chính xác phục vụ đỗ xe và lùi chuồng</td><td>Tốc độ truyền chậm (340 m/s), nhiễu gió lớn, bị hấp thụ bởi bề mặt xốp (bụi cây, vải)</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    title: "Ma Trận Thước Đo Đánh Giá AI Tự Hành (Autonomous Perception Metrics)",
    category: "Thước đo & Đánh giá",
    tags: "metric map iou dice oks mota idf1 hota kappa alpha danh gia",
    html: `
      <div class="table-responsive-wrapper">
        <table class="data-table">
          <thead>
            <tr><th>Bài toán</th><th>Thước đo chuẩn</th><th>Bản chất toán học</th><th>Ý nghĩa thực chiến</th><th>Ngưỡng đạt kỳ vọng</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Phát hiện 2D/3D</strong></td><td><strong>mAP@50</strong> &amp;<br><strong>mAP@50:95</strong></td><td>Trung bình diện tích dưới đường cong PR qua các ngưỡng IoU từ 0.50 đến 0.95 (bước nhảy 0.05)</td><td>Đo tổng hợp cả khả năng phân loại lớp và độ ôm khít hộp. mAP50-95 phạt rất nặng hộp vẽ lỏng/lệch biên</td><td>mAP@50 &ge; 65–80%<br>mAP@50:95 &ge; 40–55%</td></tr>
            <tr><td><strong>Ước lượng Tư thế</strong></td><td><strong>OKS</strong> &amp;<br><strong>mAP@OKS</strong></td><td><code>&Sigma; exp(-d<sub>i</sub><sup>2</sup> / (2s<sup>2</sup>&sigma;<sub>i</sub><sup>2</sup>)) &middot; v<sub>i</sub> / &Sigma; v<sub>i</sub></code></td><td>Đóng vai trò như IoU cho bộ xương; dung sai &sigma; khớp hông lớn gấp ~4 lần khớp mắt. Đúng khớp &gt; đúng pixel</td><td>mAP@OKS &ge; 70–80%</td></tr>
            <tr><td><strong>Theo dõi Đa đối tượng</strong></td><td><strong>IDF1</strong> &amp;<br><strong>HOTA</strong></td><td><code>IDF1 = 2&middot;IDTP / (2&middot;IDTP + IDFP + IDFN)</code><br><code>HOTA = &radic;(DetA &times; AssA)</code></td><td>Đo sự toàn vẹn danh tính xuyên suốt clip. Đổi ID ở giữa video làm hỏng quỹ đạo và khiến IDF1 tụt về 50%</td><td>IDF1 &ge; 75–85%<br>HOTA &ge; 60–70%</td></tr>
            <tr><td><strong>Phân vùng (Segmentation)</strong></td><td><strong>mIoU</strong> &amp;<br><strong>Dice Score</strong></td><td><code>IoU = TP / (TP + FP + FN)</code><br><code>Dice = 2&middot;TP / (2&middot;TP + FP + FN)</code></td><td>Đo độ trùng khớp pixel vùng đối tượng. Ca rỗng/rỗng (không có khuyết tật) bắt buộc phải tách báo cáo riêng</td><td>mIoU &ge; 75–85%<br>(Cityscapes / BDD)</td></tr>
            <tr><td><strong>Độ tin cậy Gán nhãn</strong></td><td><strong>Cohen's &kappa;</strong> &amp;<br><strong>Krippendorff's &alpha;</strong></td><td><code>&kappa; = (p<sub>o</sub> &minus; p<sub>e</sub>) / (1 &minus; p<sub>e</sub>)</code><br><code>&alpha; = 1 &minus; (D<sub>o</sub> / D<sub>e</sub>)</code></td><td>Loại bỏ xác suất đồng thuận ngẫu nhiên giữa các chuyên viên; dùng để thẩm định độ rõ ràng của Guideline</td><td>&ge; 0.80: Gần hoàn hảo<br>&lt; 0.60: Rework guideline</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    title: "Quy Chuẩn Quản Trị Dữ Liệu & Tuân Thủ Pháp Lý (Luật 91/2025 & NĐ 356/2025)",
    category: "Quản trị & Pháp lý",
    tags: "governance phap ly luat 91 nghi dinh 356 face plate blur bao mat quy dinh",
    html: `
      <div class="table-responsive-wrapper">
        <table class="data-table">
          <thead>
            <tr><th>Cấp độ phân loại</th><th>Mô tả dữ liệu</th><th>Biện pháp kỹ thuật bắt buộc</th><th>Thời hạn lưu trữ</th><th>Phạm vi cấp quyền</th></tr>
          </thead>
          <tbody>
            <tr><td><span class="status-pill status-pill-success">Mức 0 (Public)</span></td><td>Tài liệu hướng dẫn (Guideline), bảng Ontology, danh mục Class list</td><td>Công khai nội bộ hoặc cộng đồng; không chứa thông tin thực địa nhạy cảm</td><td>Không giới hạn thời gian</td><td>Toàn bộ nhân sự &amp; đối tác</td></tr>
            <tr><td><span class="status-pill status-pill-info">Mức 1 (Internal)</span></td><td>File nhãn vector (tọa độ Bounding box, Polygon, Keypoints, Tracks) tách rời ảnh thô</td><td>Lưu trữ trên máy chủ nội bộ, mã hóa dữ liệu khi truyền tải (TLS 1.3)</td><td>Tối đa 1 năm sau khi đóng dự án</td><td>Toàn bộ thành viên đội ngũ dữ liệu</td></tr>
            <tr><td><span class="status-pill status-pill-warning">Mức 2 (Personal Basic)</span></td><td>Hình ảnh, video đường phố đã được làm mờ (blur) khuôn mặt và biển số xe</td><td>Chạy script tự động làm mờ trước khi gán nhãn; kiểm tra tỷ lệ sót mờ &le; 0.1%</td><td>Tối đa 180 ngày kể từ ngày thu thập</td><td>Chuyên viên gán nhãn và reviewer được chỉ định</td></tr>
            <tr><td><span class="status-pill status-pill-danger">Mức 3 (Sensitive / Raw)</span></td><td>Footage thô chưa làm mờ, tọa độ định vị GPS xe di chuyển, camera cabin quay tài xế</td><td>Khóa mã hóa bảo mật phần cứng (KMS/HSM), tuyệt đối cấm tải lên cloud công cộng hoặc AI ngoài</td><td>Tối đa 30 ngày (sau đó bắt buộc xóa thô hoặc ẩn danh hoàn toàn)</td><td>Chỉ 2–3 quản trị viên cấp cao có khóa bảo mật</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    title: "Quy Trình 3 Lượt Kiểm Soát Chất Lượng Đa Tầng (3-Pass QA Pipeline)",
    category: "Kiểm soát chất lượng",
    tags: "quy trinh 3 luot 3-pass qc qa sampling inspect fast scan script zoom audit",
    html: `
      <div class="table-responsive-wrapper">
        <table class="data-table">
          <thead>
            <tr><th>Lượt kiểm tra</th><th>Tên công đoạn</th><th>Công cụ &amp; Thao tác chính</th><th>Dạng lỗi phát hiện nhanh</th><th>Tốc độ &amp; Chi phí</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Lượt 1 (Tầng 1)</strong></td><td>Fast Shape &amp; Scan Pass</td><td>Bật đường nối xương (19 edges), không phóng to ảnh; tua video tốc độ 2&times; trên CVAT</td><td>Bắt ngay lỗi <strong>Đảo trái/phải</strong> (thân xương cắt chéo), <strong>Box treo</strong> (quên cờ Outside), <strong>Box trôi</strong> giữa keyframe xa, <strong>Tráo ID</strong></td><td>Siêu nhanh (~1s/người hoặc ~10 phút/clip). Bắt được 60–70% lỗi nghiêm trọng</td></tr>
            <tr><td><strong>Lượt 2 (Tầng 2)</strong></td><td>Scripted Automated Audit</td><td>Chạy script kiểm tra logic trên manifest và file xuất (Python / FiftyOne)</td><td>Bắt lỗi số lượng điểm <code>num_keypoints &lt; 17</code>, tọa độ vượt ngoài mép ảnh, tỷ lệ cờ <code>v=1/v=0</code> lệch bất thường giữa annotator, ảnh trùng hash</td><td>Tự động 100%, chi phí 0 đồng, loại bỏ triệt để mọi lỗi cú pháp trước khi nạp vào model</td></tr>
            <tr><td><strong>Lượt 3 (Tầng 3)</strong></td><td>Deep Inspection &amp; Zoom Pass</td><td>Mở ảnh ở mức phóng đại 200–300% trên tập mẫu ngẫu nhiên (QA sample 10–20% lô)</td><td>Kiểm tra độ ôm khít viền (tightness), đáy tiếp xúc mặt đường 3D (ground contact), phân biệt modal vs amodal, điền thuộc tính ngữ cảnh</td><td>Chậm (~30–60s/vật), chi phí cao nhất; dùng làm căn cứ nghiệm thu Quality Gate cuối cùng</td></tr>
          </tbody>
        </table>
      </div>
    `
  }
];

// Expose constants to window scope for direct browser usage (supports file:// and standard script tags)
if (typeof window !== 'undefined') {
  window.QUIZ_BANK = QUIZ_BANK;
  window.FLASHCARD_BANK = FLASHCARD_BANK;
  window.CHEAT_SHEETS = CHEAT_SHEETS;
}

// Support CommonJS / testing environments if present
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUIZ_BANK, FLASHCARD_BANK, CHEAT_SHEETS };
}
