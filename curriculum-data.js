// 72+ Golf Academy - Student Portal Data (Updated with Question Bank & Interactive Exams)

const MOCK_STUDENT_PROFILE = {
  studentId: "HV-72P-8802",
  name: "Nguyễn Văn An",
  phone: "0988 123 456",
  email: "an.nguyen@72plusgolfacademy.edu.vn",
  coach: "Nguyễn Thái Dương (HLV Trưởng)",
  cohort: "First Swing K01 | 1:5 Group Class",
  isApprovedByAdmin: true,
  attendedCount: 5,
  totalSessions: 24,
  upcomingSession: {
    title: "Buổi 6: Review Giữa Kỳ 1 & TrackMan Fitting",
    date: "Thứ Ba, 04/08/2026",
    time: "18:00 - 19:00",
    location: "Sân tập Golf Phương Đông (Tân Mỹ, Mỹ Đình)",
    status: "confirmed"
  },
  completedQuizzes: {
    phase1: 80
  }
};

const COURSE_POLICY = {
  title: "Chính Sách Khóa Học & Quy Định Lớp Nhóm First Swing",
  location: "Sân tập Golf Phương Đông, Đường Tân Mỹ, Mỹ Đình, Nam Từ Liêm, Hà Nội",
  schedule: "18:00 - 19:00 (Thứ 3 & Thứ 5 hàng tuần)",
  cohortName: "First Swing K01 | Cơ sở Phương Đông | 18:00 - T3&T5",
  policies: [
    "Đúng giờ & Khởi động: Đến sớm 15 phút trước khi buổi học bắt đầu để hoàn tất khởi động.",
    "Trang phục chuẩn golf: Áo có cổ, giày golf hoặc giày thể thao đinh mềm.",
    "Lịch học cố định & Thông báo nghỉ: Lớp học diễn ra theo lịch cố định toàn khóa (không áp dụng hoàn, hủy hoặc học bù). Học viên vui lòng bấm 'Xin Nghỉ Học' trên ứng dụng trước giờ học nếu vắng mặt để HLV hỗ trợ bài tập tự luyện.",
    "Ôn tập & Thực hành: Xem lại kiến thức sau buổi học và thực hành theo hướng dẫn/yêu cầu của HLV.",
    "An toàn & Etiquette: Tuân thủ các nguyên tắc an toàn và văn hóa ứng xử golf."
  ]
};

const CURRICULUM_DATA = [
  {
    "phase": 1,
    "phaseName": "GIAI ĐOẠN 1: FOUNDATION (Buổi 1 - 6)",
    "phaseDesc": "Hiểu và thiết lập nền tảng: Lý thuyết cơ bản, Set-up P1-P10, Grip, Stance, Posture & Cảm giác bóng",
    "sessions": [
      {
        "id": 1,
        "title": "Buổi 1: Buổi",
        "date": "Tuần 1, Buổi 1",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n01",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 1: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nSet up – Tư thế chuẩn bị \n1. Cách cầm gậy (Grip): Cách cầm gậy là yếu tố cơ bản và quan trọng nhất đối với 1 người chơi golf. Cầm gậy sai sẽ dẫn đến những lỗi không đáng có trong quá trình tập và phát triển cú swing. Để có kỹ thuật chơi golf tốt, các bạn cần có một cách cầm gậy tốt. Đây là yếu tố tiên quyết. \n- Gậy phải nằm trên các ngón tay của hai bàn tay thay vì ở trong lòng bàn tay (Ảnh minh hoạ_H1). \n- Từ mức 1 đến 10, lực cầm gậy nên vào khoảng 4 hoặc 5. Điều này tạo điều kiện cho việc điều khiển gậy linh hoạt hơn và ảnh hưởng trực tiếp đến tốc độ swing. \n- Tay thả lỏng xuống từ vai. Nếu làm đúng, bạn sẽ thấy 2 hoặc 3 đốt ngón tay ở trên mu bàn tay trái. Lòng bàn tay phải hướng đến mục tiêu, giúp kiểm soát tốt nhất hướng đi của bóng. \n- Ngón cái và ngón trỏ ở mỗi bàn tay tạo thành hình chữ V hướng đến vai phải (Ảnh minh hoạ_H2). \n- Hai bàn tay phải hoạt động như một thể thống nhất. Để làm được điều đó, lòng bàn tay phải nằm trên ngón cái của tay trái (Ảnh minh hoạ_H3). Hai tay có thể được liên kết với nhau bằng cách cầm gậy bao ngón (overlapping), đan ngón (interlocking), hoặc 10 ngón (ten finger). \n2. Tư thế đứng (Posture) \n- Gập người từ cơ hông và giữ lưng thẳng. Mông, sống lưng và đầu tạo nên một đường thẳng. Điều này sẽ giúp bạn có thể xoay dễ dàng và chuẩn hơn khi thực hiện động tác lên gậy (Backswing) \n- Cánh tay phải thả lỏng xuống từ vai. Hông phải đẩy ra sau đủ để giữa cơ thể và nơi cầm gậy cách nhau khoảng một bàn tay. \n- Đầu gối hơi trùng để giữ thăng bằng và tạo độ vững chắc, sao cho trọng tâm của cả cơ thể sẽ nằm giữa gam bàn chân. (Ảnh minh hoạ_H4) \n- Mũi bàn phải chĩa về hướng 1 giờ, trong khi mũi bàn chân trái hướng về phía 10 giờ (độ mở lớn hơn bàn chân phải) \n- Trong tâm được chia đều cho 2 chân trái phải với tỷ lệ 50 - 50\n3. Căn chỉnh cơ thể và gây (body & club alignment)\n- Đường nối giữa hai mũi chân, 2 đầu gối, 2 hông,2 vai phải và 2 cánh tay song song với nhau và hướng tới mục tiêu. (Ảnh minh họa_H5)\n- Vị trí tay cầm khi setup luôn ở bên trong đùi trái. \n- Cạnh phía trước của mặt gậy phải vuông góc với đường mục tiêu. (Ảnh minh họa_H6)  \n- Khi set up, vai phải của bạn sẽ thấp hơn vai trái 1 chút (đối với người thuận tay phải), do tay phải cầm phia bên dưới tay trái và impact, mặt gậy của bạn phải hướng về phía mục tiêu. Mặt gậy ở đây là vạch cuối trên mặt gậy - cạnh phía trước (leading edge)) vuông góc với đường mục tiêu. \n- Duy trì độ ngửa chuẩn của mặt gậy (loft) đúng như của nhà sản xuất khi đặt gậy sau bóng và hướng đến mục tiêu. Đối với gậy số 7 sắt, khi tay cẩm của bạn ở trong đùi trái, vị trí bóng nằm ở tim thì độ ngửa của mặt gậy sẽ ở khoảng 32 độ (Ảnh minh họa_H7)\n- Mặt gậy mở là khi mặt gậy hướng sang phải và độ ngửa của mặt gậy tăng lên. Vị trí mặt gậy này sẽ tạo ra những đường bóng bổng và bay sang phải mục tiêu. \n- Mặt gậy đóng là khi mặt gậy hướng sang trái và độ ngửa của mặt gậy giảm xuống. Vị trí mặt gậy này sẽ tạo ra những đường bóng thấp và bay sang trái mục tiêu. \n- Mặt gậy vuông góc là khi mặt gậy hướng theo đường mục tiêu và duy trì độ ngửa chuẩn. Vị trí mặt gậy này sẽ tối ưu khoảng cách và hướng bóng bay đúng với hướng ngắm.\n4. Tư thế (Stance) và vị trí bóng (Ball position) \n- Bộ gậy golf của chúng ta có 14 gậy với các độ dài khác nhau dẫn đến các độ rộng của thế đứng và vị trí bóng khác nhau. Chúng hoạt động theo nguyên tắc gậy càng ngắn thì tư thế đứng càng hẹp và vị trí bóng càng dịch về phía phải, gậy càng dài thì tư thế đứng càng rộng và vị trí bóng càng dịch về phía trái. Lưu ý vị trí bóng chỉ xê dịch trong khoảng từ chính giữa cho đến lòng trong chân trái \n- Vị trí bóng của cây gậy ngắn nhất là gậy kỹ thuật (SW, LW) sẽ nằm ở chính giữa cơ thể, đối với các gậy dài hơn sẽ có vị trí đạt bóng dịch chuyển dần sang trái với tỷ lệ cân đối, vị trí bóng của cây gậy dài nhất là gậy phát (Driver) sẽ nằm ở lòng trong chân trái. (Ảnh minh họa_H8)\n- Tương tự như vậy độ rộng của chân sẽ thay đổi theo tỷ lệ cân đối. Độ rộng của gậy ngắn nhất là mép ngoài hai bàn chân tương ứng với hai vai. Gậy càng dài tư thế đứng sẽ càng rộng. Độ rộng của gậy dài nhất là hai vai nằm lọt trong mép trong của 2 bàn chân (Ảnh minh họa_H9)\n\nI. Set up - Tư thế chuẩn bị: 1. Cách cầm gậy (Grip):  I1: Cách cầm gậy là yếu tố cơ bản và quan trọng nhất đối với 1 người chơi golf. Cầm gậy sai sẽ dẫn đến những lỗi không đáng có trong quá trình tập và phát triển cú swing. - Đặt gậy nằm trên các ngón tay của hai bàn tay - thay vì ở trong lòng bàn tay (Ảnh minh hoạ_H1). \n - Đặt sao cho ngón cái và ngón trỏ ở mỗi bàn tay tạo thành hình chữ V hướng đến vai phải (Ảnh minh hoạ_H2).\n  - Có 3 cách cầm gậy: cầm gậy bao ngón (overlapping), đan ngón (interlocking), hoặc 10 ngón (ten finger). Ở 72+ khuyến khích dùng cách interlocking (Ảnh minh hoạ_H3).  \nI2: - Từ mức 1 đến 10, lực cầm gậy nên vào khoảng 4 hoặc 5. Điều này tạo điều kiện cho việc điều khiển gậy linh hoạt hơn và ảnh hưởng trực tiếp đến tốc độ swing. \n - Tay thả lỏng xuống từ vai. Nếu làm đúng, bạn sẽ thấy 2 hoặc 3 đốt ngón tay ở trên mu bàn tay trái. Lòng bàn tay phải hướng đến mục tiêu, giúp kiểm soát tốt nhất hướng đi của bóng.   \n\n2. Tư thế đứng (Posture) \n\nI1: - Đầu tiên đứng thẳng người, 2 chân đứng rộng bằng vai, đẩy hông về phía sau.   \n- Từ từ gập người xuống, trùng nhẹ 2 đầu gối. Trọng tâm đồn vào giữa hai chân và chia đều 50% cho mỗi chân  \n- Hai bàn chân hướng thẳng về phía trước. - Đường nối giữa 2 mũi chân, 2 đầu gối, 2 hông, 2 vai phải và 2 cánh tay song song với nhau và hướng tới mục tiêu. \n- Vị trí tay cầm gâỵ khi setup luôn ở bên trong đùi trái. Chuôi cán gậy cách cơ thể 1 bàn tay. - Khi set up, vai phải của bạn sẽ thấp hơn vai trái 1 chút. \n- Mặt gậy phải vuông góc với đường mục tiêu. Nếu như mặt gậy bị đóng bóng sẽ đi sang trái, mặt gậy bị mở bóng sẽ đi sang phải.  \n*Định nghĩa mặt gậy: Là vạch cuối trên mặt gậy - cạnh phía trước (leading edge) vuông góc với đường mục tiêu. Mặt gậy vuông góc là khi mặt gậy hướng theo đường mục tiêu và duy trì độ ngửa chuẩn. Vị trí mặt gậy này sẽ tối ưu khoảng cách và hướng bóng bay đúng với hướng ngắm. \n I2: - Tư thế đứng chuẩn sao cho mông, sống lưng và đầu tạo nên một đường thẳng. Điều này sẽ giúp bạn có thể xoay dễ dàng và chuẩn hơn khi thực hiện động tác lên gậy (Backswing)  \n- Cánh tay phải thả lỏng xuống từ vai. \n - Mặt gậy mở là khi mặt gậy hướng sang phải và độ ngửa của mặt gậy tăng lên. Vị trí mặt gậy này sẽ tạo ra những đường bóng bổng và bay sang phải mục tiêu.  \n- Mặt gậy đóng là khi mặt gậy hướng sang trái và độ ngửa của mặt gậy giảm xuống. Vị trí mặt gậy này sẽ tạo ra những đường bóng thấp và bay sang trái mục tiêu. \n\n  3. Vị trí bóng (Ball position)  - Bộ gậy golf của chúng ta có 14 gậy với các độ dài khác nhau dẫn đến các độ rộng của thế đứng và vị trí bóng khác nhau. Chúng hoạt động theo nguyên tắc gậy càng ngắn thì tư thế đứng càng hẹp và vị trí bóng càng dịch về phía phải, gậy càng dài thì tư thế đứng càng rộng và vị trí bóng càng dịch về phía trái. Lưu ý vị trí bóng chỉ xê dịch trong khoảng từ chính giữa cho đến lòng trong chân trái  \n- Vị trí bóng của cây gậy ngắn nhất là gậy kỹ thuật (SW, LW) sẽ nằm ở chính giữa cơ thể, đối với các gậy dài hơn sẽ có vị trí đạt bóng dịch chuyển dần sang trái với tỷ lệ cân đối, vị trí bóng của cây gậy dài nhất là gậy phát (Driver) sẽ nằm ở lòng trong chân trái. (Ảnh minh họa_H8) \n- Tương tự như vậy độ rộng của chân sẽ thay đổi theo tỷ lệ cân đối. Độ rộng của gậy ngắn nhất là mép ngoài hai bàn chân tương ứng với hai vai. Gậy càng dài tư thế đứng sẽ càng rộng. Độ rộng của gậy dài nhất là hai vai nằm lọt trong mép trong của 2 bàn chân (Ảnh minh họa_H9)\n\nHLV vừa trình bày vừa thực hành làm mẫu đầy đủ lý thuyết về tư thế Set-up\n\nHọc viên lắng nghe, quan sát nắm được các động tác Set-up\n\nPutting – Gạt bóng\nPutt: cú đánh được thực hiện với một cây gậy được gọi là putter khi người chơi ở trên khu vực green của sân\nĐây là một trong những kỹ năng quan trọng. Mỗi vòng đấu, tần suất bạn sẽ phải sử dụng kỹ năng này  lên đến khoảng 30% đến 40%.\nPutting hay còn gọi là Gạt bóng là kỹ thuật ít đòi hỏi về sức mạnh, nhưng lại cần độ chính xác vô cùng cao. Hoạt động giống như nguyên lý cơ bản của kỹ thuật đánh ngắn (shortgame), độ chính xác càng cao, càng giới hạn các thành tố tạo lực.\n\n1. Tư thế chuẩn bị có một vài điểm khác so với các kỹ thuật khác:\n- Tay cầm (grip): khá phổ biến là cách cầm tay bao ngón ngược (reverse overlap). Thay vì ngón út tay phải ôm vào bàn tay trái thì chúng ta sử dụng ngón trỏ tay trái ôm trọn các ngón bàn tay phải (ảnh minh hoạ). Các ngón còn lại cầm giống như các kỹ thuật đánh khác. Đây là cách cầm gậy gạt phổ biến những không phải là duy nhất và bắt buộc. Nếu các bạn theo dõi các giải đấu chuyên nghiệp, các bạn sẽ nhìn thấy khá nhiều kiểu tay cầm gậy khác nhau. Điều quan trọng nhất đó là cách cầm gậy nào cũng được, những phải tạo được sự thoải mái, giúp chúng ta cảm nhận được cán gậy, mặt gậy và sự ổn định khi thực hiện cú gạt bóng. Với việc cầm ngón trỏ tay trái bao bàn tay phải, chúng ta sẽ hạn chế được việc sử dụng cổ tay khi thực hiện kỹ thuật gạt bóng, tạo sự ổn định cho cú đánh.\n- 2 cánh tay buông lỏng tự nhiên, không duỗi thẳng như các cú đánh khác. Thay vào đó là 2 khuỷu tay hơi gập, khép gần vào phía mạng sườn. Nếu nhìn từ phía ngang, phần cánh tay phải sẽ tạo thành một đường thẳng với cán gậy. (Ảnh minh hoạ)\n- 2 chân bằng vai (mép ngoài 2 bàn chân song song với 2 mép vai), cơ thể gập tự nhiên, lưng thẳng. Trọng tâm đặt nhiều hơn về phía chân trái (60-40). Vị trí bóng nằm ở nửa bên trái (thường ở tim)\n\n2. Kỹ thuật thực hiện:\n- Hoạt động theo nguyên tắc đồng hồ quả lắc. Các bạn đưa backswing ra bao nhiêu thì kết thúc ở vị trí đối xứng (ảnh minh hoạ).\n- Ra lực với nhịp điệu nhẹ nhàng, không giật cục. Cảm nhận việc ra lực từ vai và cánh tay. Hạn chế sử dụng cổ tay trừ những cú gạt từ khoảng cách rất xa.\n- Nửa thân dưới trụ vững, KHÔNG di chuyên hông và chân. Đầu giữ nguyên trong quá trình thực hiện kỹ thuật cho đến khi kết thúc. Việc không sử dụng lực từ thân dưới (thành tố tạo lực lớn) sẽ giúp cho cú đánh ổn định và chính xác hơn.\n\n3. Routine – Lộ trình thực hiện kỹ thuật:\n- Golf là một môn chơi đòi hỏi sự chính xác và độ ổn định cao, chính vì vậy việc thực hiện lặp đi lặp lại “lộ trình thực hiện kỹ thuật” (Routine) là một yếu tố vô cùng quan trọng. Nó giúp cho các bạn tạo được thói quen, cảm nhận để thực hiện một kỹ thuật đánh ít biến động và sai lệch.\n- Với kỹ thuật gạt bóng, routine thực hiện 1 cú gạt như sau: Bắt đầu bằng việc đứng sau bóng ngắm về phía mục tiêu. Hình dung trong đầu bạn đường bóng sẽ đánh chính xác từ bóng đến lỗ. Khi đã cảm thấy sẵn sàng, bước đến set up cách bóng khoảng 10cm và thực hiện nháp động tác gạt bóng, cố gắng cảm nhận lực mình sẽ sử dụng cho cú đánh. Sau khi thực hiện từ 2 đến 3 cú nháp, các bạn bươc lên set up vào bóng, ngắm mục tiêu lần cuối và thực hiện cú đánh.\n\n4. Một số lưu ý khi thực hiện kỹ thuật gạt bóng:\n- Để đọc được line chính xác, các bạn cần đi 4 phía của đường bóng. Cố gắng thực hiện việc đi 4 phía này trong lúc chờ các bạn chơi thực hiện cú gạt bóng để tránh làm chậm tốc độ chơi.\n- Luôn luôn giữ vững Routine trước mỗi cú đánh\n- Putting là một cú đánh cần cảm nhận nhiều nhất trong tất cả các kỹ thuật golf, chính vì vậy bạn cần cảm thấy thực sự thoải mái trước khi bắt đầu gạt bóng. Không có kỹ thuật cầm gậy hay set up nào là chính xác 100%. Hãy lựa chọn gậy, cách cầm gậy một cách thoải mái nhất để có được tự tin khi bắt đầu cú đánh. Chính sự tự tin mới là yếu tố quan trọng nhất đem lại thành công cho những cú gạt bóng.\n\nII. Chipping và pitching\n\nKỹ thuật đánh ngắn hoạt động dựa trên nguyên tắc cơ bản sau: khoảng cách càng ngắn, càng hạn chế sử dụng các bộ phận trên cơ thể để tạo lực\n\n1. Phân loại: Chipping là cú đánh ngắn dưới 30 yards, pitching là cú đánh từ 30 đến 100 yards.\n2. Tư thế chuẩn bị: Đứng hẹp hai chân, trọng tâm dồn trân trái. Khoảng cách đánh càng gần thì chân càng hẹp. \n3. Chọn gậy: \n- Đối với những người mới tập chơi, chọn gậy có độ ngửa vừa phải như P, 9 sắt. Những cây gậy này có mặt tiếp xúc nhiều hơn cũng như góc đánh ngang hơn, sẽ giúp cho người mới tập hạn chế lỗi khi thực hiện cú chip. \n\n4. Kỹ thuật: \n- Hạn chế cổ tay: Hạn chế sử dụng cổ tay lúc lên gậy, xuống gậy và kết thúc. Ở thời điểm chạm bóng (impact) đối với cú chip, nhìn từ góc ngang cán gậy hơi nghiêng sang trái, mu bàn tay trái hướng về phía mục tiêu (Ảnh minh hoạ).\n- Hạn chế chuyển trọng tâm: Hạn chế việc chuyển trọng tâm sang phải khi thực hiện động tác lên gậy (backswing). Khi thực hiện động tác xuống gậy và kết thúc, hạn chế nhắc chân phải (chứ không phải là khoá chặt)\n- Kết thúc: Cố gắng giữ cho mu bàn tay trái hướng về mục tiêu dài hơn so với cú đánh bình thường với gậy sắt, lên gậy cao bao nhiêu thì sẽ kết thúc ở đối xứng bấy nhiêu. Tưởng tượng cú đánh trên mặt đồng hồ, nếu backswing lên ở vị trí 7h thì kết thúc ở vị trí 5h, lên ở vị trí 8h thì kết thúc ở vị trí 4h, lên ở vị trí 9h thì kết thúc ở vị trí 3h. (Ảnh minh hoạ)\n\nI2: Đối với những người đã chơi một thời gian, có thể sử dụng các gậy có độ ngửa nhiều hơn như S, L và các kỹ thuật chip lob.\n\nHLV sẽ trình bày về Lý thuyết, làm mẫu về cú đánh ngắn: chip, pich và bắt đầu cho học viên thực hành.\n\nHọc viên lắng nghe và ghi nhớ các kiến thức cơ bản về cú đánh ngắn và những khác biệt trong tư thế set-up với loại gậy này\n\nHọc viên hiểu được các kiến thức cơ bản về cú đánh ngắn và những khác biệt trong tư thế set-up với loại gậy này"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 1",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 1",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 1",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Học viên thực hiện bài kiểm tra thực hiện cú chip trong 10 bóng liên tục, học viên đánh đúng kỹ thuật, bay bóng 7 quả => Đạt | Học viên thực hiện bài kiểm tra thực hiện cú chip  trong 10 bóng liên tục, học viên đánh đúng kỹ thuật, bay bóng 7 quả => Đạt | HLV quan sát và kiểm tra cú đánh của Học viên | Học viên thực hiện bài kiểm tra"
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\n- Xem lại kiến thức về bài tập cú đánh ngắn: Chip\n- Set-up chuẩn tư thế và thực hiện cú chip với tối thiểu 50 bóng \n- Bài tập bổ trợ về ......\n- Xem lại kiến thức về bài tập cú đánh ngắn: chipping và pitching\n- Set-up chuẩn tư thế và thực hiện cú chip với tối thiểu 50 bóng \n- Thực hành chipping và pitching\nHLV nhận xét buổi học: về các kỹ thuật mà Học viên đã đạt được, chưa đạt được\nGiao bài tập về nhà cho học viên\nCung cấp handout đầy đủ kiến thức của buổi 7 về kỹ thuật đánh ngắn: Chipping và Pitching\nHLV điền form S300: Nhận xét cuối buổi học Link"
      },
      {
        "id": 2,
        "title": "Buổi 2: Buổi",
        "date": "Tuần 1, Buổi 2",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n02",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 2: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\n- Ôn tập lại kiến thức về Set up, Chip, Pitch\n- Giới thiệu chi tiết các vị trí của cú swing P1 - P10\n- Lý thuyết & thực hành Half-swing (P1-P2-P3-P6-P7-P8) gậy sắt\n\n- Cung cấp thông tin chính xác nhất về khóa học\n- Khơi gợi sự tò mò và hứng thú của học viên đối với khóa học\n\nLàm nổi bật hiệu quả mà học viên sẽ đạt được sau khi tham gia bài học: học được/làm được kỹ năng gì?\n- Cung cấp những thông tin cơ bản nhất về nội dung, thời lượng học\n\nĐịnh nghĩa Swing: Động tác đánh golf cơ bản (hay còn gọi là cú Swing) được mô phỏng chi tiết tại các vị trí điểm từ  P1 - P10 trong đó:\n- P1 - P4: Back-swing\n- P5 - P6: Downswing\n- P7: Impact\n- P8 - P9: Follow-through\n- P10: Finish\n\nĐịnh nghĩa Swing: Động tác đánh golf cơ bản (hay còn gọi là cú Swing) được mô phỏng chi tiết tại các vị trí điểm từ  P1 - P10 trong đó: - P1 - P4: Back-swing - P5 - P6: Downswing - P7: Impact - P8 - P9: Follow-through - P10: Finish\n\nHLV giới thiệu vòng tròn swing; P-system (The positions of the golf swing)\n\nHọc viên lắng nghe nắm được chi tiết vị trí từ P1 đến P10\n\nHọc viên có kiến thức về 4 thành tố quan trọng cấu tạo nên cú swing.\nBIết được cách lên gậy 1/2 Swing (Half swing)\n\n- P system (nhìn từ phía trước)\n- P system circle tham khảo\n\nII. Cú Half-Swing Bao gồm Back-swing P1 - P2 - P3 và downswing P6 - P7 - P8 -        Luôn bắt đầu với tư thế chuẩn bị tốt: Cầm gậy, vị trí bóng, căn chỉnh cơ thể, độ rộng của hai chân, tư thế gập người và thăng bằng. -        Đưa gậy tới vị trí  P2 (takeaway - shaft parallel). Khi đưa gậy dùng cả cổ tay, cánh tay và vai để chuyển động. Vị trí đầu và góc gập người không thay đổi. Lúc này cán gậy sẽ song song với mặt đất nếu nhìn từ phía trước (Front view - FV) và chỉ thẳng tới mục tiêu nếu nhìn từ góc ngang (Down the line view - DTL). Nếu cán gậy chỉ vào trong (inside) khi đánh đầu gậy sẽ có xu hướng đi từ trong ra ngoài (inside out) làm cho bóng bay sang phải. Nếu cán gậy chỉ ra ngoài (outside), khi đánh đầu gậy se có xu hướng đi từ ngoài vào trong, khiến bóng bay sang trái. -        Với cánh tay trái thẳng, tiếp tục đưa gậy cho tới khi tay trái song song mặt đất (P3). Lúc này bẻ cổ tay để đưa gậy đến vị trí có góc gập 90 độ so với cánh tay trái nếu nhìn từ phía trước (Ảnh minh hoạ). Nếu nhìn từ phía ngang (DTL) cán gậy sẽ chiếu thẳng xuống quả bóng (Ảnh minh hoạ). Nêu cán gậy chỉ vào bên trong quả bóng, mặt phẳng swing của bạn sẽ bị coi là dựng (steep) và nhiều khả năng bị bổ xuống đât. Nếu cán gậy chỉ ra bên ngoài quả bóng, mặt phẳng swing của bạn sẽ bị coi là ngang (flat) và dễ dẫn đến đánh lên đầu bóng.  - Khi thực hiện động tác Back swing, trọng tâm cơ thể chuyển dần sang phải, cụ thể là về phía gót chân phải. Ở vị trí P3, chúng ta nên có khoảng 60% trọng tâm cơ thể ở phía bàn chân phải. -        Bắt đầu downswing bằng việc chuyển trọng tâm dần vào bàn chân trái, áp lực ở chân phải giảm dần và bàn chân trái tăng dần. Lực ép mặt đất chuyển dần từ mũi chân trái về gót chân trái. Trọng tâm cơ thể chuyển động ngang gần về phía mục tiêu. -        Sau khi chuyển trọng tâm, tập trung vào việc quay qua impact. Đầu gối trái mở ngược chiều kim đồng hồ, sau đó chân trái duỗi dần qua cú đánh, đồng thời chuyển động xoay trong khớp đùi trái (internal hip rotation).  -        Kết thúc ở vị trí đối xứng với vị trí lên gậy, cánh tay phải song song với mặt đất và hướng thẳng về mục tiêu, cán gậy tạo ra một góc 90 độ với cánh tay và chỉ xuống quả bóng (Ảnh minh hoạ). Trọng tâm hoàn toàn tiến về phía trước với gót chân phải hoàn toàn tách khỏi mặt đất.\n\nII. Half-Swing: Back-swing P1 - P2 - P3 và downswing P6 - P7 - P8\n\nBackswing\nI1:\n- Luôn bắt đầu với tư thế chuẩn bị tốt: Cầm gậy, vị trí bóng, căn chỉnh cơ thể, độ rộng của hai chân, tư thế gập người và thăng bằng. \n- Đưa gậy tới vị trí  P2 (takeaway - shaft parallel). Khi đưa gậy dùng cả cổ tay, cánh tay và vai để chuyển động. Nhìn từ phía trước, cán gậy sẽ song song với mặt đất. Nhìn từ phía ngang, cán gậy chỉ thẳng đến mục tiêu (không vào trong, không ra ngoài).\n- Giữ cánh tay trái thẳng, tiếp tục đưa gậy cho tới khi tay trái song song mặt đất (P3). Nhìn từ phía trước, cánh tay trái và gậy tạo thành 1 góc khoảng 90 độ. Nhìn từ góc ngang, gậy chỉ về hướng 11h.\n-  Khi thực hiện động tác Backswing, trọng tâm cơ thể chuyển dần sang gót chân phải, đạt 60% ở vị trị P3.\n\nI2:\nTại P2, Nếu cán gậy chỉ vào trong (inside) khi đánh đầu gậy sẽ có xu hướng đi từ trong ra ngoài (inside out) làm cho bóng bay sang phải. Nếu cán gậy chỉ ra ngoài (outside), khi đánh đầu gậy sẽ có xu hướng đi từ ngoài vào trong, khiến bóng bay sang trái.\nTại P3, Nếu cán gậy chỉ vào bên trong quả bóng, mặt phẳng swing của bạn sẽ bị coi là dựng (steep) và nhiều khả năng bị bổ xuống đất. Nếu cán gậy chỉ ra bên ngoài quả bóng, mặt phẳng swing của bạn sẽ bị coi là ngang (flat) và dễ dẫn đến đánh lên đầu bóng.  \n\nDownswing\nI1:\n- Khi đánh xuống, chúng ta dùng cả cơ thể để ra lực, bắt đầu từ chân, mông, xô và cánh tay theo đúng trình tự. Lúc chạm bóng, 90% trọng tâm cơ thể nằm ở phía chân trái, mặt gậy vuông góc với hướng mục tiêu.(Ảnh minh hoạ)\n- Kết thúc ở vị trí đối xứng với vị trí lên gậy, cánh tay phải vẫn khá thẳng và tạo một góc khoảng 30 đến 40 độ so với cánh tay phải ở vị trí P9, cán gậy xoay tự nhiên theo quán tính, không chủ động dừng gậy,\n\nI2:\n- Bắt đầu downswing bằng việc chuyển trọng tâm dần vào bàn chân trái, áp lực ở chân phải giảm dần và bàn chân trái tăng dần. Lực ép mặt đất chuyển dần từ mũi chân trái về gót chân trái. Trọng tâm cơ thể chuyển động ngang gần về phía mục tiêu. \n- Sau khi chuyển trọng tâm, tập trung vào việc quay qua impact. Đầu gối trái mở ngược chiều kim đồng hồ, sau đó chân trái duỗi dần qua cú đánh, đồng thời chuyển động xoay trong khớp đùi trái (internal hip rotation).  \n- Kết thúc ở vị trí đối xứng với vị trí lên gậy, cánh tay phải song song với mặt đất và hướng thẳng về mục tiêu, cán gậy tạo ra một góc 90 độ với cánh tay và chỉ xuống quả bóng (Ảnh minh hoạ). Trọng tâm hoàn toàn tiến về phía trước với gót chân phải hoàn toàn tách khỏi mặt đất.\n\nHLV vừa trình bày vừa thực hành làm mẫu đầy đủ lý thuyết về Halfswing\n\nHọc viên lắng nghe, quan sát nắm được các động tác Halfswing\n\nBackswing P1 đến P3\nDownswing P6 đến P8\n\nHọc viên thực hành cú swing với hướng dẫn kỹ thuật trên\n\nSau khi trình bày về Lý thuyết, HLV hướng dẫn học viên halfswing đúng kỹ thuật:\n- Đầu tiên cho học viên làm quen với cách lên gậy Halfswing.\n- HLV làm mẫu từ 2 đến 3 quả và bắt đầu cho học viên thực hành.\n- Sau khi học viên có một sự nhuần nhuyễn nhất định với động tác Halfswing, thầy bắt đầu cho học viên đánh thật với bóng nhưng ở trên tee.\n\nHọc viên thực hiện các kỹ thuật Halfswing theo hướng dẫn của HLV\n\nHọc viên thực hiện được cú Halfswing đúng kỹ thuật"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 2",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 2",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 2",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Học viên thực hiện bài kiểm tra thực hiện cú 1/2 swing trong 10 bóng liên tục, học viên set-up đúng, đánh bay bóng 5 quả => Đạt | Học viên thực hiện bài kiểm tra thực hiện cú Halfswing trong 10 bóng liên tục, học viên Set up đúng, đánh bay bóng 5 quả => Đạt | HLV quan sát và kiểm tra cú đánh của Học viên | Học viên thực hiện bài kiểm tra"
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\n- Xem lại kiến thức về bài tập cầm gậy, set-up, half-swing, \n- Xem video bổ trợ về tập.... (Tại đây)\n- Set-up chuẩn tư thế và thực hiện cú half-swing với tối thiểu 50 bóng\n- Xem lại kiến thức về bài tập Halfswing (Handout)\n- Set-up chuẩn tư thế và thực hiện cú Halfswing với tối thiểu 50 bóng\nHLV nhận xét buổi học: về các kỹ thuật mà Học viên đã đạt được, chưa đạt được\nGiao bài tập về nhà cho học viên\nCung cấp handout đầy đủ kiến thức của buổi 1 về cách cầm gậy, Set up, Halfswing\nHLV điền form S300: Nhận xét cuối buổi học Link"
      },
      {
        "id": 3,
        "title": "Buổi 3: Buổi",
        "date": "Tuần 2, Buổi 1",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n03",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 3: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\n3/4 cú swing (P1-P2-P3-Giữa P3&P4-P6-P7-P8-Giữa P8&P9) - Cần chia nhỏ, thực hiện 3/4 swing là bước đệm để học viên làm tốt được full-swing do việc thực hiện lên full-swing là không khả thi với Beginner\n- Luôn bắt đầu với tư thế chuẩn bị tốt: Cầm gậy, vị trí bóng, căn chỉnh cơ thể, độ rộng của hai chân, tư thế gập người và sự thăng bằng.\n- Thực hiện cú Half swing như đã học ở buổi trước. \n- Sau khi đưa gậy lên vị trí P3, tiếp tục giữ nguyên góc gập cơ thể,cố gắng giữ thẳng cánh tay trái nếu được, để cổ tay trái và tay phải hoạt động tự nhiên   cho tới cho tới khi cánh tay trái cao hơn vị trí song song với mặt đất tầm 30 đến 40 độ (Ảnh minh hoạ). Ở vị trí này, cổ tay phải có xu hướng hơi ngửa một cách tự nhiên, góc cổ tay bẻ nhiều hơn so với vị trí P3. Không đưa cán gậy lên quá cao đường vai (shoulder plane). Đầu gậy (club head path) cũng chuyển động dưới đường vai (đường từ quả bóng nối tới tâm vai) (ảnh minh hoạ) \n- Góc gập người không thay đổi, đầu vẫn giữ nguyên trong khoảng không gian gọi là hộp cố định (ảnh minh hoạ). Lúc này khoảng 65% đến 70% trọng tâm dồn phía bàn chân phải.\n- Khi đánh xuống, chúng ta dùng cả cơ thể để ra lực, bắt đầu từ chân, mông, xô và cánh tay theo đúng trình tự. Lúc chạm bóng, 90% trọng tâm cơ thể nằm ở phía chân trái, mặt gậy vuông góc với hương mục tiêu.(Ảnh minh hoạ)\n- Kết thúc ở vị trí đối xứng với vị trí lên gậy, cánh tay phải vẫn khá thẳng và tạo một góc khoảng 30 đến 40 độ so với cánh tay phải ở vị trí P9,  cán gậy xoay tự nhiên theo quán tính, không chủ động dừng gậy,\n\n3/4 Swing (là giai đoạn giữa halfswing và fullswing)\nBackswing\n\nI1:\n- Luôn bắt đầu với tư thế chuẩn bị tốt: Cầm gậy, vị trí bóng, căn chỉnh cơ thể, độ rộng của hai chân, tư thế gập người và sự thăng bằng.\n- Thực hiện cú Half swing như đã học ở buổi trước. \n- Sau khi đưa gậy lên vị trí P3 (tay trái song song mặt đất) thì lúc này cổ tay trái với cán gậy tạo thành 1 góc  khoảng 90 độ, giữ nguyên các vị trí đó, sau đó xoay thêm vai 1 chút (30-40 độ). Lúc này khoảng 65%-70%  trọng tâm dồn phía bàn chân phải.\n- Góc gập người không thay đổi, đầu vẫn giữ nguyên trong khoảng không gian gọi là hộp cố định (Ảnh minh hoạ)\n\nI2:\n- Sau khi đưa gậy lên vị trí P3 (tay song song mặt đất), tiếp tục giữ nguyên góc gập cơ thể, cố gắng giữ thẳng cánh tay trái trong khi để cổ tay trái và tay phải hoạt động tự nhiên cho tới cho tới khi cánh tay trái cao hơn vị trí song song với mặt đất tầm 30 đến 40 độ (Ảnh minh hoạ). Ở vị trí này, cổ tay phải có xu hướng hơi ngửa một cách tự nhiên, góc cổ tay bẻ nhiều hơn so với vị trí P3. Không đưa cán gậy lên quá cao đường vai (shoulder plane). Đầu gậy (club head path) cũng chuyển động dưới đường vai (đường từ quả bóng nối tới tâm vai) (Ảnh minh hoạ) \n\nDownswing\nI1:\n- Khi đánh xuống, chúng ta dùng cả cơ thể để ra lực, bắt đầu từ chân, mông, xô và cánh tay theo đúng trình tự. Lúc chạm bóng, 90% trọng tâm cơ thể nằm ở phía chân trái, mặt gậy vuông góc với hướng mục tiêu.(Ảnh minh hoạ)\n- Kết thúc ở vị trí đối xứng với vị trí lên gậy, cánh tay phải vẫn khá thẳng và tạo một góc khoảng 30 đến 40 độ so với cánh tay phải ở vị trí P9 đến vị trí P10, cán gậy xoay tự nhiên theo quán tính, không chủ động dừng gậy.\n\nKhi cảm thấy học viên đã thực hiện tốt cú 1/2 swing, HLV sẽ trình bày về Lý thuyết, làm mẫu của cú 3/4 swing và bắt đầu cho học viên thực hành. \n\nLưu ý cho HLV:\n- Tiếp tục cho học viên đánh ở trên tee hoặc không cần tee tuỳ vào khả năng của học viên. \n- Cần chia nhỏ, thực hiện 3/4 swing là bước đệm để học viên làm tốt được full-swing do việc thực hiện lên full-swing là không khả thi với Beginner\n\nHọc viên lắng nghe, quan sát nắm được các động tác thực hiện cú 3/4 Swing\n\nBackswing từ P3 lên giữa P3 và P4\nảnh follow through,\n\nHọc viên thực hành cú 3/4 swing với hướng dẫn kỹ thuật trên\n\nSau khi trình bày về Lý thuyết, HLV hướng dẫn học viên 3/4 swing đúng kỹ thuật:\n- Đầu tiên cho học viên làm quen với cách lên gậy 3/4 swing\n- HLV làm mẫu từ 2 đến 3 quả và bắt đầu cho học viên thực hành.\n- Sau khi học viên có một sự nhuần nhuyễn nhất định với động tác 3/4 swing, thầy bắt đầu cho học viên đánh thật với bóng nhưng ở trên tee.\n\nHọc viên thực hiện các kỹ thuật 3/4 Swing theo hướng dẫn của HLV\n\nHọc viên thực hiện được cú 3/4 Swing đúng kỹ thuật"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 3",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 3",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 3",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Học viên thực hiện bài kiểm tra thực hiện hiện cú half swing trong 5 bóng liên tục, học viên đánh đúng kỹ thuật, bay bóng 3 quả => Đạt\nHọc viên thực hiện bài kiểm tra thực hiện hiện cú 3/4 swing trong 10 bóng liên tục, học viên đánh đúng kỹ thuật, bay bóng 5 quả => Đạt | Học viên thực hiện bài kiểm tra thực hiện hiện cú half swing trong 5 bóng liên tục, học viên đánh đúng kỹ thuật, bay bóng 3 quả => Đạt\nHọc viên thực hiện bài kiểm tra thực hiện hiện cú 3/4 swing trong 10 bóng liên tục, học viên đánh đúng kỹ thuật, bay bóng 5 quả => Đạt | HLV quan sát và kiểm tra cú đánh của Học viên | Học viên thực hiện bài kiểm tra"
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\n- Xem lại kiến thức về bài tập 3/4 swing\n- Set-up chuẩn tư thế và thực hiện cú 3/4 với tối thiểu 50 bóng \n- Bài tập bổ trợ tập đầu\n- Xem lại kiến thức về bài tập 3/4 swing\n- Set-up chuẩn tư thế và thực hiện cú 3/4 với tối thiểu 50 bóng \n- Bài tập bổ trợ tập đầu\nHLV nhận xét buổi học: về các kỹ thuật mà Học viên đã đạt được, chưa đạt được\nGiao bài tập về nhà cho học viên\nCung cấp handout đầy đủ kiến thức của buổi 2 về 3/4 Swing\nHLV điền form S300: Nhận xét cuối buổi học Link"
      },
      {
        "id": 4,
        "title": "Buổi 4: Buổi",
        "date": "Tuần 2, Buổi 2",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n04",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 4: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nFull swing(P1-P10)\nBack swing (P1-P4)\n- Bắt đầu từ vị trí 3/4 swing (Giữa P3 và P4), tiếp tục xoay vai, hông và dùng 2 cánh tay, cổ tay để đưa gậy lên cho đến khi gậy song song với mặt đất. Lúc này vai trái xoay đến bóng hoặc qua bóng một chút về phía bên trái, lưng hướng về mục tiêu. Cánh tay ở góc khoảng 80 độ so mặt đất nếu nhìn từ phía trước, và nằm ơ trên đường nối cầu vai trái tới cầu vai phải nếu nhìn từ phía ngang (Ảnh minh hoạ).\n- Ở vị trí đỉnh của Back swing (P4), cán gậy nên chỉ về hướng mục tiêu. Cán gậy nếu chỉ sang trái mục tiêu sẽ dẫn đến vòng swing từ ngoài vào trong (outside in) tạo ra đường bóng lượn từ trái sang phải (fade hoặc slice). Ngược lại nếu cán gậy chỉ sang phải mục tiêu sẽ dẫn đến vòng swing từ trong ra ngoài (inside out) tạo ra đường bóng lượn từ phải sang trái (draw hoặc hook) (Ảnh minh hoạ). Cùng lúc đó khi nhìn từ góc ngang, cổ tay trái tạo một đường thẳng với cánh tay, cổ tay phải bẻ ngửa tự nhiên giống như tư thế bê đĩa (Ảnh minh hoạ)\n- Tại vị trí này, tỷ lệ góc thay đổi so với vị trí set up ban đầu của hông, vai và cánh tay tương đối như sau: 45 độ (hông), 100 độ (vai), 160 độ (cánh tay) (Ảnh minh hoạ)\nDown swing (P5-P7)\n- Khi đánh xuống, chúng ta dùng cả cơ thể để ra lực, bắt đầu từ chân, mông, xô và cánh tay theo đúng trình tự. Ở vị trí chạm bóng (impact), 90% trọng tâm cơ thể nằm ở phía chân trái, mặt gậy vuông góc với hương mục tiêu (Ảnh minh hoạ), vị trí đầu gần như không thay đổi so với lúc set up và back swing, góc gập cơ thể giữ nguyên, hông xoay ở góc khoảng 30 đến 45 độ so với lúc set up và mở về phía mục tiêu.\nFollow through và Finish (P8-P10)\n- Sau khi chạm bóng, các bạn để gậy và cơ thể xoay tự nhiên theo quán tính. Cán gậy sẽ đi qua các vị trí đối xứng với back swing lần lượt như P8 đối xứng với P2, P9 đối xứng với P3 và kết thúc ở vị trí P10.\n- Ở vị trí kết thúc, trọng tâm nằm hoàn toàn lên bên trái, chân trái duỗi thẳng tự nhiên, chân phải gập ở trạng thái nghỉ, bàn chân phải tạo thành 1 góc 90 độ với mặt đất. Lúc này hông hướng hoàn toàn vế phía mục tiêu.\n\nFull-swing(P1-P10)\nBack-swing (P1-P4)\nI1:\n- Bắt đầu từ vị trí 3/4 swing (Giữa P3 và P4), tiếp tục xoay vai, hông và dùng 2 cánh tay, cổ tay để đưa gậy lên cho đến khi gậy song song với mặt đất. Xoay vai đến bóng hoặc qua bóng tuỳ khả năng, lưng hướng về mục tiêu.\n- Nếu nhìn từ phía trước, thì cánh tay trái khoảng 80 độ so với mặt đật. Nếu nhìn từ phía ngang, cánh tay trái sẽ che cầu vai phải và cổ tay phải bẻ ngửa về phía sau, giống như động tác bê đĩa.\n- Ở vị trí đỉnh của Back swing (P4), cán gậy chỉ về hướng mục tiêu.\n\nI2: \n- Ở tư thế back swing, cánh tay ở góc khoảng 80 độ so mặt đất nếu nhìn từ phía trước, và nằm ơ trên đường nối cầu vai trái tới cầu vai phải nếu nhìn từ phía ngang (Ảnh minh hoạ).\nCán gậy nếu chỉ sang trái mục tiêu sẽ dẫn đến vòng swing từ ngoài vào trong (outside in) tạo ra đường bóng lượn từ trái sang phải (fade hoặc slice). Ngược lại nếu cán gậy chỉ sang phải mục tiêu sẽ dẫn đến vòng swing từ trong ra ngoài (inside out) tạo ra đường bóng lượn từ phải sang trái (draw hoặc hook) (Ảnh minh hoạ)\n- Tại vị trí này, tỷ lệ góc thay đổi so với vị trí set up ban đầu của hông, vai và cánh tay tương đối như sau: 45 độ (hông), 100 độ (vai), 160 độ (cánh tay) (Ảnh minh hoạ)\n\n\nDown-swing (P5-P7)\nI1: Như bài trước, finish ở vị trí P9-P10.\n\nFollow through và Finish (P8-P10)\nI1:\n- Sau khi chạm bóng, các bạn để gậy và cơ thể xoay tự nhiên theo quán tính. Cán gậy sẽ đi qua các vị trí đối xứng với back swing lần lượt như P8 đối xứng với P2, P9 đối xứng với P3 và kết thúc ở vị trí P10.\n- Ở vị trí kết thúc, trọng tâm nằm hoàn toàn lên bên trái, chân trái duỗi thẳng tự nhiên, chân phải gập ở trạng thái nghỉ, bàn chân phải tạo thành 1 góc 90 độ với mặt đất. Lúc này hông hướng hoàn toàn vế phía mục tiêu.\n\nKhi cảm thấy học viên đã thực hiện tốt cú 1/2 swing, HLV sẽ trình bày về Lý thuyết, làm mẫu của cú full-swing và bắt đầu cho học viên thực hành. \n\nLưu ý cho HLV: \n- Tiếp tục cho học viên đánh ở trên tee hoặc không cần tee tuỳ vào khả năng của học viên.\n\nHọc viên lắng nghe về phần lý thuyết về vị trí của bộ phận cơ thể khi thực hiện cú swing\n\nBackswing từ P3 lên P4, \nDownswing hoàn chỉnh, ảnh finish\n\nHọc viên thực hành cú swing với hướng dẫn kỹ thuật trên\n\nSau khi trình bày về Lý thuyết, HLV hướng dẫn học viên full-swing đúng kỹ thuật:\n- Đầu tiên cho học viên làm quen với cách lên gậy full-swing\n- HLV làm mẫu từ 2 đến 3 quả và bắt đầu cho học viên thực hành.\n- Sau khi học viên có một sự nhuần nhuyễn nhất định với động tác 3/4 swing, thầy bắt đầu cho học viên đánh thật với bóng nhưng ở trên tee.\n\nHọc viên thực hiện các kỹ thuật full-swing theo hướng dẫn của HLV\n\nHọc viên thực hiện được cú full-swing đúng kỹ thuật\n\n-        Short game được nhắc đến với những cú đánh được chơi trong khoảng 100 yards, bao gồm cả các cú đánh gần và trên green. Trong đó, Chip là cú đánh ngắn dưới 30 yard, thường sử dụng khi người chơi tiếp cận (approach) lên green bị lỗi hoặc đối với par 5 khi 2 cú đánh dài đã đưa được bóng đến sát khu vực green.\n\n-        Kỹ thuật đánh ngắn hoạt động dựa trên nguyên tắc cơ bản sau: khoảng cách càng ngắn, chúng ta càng hạn chế sử dụng các bộ phận trên cơ thể để tạo lực. Cụ thể như sau:\n\n-        Hạn chế các nhóm cơ tạo lực lớn như phần thân dưới (chân, mông) bằng cách đứng hẹp hai chân, khoảng cách càng gần càng hẹp, trọng tâm dồn phía chân trái, khoảng cách càng gần trọng tâm càng dồn về phía chân trái. Hạn chế việc chuyển trọng tâm sang phải khi thực hiện động tác lên gậy (backswing). Khi thực hiện động tác xuống gậy và kết thúc, hạn chế (chứ không phải là khoá chặt) chân phải.\n\n-        Hạn chế sử dụng cổ tay bẳng cách bớt cổ tay lúc lên gậy, trong quá trình xuống gậy và kết thúc, gần như không sử dụng cổ tay để vẩy cán gậy (flip) tạo độ cao cũng như khoảng cách cho cú đánh. Các bạn lưu ý ở thời điểm chạm bóng (impact) đối với cú chip, cán gậy hơi nghiêng sang trái, mu bàn tay trái hướng về phía mục tiêu. Các bạn cố gắng giữ cho mu bàn tay trái hướng về mục tiêu dài hơn so với cú đánh bính thường với gậy sắt trong suốt quá trình kết thúc của cú chip (Ảnh minh hoạ). \n-        Nhịp điệu chậm rãi, ổn đỉnh. Lên gậy bao nhiêu sẽ kết thúc bấy nhiêu. Tưởng tưởng cú đánh trên mặt đồng hồ, nếu backswing lên ở vị trí 7h thì kết thúc ở vị trí 5h, lên ở vị trí 8h thì kết thúc ở vị trí 4h, lên ở vị trí 9h thì kết thúc ở vị trí 3h. (Ảnh minh hoạ) -> Thông tin này của Chip or Pit?\n-        Đối với những người mới tập chơi, chúng ta sẽ luyện tập và sử dụng các gậy chip có độ ngửa vừa phải như P, 9 sắt. Những cây gậy này có mặt tiếp xúc nhiều hơn cũng như góc đánh ngang hơn, sẽ giúp cho người mới tập hạn chế lỗi khi thực hiện cú chip. Sau khi các bạn đã có thời gian luyện tập và nâng cao trình độ, chúng ta có thể tiến tới sử dụng cac gậy chip có độ ngửa nhiều hơn như S, L và các kỹ thuật chip lob.\n\nPutting – Gạt bóng\nPutt: cú đánh được thực hiện với gậy putter khi người chơi ở trên khu vực green của sân. \nĐây là một trong những kỹ năng quan trọng. Mỗi vòng đấu, tần suất bạn sẽ phải sử dụng kỹ năng này  lên đến khoảng 30% đến 40%.\nPutting là kỹ thuật ít đòi hỏi về sức mạnh, nhưng lại cần độ chính xác vô cùng cao. Hoạt động giống như nguyên lý cơ bản của kỹ thuật đánh ngắn (shortgame), độ chính xác càng cao, càng giới hạn các thành tố tạo lực.\n\n1. Tư thế chuẩn bị:\n- Chân: bằng vai (mép ngoài 2 bàn chân song song với 2 mép vai), cơ thể gập tự nhiên, lưng thẳng. Trọng tâm đặt nhiều hơn về phía chân trái (60-40). Vị trí bóng nằm ở nửa bên trái (thường ở tim).\n- Tay cầm (grip): khá phổ biến là cách cầm tay bao ngón ngược (reverse overlap). Thay vì ngón út tay phải ôm vào bàn tay trái thì chúng ta sử dụng ngón trỏ tay trái ôm trọn các ngón bàn tay phải (ảnh minh hoạ). Các ngón còn lại cầm giống như các kỹ thuật đánh khác. Đây là cách cầm gậy gạt phổ biến những không phải là duy nhất và bắt buộc. Điều quan trọng nhất đó là cách cầm gậy nào cũng được, những phải tạo được sự thoải mái, giúp chúng ta cảm nhận được cán gậy, mặt gậy và sự ổn định khi thực hiện cú gạt bóng. Với việc cầm ngón trỏ tay trái bao bàn tay phải, chúng ta sẽ hạn chế được việc sử dụng cổ tay khi thực hiện kỹ thuật gạt bóng, tạo sự ổn định cho cú đánh.\n- Tay: 2 cánh tay buông lỏng tự nhiên, không duỗi thẳng như các cú đánh khác. Thay vào đó là 2 khuỷu tay hơi gập, khép gần vào phía mạng sườn. Nếu nhìn từ phía ngang, phần cánh tay phải sẽ tạo thành một đường thẳng với cán gậy. (Ảnh minh hoạ)\n\n2. Kỹ thuật thực hiện:\n- Hoạt động theo nguyên tắc đồng hồ quả lắc. Các bạn đưa backswing ra bao nhiêu thì kết thúc ở vị trí đối xứng (ảnh minh hoạ).\n- Ra lực với nhịp điệu nhẹ nhàng, không giật cục. Cảm nhận việc ra lực từ vai và cánh tay. Hạn chế sử dụng cổ tay trừ những cú gạt từ khoảng cách rất xa.\n- Nửa thân dưới trụ vững, KHÔNG di chuyên hông và chân. Đầu giữ nguyên trong quá trình thực hiện kỹ thuật cho đến khi kết thúc. Việc không sử dụng lực từ thân dưới (thành tố tạo lực lớn) sẽ giúp cho cú đánh ổn định và chính xác hơn.\n\n3. Routine – Lộ trình thực hiện kỹ thuật:\n- Golf là một môn chơi đòi hỏi sự chính xác và độ ổn định cao, chính vì vậy việc thực hiện lặp đi lặp lại “lộ trình thực hiện kỹ thuật” (Routine) là một yếu tố vô cùng quan trọng. Nó giúp cho các bạn tạo được thói quen, cảm nhận để thực hiện một kỹ thuật đánh ít biến động và sai lệch.\n- Với kỹ thuật gạt bóng, routine thực hiện 1 cú gạt như sau: Bắt đầu bằng việc đứng sau bóng ngắm về phía mục tiêu. Hình dung trong đầu bạn đường bóng sẽ đánh chính xác từ bóng đến lỗ. Khi đã cảm thấy sẵn sàng, bước đến set up cách bóng khoảng 10cm và thực hiện nháp động tác gạt bóng, cố gắng cảm nhận lực mình sẽ sử dụng cho cú đánh. Sau khi thực hiện từ 2 đến 3 cú nháp, các bạn bươc lên set up vào bóng, ngắm mục tiêu lần cuối và thực hiện cú đánh.\n\n4. Một số lưu ý khi thực hiện kỹ thuật gạt bóng:\n- Để \"đọc line\" chính xác, các bạn cần đi 4 phía của đường bóng. Cố gắng thực hiện việc đi 4 phía này trong lúc chờ các bạn chơi thực hiện cú gạt bóng để tránh làm chậm tốc độ chơi.\n- Luôn luôn giữ vững Routine trước mỗi cú đánh\n- Giữ tâm trạng thoải mái, tự tin trước khi bắt đầu gạt bóng. Không có kỹ thuật cầm gậy hay set up nào là chính xác 100%.\n\nHLV sẽ trình bày về Lý thuyết, làm mẫu về cú gạt bóng putting\n\nHọc viên lắng nghe và ghi nhớ các kiến thức cơ bản về cú gạt bóng\n\nHọc viên hiểu được các kiến thức cơ bản về cú putting và thực hành đánh đúng kỹ thuật"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 4",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 4",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 4",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Học viên thực hiện bài kiểm tra thực hiện cú chip trong 10 bóng liên tục, học viên đánh đúng kỹ thuật, bay bóng 7 quả => Đạt | Học viên thực hiện bài kiểm tra thực hiện cú putt  trong 10 bóng liên tục, học viên đánh đúng kỹ thuật, vào lỗ bóng 5 quả => Đạt | HLV quan sát và kiểm tra cú đánh của Học viên | Học viên thực hiện bài kiểm tra"
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\n- Xem lại kiến thức về bài tập full - swing\n- Set-up chuẩn tư thế và thực hiện cú full swing với tối thiểu 50 bóng \n- Bài tập bổ trợ về hông\n- Xem lại kiến thức về bài tập full - swing\n- Set-up chuẩn tư thế và thực hiện cú full swing với tối thiểu 50 bóng \n- Thực hành Putting\n- Bài tập bổ trợ về hông\nHLV nhận xét buổi học: về các kỹ thuật mà Học viên đã đạt được, chưa đạt được\nGiao bài tập về nhà cho học viên\nCung cấp handout đầy đủ kiến thức của buổi 3 về full-swing\nHLV điền form S300: Nhận xét cuối buổi học Link"
      },
      {
        "id": 5,
        "title": "Buổi 5: Buổi",
        "date": "Tuần 3, Buổi 1",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n05",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 5: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nGIỚI THIỆU GẬY DRIVER: là cây gậy dài nhất trong bộ gậy và có cự ly đánh xa nhất. Mặt gậy có độ nghiêng thấp và thường dùng để phát bóng trên tee.\n\nGIỚI THIỆU GẬY DRIVER: là cây gậy dài nhất trong bộ gậy và có cự ly đánh xa nhất. Mặt gậy có độ nghiêng thấp và thường dùng để phát bóng trên tee dài\n\nHLV giới thiệu và mô tả về cây gậy driver\n\nHọc viên lắng nghe giới thiệu về gậy driver\n\nHọc viên biết được công dụng và định nghĩa của gậy driver\n\n- Điểm khác biệt cơ bản lớn nhất giữa gậy Driver và gậy sắt số 7 là ở tư thế chuẩn bị (set up). Driver là gậy có cự ly đánh xa nhất trong bộ gậy. Việc này đồng nghĩa với độ rộng của tư thế đứng (stance) là rộng nhất và vị trí đặt bóng cũng ở phía trái nhất. \n- Nếu như với gậy 7 sắt độ rộng của 2 mép ngoài chân trái và phải tương ứng với 2 cầu vai thì với gậy Driver, 2 cầu vai sẽ nằm lọt thỏm giữa 2 bàn chân, tương ứng với mép trong của 2 bàn chân. Vị trí bóng sẽ được đặt ở ngay lòng trong chân trái. Bóng được cắm trên tee với độ cao trung bình khoảng 45mm. Do Driver là gậy có độ loft thấp (giao động từ 8 - 12 độ) và mặt gậy sâu (deep club face) nên chúng ta cần đặt bóng ở độ cao hơn mặt cỏ để có thể đánh bóng cao hơn và tối ưu khoảng cách. \n- Gậy Driver có độ dài cán gây lớn nên tư thế đứng (posture) sẽ cao hơn tương đối so với số 7, đồng thời khiến mặt phẳng swing (swing plane) cũng ngang hơn (flat)\n\nI1:\n- Điểm khác biệt cơ bản lớn nhất giữa gậy Driver và gậy sắt số 7 là ở tư thế chuẩn bị (set up): Setup với gậy Driver, chân rộng hơn vai, và bóng nằm phía mép trong của chân trái.\n- Gậy Driver có độ dài cán gậy lớn nên tư thế đứng (posture) sẽ cao hơn tương đối so với số 7.\n\nI2:\n- Driver là gậy có cự ly đánh xa nhất trong bộ gậy. Việc này đồng nghĩa với độ rộng của tư thế đứng (stance) là rộng nhất và vị trí đặt bóng cũng ở phía trái nhất. \n- Nếu như với gậy 7 sắt độ rộng của 2 mép ngoài chân trái và phải tương ứng với 2 cầu vai thì với gậy Driver, 2 cầu vai sẽ nằm lọt thỏm giữa 2 bàn chân, tương ứng với mép trong của 2 bàn chân. Vị trí bóng sẽ được đặt ở ngay lòng trong chân trái. Bóng được cắm trên tee với độ cao trung bình khoảng 45mm. Do Driver là gậy có độ loft thấp (giao động từ 8 - 12 độ) và mặt gậy sâu (deep club face) nên chúng ta cần đặt bóng ở độ cao hơn mặt cỏ để có thể đánh bóng cao hơn và tối ưu khoảng cách. \n\nLưu ý cho HLV:\n- Do Driver là cây gậy có độ dài nhất, nên mặt phẳng swing (swing plane) cũng ngang hơn (flat).\n\nHLV hướng dẫn học viên set-up và thực hiện phát bóng với gậy driver. Trước khi cho học viện tập với bóng, HLV cho học viên swing gió với gậy Driver khoảng 10 lần để làm quen với mặt phẳng swing mới\n\nHọc viên lắng nghe về phần lý thuyết\n\nHọc viên hiểu được tư thế, kỹ thuật phát bóng được bằng gậy driver\n\nảnh set up với driver, fullswing với driver, finish với driver"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 5",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 5",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 5",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hiện đúng kỹ thuật 7/10 bóng dưới sự giám sát của HLV."
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\n- Xem lại kiến thức về tập golf với gậy Driver\n- Set-up chuẩn tư thế và thực hiện phát bóng với gậy driver với tối thiểu 50 bóng \n- Bài tập bổ trợ về tay\n- Xem lại kiến thức về tập golf với gậy Driver\n- Set-up chuẩn tư thế và thực hiện phát bóng với gậy driver với tối thiểu 50 bóng \n- Bài tập bổ trợ về tay\nHLV nhận xét buổi học: về các kỹ thuật mà Học viên đã đạt được, chưa đạt được\nGiao bài tập về nhà cho học viên\nCung cấp handout đầy đủ kiến thức của buổi 4 về gậy driver và cú đánh bóng bằng gậy driver\nHLV điền form S300: Nhận xét cuối buổi học Link"
      },
      {
        "id": 6,
        "title": "Buổi 6: Buổi",
        "date": "Tuần 3, Buổi 2",
        "time": "18:00 - 19:00",
        "type": "review",
        "duration": "60 phút",
        "techFocus": "Buổi\n06",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 6: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nGiới thiệu về công nghệ máy đo giả lập\n \n-        Với sự phát triển của công nghệ, càng ngày chúng ta càng có nhiều thiết bị đo đạc hỗ trợ công tác giảng dạy, tập luyện và hơn nữa là chơi golf giả lập.  Trong chương trình giảng dạy golf cơ bản, chúng tôi xin phép sẽ chỉ tập trung tới máy đo tốc độ đầu gậy và tốc độ bóng. Hiện tại chúng ta có 2 loại máy đo phổ biến nhất hiện nay là dạng máy đo bằng ảnh và đo bằng radar.  Loại máy đo nào cũng sẽ cho đầy đủ những thông số về đầu gậy và bóng. Các thông số này sẽ giúp cho HLV và học viên có thông tin chính xác và rõ rang hơn về đường bóng và các lý do tạo ra đường bóng của mình. \n-        Trong quá trình giảng dạy, đội ngũ HLV sẽ ghi lại các thong số đó và đưa ra các phương pháp cải thiện từng thông số. Dưới đây, chúng tôi sẽ đưa cho các bạn xem một vài bảng thông số tiêu chuẩn của các tay golf chuyên nghiệp và các trình độ handicap khác nhau.\n( Minh hoạ bằng bảng thông số trackman của PGA Tour, của Hdc 18 và các mức Hdc khác nếu có)\n\n1. Giới thiệu về công nghệ máy đo giả lập\n\n-   Với sự phát triển của công nghệ, càng ngày chúng ta càng có nhiều thiết bị đo đạc hỗ trợ công tác giảng dạy, tập luyện và hơn nữa là chơi golf giả lập. Trong chương trình giảng dạy golf cơ bản, chúng tôi xin phép sẽ chỉ tập trung tới máy đo tốc độ đầu gậy và tốc độ bóng. Hiện tại chúng ta có 2 loại máy đo phổ biến nhất hiện nay là dạng máy đo bằng ảnh và đo bằng radar. Loại máy đo nào cũng sẽ cho đầy đủ những thông số về đầu gậy và bóng. Các thông số này sẽ giúp cho HLV và học viên có thông tin chính xác và rõ rang hơn về đường bóng và các lý do tạo ra đường bóng của mình. \n\nCác loại máy đo bằng radar (xếp theo thứ tự đắt tiền và tốt): Trackman, Flightscope X3, Flightscope mevo plus \n\n\nCác loại máy đo bằng ảnh: GCQuad , Skytrak, Rapsodo, Voice Caddie\n\nCác loại máy giả lập sân thật nổi tiếng: Mỹ - Fullswing; HQ – Golfzon, K Golf, SG, GDR, Kakao, QED.\n\n-   Trong quá trình giảng dạy, đội ngũ HLV sẽ ghi lại các thông số đó và đưa ra các phương pháp cải thiện từng thông số. Dưới đây, chúng tôi sẽ đưa cho các bạn xem một vài bảng thông số tiêu chuẩn của các tay golf chuyên nghiệp và các trình độ handicap khác nhau.\n( Minh hoạ bằng bảng thông số trackman của PGA Tour, của Hdc 18 và các mức Hdc khác nếu có) : Link\n2. Giới thiệu các thông số và ý nghĩa của các thông số đó: \n\nTrong buổi 7, HLV sẽ lấy các thông số cơ bản cho học viên để lưu lại làm tư liệu đánh giá trình độ, tốc độ tiến bộ của học viên : điền form S800: bảng thông số gậy của Học viên Link offline, Link online\nHLV sẽ lưu 2 bảng thống số: 7 sắt và Driver.\nCác thông số bao gồm: Club Speed (mph), Smash Factor, Ball Speed, Attack Angle, Launch Angle, Spin Rate, Spin Loft, Club Path, Face Angle, Face to Path, Launch Direction, Dynamic Loft, Carry, Landing Angle\n\nHLV giới thiệu về golf trong nhà, cách thức thực hiện thực hiện\n\nHọc viên lắng nghe và xem các chỉ số trên máy\n\nHọc viên đánh được tối thiểu 10 bóng không mắc lỗi"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 6",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 6",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 6",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Kiểm tra & Review kết quả học tập | HLV đánh giá học viên theo bảng tiêu chí mẫu sau | Học viên thực hiện bài kiểm tra giữa khoá, thực hiện cú full swing trong 5 bóng liên tục với mỗi loại gậy: sắt, driver, gậy hybrid, học viên đánh đúng kỹ thuật 3 quả mỗi lượt => Đạt\nHLV đánh giá học viên thông qua phân tích video review 6 buổi và kiểm tra gậy của học viên | HLV phân tích các kỹ thuật của HV qua video và fitting gậy cho học viên | Học viên thực hiện bài kiểm tra bằng cách swing với 5 bóng liên tục với mỗi loại gậy (sắt, driver, gậy hybrid)\nHọc viên chú ý quan sát và nghe HLV sửa lỗi, điều chỉnh gậy | Học viên cần đánh 3/5 quả đạt với mỗi gậy\nHọc viên nắm được những điểm đã đạt được và chưa đạt được trong 6 buổi học vừa rồi, và chỉnh gậy phù hợp với cú swing của học viên"
          }
        ],
        "homework": "Bài tập về nhà\n- Xem lại kiến thức về swing với gậy Hybrid\n- Set-up chuẩn tư thế và thực hiện swing với gậy Hybrid với tối thiểu 50 bóng \n- Bài tập bổ trợ về tay\n- Xem lại kiến thức về swing với gậy Hybrid\n- Set-up chuẩn tư thế và thực hiện swing với gậy Hybrid với tối thiểu 50 bóng \n- Bài tập bổ trợ về tay\nHLV nhận xét buổi học: về các kỹ thuật mà Học viên đã đạt được, chưa đạt được\nGiao bài tập về nhà cho học viên\nCung cấp handout đầy đủ kiến thức của buổi 5 về gậy hybrid và cú đánh bóng bằng gậy hybrid\nHLV điền form S300: Nhận xét cuối buổi học Link"
      }
    ]
  },
  {
    "phase": 2,
    "phaseName": "GIAI ĐOẠN 2: BUILD & REPEAT (Buổi 7 - 12)",
    "phaseDesc": "Xây dựng kỹ thuật: Đánh cát, Long Game, Pitching Clock System & Xây dựng Distance Chart",
    "sessions": [
      {
        "id": 7,
        "title": "Buổi 7: Buổi",
        "date": "Tuần 4, Buổi 1",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n07",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 7: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nSand shot – Cú đánh từ bẫy cát\n\nCó 2 loại kỹ thuật đánh từ bẫy cát là đánh từ bẫy cát xa (Fairway bunker) và từ bẫy cát cạnh green (Green side bunker)\n\nA. Kỹ thuật Fairway bunker –Bẫy cát xa\n\nBẫy cát xa là các bẫy cát nằm dọc chiều dài hố có khoảng cách tới cờ tương đối xa (Từ 50 yard trở lên). \nĐối với các bẫy cát xa chúng ta sẽ thực hiện cú đánh khá tương đồng với kỹ thuật đánh bóng dài, chỉ khác ở một số điểm sau:\n1. Về set up:\n-  Di chuyển bóng về gần phía chân phải hơn (Từ 1 đến 2 thân bóng) so với vị trí đặt bóng tiêu chuẩn của cây gậy, tuỳ thuộc vào độ khó của cú đánh. Nếu như cát tơi, mềm hoặc bóng hơi lún, ốp la, chúng ta nên để bóng về gần chân phải nhiều hơn. Nếu như cát tương đối cứng, bóng nổi, tư thế đứng bằng phẳng chúng ta có thể để bóng gần về phía vị trí bóng tiêu chuẩn hơn.\n2. Về chọn gậy: \n- Nên chọn dư từ nửa số đến 1 số gậy cho cú đánh. Các cú đánh trong bẫy cát thường sẽ đi ngắn hơn khoảng cách tiêu chuẩn của gậy nên chúng ta sẽ phải cân đối trong quá trình lựa chọn. Thông thường cú đánh càng khó chúng ta càng nên chọn dư gậy và ngược lại.\n3. Về kỹ thuật đánh: \n- Trụ nhiều hơn về phía trái so với set up tiêu chuẩn (10%-20%). Khi thực hiện cú đánh, hạn chế việc chuyển trọng tâm sang chân phải khi backswing, điều này sẽ giúp các bạn nâng cao khả năng tiếp xúc bóng trước khi chạm vào cát. Chúng ta cũng nên hạn chế lên Back swing quá cao, do chúng ta đã chủ động chọn dư từ nửa đến 1 số gậy nên có thể sử dụng Back swing ngắn hơn và ít chuyển trọng tâm hơn. Cố gắng tránh tâm lý đánh xuống quá nhiều để đè bóng, tiếp xúc bóng trước, dễ dẫn đến việc bị hạ độ cao và đánh vào cát.\n4. Về nhịp điệu: \n- Cố gắng giữ nhịp điệu đều, ổn định trong quá trình Back swing và Down swing. Do trụ trong cát sẽ không vững như đứng trên cỏ nên thường xu hướng nhịp điệu swing của chúng ta sẽ bị ngắn, nhanh và vội vã.\n\nB. Kỹ thuật Green side bunker – Bẫy cát gần, bẫy cát cạnh green\n\nBẫy cát gần là các bẫy cát nằm sát khu vực green, có khoảng cách đến cờ dưới 50 yard. Đối với các bẫy cát gần chúng ta sử dụng kỹ thuật đánh như sau:\n1. Về set up: \n- Mặc dù là khoảng cách ngắn, nhưng chúng ta sẽ dung tương đối nhiều lực nên tư thế đứng rộng, bằng hoặc rộng hơn vai một chút (ngang số 7). Đầu gối hơi trùng, trọng tâm hạ thấp hơn tư thế đứng bình thường 1 chút. 2 chân, hông, vai hướng về trái mục tiêu khoảng 15 đến 20 độ (phụ thuộc vào độ mở của mặt gậy khi set up). Bóng đặt ở giữa 2 chân, trọng tâm hơi nghiêng về bên trái khoảng 60% đến 70% (phụ thuộc vào khoảng cách và độ cao mong muốn đánh, càng gần càng nghiêng trái, càng đánh thấp, lăn càng nghiêng trái). Mặt gậy hơi mở so với mục tiêu, tỷ lệ với góc mở của 2 chân.\n2. Về chọn gậy:\n- Chọn gậy có độ ngửa cao, thông thường người mới chơi sẽ sử dụng cây gậy S ở trong bộ gậy.\n3. Về kỹ thuật đánh: \n- Thực hiện cú ¾ swing, sử dụng khoảng 50% lực. Lưu ý chúng ta sẽ không đánh thẳng vào bóng mà đánh xuống cát trước bóng khoảng 5cm. Mặt gậy sẽ xúc và cát và bóng lên green. Kết thúc ở vị trí đối xứng với Back swing. Cũng giống như các kỹ thuật đánh ngắn khác, chúng ta không thực hiện việc chuyển trọng tâm sang bên phải khi Back swing và chuyển hết trọng tâm sang trái trong quá trình Down swing cũng như kết thúc.\n- Kỹ thuật đánh cát là một kỹ thuật tương đối khó đối với người mới tập chơi. Các bạn cần tập luyện thuần thục trước khi ra sân để tránh mất quá nhiều gậy để giải thoát khỏi các bẫy này.\n\nSand shot – Cú đánh từ bẫy cát\n\nCó 2 loại kỹ thuật đánh từ bẫy cát là đánh từ bẫy cát xa (Fairway bunker) và từ bẫy cát cạnh green (Greenside bunker)\n\nA. Kỹ thuật Fairway bunker –Bẫy cát xa\n\nBẫy cát xa là các bẫy cát nằm dọc chiều dài hố có khoảng cách tới cờ tương đối xa (Từ 50 yard trở lên). \nĐối với các bẫy cát xa chúng ta sẽ thực hiện cú đánh khá tương đồng với kỹ thuật đánh bóng dài, chỉ khác ở một số điểm sau:\n1. Về set up:\n-  Di chuyển bóng về gần phía chân phải hơn (Từ 1 đến 2 thân bóng) so với vị trí đặt bóng tiêu chuẩn của cây gậy, tuỳ thuộc vào độ khó của cú đánh. Nếu như cát tơi, mềm hoặc bóng hơi lún, ốp la, chúng ta nên để bóng về gần chân phải nhiều hơn. Nếu như cát tương đối cứng, bóng nổi, tư thế đứng bằng phẳng chúng ta có thể để bóng gần về phía vị trí bóng tiêu chuẩn hơn.\n2. Về chọn gậy: \n- Nên chọn dư từ nửa số đến 1 số gậy cho cú đánh. Các cú đánh trong bẫy cát thường sẽ đi ngắn hơn khoảng cách tiêu chuẩn của gậy nên chúng ta sẽ phải cân đối trong quá trình lựa chọn. Thông thường cú đánh càng khó chúng ta càng nên chọn dư gậy và ngược lại.\n3. Về kỹ thuật đánh: \n- Trụ nhiều hơn về phía trái so với set up tiêu chuẩn (10%-20%). Khi thực hiện cú đánh, hạn chế việc chuyển trọng tâm sang chân phải khi backswing, điều này sẽ giúp các bạn nâng cao khả năng tiếp xúc bóng trước khi chạm vào cát. Chúng ta cũng nên hạn chế lên Back swing quá cao, do chúng ta đã chủ động chọn dư từ nửa đến 1 số gậy nên có thể sử dụng Back swing ngắn hơn và ít chuyển trọng tâm hơn. Cố gắng tránh tâm lý đánh xuống quá nhiều để đè bóng, tiếp xúc bóng trước, dễ dẫn đến việc bị hạ độ cao và đánh vào cát.\n4. Về nhịp điệu: \n- Cố gắng giữ nhịp điệu đều, ổn định trong quá trình Back swing và Down swing. Do trụ trong cát sẽ không vững như đứng trên cỏ nên thường xu hướng nhịp điệu swing của chúng ta sẽ bị ngắn, nhanh và vội vã.\n\nB. Kỹ thuật Green side bunker – Bẫy cát gần, bẫy cát cạnh green\n\nBẫy cát gần là các bẫy cát nằm sát khu vực green, có khoảng cách đến cờ dưới 50 yard. Đối với các bẫy cát gần chúng ta sử dụng kỹ thuật đánh như sau:\n1. Về set up: \n- Mặc dù là khoảng cách ngắn, nhưng chúng ta sẽ dung tương đối nhiều lực nên tư thế đứng rộng, bằng hoặc rộng hơn vai một chút (ngang số 7). Đầu gối hơi trùng, trọng tâm hạ thấp hơn tư thế đứng bình thường 1 chút. 2 chân, hông, vai hướng về trái mục tiêu khoảng 15 đến 20 độ (phụ thuộc vào độ mở của mặt gậy khi set up). Bóng đặt ở giữa 2 chân, trọng tâm hơi nghiêng về bên trái khoảng 60% đến 70% (phụ thuộc vào khoảng cách và độ cao mong muốn đánh, càng gần càng nghiêng trái, càng đánh thấp, lăn càng nghiêng trái). Mặt gậy hơi mở so với mục tiêu, tỷ lệ với góc mở của 2 chân.\n2. Về chọn gậy:\n- Chọn gậy có độ ngửa cao, thông thường người mới chơi sẽ sử dụng cây gậy S ở trong bộ gậy.\n3. Về kỹ thuật đánh: \n- Thực hiện cú ¾ swing, sử dụng khoảng 50% lực. Lưu ý chúng ta sẽ không đánh thẳng vào bóng mà đánh xuống cát trước bóng khoảng 5cm. Mặt gậy sẽ xúc và cát và bóng lên green. Kết thúc ở vị trí đối xứng với Back swing. Cũng giống như các kỹ thuật đánh ngắn khác, chúng ta không thực hiện việc chuyển trọng tâm sang bên phải khi Back swing và chuyển hết trọng tâm sang trái trong quá trình Down swing cũng như kết thúc.\n- Kỹ thuật đánh cát là một kỹ thuật tương đối khó đối với người mới tập chơi. Các bạn cần tập luyện thuần thục trước khi ra sân để tránh mất quá nhiều gậy để giải thoát khỏi các bẫy này.\nNOTE: \" Bunker shot là cú đánh trong short game, dành cho khoảng cách dưới 30 yard, từ trong bẫy cát. Lưu ý có những cú đánh từ trong bẫy cát cách\n\nHLV sẽ trình bày về Lý thuyết, làm mẫu về kỹ thuật Fairway bunker và Green side\n\nHọc viên lắng nghe và ghi nhớ các kiến thức cơ bản về kỹ thuật Fairway bunker và Green side\n\nHọc viên hiểu được các kiến thức cơ bản về kỹ thuật Fairway bunker và Green side  và thực hành đánh đúng kỹ thuật"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 7",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 7",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 7",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hiện đúng kỹ thuật 7/10 bóng dưới sự giám sát của HLV."
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\n- Xem lại kiến thức về tập golf trong nhà\n- Set-up chuẩn tư thế và thực hiện cú Chip với tối thiểu 50 bóng \n- Bài tập bổ trợ về phối hợp vai và hông\nHLV nhận xét buổi học: về các kỹ thuật mà Học viên đã đạt được, chưa đạt được\nGiao bài tập về nhà cho học viên\nCung cấp handout đầy đủ kiến thức của buổi 7 về máy đo và thiết bị công nghệ\nHLV điền form S300: Nhận xét cuối buổi học Link"
      },
      {
        "id": 8,
        "title": "Buổi 8: Buổi",
        "date": "Tuần 4, Buổi 2",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n08",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 8: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\n- Hybrid (Hay còn gọi là Ultility, giới golf Việt Nam vẫn quen gọi là gậy Rescue) là một cây gậy lai giữa gậy sắt (iron) và gỗ (wood). Phần đầu gậy to hơn gậy sắt nhưng lại bé hơn gậy gỗ (khoảng ở giữa). Cán gậy Hybrid dài hơn gậy sắt và ngắn hơn gậy gỗ, tượng tự như vậy, độ ngửa mặt gậy cũng thường dao động ở khoảng thấp hơn gậy sắt và cao hơn gậy gỗ. Do cấu trúc lai giữa gậy sắt và gỗ nên loại gậy này được đặt tên là Hybrid. \n- Về kỹ thuật sử dụng gậy Hybrid, tư thế đứng của gậy Hybrid thường sẽ rộng hơn gậy sắt và hẹp hơn gậy gỗ. Tương tự như vậy, vị trí bóng cũng sẽ đặt gần hơn về phía trái so với gậy sắt nhưng chưa đến vị trí của các gậy gỗ.\n- Về cách thức sử dụng, Hybrid là cây gậy đa năng, chính vì vậy nó còn có tên gọi là Ultility. Ngoài việc hoạt động theo nguyên tắc khoảng cách nào sử dụng loại gậy đấy, Hybrid thường được sử dụng cho các cú đánh ở khoảng cách xa nhưng vị trí bóng lại không quá thuận lợi (lie) như trong bẫy cát, cỏ rough hay những địa hình trơ, ít cỏ. Ở các địa hình khó, việc sử dụng gậy gỗ hoặc sắt dài sẽ dễ dẫn đến các cú đánh bóng hỏng, trong khi đó nếu sử dụng gậy sắt vừa hoặc ngắn lại không đạt được khoảng cách yêu cầu.\n\nI1:\n- Bộ gậy sắt thông thường của người mới chơi có từ gậy Wedge đến gậy 5 sắt. Trong đó thường học viên sẽ tập gậy sắt ngắn và gậy sắt tầm trung trước rồi đến gậy sắt dài.\n- Mỗi gậy sắt được đánh số tương ứng với khoảng cách của từng cây. Số càng bé khoảng cách càng xa. Thông thường, với người mới chơi, các gậy số 5,6 được gọi là gậy sắt dài (Long iron), các gậy 7,8,9 được gọi là gậy sắt tầm trung (Medium iron) và các gậy 9, Wedge được gọi là gậy sắt ngắn (Short irons)\n- Về cách thức sử dụng, mỗi cây gậy thường tương ứng với một khoảng cách đánh nhất định của người chơi. Khi cần khoảng cách nào, người chơi sẽ lựa chọn các gậy có khoảng cách tương ứng. Các gậy sắt dài thường được sử dụng cho những cú đánh công cờ (approach shot) tầm xa, hoặc những cú đánh cần bóng bay thấp và thẳng.\n- Tư thế đứng của gậy sắt dài thường sẽ rộng hơn gây sắt tầm trung.Tương tự như vậy, vị trí bóng cũng sẽ đặt gần hơn về phía trái so với gậy sắt tầm trung, và thường Backswing sẽ dài hơn để tạo lực.\n- Do các gậy sắt dài có độ ngửa mặt gậy (static loft) thấp, cộng với cán gậy (club shaft) dài hơn nên việc tiếp xúc bóng và điều khiển bóng là khó hơn tương đối so với gậy sắt ngắn và gậy sắt tầm trung. Người mới chơi, hoặc người chơi có tốc độ đầu gậy hạn chế nên tính toán kĩ thời điểm sử dụng và cách thức sử dụng gậy sắt dài.\n\nKhi cảm thấy học viên đã thực hiện tốt HLV sẽ trình bày về Lý thuyết, làm mẫu về tư thế finish đẹp và bắt đầu cho học viên thực hành.\n\nHọc viên lắng nghe về phần lý thuyết\n\nHọc viên biết được công dụng và định nghĩa của gậy sắt dài\n\nảnh set up với gậy sắt dài, backswing với gậy sắt dài, finish với gậy sắt dài"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 8",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 8",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 8",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hiện đúng kỹ thuật 7/10 bóng dưới sự giám sát của HLV."
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\n- Xem lại kiến thức về bài tập cú đánh ngắn trên địa hình cát\n- Set-up chuẩn tư thế và thực hiện cú đánh trên cát với tối thiểu 50 bóng \n- Bài tập bổ trợ về ......\n- Xem lại kiến thức về swing với gậy sắt dài\n- Set-up chuẩn tư thế và thực hiện swing với gậy sắt dài với tối thiểu 50 bóng \n- Bài tập bổ trợ về tay\nHLV nhận xét buổi học: về các kỹ thuật mà Học viên đã đạt được, chưa đạt được\nGiao bài tập về nhà cho học viên\nCung cấp handout đầy đủ kiến thức của buổi 9 về cú đánh trên cát\nHLV điền form S300: Nhận xét cuối buổi học Link"
      },
      {
        "id": 9,
        "title": "Buổi 9: Buổi",
        "date": "Tuần 5, Buổi 1",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n09",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 9: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nHoạt động của học sinh\n(Học sinh sẽ làm gì)\n\nKiến thức đạt được\nKỹ năng đạt được/Yêu cầu đạt được\n\nVới gậy sắt: số càng nhỏ thì gậy càng dài, khoảng cách càng xa, vị trí bóng càng sang trái, khoảng cách giữa 2 chân càng rộng\n- Với gậy ngắn hơn gậy số 8 (9, Wedge) vị trí bóng ở giữa\n- Với gậy dài hơn gậy số 8 (7,6,5,4...) vị trí bóng dịch sang trái với một gậy là nửa bóng so với vị trí ở giữa (gậy 7 lệch trái so với vị trí ở giữa là nửa bóng, gậy 6 lệch trái so với gậy 7 nửa bóng,....) \n- Gậy càng dài Backswing càng dài, gậy càng ngắn  Backswing càng ngắn\n\nHLV sẽ gới thiệu các gậy còn lại trong bộ gậy và làm mẫu cú swing với các gậy\n\nHọc viên hiểu lý thuyết và thực hành được việc đánh bằng các gậy còn lại"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 9",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 9",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 9",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Học viên thực hiện bài kiểm tra thực hiện swing trong 10 bóng liên tục, học viên đánh đúng kỹ thuật, gạt bóng về lỗ 7 quả => Đạt | Học viên thực hiện bài kiểm tra thực hiện swing với từng gậy trong bộ gậy | HLV quan sát và ghi nhận kết quả vào form S900: Ghi nhận khoảng cách các cú đánh theo gậy cho Học viên Link | Học viên thực hiện bài kiểm tra | Học viên hiểu được khoảng cách các cú đánh với từng gậy"
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\n- Xem lại kiến thức về bài tập cú đánh ngắn trên địa hình cát\n- Set-up chuẩn tư thế và thực hiện cú đánh trên cát với tối thiểu 50 bóng \n- Bài tập bổ trợ về ......\n- Xem lại kiến thức swing với các gậy đã tập\n-Tập với các gậy trong bộ gậy\nHLV nhận xét buổi học: về các kỹ thuật mà Học viên đã đạt được, chưa đạt được\nGiao bài tập về nhà cho học viên\nHLV điền form S300: Nhận xét cuối buổi học Link"
      },
      {
        "id": 10,
        "title": "Buổi 10: Buổi",
        "date": "Tuần 5, Buổi 2",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n10",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 10: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nHoạt động của học sinh\n(Học sinh sẽ làm gì)\n\nKiến thức đạt được\nKỹ năng đạt được/Yêu cầu đạt được\n\nTrao đổi với học viên Kết quả buổi ra sân:\n- Đánh giá kết quả theo từng tiêu chí trên Form Nhận xét buổi lên sân S400\n- Động viên học viên và khen ngợi những pha bóng tốt\n- Chỉ ra các lỗi lên sân và hướng dẫn chỉnh sửa lỗi\n\nI. Ôn tập lại kỹ thuật Pitch cơ bản\nKỹ thuật đánh ngắn hoạt động dựa trên nguyên tắc cơ bản sau: khoảng cách càng ngắn, càng hạn chế sử dụng các bộ phận trên cơ thể để tạo lực\n\n1. Phân loại: Chipping là cú đánh ngắn dưới 30 yards, pitching là cú đánh từ 30 đến 100 yards.\n2. Tư thế chuẩn bị: Đứng hẹp hai chân, trọng tâm dồn trân trái. Khoảng cách đánh càng gần thì chân càng hẹp. \n3. Chọn gậy: \n- Đối với những người mới tập chơi, chọn gậy có độ ngửa vừa phải như P, 9 sắt. Những cây gậy này có mặt tiếp xúc nhiều hơn cũng như góc đánh ngang hơn, sẽ giúp cho người mới tập hạn chế lỗi khi thực hiện cú chip. \n\n4. Kỹ thuật: \n- Hạn chế cổ tay: Hạn chế sử dụng cổ tay lúc lên gậy, xuống gậy và kết thúc. Ở thời điểm chạm bóng (impact) đối với cú chip, nhìn từ góc ngang cán gậy hơi nghiêng sang trái, mu bàn tay trái hướng về phía mục tiêu (Ảnh minh hoạ).\n- Hạn chế chuyển trọng tâm: Hạn chế việc chuyển trọng tâm sang phải khi thực hiện động tác lên gậy (backswing). Khi thực hiện động tác xuống gậy và kết thúc, hạn chế nhắc chân phải (chứ không phải là khoá chặt)\n- Kết thúc: Cố gắng giữ cho mu bàn tay trái hướng về mục tiêu dài hơn so với cú đánh bình thường với gậy sắt, lên gậy cao bao nhiêu thì sẽ kết thúc ở đối xứng bấy nhiêu. Tưởng tượng cú đánh trên mặt đồng hồ, nếu backswing lên ở vị trí 7h thì kết thúc ở vị trí 5h, lên ở vị trí 8h thì kết thúc ở vị trí 4h, lên ở vị trí 9h thì kết thúc ở vị trí 3h. (Ảnh minh hoạ)\n\nI2: Đối với những người đã chơi một thời gian, có thể sử dụng các gậy có độ ngửa nhiều hơn như S, L và các kỹ thuật chip lob.\n\nHọc viên hiểu nắm rõ ưu nhược điểm và biết cách khắc phục lỗi, cảm thấy hài lòng với kết quả đạt được\n\nNắm được thông tin và hiểu cách sửa lỗi"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 10",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 10",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 10",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hành & Kiểm tra | Học viên chỉnh sửa lỗi lên sân theo hướng dẫn của HLV | I. Học viện luyện tập thực hiện cú Pitching\nHướng dẫn học viên chỉnh sửa lỗi phát sinh trên sân hoặc trong lúc tập luyện\n\nII. - Tập kỹ năng điều khiển khoảng cách với các bài tập Chip và Putt\n\n* Chip:\n1. Việc đầu tiên khi tiếp cận một cú đánh short game là chúng ta phải kiểm tra vị trí bóng nằm và vị trí đứng khi thực hiện cú đánh. Vị trí bóng càng khó chúng ta càng cần phải lựa chọn các cú đánh có độ an toàn cao. Ngược lại vị trí bóng càng dễ, chúng ta càng có thể sử dụng nhiều kỹ thuật đánh hoặc gậy đánh mạo hiểm hơn.\n　　 Như thế nào là khó?\n                 +  Vị trí càng mấp mô, ít bằng phẳng càng khó\n                 +  Càng ít cỏ càng khó\n                +  Càng ngược cỏ càng khó, ngược lại càng xuôi cỏ càng dễ\n                + Đất càng mềm, mủn, ướt càng khó.\n Sau khi xác định độ khó của vị trí bóng nằm, chúng ta đánh giá tư thế đứng để  thực hiện cú đánh (cao hơn bóng, thấp hơn bóng, xuống dốc, lên dốc)        \n\n2. Sau khi đánh giá được vị trí bóng nằm, vị trí tư thế đứng, việc tiếp theo chúng ta cần làm là xác định điểm bóng rơi và kỹ thuật chip sử dụng. Ở đây chúng ta đang tập kỹ thuật chip cơ bản là cú đánh có điểm rơi gần với vị trí bóng đánh và lăn nhiều. Chủ yếu chúng ta sẽ lựa chọn cây gậy để chip chứ không thay đổi kỹ thuật chip.\nCác ưu tiên lựa chọn vị trí điểm rơi của cú chip như sau:\n  +  Khu vực xung quanh điểm rơi bằng phẳng, ít dốc. Không ai có thể tự tin chip chính xác 100% nên điểm rơi sẽ không nằm đúng tại điẻm ta lựa chọn mà sẽ dao động trong một khoảng bán kính xung quanh đó.  Cố gắng lựa chọn điểm rơi với khu vực xung quanh bằng phẳng nhất có thể. Bóng rơi vào các khu vực dốc sẽ khó đoán định về độ nẩy và độ lăn ngay sau khi tiếp xúc mặt đất.\n +   Ưu tiên chọn khu vực điểm rơi có hướng cỏ xuôi về phía cờ, tránh khu vực cỏ ngược hoặc cỏ dày quá, sẽ làm cho bóng nảy đi sau khi tiếp xúc không ổn định và khó dự đoán.\n\n3. Sau khi phân tích vị trí bóng, tư thế đứng, điểm rơi khả thi chúng ta sẽ quyết định lựa chọn gậy để chip.\nƯu tiên: Sử dụng gậy có độ loft thấp. Tăng tối đa thời gian bóng lăn, giảm tối đa thời gian bóng ở trên không.\nCác bạn có thể sử dụng nhiều cây gậy trong bộ gậy của bạn để chip như Lob wedge (60*), Sand wedge (56*), Gap wedge (48*, 52*), Pitching wedge (45*), 9 sắt (41*), 8 sắt (37*), 7 sắt (34*) và thậm chí là Hybrid (22*). \nViệc lựa chọn gậy dựa trên sự tính toán các yếu tố liên quan bao gồm:\n + Vị trí bóng nằm, vị trí tư thế đứng\n + Điểm rơi\n + Trình độ kỹ thuật\n + Phong độ, sự tự tin khi sử dụng kỹ thuật chip và gậy chip đó.\n\n* Putt: \n1. Để có được một cú gạt bóng hoàn hảo, chúng ta cần có sự tổng hoà của lực đánh và line đánh. Lực đánh phải vừa đủ để bóng vào hố không bị đập vào thành và nẩy ra. Lỗ golf có đường kính 42,7mm trong khi đó quả bóng golf có đường kính 10,8mm. Nên chúng ta sẽ có nhiều hơn 1 kết hợp của lực và line cho mỗi cú gạt để bóng vào lỗ. Có người sẽ lựa chọn cú đánh với lực mạnh hơn chút và ít line, nhưng có người sẽ lựa chọn cú đánh có lực nhẹ hơn chút nhưng nhiều line. Việc lựa chọn line và lực phụ thuộc vào sự tự tin của người thực hiện, tính chất của trận đấu, tính chất của cú đánh và độ khó của cú đánh. Tuy nhiên, đa số người chơi nên lựa chọn putt qua hố trong khoảng 20 - 40 cm để đảm bảo 1 putt cho gậy tiếp theo.\n\n2. Giữa 2 yếu tố lực và line, người chơi cần ưu tiên lực trước so với line. Như đề cập ở trên một cú gạt bóng hoàn hảo cần sự tổng hoà của cả lực và line. Tuy nhiên không phải lúc nào chúng ta cũng đạt được sự tổng hoà đó, gây ra những cú gạt bóng trượt. Với những cú gạt trượt nếu như chúng ta đúng lực và sai line, bóng sẽ ở gần với lỗ, bảo toàn cho việc chúng ta đat được tỷ lệ 2 putt cho hố đấu đó. Nhưng nếu như chúng ta đúng line mà sai lực, nhiều khả năng cao, ở cú gạt tiếp theo chúng ta sẽ có tỷ lệ gạt vào thành công là thấp hơn rất nhiều bởi khoảng cách đến hố xa hơn. \n\n3. Luôn có “routine” cố định cho các cú gạt bóng. Một routine tiêu chuẩn như sau:\n+  Đọc line ít nhất từ 2 phía trước và đối diện bóng. Nếu được, hãy đọc cả 4 phía. Xác định sự ảnh hưởng của dốc và cỏ.\n+   Đặt line bóng theo line đã xác định.\n +  Set up vào cách bóng khoảng 10 cm. Nháp thử từ 2 đến 3 lần lực mình muốn sử dụng. Bước lên đặt gậy vào bóng sao cho đường kẻ line trên bóng thẳng với đường kẻ vuông góc mặt gậy. Nhìn mục tiêu lần cuối, tập trung, sử dụng đúng lực mình đã căn thử và gạt.\nMỗi người có thể có một routine khác nhau. Tuy nhiên phải giữ vững routine cho tất cả cú gạt để đạt được sự ổn định trong cả vòng đấu. | Học viên hiểu và chỉnh sửa được lỗi | Thực hành được việc sửa lỗi theo hướng dẫn của HLV"
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\nTổng kết khóa học và hướng dẫn lộ trình luyện tập tiếp theo (sử dụng Form Tổng kết khóa học)\n- Xem lại kiến thức swing với các gậy đã tập\n- Lên lịch đưa học viên trải nghiệm vòng golf 18 hố 3D\nHọc viên hiểu nắm rõ những điều đạt được và chưa đạt được trong khóa học, hiểu được các hoạt động luyện tập cần duy trì sau khóa học\nHiểu rõ  các hoạt động luyện tập cần duy trì sau khóa học"
      },
      {
        "id": 11,
        "title": "Buổi 11: Buổi",
        "date": "Tuần 6, Buổi 1",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n11",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 11: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nHoạt động của học sinh\n(Học sinh sẽ làm gì)\n\nKiến thức đạt được\nKỹ năng đạt được/Yêu cầu đạt được\n\n- Nhắc lại lý thuyết về kỹ năng đánh dài\n\nHọc viên hiểu nắm rõ các kỹ năng đánh dài"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 11",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 11",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 11",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hành & Kiểm tra | - Học viên ôn luyện kỹ năng đánh dài \n- Học viên được chỉnh sửa lỗi về tư thế và kỹ thuật swing | Hướng dẫn học viên chỉnh sửa lỗi về tư thế và kỹ thuật swing | Học viên hiểu và chỉnh sửa được lỗi | Thực hành được việc sửa lỗi theo hướng dẫn của HLV"
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\n- Ôn lại kiến thức và luyện tập kỹ năng đánh dài\nTrao đổi với học viên Tổng kết khóa học và hướng dẫn lộ trình luyện tập tiếp theo\nHọc viên hiểu nắm rõ những điều đạt được và chưa đạt được trong khóa học, hiểu được các hoạt động luyện tập cần duy trì sau khóa học\nHiểu rõ  các hoạt động luyện tập cần duy trì sau khóa học"
      },
      {
        "id": 12,
        "title": "Buổi 12: Buổi",
        "date": "Tuần 6, Buổi 2",
        "time": "18:00 - 19:00",
        "type": "review",
        "duration": "60 phút",
        "techFocus": "Buổi\n12",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 12: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nHoạt động của học sinh\n(Học sinh sẽ làm gì)\n\nKiến thức đạt được\nKỹ năng đạt được/Yêu cầu đạt được\n\n- Nhắc lại lý thuyết về kỹ năng short game\n\nHọc viên hiểu nắm rõ các kỹ năng đánh ngắn"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 12",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 12",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 12",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hành & Kiểm tra | - Học viên ôn luyện kỹ năng đánh ngắn\n- Học viên được chỉnh sửa lỗi về tư thế và kỹ thuật swing | Hướng dẫn học viên chỉnh sửa lỗi về tư thế và kỹ thuật swing | Học viên hiểu và chỉnh sửa được lỗi | Thực hành được việc sửa lỗi theo hướng dẫn của HLV"
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\n- Ôn lại kiến thức và luyện tập kỹ năng đánh ngắn\nTrao đổi với học viên Tổng kết khóa học và hướng dẫn lộ trình luyện tập tiếp theo\nHọc viên hiểu nắm rõ những điều đạt được và chưa đạt được trong khóa học, hiểu được các hoạt động luyện tập cần duy trì sau khóa học\nHiểu rõ  các hoạt động luyện tập cần duy trì sau khóa học"
      }
    ]
  },
  {
    "phase": 3,
    "phaseName": "GIAI ĐOẠN 3: CONSOLIDATION (Buổi 13 - 18)",
    "phaseDesc": "Củng cố & Nâng cao: Đánh giả lập 3D (9 hố), Kỹ thuật địa hình, Flop Shot & Rules & Etiquette",
    "sessions": [
      {
        "id": 13,
        "title": "Buổi 13: Buổi",
        "date": "Tuần 7, Buổi 1",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n13",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 13: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nHoạt động của học sinh\n(Học sinh sẽ làm gì)\n\nKiến thức đạt được\nKỹ năng đạt được/Yêu cầu đạt được\n\n- Nhắc lại lý thuyết về kỹ năng đánh dài\n\nHọc viên hiểu nắm rõ các kỹ năng đánh dài"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 13",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 13",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 13",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hành & Kiểm tra | - Học viên ôn luyện kỹ năng đánh dài \n- Học viên được chỉnh sửa lỗi về tư thế và kỹ thuật swing | Hướng dẫn học viên chỉnh sửa lỗi về tư thế và kỹ thuật swing | Học viên hiểu và chỉnh sửa được lỗi | Thực hành được việc sửa lỗi theo hướng dẫn của HLV"
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\n- Ôn lại kiến thức và luyện tập kỹ năng đánh dài\nTrao đổi với học viên Tổng kết khóa học và hướng dẫn lộ trình luyện tập tiếp theo\nHọc viên hiểu nắm rõ những điều đạt được và chưa đạt được trong khóa học, hiểu được các hoạt động luyện tập cần duy trì sau khóa học\nHiểu rõ  các hoạt động luyện tập cần duy trì sau khóa học"
      },
      {
        "id": 14,
        "title": "Buổi 14: Buổi",
        "date": "Tuần 7, Buổi 2",
        "time": "18:00 - 19:00",
        "type": "3d",
        "duration": "60 phút",
        "techFocus": "Buổi\n14",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 14: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nHoạt động của học sinh\n(Học sinh sẽ làm gì)\n\nKiến thức đạt được\nKỹ năng đạt được/Yêu cầu đạt được\n\nLuôn nhấn mạnh 3 điều lớn sau: Đảm bảo tốc độ chơi, Nắm rõ và tuân thủ luật golf, Tôn trọng bạn chơi và những nhóm chơi khác\nI. Rules & Etiquette cơ bản:\n1. Về văn hoá chơi (Etiquette )\n1.1. Các yếu tố lịch sự cở bản như:\n- Nên đánh từ tee trắng đối với Nam cho hầu hết các buổi ra sân ban đầu.\n- Không gây tiếng động\n- Vị trí đứng: Check 45 độ phía trước bên phải người đánh. (Note vị trí không được phép đứng)\n- Thứ tự đánh : Xa hơn đánh trước \n- Tốc độ chơi: Đảm bảo tốc độ chơi quy định của sân và kịp với nhóm phía trước - READY GOLF (bao gồm chuẩn bị sẵn sàng trước khi đến lượt mình, không đánh tập lại quá nhiều, có thể nhấc bóng nếu quá khó, không nhất thiết phải finish hố, có thể cắm tee trên fairways, nhấc phạt khỏi cát)\n- Bắt tay bạn chơi khi kết thúc.\n- Đứng chờ bạn chơi cuối cùng putt xong rồi mới đi (Trừ khi nhóm bị chậm)\n-  Không dẫm lên line putt của bạn chơi\n- Trong bẫy cát, vào ra cùng một đường, tránh caddy phải cào cát nhiều.\n- Không đổ tại caddy\n- Bảo vệ sân chơi: vết đinh giầy trên green, nháp quá nhiều, nhắc caddy hoặc tự mình lấp divot và sửa vết bóng khi có thể.\n1.2. Các yếu tố an toàn chơi:\n-  Không đi phía trước khi bạn chơi chưa đánh\n- Gọi, nhắc bạn chơi khi mình đánh và bạn ở phía trước\n- Không đứng đối diện trước cú đánh trong bẫy cát\n- Cẩn thận khi nháp, đứng cách xa mọi người.\n- Hô to khi bóng  bay về phía có người đứng, còn khi nghe thấy tiếng hô nên che gáy.\n- Đánh ở khoảng cách an toàn với nhóm phía trước, đảm bảo an toàn và lịch sự cho nhóm phía trước. Cú đánh của chúng ta phải cách nhóm chơi phía trước tối thiểu 50 yard, tránh tiếng rơi bóng gây mất tập trung cho người chơi phía trước khi họ đang set up hoặc chuẩn bị cho cú đánh\n\nII. Các luật golf cơ bản:\n- Cách tính điểm, thuật ngữ về điểm:\nĐiểm Bogey: Đánh nhiều hơn gậy 1 gậy chuẩn.\nĐiểm Double bogey: Đánh nhiều hơn 2 gậy chuẩn.\nĐiểm Triple bogey: Đánh nhiều hơn 3 gậy chuẩn.\nĐiểm Double par: Đánh nhiều hơn 4 gậy chuẩn.\nĐiểm Par: Đánh đúng gậy tiêu chuẩn.\nĐiểm Condor hoặc Trip Le Eagle: Đánh ít hơn 4 gậy chuẩn.\nĐiểm Double Eagle: Đánh ít hơn 3 gậy chuẩn.\nĐiểm Eagle: Đánh ít hơn 2 gậy chuẩn.\nĐiểm Birdie: Đánh ít hơn 1 gậy chuẩn.\nHole In One: Đánh 1 gậy vào lỗ (trường hợp này thường xảy ra với các hố có 3 gậy tiêu chuẩn vì đó là những gậy có những hố ngắn)\n- Các loại bẫy:\n+ OB (được đánh dấu bằng cọc trắng) bị phạt 1 gậy \n+ Bẫy nước (được đánh dấu bằng cọc đỏ ) bị phạt 1 gậy \n+ Bẫy cát (bunker) không bị phạt gậy \n+ Mất Bóng: phạt 1 gậy\n- Điểm phát bóng: \n+ Tee đen dành cho Pro-golfer\n+ Tee xanh và trắng cho Nam (nếu học viên là nam giới mới tập chơi golf thì nên phát bóng ở tee trắng để đảm bảo rằng cuộc chơi không quá khó và giữ được nhịp chơi với mọi người trong cùng nhóm chơi)\n+ Tee đỏ cho Nữ \n- Số gậy tiêu chuẩn cho 18 hố: 72 gậy (par 72) \n- 1 flight (1 nhóm chơi) tối đa 4 golfers \n- Sau cú phát bóng, bóng ai xa cờ hơn thì đánh trước, cứ thế cho tới khi đưa bóng lên khu vực Green (Khu vực đẩy bóng) \n- Green (Khu vực đẩy bóng) : Mark bóng, khi di chuyển trên green để đọc line tránh nhẫm vào line (hướng đẩy bóng của người khác). Bóng của ai xa nhất tính từ cờ thì thực hiện cú đẩy bóng trước. \n- Tìm bóng không quá 3 phút để đảm bảo tốc độ chơi.\n- Nhấn mạnh cho học viên phải luôn luôn biết tự đếm gậy của mình và phải rất cẩn thận trong quá trình đếm gậy, tránh để caddy tự đếm, dễ gây việc đếm nhầm và ăn gian gậy.\n- Đánh bóng dự phòng nếu cảm giác dễ mất bóng.\n- Không chạm gậy vào cát khi set up trong bẫy cát.\n- Kiếm tra xem có đúng bóng mình không để tránh đánh nhầm bóng (phạt 2 gậy)\n\nHọc viên lắng nghe và ghi nhớ các kiến thức cơ bản về rule & Etiquette và các luật golf cơ bản\n\nHọc viên hiểu được các kiến thức cơ bản về rule & Etiquette và các luật golf cơ bản"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 14",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 14",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 14",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hành & Kiểm tra | Học viên thực hiện cùng thầy, về chiến thuật và cách xử lý trên sân học viên hoàn toàn đi theo bước đánh của HLV\nVới các địa hình khác nhau sẽ cần set-up thay đổi để phù hợp:\n- Xuống dốc: Trọng tâm cơ thể dồn sang bên trái\n- Lên dốc: Trọng tâm cơ thể dồn sang bên phải, còn lại set-up như bình thường\n- Bằng phẳng: Set-up như bình thường | Học viên trải nghiệm vòng golf 18 hố 3D | - Hướng dẫn các kỹ thuật đánh địa hình: dốc lên, dốc xuống, cao, thấp\n- Tập trung vào chiến thuật đánh, cách xử lý các tình huống cơ bản trên sân, kỹ thuật về golf và văn hóa, phong cách chơi golf\n- Tạo tâm lý thoải mái cho học viên khi ra sân | HV lên sân và thực hiện các kỹ thuật đánh bóng"
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\n- Xem lại kiến thức về bài tập cú đánh ngắn trên địa hình cát\n- Set-up chuẩn tư thế và thực hiện cú đánh trên cát với tối thiểu 50 bóng \n- Bài tập bổ trợ về ......\n- Xem lại kiến thức swing với các gậy đã tập\n-Xem lại kiến thức về văn hóa golf và luật golf cơ bản\nHLV nhận xét buổi học: về các kỹ thuật mà Học viên đã đạt được, chưa đạt được\nGiao bài tập về nhà cho học viên\nHLV điền form S300: Nhận xét cuối buổi học Link"
      },
      {
        "id": 15,
        "title": "Buổi 15: Buổi",
        "date": "Tuần 8, Buổi 1",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n15",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 15: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nHoạt động của học sinh\n(Học sinh sẽ làm gì)\n\nKiến thức đạt được\nKỹ năng đạt được/Yêu cầu đạt được\n\nGiới thiệu qua với học viên các thông tin về sân\nNhắc lại 1 số nguyên tắc cơ bản\nTạo tâm lý thoải mái cho học viên khi ra sân\n\nNhắc lại nội dung lý thuyết cho buổi lên sân:\n\nI.Trước khi lên sân:\n\n- Giới thiệu về cấu trúc buổi dạy trên sân: tư vấn về cách đặt sân, giờ đánh, sân nào tốt, giá cả hợp lý; tư vấn trang phục ra sân\n- Check bộ gậy: bộ gậy đầy đủ 14 cây nhưng với người mới có thể chỉ cần 10 - 11 cây (không tính các cây gậy gỗ)\n- Check bóng: chuẩn bị và mang theo 30 quả bóng\n- Check tee: mang theo đủ tee ngắn và tee dài\n- Nên mang theo: đồ ăn, nước...\n\nII. Khi đến sân:\n\n- Yêu cầu Học viên đến trước 30-40p, để: \n+ Các việc cần làm: HLV giới thiệu quy trình từ lúc tới sân golf tới lúc chơi golf. \n   B1: Đến sân golf và thực hiện hạ gậy tại khu vực bagdrop\n   B2: Nhận Tag và thực hiện check-in tại khu vực lễ tân\n   B3: Thay đồ và cất đồ tại khu vực Locker\n   B4: Xuống khu vực Starter để nhận túi gậy, nhận caddy và tập trung với flight đã được xếp\n   B5: Nhận thông tin chốt giờ tee time và đường chơi từ Người trực starter\n+ Khởi động ở sân chip putt\n+ HLV nhắc lại sơ qua kỹ thuật và chiến thuật cho HV: \n     * Khởi động trước mỗi vòng đấu: ít nhất khoảng 30 phút\n     * Chọn gậy: nắm rõ khoảng cách bản thân đánh được với từng loại gậy (mang theo form S900 Khoảng cách cú đánh theo gậy của Hv đã được đưa vào buổi 10). Hạn chế sử dụng gậy sắt dài\n     * Tập trung đánh trúng bóng, đánh với 80% lực, không quan tâm tới khoảng cách.\n     * Cách ngắm hướng cho tất cả các gậy: tìm điểm đối chiếu. Đối với người mới lần đầu ra sân, có thể để caddy hoặc đích thân HLV đứng đằng sau ngắm hướng hộ.\n     * Cần tỉ mỉ với tư thế setup: Với các địa hình khác nhau sẽ cần set-up thay đổi để phù hợp :\n              > Xuống dốc: Trọng tâm cơ thể dồn sang bên trái\n              > Lên dốc: Trọng tâm cơ thể dồn sang bên phải\n              > Bằng phẳng: Set-up như bình thường\n     * Phát bóng: Không nhất thiết phải dùng Driver hoặc gậy dài. Sử dụng cây gậy mình thấy tự tin và có xác suất thành công cao nhất ở trình độ hiện tại\n     * Chip: Hướng dẫn HV cách sử dụng các cú chip (cao, thấp), gậy chip và thời điểm nào nên sử dụng cú chip gì: Với người mới ra sân nên dùng chip lăn là chủ đạo\n     * Cát: Hướng dẫn HV về cú đánh cao thấp, với cát cứng mềm. Và nhắc nhở HV swing thought luôn luôn phải là ra khỏi Bunker trước, rồi mới đến độ xa gần tới cờ. \n     * Putt: Hướng dẫn HV cách đọc green cao thấp, cỏ xuôi ngược: đi ít nhất 2 phía để đọc line. Tập trung vào lực đánh nhiều hơn line đánh\n     => Chiến thuật chung: \n         > Hình thành Routine mỗi cú đánh \n         > Luôn chọn giải pháp an toàn\n         > Cách chia gậy cho mỗi cú đánh\n         > Dùng lực ở mức vừa phải, ưu tiên độ chính xác\n         > Nghiên cứu kỹ vị trí bóng trước khi đánh\n\nCHIẾN THUẬT CHỦ ĐẠO LÀ LUÔN CHỌN PHƯƠNG ÁN AN TOÀN\n\nHLV nhắc lại nội dung lý thuyết và kiểm tra hỏi đáp các lưu ý trên sân cho Học viên\n\nHọc viên hiểu và nhắc lại lại được các lưu ý khi lên sân"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 15",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 15",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 15",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hành & Kiểm tra | Học viên thực hiện cùng thầy, về chiến thuật và cách xử lý trên sân học viên hoàn toàn đi theo bước đánh của HLV\nVới các địa hình khác nhau sẽ cần set-up thay đổi để phù hợp:\n- Xuống dốc: Trọng tâm cơ thể dồn sang bên trái\n- Lên dốc: Trọng tâm cơ thể dồn sang bên phải, còn lại set-up như bình thường\n- Bằng phẳng: Set-up như bình thường | Học viên thực hiện cùng HLV thảo luận về chiến thuật và cách xử lý trên sân | - Hướng dẫn các kỹ thuật đánh địa hình: dốc lên, dốc xuống, cao, thấp\n- Tập trung vào chiến thuật đánh, cách xử lý các tình huống cơ bản trên sân, kỹ thuật về golf và văn hóa, phong cách chơi golf\n- Tạo tâm lý thoải mái cho học viên khi ra sân | HV lên sân và thực hiện các kỹ thuật đánh bóng"
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\n- Xem lại kiến thức về bài tập cú đánh ngắn trên địa hình cát\n- Set-up chuẩn tư thế và thực hiện cú đánh trên cát với tối thiểu 50 bóng \n- Bài tập bổ trợ về ......\n- Xem lại kiến thức swing với các gậy đã tập\n-Xem lại kiến thức về văn hóa golf và luật golf cơ bản\nHLV nhận xét buổi học: về các kỹ thuật mà Học viên đã đạt được, chưa đạt được\nGiao bài tập về nhà cho học viên\nHLV điền form S300: Nhận xét cuối buổi học Link"
      },
      {
        "id": 16,
        "title": "Buổi 16: Buổi",
        "date": "Tuần 8, Buổi 2",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n16",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 16: Buổi",
            "summary": "Buổi",
            "fullText": "Buổi\n16"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 16",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 16",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 16",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hiện đúng kỹ thuật 7/10 bóng dưới sự giám sát của HLV."
          }
        ],
        "homework": "- Xem lại lý thuyết buổi học trên app\n- Ôn tập tư thế và thực hành tối thiểu 50 bóng tại nhà/sân tập"
      },
      {
        "id": 17,
        "title": "Buổi 17: Buổi",
        "date": "Tuần 9, Buổi 1",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n17",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 17: Buổi",
            "summary": "Buổi",
            "fullText": "Buổi\n17"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 17",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 17",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 17",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hiện đúng kỹ thuật 7/10 bóng dưới sự giám sát của HLV."
          }
        ],
        "homework": "- Xem lại lý thuyết buổi học trên app\n- Ôn tập tư thế và thực hành tối thiểu 50 bóng tại nhà/sân tập"
      },
      {
        "id": 18,
        "title": "Buổi 18: Buổi",
        "date": "Tuần 9, Buổi 2",
        "time": "18:00 - 19:00",
        "type": "review",
        "duration": "60 phút",
        "techFocus": "Buổi\n18",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 18: Buổi",
            "summary": "Buổi",
            "fullText": "Buổi\n18"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 18",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 18",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 18",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hiện đúng kỹ thuật 7/10 bóng dưới sự giám sát của HLV."
          }
        ],
        "homework": "- Xem lại lý thuyết buổi học trên app\n- Ôn tập tư thế và thực hành tối thiểu 50 bóng tại nhà/sân tập"
      }
    ]
  },
  {
    "phase": 4,
    "phaseName": "GIAI ĐOẠN 4: PERFORMANCE (Buổi 19 - 24)",
    "phaseDesc": "Thực chiến & Hoàn thiện: 18 hố 3D, Cách tính Handicap, Kiểm tra cuối khóa & Lộ trình tiếp theo",
    "sessions": [
      {
        "id": 19,
        "title": "Buổi 19: Buổi",
        "date": "Tuần 10, Buổi 1",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n19",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 19: Buổi",
            "summary": "Buổi",
            "fullText": "Buổi\n19"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 19",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 19",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 19",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hiện đúng kỹ thuật 7/10 bóng dưới sự giám sát của HLV."
          }
        ],
        "homework": "- Xem lại lý thuyết buổi học trên app\n- Ôn tập tư thế và thực hành tối thiểu 50 bóng tại nhà/sân tập"
      },
      {
        "id": 20,
        "title": "Buổi 20: Buổi",
        "date": "Tuần 10, Buổi 2",
        "time": "18:00 - 19:00",
        "type": "3d",
        "duration": "60 phút",
        "techFocus": "Buổi\n20",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 20: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nHoạt động của học sinh\n(Học sinh sẽ làm gì)\n\nKiến thức đạt được\nKỹ năng đạt được/Yêu cầu đạt được\n\nGiới thiệu qua với học viên các thông tin về sân\nNhắc lại 1 số nguyên tắc cơ bản\nTạo tâm lý thoải mái cho học viên khi ra sân\n\nNhắc lại nội dung lý thuyết cho buổi lên sân:\n\nI.Trước khi lên sân:\n\n- Giới thiệu về cấu trúc buổi dạy trên sân: tư vấn về cách đặt sân, giờ đánh, sân nào tốt, giá cả hợp lý; tư vấn trang phục ra sân\n- Check bộ gậy: bộ gậy đầy đủ 14 cây nhưng với người mới có thể chỉ cần 10 - 11 cây (không tính các cây gậy gỗ)\n- Check bóng: chuẩn bị và mang theo 30 quả bóng\n- Check tee: mang theo đủ tee ngắn và tee dài\n- Nên mang theo: đồ ăn, nước...\n\nII. Khi đến sân:\n\n- Yêu cầu Học viên đến trước 30-40p, để: \n+ Các việc cần làm: HLV giới thiệu quy trình từ lúc tới sân golf tới lúc chơi golf. \n   B1: Đến sân golf và thực hiện hạ gậy tại khu vực bagdrop\n   B2: Nhận Tag và thực hiện check-in tại khu vực lễ tân\n   B3: Thay đồ và cất đồ tại khu vực Locker\n   B4: Xuống khu vực Starter để nhận túi gậy, nhận caddy và tập trung với flight đã được xếp\n   B5: Nhận thông tin chốt giờ tee time và đường chơi từ Người trực starter\n+ Khởi động ở sân chip putt\n+ HLV nhắc lại sơ qua kỹ thuật và chiến thuật cho HV: \n     * Khởi động trước mỗi vòng đấu: ít nhất khoảng 30 phút\n     * Chọn gậy: nắm rõ khoảng cách bản thân đánh được với từng loại gậy (mang theo form S900 Khoảng cách cú đánh theo gậy của Hv đã được đưa vào buổi 10). Hạn chế sử dụng gậy sắt dài\n     * Tập trung đánh trúng bóng, đánh với 80% lực, không quan tâm tới khoảng cách.\n     * Cách ngắm hướng cho tất cả các gậy: tìm điểm đối chiếu. Đối với người mới lần đầu ra sân, có thể để caddy hoặc đích thân HLV đứng đằng sau ngắm hướng hộ.\n     * Cần tỉ mỉ với tư thế setup: Với các địa hình khác nhau sẽ cần set-up thay đổi để phù hợp :\n              > Xuống dốc: Trọng tâm cơ thể dồn sang bên trái\n              > Lên dốc: Trọng tâm cơ thể dồn sang bên phải\n              > Bằng phẳng: Set-up như bình thường\n     * Phát bóng: Không nhất thiết phải dùng Driver hoặc gậy dài. Sử dụng cây gậy mình thấy tự tin và có xác suất thành công cao nhất ở trình độ hiện tại\n     * Chip: Hướng dẫn HV cách sử dụng các cú chip (cao, thấp), gậy chip và thời điểm nào nên sử dụng cú chip gì: Với người mới ra sân nên dùng chip lăn là chủ đạo\n     * Cát: Hướng dẫn HV về cú đánh cao thấp, với cát cứng mềm. Và nhắc nhở HV swing thought luôn luôn phải là ra khỏi Bunker trước, rồi mới đến độ xa gần tới cờ. \n     * Putt: Hướng dẫn HV cách đọc green cao thấp, cỏ xuôi ngược: đi ít nhất 2 phía để đọc line. Tập trung vào lực đánh nhiều hơn line đánh\n     => Chiến thuật chung: \n         > Hình thành Routine mỗi cú đánh \n         > Luôn chọn giải pháp an toàn\n         > Cách chia gậy cho mỗi cú đánh\n         > Dùng lực ở mức vừa phải, ưu tiên độ chính xác\n         > Nghiên cứu kỹ vị trí bóng trước khi đánh\n\nCHIẾN THUẬT CHỦ ĐẠO LÀ LUÔN CHỌN PHƯƠNG ÁN AN TOÀN\n\n\nNOTE: Học viên sẽ được đăng ký học lớp Đào tạo tập trung lý thuyết trước khi lên sân và được gửi bản PDF về những lưu ý khi lên sân trước buổi lên sân (buổi 11)\n\nHLV nhắc lại nội dung lý thuyết và kiểm tra hỏi đáp các lưu ý trên sân cho Học viên\n\nHọc viên hiểu và nhắc lại lại được các lưu ý khi lên sân"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 20",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 20",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 20",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hành & Kiểm tra | Học viên thực hiện cùng thầy, về chiến thuật và cách xử lý trên sân học viên hoàn toàn đi theo bước đánh của HLV\nVới các địa hình khác nhau sẽ cần set-up thay đổi để phù hợp:\n- Xuống dốc: Trọng tâm cơ thể dồn sang bên trái\n- Lên dốc: Trọng tâm cơ thể dồn sang bên phải, còn lại set-up như bình thường\n- Bằng phẳng: Set-up như bình thường | Học viên thực hiện cùng HLV thảo luận về chiến thuật và cách xử lý trên sân | - Hướng dẫn các kỹ thuật đánh địa hình: dốc lên, dốc xuống, cao, thấp\n- Tập trung vào chiến thuật đánh, cách xử lý các tình huống cơ bản trên sân, kỹ thuật về golf và văn hóa, phong cách chơi golf\n- Tạo tâm lý thoải mái cho học viên khi ra sân\n- HLV cần mang phiếu chấm điểm khi ra sân để chấm điểm và nhận xét cho HV S400: Đánh giá chất lượng buổi lên sân Link | HV lên sân và thực hiện các kỹ thuật đánh bóng"
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\n- Ghi nhận kết quả lên sân, nói sơ về ưu điểm, nhược điểm; động viên học viên và khen ngợi những cú đánh tốt.\n- Trao đổi về việc sẽ gửi hận xét chi tiết buổi lên sân\nHLV nhận xét buổi học: về các kỹ thuật mà Học viên đã đạt được, chưa đạt được\nGiao bài tập về nhà cho học viên"
      },
      {
        "id": 21,
        "title": "Buổi 21: Buổi",
        "date": "Tuần 11, Buổi 1",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n21",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 21: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nHoạt động của học sinh\n(Học sinh sẽ làm gì)\n\nKiến thức đạt được\nKỹ năng đạt được/Yêu cầu đạt được\n\nTrao đổi với học viên Kết quả buổi ra sân:\n- Đánh giá kết quả theo từng tiêu chí trên Form Nhận xét buổi lên sân S400\n- Động viên học viên và khen ngợi những pha bóng tốt\n- Chỉ ra các lỗi lên sân và hướng dẫn chỉnh sửa lỗi\n\nTrao đổi với học viên kết quả lên sân, khuyến khích học viên luyện tập và sửa lỗi\n\nHọc viên hiểu nắm rõ ưu nhược điểm và biết cách khắc phục lỗi, cảm thấy hài lòng với kết quả đạt được\n\nNắm được thông tin và hiểu cách sửa lỗi"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 21",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 21",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 21",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hành & Kiểm tra | Học viên chỉnh sửa lỗi lên sân theo hướng dẫn của HLV | Hướng dẫn học viên chỉnh sửa lỗi phát sinh trên sân hoặc trong lúc tập luyện | Học viên hiểu và chỉnh sửa được lỗi | Thực hành được việc sửa lỗi theo hướng dẫn của HLV"
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\nTổng kết khóa học và hướng dẫn lộ trình luyện tập tiếp theo (sử dụng Form Tổng kết khóa học)\nTrao đổi với học viên Tổng kết khóa học và hướng dẫn lộ trình luyện tập tiếp theo\nHọc viên hiểu nắm rõ những điều đạt được và chưa đạt được trong khóa học, hiểu được các hoạt động luyện tập cần duy trì sau khóa học\nHiểu rõ  các hoạt động luyện tập cần duy trì sau khóa học"
      },
      {
        "id": 22,
        "title": "Buổi 22: Buổi",
        "date": "Tuần 11, Buổi 2",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n22",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 22: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nHoạt động của học sinh\n(Học sinh sẽ làm gì)\n\nKiến thức đạt được\nKỹ năng đạt được/Yêu cầu đạt được\n\n- Nhắc lại lý thuyết về kỹ năng đánh dài\n\nHọc viên hiểu nắm rõ các kỹ năng đánh dài"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 22",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 22",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 22",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hành & Kiểm tra | - Học viên ôn luyện kỹ năng đánh dài \n- Học viên được chỉnh sửa lỗi về tư thế và kỹ thuật swing | Hướng dẫn học viên chỉnh sửa lỗi về tư thế và kỹ thuật swing | Học viên hiểu và chỉnh sửa được lỗi | Thực hành được việc sửa lỗi theo hướng dẫn của HLV"
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\n- Ôn lại kiến thức và luyện tập kỹ năng đánh dài\nTrao đổi với học viên Tổng kết khóa học và hướng dẫn lộ trình luyện tập tiếp theo\nHọc viên hiểu nắm rõ những điều đạt được và chưa đạt được trong khóa học, hiểu được các hoạt động luyện tập cần duy trì sau khóa học\nHiểu rõ  các hoạt động luyện tập cần duy trì sau khóa học"
      },
      {
        "id": 23,
        "title": "Buổi 23: Buổi",
        "date": "Tuần 12, Buổi 1",
        "time": "18:00 - 19:00",
        "type": "range",
        "duration": "60 phút",
        "techFocus": "Buổi\n23",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 23: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nHoạt động của học sinh\n(Học sinh sẽ làm gì)\n\nKiến thức đạt được\nKỹ năng đạt được/Yêu cầu đạt được\n\n- Nhắc lại lý thuyết về kỹ năng short game\n\nHọc viên hiểu nắm rõ các kỹ năng đánh ngắn"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 23",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 23",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 23",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hành & Kiểm tra | - Học viên ôn luyện kỹ năng đánh ngắn\n- Học viên được chỉnh sửa lỗi về tư thế và kỹ thuật swing | Hướng dẫn học viên chỉnh sửa lỗi về tư thế và kỹ thuật swing | Học viên hiểu và chỉnh sửa được lỗi | Thực hành được việc sửa lỗi theo hướng dẫn của HLV"
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà\n- Ôn lại kiến thức và luyện tập kỹ năng đánh ngắn\nTrao đổi với học viên Tổng kết khóa học và hướng dẫn lộ trình luyện tập tiếp theo\nHọc viên hiểu nắm rõ những điều đạt được và chưa đạt được trong khóa học, hiểu được các hoạt động luyện tập cần duy trì sau khóa học\nHiểu rõ  các hoạt động luyện tập cần duy trì sau khóa học"
      },
      {
        "id": 24,
        "title": "Buổi 24: Buổi",
        "date": "Tuần 12, Buổi 2",
        "time": "18:00 - 19:00",
        "type": "review",
        "duration": "60 phút",
        "techFocus": "Buổi\n24",
        "learningMaterials": {
          "article": {
            "title": "Nội dung đào tạo chi tiết - Buổi 24: Buổi",
            "summary": "Buổi",
            "fullText": "Yêu cầu:\n- Đây là giáo án cho 1 buổi học, mỗi buổi học tiếp theo sẽ được thực hiện đầy đủ các phần) như sau:\nBước 1: Khởi động\nBước 2: Ôn tập kiến thức buổi trước\nBước 3: Lý thuyết mới & làm mẫu\nBước 4: Học viên thực hành phần lý thuyết mới\nBước 5: HLV kiểm tra \nBước 6: Tổng kết và Bài tập về nhà\n- Mỗi 1 buổi cần đảm bảo có phần Lecture (Lý thuyết, làm mẫu), Practice (thực hành), Interaction (tương tác) hỏi đáp, các công cụ sử dụng. Có thể chia nhỏ các phần ra thành nhiều giai đoạn khác nhau và lặp lại ví dụ L - I- P, L - I- P, E.\n- Phần Lecture là phần HLV có thể dùng để nói, dạy luôn được, trong đó I1 (Important 1) là phần ưu tiên nói trước và phải nói cho 100% học viên, I2 (important 2) là phần ưu tiên nói sau, tuỳ sự tiếp thu và nhu cầu của học viên.\n\nHoạt động của học sinh\n(Học sinh sẽ làm gì)\n\nKiến thức đạt được\nKỹ năng đạt được/Yêu cầu đạt được\n\nĐo thông số gậy của học viên với các thiết bị: flightscope, skytrack...\n\nHọc viên hiểu được các thông số cơ bản về gậy của mình sau khóa học\n\nTổng kết khóa học và hướng dẫn lộ trình luyện tập tiếp theo (sử dụng Form Tổng kết khóa học)\n\nTrao đổi với học viên Tổng kết khóa học và hướng dẫn lộ trình luyện tập tiếp theo\n\nHọc viên hiểu nắm rõ những điều đạt được và chưa đạt được trong khóa học, hiểu được các hoạt động luyện tập cần duy trì sau khóa học\n\nHiểu rõ  các hoạt động luyện tập cần duy trì sau khóa học"
          },
          "images": [
            {
              "title": "Sơ đồ minh họa kỹ thuật Buổi 24",
              "tag": "Hình ảnh chuẩn 72+"
            }
          ],
          "videos": [
            {
              "title": "Video hướng dẫn nắn chỉnh Buổi 24",
              "duration": "30s",
              "tag": "Video HD 72+"
            }
          ]
        },
        "drills": [
          {
            "name": "Thực hành Buổi 24",
            "desc": "Buổi"
          },
          {
            "name": "Tiêu chuẩn đạt (Pass Criteria)",
            "desc": "Thực hiện đúng kỹ thuật 7/10 bóng dưới sự giám sát của HLV."
          }
        ],
        "homework": "Tổng kết và Bài tập về nhà"
      }
    ]
  }
];

const QUIZZES_DATA = {
  "phase1": {
    "id": "phase1",
    "title": "Ngân Hàng Bài Kiểm Tra Giai Đoạn 1: Foundation (Buổi 1-6)",
    "passScore": 75,
    "reviewHeader": "Review Giữa Kỳ 1 bởi Hội Đồng Chuyên Môn (Buổi 6)",
    "practicalCriteria": [
      "Set-up chuẩn 72+ (Grip 4/10, Stance song song mục tiêu, Posture gập từ hông).",
      "Kỹ thuật Chipping & Putting: Giữ nguyên tam giác tay-vai (Y-to-Y drill), dồn 60% trọng tâm chân trái.",
      "Thực hành Full-swing gậy sắt & Driver: Thực hiện 10 bóng liên tục, tối thiểu 7/10 bóng bay thẳng đúng kỹ thuật.",
      "Đo lường thông số khởi điểm trên máy TrackMan / FlightScope."
    ],
    "questions": [
      {
        "id": "p1_q1",
        "category": "setup",
        "question": "Trong quy trình 3 bước Set-up chuẩn 72+ (Grip, Stance, Posture), góc gập người đúng là gập từ đâu?",
        "options": [
          "Gập từ thắt lưng",
          "Gập từ khớp hông (Hip hinge) giữ cột sống thẳng",
          "Cúi gập đầu xuống bóng",
          "Gập cong cả lưng"
        ],
        "correct": 1,
        "explanation": "Set-up chuẩn 72+ yêu cầu gập người từ khớp hông (Hip hinge) giúp mông, sống lưng và đầu tạo thành đường thẳng tự nhiên, giúp cơ thể dễ dàng xoay trong Backswing."
      },
      {
        "id": "p1_q2",
        "category": "shortgame",
        "question": "Khi thực hiện kỹ thuật Chipping ngắn, trọng tâm cơ thể nên phân bổ như thế nào?",
        "options": [
          "Đều 50-50 hai chân",
          "Dồn 60% sang chân trái (chân trước)",
          "Dồn 70% sang chân phải",
          "Chuyển trọng tâm liên tục"
        ],
        "correct": 1,
        "explanation": "Chipping ngắn yêu cầu dồn 60% trọng tâm sang chân trái và giữ nguyên trọng tâm để tối ưu điểm chạm mặt gậy (low point) và hạn chế lỗi đánh mập/đánh hớt."
      },
      {
        "id": "p1_q3",
        "category": "setup",
        "question": "Vị trí cú swing P4 trong hệ thống P1-P10 chuẩn 72+ tương ứng với vị trí nào?",
        "options": [
          "Vị trí chuẩn bị (Set-up)",
          "Vị trí đỉnh cú lên gậy (Top of Backswing)",
          "Vị trí chạm bóng (Impact)",
          "Vị trí kết thúc (Finish)"
        ],
        "correct": 1,
        "explanation": "Theo hệ thống P1-P10: P1 là Set-up, P2 là Gậy song song song đất, P3 là Cánh tay song song đất, P4 là Top of Backswing, P7 là Impact và P10 là Finish."
      },
      {
        "id": "p1_q4",
        "category": "setup",
        "question": "Lực cầm gậy (Grip pressure) lý tưởng theo thang điểm từ 1 đến 10 là bao nhiêu?",
        "options": [
          "Mức 1-2 (Rất lỏng)",
          "Mức 3-4 (Vừa phải, thả lỏng cổ tay)",
          "Mức 8-9 (Cầm thật chặt)",
          "Mức 10 (Gồng cứng)"
        ],
        "correct": 1,
        "explanation": "Lực cầm gậy ở mức 3-4 giúp tạo điều kiện bẻ cổ tay tự nhiên (wrist hinge), tăng tốc độ đầu gậy và giảm căng thẳng cơ vai."
      },
      {
        "id": "p1_q5",
        "category": "shortgame",
        "question": "Trong kỹ thuật Putting (Gạt bóng), chuyển động tạo lực đến từ bộ phận nào?",
        "options": [
          "Bẻ gập cổ tay linh hoạt",
          "Xoay hông và xoay chân",
          "Chuyển động nhịp nhàng từ vai và cánh tay (như đồng hồ quả lắc)",
          "Dùng sức ngón tay"
        ],
        "correct": 2,
        "explanation": "Putting là kỹ thuật đòi hỏi độ chính xác tuyệt đối, cần hạn chế tối đa cổ tay và thân dưới, chỉ sử dụng nhịp điệu quả lắc từ vai và cánh tay."
      },
      {
        "id": "p1_q6",
        "category": "fullswing",
        "question": "Góc nhìn chuẩn khi kiểm tra tư thế Posture từ phía bên (Side view) như thế nào?",
        "options": [
          "Chuôi gậy nằm trên mặt phẳng đứng với mũi chân",
          "Cánh tay gồng cứng hướng ra ngoài",
          "Đầu gối khóa thẳng",
          "Vai nhô cao về phía trước"
        ],
        "correct": 0,
        "explanation": "Ở tư thế Posture đúng, chuôi gậy sẽ nằm trên cùng một mặt phẳng đứng thẳng hàng với mũi chân và hai tay thả rơi tự nhiên từ vai."
      }
    ]
  },
  "phase2": {
    "id": "phase2",
    "title": "Ngân Hàng Bài Kiểm Tra Giai Đoạn 2: Build & Repeat (Buổi 7-12)",
    "passScore": 75,
    "reviewHeader": "Review Giữa Kỳ 2 bởi Hội Đồng Chuyên Môn (Buổi 12)",
    "practicalCriteria": [
      "Kỹ thuật đánh cát (Sand shot - Explosion shot): Mở mặt gậy, mở stance, đánh vào cát trước bóng 2-3cm.",
      "Hệ thống kiểm soát khoảng cách Clock System với kỹ thuật Pitching (khoảng cách 20m - 50m).",
      "Bảng Distance Chart cá nhân: Đo chính xác Carry Distance cho bộ gậy sắt (5-9 iron & PW).",
      "Đánh giá kiểm tra 10 bóng gậy sắt dài & Pitching dưới sự chấm điểm của HĐCM."
    ],
    "questions": [
      {
        "id": "p2_q1",
        "category": "shortgame",
        "question": "Khi đánh bóng trong bẫy cát (Sand Explosion Shot), điểm tiếp xúc gậy chuẩn là ở đâu?",
        "options": [
          "Đánh trực tiếp vào giữa tâm bóng",
          "Đánh vào phần cát phía trước bóng khoảng 2-3cm",
          "Đánh đỉnh đầu bóng",
          "Đánh sâu xuống cát 10cm"
        ],
        "correct": 1,
        "explanation": "Cú nổ bẫy cát (Explosion shot) sử dụng đệm cát bên dưới để đẩy bóng bay ra ngoài bẫy mà mặt gậy không cần chạm trực tiếp vào bóng."
      },
      {
        "id": "p2_q2",
        "category": "shortgame",
        "question": "Nguyên tắc kiểm soát khoảng cách bằng Clock System trong Pitching là gì?",
        "options": [
          "Tăng tốc độ swing hết sức",
          "Thay đổi chiều dài Backswing theo vị trí kim đồng hồ (7h, 8h, 9h) với nhịp điệu cố định",
          "Thay đổi cách cầm gậy",
          "Gập cổ tay mạnh hơn"
        ],
        "correct": 1,
        "explanation": "Clock System giúp học viên làm chủ khoảng cách từ 20m đến 50m dựa trên biên độ đưa gậy Backswing chuẩn hóa theo các góc kim đồng hồ."
      },
      {
        "id": "p2_q3",
        "category": "fullswing",
        "question": "Distance Chart giúp học viên nắm được thông số quan trọng nào?",
        "options": [
          "Giá của từng cây gậy",
          "Khoảng cách bay (Carry Distance) trung bình của từng cây gậy trong túi",
          "Số lần thay gậy",
          "Màu sắc gậy"
        ],
        "correct": 1,
        "explanation": "Distance Chart là bảng ghi nhận khoảng cách Carry chuẩn xác của từng gậy (5-9 iron, PW) giúp học viên chọn gậy chính xác khi trên sân."
      },
      {
        "id": "p2_q4",
        "category": "shortgame",
        "question": "Sự khác biệt căn bản giữa Chipping và Pitching là gì?",
        "options": [
          "Chipping có đường bóng lăn nhiều hơn bay; Pitching có đường bóng bay bổng hơn và lăn ít",
          "Chipping đánh xa hơn Pitching",
          "Chipping dùng Driver; Pitching dùng Putter",
          "Không có khác biệt"
        ],
        "correct": 0,
        "explanation": "Chipping là cú đánh ngắn sát green với quỹ đạo thấp (bay ít, lăn nhiều); Pitching là cú tiếp cận từ xa hơn với quỹ đạo cao hơn (bay nhiều, lăn ít)."
      },
      {
        "id": "p2_q5",
        "category": "fullswing",
        "question": "Khi tập luyện gậy sắt dài (Iron 5, 6), vị trí bóng đặt ở đâu so với thế đứng?",
        "options": [
          "Nằm chính giữa hai chân",
          "Dịch nhẹ về phía chân trái (khoảng 1-2 inch so với tâm)",
          "Dịch sát chân phải",
          "Đặt ngoài chân trái"
        ],
        "correct": 1,
        "explanation": "Với gậy sắt dài hơn, vị trí bóng sẽ dịch nhẹ về phía chân trái hơn gậy sắt ngắn để tối ưu thời điểm mặt gậy chạm bóng khi xuống."
      }
    ]
  },
  "phase3": {
    "id": "phase3",
    "title": "Ngân Hàng Bài Kiểm Tra Giai Đoạn 3: Consolidation (Buổi 13-18)",
    "passScore": 75,
    "reviewHeader": "Review Cuối Kỳ 1 bởi Hội Đồng Chuyên Môn (Buổi 18)",
    "practicalCriteria": [
      "Trải nghiệm 9 hố giả lập 3D: Áp dụng chiến thuật chơi và chọn gậy thực tế.",
      "Kỹ thuật địa hình: Đẩy bóng dốc lên (Uphill), dốc xuống (Downhill), bóng cao hơn chân & bóng thấp hơn chân.",
      "Kỹ thuật Chip bổng (Flop shot) qua bẫy cát/vật cản.",
      "Kiểm tra kiến thức Luật Golf cơ bản & Văn hóa ứng xử trên sân (Etiquette)."
    ],
    "questions": [
      {
        "id": "p3_q1",
        "category": "course_management",
        "question": "Khi bóng nằm ở thế dốc lên (Uphill lie), đường bóng thường có xu hướng bay như thế nào?",
        "options": [
          "Bay thấp và lượn sang phải",
          "Bay bổng hơn bình thường và có xu hướng lượn sang trái (Draw/Hook)",
          "Bay thẳng tuyệt đối",
          "Bay sà mặt đất"
        ],
        "correct": 1,
        "explanation": "Đánh dốc lên làm độ ngửa mặt gậy (loft) tăng lên khiến bóng bay bổng hơn, đồng thời vai và hông đóng sớm hơn khiến bóng dễ lượn sang trái."
      },
      {
        "id": "p3_q2",
        "category": "etiquette",
        "question": "Văn hóa Etiquette quy định thế nào khi người chơi cùng nhóm đang chuẩn bị thực hiện cú đánh?",
        "options": [
          "Đứng nói chuyện điện thoại thoải mái",
          "Giữ im lặng, đứng ngoài tầm nhìn của người đánh và không di chuyển gây xao nhãng",
          "Đứng ngay phía trước mặt người đánh",
          "Tập swing tạo tiếng động"
        ],
        "correct": 1,
        "explanation": "Tôn trọng sự tập trung của bạn chơi bằng cách giữ im lặng và đứng ở vị trí an toàn là nguyên tắc ứng xử văn minh hàng đầu trong Golf."
      },
      {
        "id": "p3_q3",
        "category": "rules",
        "question": "Nếu bóng golf rơi vào bẫy nước phạt cọc đỏ (Penalty Area), có bao nhiêu phương án giải thoát phạt 1 gậy?",
        "options": [
          "1 phương án",
          "3 phương án phạt 1 gậy (hoặc đánh tiếp từ bẫy không phạt nếu đánh được)",
          "5 phương án",
          "Không được phép giải thoát"
        ],
        "correct": 1,
        "explanation": "Bẫy cọc đỏ cho phép giải thoát phạt 1 gậy: (1) Đánh lại vị trí cũ, (2) Thả trên đường thẳng nối từ cờ qua điểm bóng vào bẫy, (3) Thả trong vòng 2 chiều dài gậy từ điểm cắt."
      },
      {
        "id": "p3_q4",
        "category": "shortgame",
        "question": "Kỹ thuật Flop Shot (Chip bổng) thường được sử dụng trong tình huống nào?",
        "options": [
          "Khi bóng ở cách cờ 150m",
          "Khi cần đưa bóng bay bổng qua vật cản/bẫy cát và dừng nhanh trên green hẹp",
          "Khi gạt bóng trên green",
          "Khi phát bóng ở khu vực Tee box"
        ],
        "correct": 1,
        "explanation": "Flop shot sử dụng gậy độ ngửa cao (Lob wedge 58-60 độ), mở mặt gậy để tạo đường bóng siêu bổng và dừng ngay sau khi chạm đất."
      },
      {
        "id": "p3_q5",
        "category": "course_management",
        "question": "Khi bóng nằm ở thế bóng thấp hơn chân (Sidehill downhill), đường bóng sẽ có xu hướng lượn sang đâu?",
        "options": [
          "Sang phải (Fade/Slice)",
          "Sang trái (Draw/Hook)",
          "Bay bổng lên trời",
          "Không ảnh hưởng"
        ],
        "correct": 0,
        "explanation": "Bóng thấp hơn chân khiến cơ thể đứng với góc phẳng hơn, mặt gậy mở khi chạm bóng tạo ra quỹ đạo bóng lượn sang phải (Fade/Slice)."
      }
    ]
  },
  "phase4": {
    "id": "phase4",
    "title": "Ngân Hàng Bài Kiểm Tra Tốt Nghiệp Cuối Khóa (Buổi 19-24)",
    "passScore": 80,
    "reviewHeader": "Hội Đồng Chuyên Môn Đánh Giá Tốt Nghiệp (Buổi 24)",
    "practicalCriteria": [
      "Trải nghiệm hoàn thành 18 hố giả lập 3D.",
      "Kiểm tra kỹ thuật tổng hợp: Driver, Iron, Pitching, Chipping & Putting (Đạt 7/10 bóng chuẩn).",
      "Tính điểm handicap, ghi Scorecard và hiểu rõ thể thức thi đấu (Stroke play / Match play).",
      "Đánh giá tổng kết & Cấp Chứng nhận Tốt nghiệp First Swing từ HĐCM 72+ Golf Academy."
    ],
    "questions": [
      {
        "id": "p4_q1",
        "category": "rules",
        "question": "Thể thức thi đấu Stroke Play (Đấu đếm gậy) xác định kết quả cuộc chơi như thế nào?",
        "options": [
          "Người đánh nhiều số gậy nhất thắng",
          "Người hoàn thành toàn bộ số hố quy định với tổng số gậy ít nhất là người chiến thắng",
          "Người đánh bóng xa nhất thắng",
          "Người có nhiều gậy driver hơn thắng"
        ],
        "correct": 1,
        "explanation": "Stroke Play tính tổng số gậy thực hiện (cộng gậy phạt nếu có) qua 18 hố, người có tổng số gậy thấp nhất dành chiến thắng."
      },
      {
        "id": "p4_q2",
        "category": "rules",
        "question": "Điểm Par của một hố golf được định nghĩa là gì?",
        "options": [
          "Số gậy tiêu chuẩn mà một golfer giỏi dự kiến hoàn thành hố đó",
          "Số gậy tối đa được phép đánh",
          "Số bóng mang theo",
          "Số điểm thưởng"
        ],
        "correct": 0,
        "explanation": "Par là số gậy gạt tiêu chuẩn quy định cho hố (Ví dụ Par 3, Par 4, Par 5 gồm số cú đánh tiếp cận + 2 cú gạt gạt bóng)."
      },
      {
        "id": "p4_q3",
        "category": "rules",
        "question": "Khi đánh bóng ra ngoài ranh giới sân (Out of Bounds - OB), người chơi bị xử phạt như thế nào?",
        "options": [
          "Không phạt gậy nào",
          "Phạt 1 gậy và chịu hình phạt khoảng cách (Stroke and Distance - đánh lại từ vị trí cũ)",
          "Phạt 2 gậy và đi tiếp",
          "Bị loại khỏi giải"
        ],
        "correct": 1,
        "explanation": "Bóng OB phải chịu hình phạt 1 gậy và phải quay trở lại vị trí vừa đánh trước đó để thực hiện lại cú đánh."
      },
      {
        "id": "p4_q4",
        "category": "handicap",
        "question": "Chỉ số Handicap (Handicap Index) trong Golf thể hiện điều gì?",
        "options": [
          "Tuổi tác của golfer",
          "Trình độ và năng lực đánh bóng thực tế của golfer (số gậy chênh lệch so với điểm Par)",
          "Chiều cao của golfer",
          "Số bộ gậy sở hữu"
        ],
        "correct": 1,
        "explanation": "Handicap Index đo lường trình độ của golfer, cho phép các golfer có trình độ khác nhau thi đấu công bằng với nhau nhờ điểm chấp."
      },
      {
        "id": "p4_q5",
        "category": "course_management",
        "question": "Điểm Birdie trong một hố golf tương ứng với kết quả nào?",
        "options": [
          "Đánh ít hơn điểm Par 1 gậy (ví dụ 3 gậy ở hố Par 4)",
          "Đánh nhiều hơn điểm Par 1 gậy (Bogey)",
          "Đánh đúng số gậy Par",
          "Đánh ít hơn Par 2 gậy (Eagle)"
        ],
        "correct": 0,
        "explanation": "Birdie là thành tích hoàn thành hố ít hơn 1 gậy so với gậy tiêu chuẩn Par của hố đó."
      }
    ]
  }
};
