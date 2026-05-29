// 10 Premium Products Database with Bilingual support, reviews & ratings
const products = {
    th: [
        { id: 1, name: "ยาพาราเซตามอล บรรเทาปวด ลดไข้ (Paracetamol 500mg)", category: "ยาสามัญ", price: 25, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=60", shortDesc: "ยาบรรเทาอาการปวดและลดไข้ระดับปานกลาง ปลอดภัยต่อระบบกระเพาะอาหาร", fullDesc: "ยาพาราเซตามอล (Paracetamol 500 มิลลิกรัม) ชนิดเม็ด บรรเทาอาการปวดศีรษะ ปวดฟัน ปวดกล้ามเนื้อ และลดไข้ เหมาะสำหรับยาสามัญประจำบ้านที่ทุกครัวเรือนควรมีติดไว้ อ่อนโยนต่อกระเพาะอาหาร สามารถรับประทานก่อนหรือหลังอาหารได้", caution: "คำเตือน: ห้ามรับประทานเกินวันละ 8 เม็ด (4,000 มิลลิกรัม) เพราะอาจเป็นพิษต่อตับอย่างรุนแรง และห้ามใช้ร่วมกับยาตัวอื่นที่มีส่วนผสมของพาราเซตามอล", spec: "ขนาดบรรจุ: 1 แผง (10 เม็ด) | ทะเบียนยาเลขที่: Reg. No. 1A 99/56", rating: 4.8, reviews: [{ author: "กิตติพงษ์ ศ.", rating: 5, comment: "ยามาตรฐานดีครับ แผงพกพาง่าย ได้รับของเร็วดี" }, { author: "วนิดา ม.", rating: 4, comment: "ราคาไม่แพง มีติดกระเป๋าไว้ตลอด อุ่นใจค่ะ" }] },
        { id: 2, name: "วิตามินซีเข้มข้น 1000 มก. (Vitamin C 1000mg)", category: "อาหารเสริม", price: 290, image: "https://images.unsplash.com/photo-1616671276441-2f2c277b8bf4?w=500&auto=format&fit=crop&q=60", shortDesc: "เสริมสร้างภูมิคุ้มกัน ป้องกันโรคหวัด บำรุงผิวพรรณให้กระจ่างใสและสร้างคอลลาเจน", fullDesc: "วิตามินซีเกรดพรีเมียมเข้มข้น 1,000 มิลลิกรัม เสริมด้วยสารสกัดจากธรรมชาติ เช่น โรสฮิป และอะเซโรลา เชอร์รี่ ช่วยดูดซึมได้ดียิ่งขึ้น ช่วยเสริมสร้างภูมิคุ้มกันร่างกายให้แข็งแรง ไม่เป็นหวัดง่าย กระตุ้นการทำงานของระบบคอลลาเจนใต้ผิว และช่วยต้านอนุมูลอิสระเพื่อผิวเปล่งปลั่งอย่างมีสุขภาพดี", caution: "คำเตือน: สตรีมีครรภ์หรือผู้มีประวัติโรคนิ่วในไตควรปรึกษาแพทย์ก่อนรับประทาน และควรดื่มน้ำตามมากๆ เพื่อช่วยในการละลายตัวยา", spec: "ขนาดบรรจุ: 1 ขวด (30 เม็ด) | ได้รับมาตรฐาน อย. เลขที่: 10-1-01949-1-1234", rating: 4.9, reviews: [{ author: "ธนกร พ.", rating: 5, comment: "กินยี่ห้อนี้แล้วไม่เป็นหวัดเลยครับ ผิวดูใสขึ้นด้วย แนะนำเลยครับ" }] },
        { id: 3, name: "ยาอมแก้เจ็บคอสูตรสมุนไพรชุ่มคอ (Herbal Lozenges)", category: "ยาสามัญ", price: 35, image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=500&auto=format&fit=crop&q=60", shortDesc: "บรรเทาอาการระคายเคืองคอ ขับเสมหะเบาๆ ช่วยให้ลำคอชุ่มชื้นตลอดวัน", fullDesc: "ยาอมสมุนไพรแท้ บรรเทาอาการเจ็บคอ ระคายเคือง ลำคอแห้งตึง จากการพูดคุยเยอะหรือการแพ้ฝุ่นละออง อุดมด้วยสารสกัดจากชะเอมเทศ มะขามป้อม และน้ำมันหอมระเหยเปปเปอร์มินต์ ช่วยให้หายใจโล่ง สดชื่น ชุ่มคอยาวนาน", caution: "คำเตือน: เด็กอายุต่ำกว่า 6 ปีไม่ควรรับประทานเพื่อหลีกเลี่ยงการติดคอ และห้ามใช้เมื่อมีอาการแพ้ส่วนประกอบของสมุนไพรในฉลาก", spec: "ขนาดบรรจุ: 1 ซอง (8 เม็ดอม) | ทะเบียนยาเลขที่: Reg. No. G 123/60", rating: 4.7, reviews: [{ author: "สมใจ ต.", rating: 5, comment: "อมแล้วชุ่มคอดีมาก หวานนิดๆ เย็นสบายคอค่ะ" }] },
        { id: 4, name: "เจลแอลกอฮอล์ล้างมืออนามัย (Hand Sanitizer Gel)", category: "อุปกรณ์แพทย์", price: 59, image: "https://images.unsplash.com/photo-1584483777733-de8d0441d3d2?w=500&auto=format&fit=crop&q=60", shortDesc: "แอลกอฮอล์เข้มข้น 75% แห้งเร็ว ถนอมมือ อ่อนโยนด้วยสารสกัดว่านหางจระเข้", fullDesc: "เจลล้างมือทำความสะอาดโดยไม่ต้องใช้น้ำ ป้องกันแบคทีเรียและเชื้อไวรัส 99.9% ด้วยความเข้มข้นแอลกอฮอล์ 75% v/v สูตรถนอมผิวมือเป็นพิเศษ ผสมอโลเวร่า (Aloe Vera Extract) และกลีเซอรีน ช่วยให้ผิวชุ่มชื้น ไม่แห้งตึงหลังใช้ มีกลิ่นหอมสะอาดสดชื่น อ่อนโยนใช้ได้บ่อยตามต้องการ", caution: "คำเตือน: หลีกเลี่ยงการสัมผัสโดยตรงกับดวงตาหรือบาดแผลเปิด เป็นวัตถุไวไฟควรเก็บให้พ้นแสงแดดและความร้อนจัด", spec: "ขนาดบรรจุ: 1 ขวดปั๊ม (250 มล.) | เลขที่ใบรับจดแจ้ง: 10-1-6300012345", rating: 4.6, reviews: [] },
        { id: 5, name: "หน้ากากอนามัยเกรดทางการแพทย์ 3 ชั้น (Surgical Mask)", category: "อุปกรณ์แพทย์", price: 85, image: "https://images.unsplash.com/photo-1586942593568-293a1a72e9a5?w=500&auto=format&fit=crop&q=60", shortDesc: "ป้องกันฝุ่นละออง PM2.5 และแบคทีเรีย กรองน้ำลายและสารคัดหลั่งสัมผัสผิวหน้าได้ดี", fullDesc: "หน้ากากอนามัยชนิด 3 ชั้น ผลิตจากใยสังเคราะห์หนานุ่มเกรดการแพทย์ (Surgical Grade) ป้องกันฝุ่นละออง PM2.5 ได้เป็นอย่างดี พร้อมประสิทธิภาพในการกรองเชื้อแบคทีเรีย (BFE) สูงกว่า 99% สายคล้องหูนุ่มสบายหู ไม่ตึงเจ็บ ออกออกแบบพอดีกระชับเข้ากับใบหน้าเพื่อความปลอดภัยระดับสูงสุด", caution: "คำเตือน: เพื่อสุขอนามัยที่ดี ควรเปลี่ยนหน้ากากอนามัยชิ้นใหม่ทุกวัน และห้ามนำกลับมาซักใช้ซ้ำเด็ดขาด", spec: "ขนาดบรรจุ: 1 กล่อง (50 ชิ้น) | ได้มาตรฐาน มอก. 2424-2562", rating: 4.9, reviews: [{ author: "นพดล เ.", rating: 5, comment: "สายคล้องไม่เจ็บหูเลย ใส่สบายทั้งวัน แนะนำกล่องนี้ครับ คุ้มค่า" }] },
        { id: 6, name: "ยาน้ำแก้ไอขับเสมหะสมุนไพร (Cough Syrup)", category: "ยาสามัญ", price: 45, image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500&auto=format&fit=crop&q=60", shortDesc: "บรรเทาอาการไอ ขับเสมหะ บรรเทาไอเปียกและแห้ง หอมหวานดื่มง่าย", fullDesc: "ยาน้ำแก้ไอสมุนไพรสูตรมะขามป้อมเข้มข้น ช่วยขับเสมหะ บรรเทาอาการไอแห้ง ปวดอก เจ็บคอจากการไอเรื้อรัง รสชาติกลมกล่อม หอมกลิ่นน้ำผึ้งและสมุนไพรธรรมชาติ ช่วยเคลือบลำคอ เพิ่มความชุ่มชื้นเย็นสบายโล่งคอทันทีที่ดื่ม", caution: "คำเตือน: ผู้เป็นโรคเบาหวานหรือต้องควบคุมน้ำตาลอย่างเข้มงวดควรปรึกษาแพทย์เนื่องจากมีส่วนผสมของน้ำผึ้งธรรมชาติ เขย่าขวดก่อนดื่มทุกครั้ง", spec: "ขนาดบรรจุ: 1 ขวด (120 มล.) | ทะเบียนยาเลขที่: Reg. No. G 456/61", rating: 4.8, reviews: [{ author: "ประเสริฐ น.", rating: 5, comment: "กินแล้วโล่งคอดีครับ เสมหะลดลงเยอะ" }] },
        { id: 7, name: "น้ำเกลือล้างแผลและทำความสะอาด (Normal Saline 0.9%)", category: "อุปกรณ์แพทย์", price: 60, image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&auto=format&fit=crop&q=60", shortDesc: "สารละลายไอโซโทนิก อ่อนโยนปราศจากเชื้อ ไม่แสบแผล ใช้ล้างคอนแทคเลนส์ได้", fullDesc: "น้ำเกลือปราศจากเชื้อ (Sterile Normal Saline 0.9%) มีความเข้มข้นเท่ากับของเหลวในเซลล์ร่างกาย จึงไม่ทำให้แสบระคายเคืองเมื่อสัมผัสแผล เหมาะสำหรับล้างบาดแผลสด ล้างจมูกเพื่อลดน้ำมูก เช็ดทำความสะอาดใบหน้าสำหรับผิวแพ้ง่าย หรือใช้ล้างคอนแทคเลนส์ก่อนใส่เข้าตา", caution: "คำเตือน: หลังเปิดขวดแล้วควรใช้ให้หมดภายใน 30 วันเพื่อความสะอาดสูงสุดและหลีกเลี่ยงการปนเปื้อนของเชื้อโรค", spec: "ขนาดบรรจุ: 1 ขวด (1000 มล.) | ทะเบียนยาเลขที่: Reg. No. 1A 45/59", rating: 4.8, reviews: [] },
        { id: 8, name: "น้ำตาเทียมปราศจากสารกันเสีย (Artificial Tears)", category: "ยาสามัญ", price: 180, image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&auto=format&fit=crop&q=60", shortDesc: "เติมความชุ่มชื้นให้ดวงตา ลดอาการตาแห้ง ระคายเคือง สำหรับผู้ใช้สายตาเยอะ", fullDesc: "น้ำตาเทียมช่วยบรรเทาอาการตาแห้ง แสบตา เคืองตา จากการจ้องหน้าจอคอมพิวเตอร์และมือถือเป็นเวลานาน หรือการอยู่ในห้องแอร์ที่มีอากาศแห้ง ช่วยเพิ่มความชุ่มชื้นเคลือบผิวตา อ่อนโยนเป็นพิเศษและไม่ทำปฏิกิริยากับผู้ใส่คอนแทคเลนส์", caution: "คำเตือน: หลีกเลี่ยงไม่ให้ปลายหลอดสัมผัสกับดวงตาหรือนิ้วมือเพื่อรักษาสภาพความไร้เชื้อ และควรทิ้งภายในวันเมื่อเปิดใช้งาน", spec: "ขนาดบรรจุ: 1 กล่อง (30 หลอดเล็ก) | ทะเบียนยาเลขที่: Reg. No. 1C 99/62", rating: 4.9, reviews: [{ author: "ชลลดา ว.", rating: 5, comment: "จ้องคอมทั้งวันได้ตัวนี้ช่วยได้ดีมากเลยค่ะ อ่อนโยน" }] },
        { id: 9, name: "คอลลาเจนเปปไทด์เข้มข้นพรีเมียม (Premium Collagen)", category: "อาหารเสริม", price: 450, image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format&fit=crop&q=60", shortDesc: "บำรุงผิวพรรณยืดหยุ่นเปล่งปลั่ง เสริมความแข็งแรงข้อต่อกระดูกและเล็บผม", fullDesc: "ผงคอลลาเจนเปปไทด์แท้ 100% สกัดจากปลาทะเลน้ำลึกพรีเมียม นำเข้าเพื่อบำรุงล้ำลึก ดูดซึมง่าย ช่วยฟื้นฟูโครงสร้างผิวพรรณให้มีความยืดหยุ่น ชุ่มชื้น ลดเลือนริ้วรอยแห่งวัย และเสริมสร้างน้ำหล่อเลี้ยงข้อต่อกระดูกให้เคลื่อนไหวได้อย่างไร้อาการติดขัด พร้อมดูแลเล็บและเส้นผมให้แข็งแรงเงางาม", caution: "คำเตือน: ข้อมูลสำหรับผู้แพ้อาหาร มีส่วนผสมของผลิตภัณฑ์จากปลาทะเล ไม่เหมาะสมสำหรับผู้แพ้อาหารทะเลอย่างรุนแรง", spec: "ขนาดบรรจุ: 1 กระปุก (100 กรัม) | ได้รับมาตรฐาน อย. เลขที่: 11-1-10249-5-0012", rating: 4.7, reviews: [] },
        { id: 10, name: "ครีมกันแดดสูตรเวชสำอางสำหรับผิวแพ้ง่าย (Sunscreen SPF50+)", category: "เวชสำอาง", price: 380, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=60", shortDesc: "ครีมกันแดดเนื้อบางเบา SPF 50+ PA++++ ปราศจากสารระคายเคือง ไม่อุดตัน", fullDesc: "ครีมกันแดดสูตรพัฒนาโดยผู้เชี่ยวชาญด้านผิวหนังสำหรับผิวบอบบางแพ้ง่ายโดยเฉพาะ ค่าปกป้องรังสี UVA/UVB สูงถึง SPF 50+ PA++++ เนื้อครีมซึมซาบไว ไม่ทิ้งคราบขาวบนผิว ปราศจากน้ำหอม แอลกอฮอล์ และพาราเบน ไม่อุดตันรูขุมขน ป้องกันผิวหมองคล้ำและริ้วรอยก่อนวัยจากแสงแดดอย่างมีประสิทธิภาพสูงสุด", caution: "คำเตือน: สำหรับใช้ภายนอกผิวหนังเท่านั้น หากเกิดอาการระคายเคืองหรือผื่นแดง ควรหยุดใช้และไปพบแพทย์ทันที", spec: "ขนาดบรรจุ: 1 หลอด (50 มล.) | เลขที่ใบรับจดแจ้ง: 10-1-6400056789", rating: 4.8, reviews: [{ author: "กรกฎ ก.", rating: 5, comment: "บางเบามาก หน้าไม่ลอย คุมมันเลิศครับ" }] }
    ],
    en: [
        { id: 1, name: "Paracetamol Pain Relief (Paracetamol 500mg)", category: "General Medicine", price: 25, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=60", shortDesc: "Relieves mild to moderate pain and reduces fever. Gentle on stomach.", fullDesc: "Paracetamol 500mg tablets for fast and effective relief of headache, toothache, muscle aches, and fever. An essential medicine cabinet addition.", caution: "Caution: Do not take more than 8 tablets (4,000mg) per day. High doses can damage the liver.", spec: "Contains: 1 Pack (10 Tabs) | License: Reg. No. 1A 99/56", rating: 4.8, reviews: [{ author: "John D.", rating: 5, comment: "Standard effective paracetamol, fast shipping." }] },
        { id: 2, name: "Premium Vitamin C 1000mg", category: "Supplements", price: 290, image: "https://images.unsplash.com/photo-1616671276441-2f2c277b8bf4?w=500&auto=format&fit=crop&q=60", shortDesc: "Boosts immune system, prevents colds, and promotes glowing skin collagen.", fullDesc: "High potency 1,000mg Vitamin C enhanced with Rose Hips for optimal absorption. Supports immune health and fights free radicals.", caution: "Caution: Pregnant women or kidney stone patients should consult doctor before use.", spec: "Contains: 1 Bottle (30 Tablets) | Thai FDA: 10-1-01949-1-1234", rating: 4.9, reviews: [{ author: "Alice M.", rating: 5, comment: "Highly effective for immune system, no stomach upset." }] },
        { id: 3, name: "Herbal Throat Lozenges", category: "General Medicine", price: 35, image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=500&auto=format&fit=crop&q=60", shortDesc: "Relieves throat irritation, keeps mouth and throat comfortably hydrated.", fullDesc: "Herbal active throat lozenges containing natural extracts to soothe throat irritation, dryness, and coughs.", caution: "Caution: Not recommended for children under 6 years to avoid choking risks.", spec: "Contains: 1 Bag (8 Lozenges) | Reg. No. G 123/60", rating: 4.7, reviews: [] },
        { id: 4, name: "Sanitizing Hand Gel", category: "Medical Supplies", price: 59, image: "https://images.unsplash.com/photo-1584483777733-de8d0441d3d2?w=500&auto=format&fit=crop&q=60", shortDesc: "75% Alcohol hand gel. Fast drying, enriched with soothing Aloe Vera.", fullDesc: "Instant sanitizing hand gel containing 75% v/v pharmaceutical alcohol. Kills 99.9% of bacteria and germs without water.", caution: "Caution: For external use only. Keep away from eyes and open flames.", spec: "Contains: 1 Pump (250 ml) | FDA Reg: 10-1-6300012345", rating: 4.6, reviews: [] },
        { id: 5, name: "Surgical Medical Mask 3-Ply", category: "Medical Supplies", price: 85, image: "https://images.unsplash.com/photo-1586942593568-293a1a72e9a5?w=500&auto=format&fit=crop&q=60", shortDesc: "Filters PM2.5 and clinical bacteria. Soft skin touch, secure elastic earloops.", fullDesc: "Premium 3-ply surgical masks providing over 99% Bacterial Filtration Efficiency (BFE). Blocks dust, pollen, and airborne particles.", caution: "Caution: Single use only. Replace daily to maintain clinical protection.", spec: "Contains: 1 Box (50 Pcs) | Standard: TIS 2424-2562", rating: 4.9, reviews: [{ author: "Peter S.", rating: 5, comment: "Earloops are soft, fits snug on face." }] },
        { id: 6, name: "Herbal Cough Syrup", category: "General Medicine", price: 45, image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500&auto=format&fit=crop&q=60", shortDesc: "Soothes cough, helps thin and clear mucus. Pleasant honey aroma.", fullDesc: "Traditional clinical herbal cough syrup containing Emblica extracts. Clears congestion and moisturizes airway membranes.", caution: "Caution: Shake well before drinking. Diabetics should consult doctor due to honey sugar content.", spec: "Contains: 1 Bottle (120 ml) | Reg No: G 456/61", rating: 4.8, reviews: [] },
        { id: 7, name: "Sterile Normal Saline 0.9%", category: "Medical Supplies", price: 60, image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&auto=format&fit=crop&q=60", shortDesc: "Isotonic solution for wound rinsing, nasal irrigation and contact lenses.", fullDesc: "Sterile isotonic normal saline 0.9% designed for safe skin irrigation. Matches body fluids, meaning absolutely zero burning sensation.", caution: "Caution: Discard unused portion 30 days after opening to avoid bacterial contamination.", spec: "Contains: 1 Bottle (1000 ml) | Reg No: 1A 45/59", rating: 4.8, reviews: [] },
        { id: 8, name: "Preservative-Free Artificial Tears", category: "General Medicine", price: 180, image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&auto=format&fit=crop&q=60", shortDesc: "Hydrates dry eyes, relieves computer-screen irritation.", fullDesc: "Lubricating clinical eye drops in single-dose vials. Excellent for computer screen dry eye symptoms.", caution: "Caution: Do not touch vial tip to any surface. Discard vial immediately after use.", spec: "Contains: 1 Box (30 Vials) | Reg No: 1C 99/62", rating: 4.9, reviews: [] },
        { id: 9, name: "Premium Marine Collagen Peptide", category: "Supplements", price: 450, image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format&fit=crop&q=60", shortDesc: "Nourishes skin elasticity, supports joint flexibility and nails health.", fullDesc: "100% pure marine collagen peptide powder. High absorption formula supporting skin structure and bone lubricant cells.", caution: "Caution: Contains deep-sea fish derivatives. Not suitable for individuals with severe fish allergies.", spec: "Contains: 1 Can (100g) | Thai FDA: 11-1-10249-5-0012", rating: 4.7, reviews: [] },
        { id: 10, name: "Dermatological Sunscreen SPF50+", category: "Dermo-Cosmetic", price: 380, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=60", shortDesc: "Gentle sunscreen, SPF 50+ PA++++. Fragrance-free, non-comedogenic.", fullDesc: "Hypoallergenic daily protective sunscreen. Protects against UVA/UVB rays without clogging pores or leaving white casts.", caution: "Caution: For external use only. Stop use and see doctor if rash appears.", spec: "Contains: 1 Tube (50 ml) | FDA Reg: 10-1-6400056789", rating: 4.8, reviews: [] }
    ]
};

// Upgrade 4: Dynamic stock values configuration
const stockMap = {
    1: 12, // Paracetamol
    2: 15, // Vitamin C
    3: 4,  // Lozenges (Low Stock!)
    4: 20, // Hand Gel
    5: 3,  // Surgical Mask (Low Stock!)
    6: 10, // Cough Syrup
    7: 18, // Normal Saline
    8: 5,  // Artificial Tears (Low Stock!)
    9: 2,  // Collagen (Low Stock!)
    10: 8  // Sunscreen
};

// Seed stock values in products database
Object.keys(products).forEach(lang => {
    products[lang].forEach(prod => {
        prod.stock = stockMap[prod.id] || 10;
    });
});

// 10 Premium Articles Database with Bilingual support
const articles = [
    {
        id: 1,
        date: "25 พ.ค. 2026 | 25 May 2026",
        title_th: "5 วิธีดูแลร่างกายให้ห่างไกลจากไข้หวัดฤดูร้อน",
        title_en: "5 Ways to Protect Your Body from Summer Colds",
        image: "https://images.unsplash.com/photo-1584036561566-baf245fdb76e?w=500&auto=format&fit=crop&q=60",
        excerpt_th: "ไข้หวัดหน้าร้อนเกิดได้ง่ายกว่าที่คิด มาดูวิธีปฏิบัติตนและป้องกันอย่างถูกต้องโดยแพทย์ผู้เชี่ยวชาญกันค่ะ",
        excerpt_en: "Summer colds are more common than you think. Learn how to behave and protect yourself clinical-style.",
        content_th: "ไข้หวัดในหน้าร้อนมักเกิดจากการเปลี่ยนแปลงอุณหภูมิอย่างรวดเร็ว เช่น การอยู่ในห้องแอร์ที่เย็นจัดแล้วออกไปเผชิญแสงแดดที่ร้อนระอุภายนอก วิธีป้องกันคือ: 1. หลีกเลี่ยงน้ำเย็นจัด 2. พักผ่อนให้เพียงพออย่างน้อย 7-8 ชั่วโมง 3. ล้างมือบ่อยๆ 4. สวมหน้ากากอนามัยในพื้นที่แออัด และ 5. เสริมวิตามินซีเพื่อช่วยกระตุ้นภูมิคุ้มกันเพื่อความปลอดภัยสูงสุดค่ะ",
        content_en: "Summer colds are typically caused by sudden temperature transitions, such as moving from high-AC rooms directly into scorching solar heat. Preventions: 1. Avoid ice-cold beverages. 2. Sleep at least 7-8 hours daily. 3. Wash hands frequently. 4. Wear surgical masks in crowded areas. 5. Consume Vitamin C daily to support core immune defenses."
    },
    {
        id: 2,
        date: "12 พ.ค. 2026 | 12 May 2026",
        title_th: "ทำความรู้จักกับดัชนีมวลกาย (BMI) และโภชนาการที่เหมาะสม",
        title_en: "Understanding Body Mass Index (BMI) & Tailored Nutrition",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60",
        excerpt_th: "ค่า BMI บอกอะไรเกี่ยวกับสุขภาพของคุณได้บ้าง? และโภชนาการแบบไหนที่ตรงเกณฑ์สำหรับคุณ",
        excerpt_en: "What does your BMI index say about your core health status? Discover clinical dietary instructions.",
        content_th: "ค่าดัชนีมวลกาย (BMI) คือการวัดมวลร่างกายนิยามตามความสัมพันธ์ระหว่างน้ำหนักและส่วนสูง หากมีค่าต่ำกว่า 18.5 แปลว่าน้ำหนักน้อยเกินเกณฑ์ ควรทานคอลลาเจนโปรตีนเสริมมวลกระดูก หากมีค่าเกิน 25 แปลว่าอยู่ในเกณฑ์อ้วน ควรจำกัดคาร์โบไฮเดรตและเน้นทานผักผลไม้ต้านอนุมูลอิสระเพื่อควบคุมแคลอรีอย่างมีประสิทธิภาพและปลอดภัย",
        content_en: "Body Mass Index (BMI) is a universal health measurement evaluating weight-to-height proportions. A score below 18.5 indicates underweight status, indicating protein or marine collagen ingestion. A score above 25 signifies obesity, calling for clinical diets focusing on low carbohydrate intake and fiber-rich greens."
    }
];

// Global UI Translation Dictionary
const dictionary = {
    th: {
        langBtn: "EN",
        heroBadge: "ร้านยาจำลองระดับสากล",
        heroTitle: "ดูแลสุขภาพคุณและคนที่คุณรักในทุกๆ วัน",
        heroDesc: "เราคัดสรรยา วิตามินบำรุง และอุปกรณ์ทางการแพทย์ที่ได้มาตรฐาน ปลอดภัย พร้อมบริการให้คำแนะนำและจัดส่งที่รวดเร็วทันใจ",
        productsHeading: "รายการยาสินค้าแนะนำ",
        compareBtn: "เปรียบเทียบสินค้า",
        checkoutBtn: "ดำเนินการชำระเงินจำลอง",
        healthTitle: "ระบบวิเคราะห์และคัดกรองสุขภาพสากล",
        healthDesc: "ประเมินดัชนีมวลกาย BMI ตรวจวิเคราะห์ประวัติอาการป่วย และบันทึกข้อมูลอาการแพ้ยาของคุณเพื่อความปลอดภัย",
        chatbotWelcome: "สวัสดีค่ะ ดิฉันเภสัชกรหญิง ปิยวรรณ ยินดีให้คำแนะนำปรึกษาเบื้องต้นเรื่องการใช้ยา วิตามิน และอาการป่วยค่ะ พิมพ์ถามชื่อยาสินค้า หรือระบุอาการได้เลยนะคะ 🩺",
        chatbotName: "ภญ. ปิยวรรณ แก้วมณี"
    },
    en: {
        langBtn: "TH",
        heroBadge: "World-Class Pharmacy Mockup",
        heroTitle: "Taking Care of Your Health & Loved Ones Every Day",
        heroDesc: "We select premium pharmaceutical medicines, health supplements, and medical equipment with absolute standards, certified safety, and fast delivery.",
        productsHeading: "Recommended Medical Products",
        compareBtn: "Compare Products",
        checkoutBtn: "Proceed to Checkout",
        healthTitle: "Global Health Diagnostics & Screening",
        healthDesc: "Evaluate your BMI, triage symptoms, and configure electronic health records (EHR) drug allergies for ultimate purchase safety.",
        chatbotWelcome: "Hello! I am Pharmacist Piyawan. I am ready to advise you on medicine safety, vitamins, and clinical symptoms. Type symptoms like 'headache' or medicines like 'paracetamol' to consult! 🩺",
        chatbotName: "Pharm. Piyawan Kaewmanee"
    }
};

// Global States
let currentLang = "th";
let cart = [];
let wishlist = [];
let compareItems = [];
let loyaltyPoints = 0;
let monthlyExpense = 0;
let activeCategory = "all";
let searchQuery = "";
let searchHistory = [];
let isMuted = false;
let currentCurrency = "THB";

// Elements lookup
const productsGrid = document.getElementById("products-grid");
const categoryTabs = document.getElementById("category-tabs");
const searchBox = document.getElementById("search-box");
const cartDrawer = document.getElementById("cart-drawer");
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const overlay = document.getElementById("overlay");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartCountBadge = document.getElementById("cart-count");
const subtotalPriceEl = document.getElementById("subtotal-price");
const shippingPriceEl = document.getElementById("shipping-price");
const totalPriceEl = document.getElementById("total-price");
const checkoutBtn = document.getElementById("checkout-btn");
const detailModal = document.getElementById("detail-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalContent = document.getElementById("modal-content");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

// Dynamic 10 Upgrades Elements
const langToggleBtn = document.getElementById("lang-toggle-btn");
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const openWishlistBtn = document.getElementById("open-wishlist-btn");
const wishlistCountText = document.getElementById("wishlist-count-text");
const wishlistGrid = document.getElementById("wishlist-grid");
const triggerCompareBtn = document.getElementById("trigger-compare-btn");
const compareCountBadge = document.getElementById("compare-count-badge");
const compareModal = document.getElementById("compare-modal");
const closeCompareModalBtn = document.getElementById("close-compare-modal-btn");
const compareTableContent = document.getElementById("compare-table-content");
const ehrAllergyChecks = document.querySelectorAll(".allergy-chk");
const allergyAlertContainer = document.getElementById("allergy-alert-container");
const symptomSelector = document.getElementById("symptom-selector");
const diagnosisResult = document.getElementById("diagnosis-result");
const bmiCalcForm = document.getElementById("bmi-calc-form");
const bmiResultPanel = document.getElementById("bmi-result");
const bmiValueEl = document.getElementById("bmi-value");
const bmiStatusEl = document.getElementById("bmi-status");
const bmiBarEl = document.getElementById("bmi-bar");
const bmiAdviseEl = document.getElementById("bmi-advise");
const vaccineBookingModal = document.getElementById("vaccine-booking-modal");
const closeVaccineModalBtn = document.getElementById("close-vaccine-modal-btn");
const vaccineBookingForm = document.getElementById("vaccine-booking-form");
const ticketModal = document.getElementById("ticket-modal");
const ticketCloseBtn = document.getElementById("ticket-close-btn");
const userTierBadge = document.getElementById("user-tier-badge");
const loyaltyPointsVal = document.getElementById("loyalty-points-val");
const expenseCurrentBar = document.getElementById("expense-current-bar");
const expenseCurrentLbl = document.getElementById("expense-current-lbl");
const trackerIdTxt = document.getElementById("tracker-id-txt");
const stepOrderedTime = document.getElementById("step-ordered-time");
const stepPackedTime = document.getElementById("step-packed-time");
const stepShippedTime = document.getElementById("step-shipped-time");

// Coupon & Form Close Elements
const checkoutModal = document.getElementById("checkout-modal");
const applyPromoBtn = document.getElementById("apply-promo-btn");
const promoCodeInput = document.getElementById("promo-code");
const promoStatusMsg = document.getElementById("promo-status-msg");
const closeCheckoutBtn = document.getElementById("close-checkout-btn");
const receiptCloseBtn = document.getElementById("receipt-close-btn");
const receiptModal = document.getElementById("receipt-modal");
const shippingForm = document.getElementById("shipping-form");
const closeArticleModalBtn = document.getElementById("close-article-modal-btn");
let activeDiscount = 0;

// Chatbot Elements
const chatInput = document.getElementById("chat-input");
const chatSendBtn = document.getElementById("chat-send-btn");
const chatMessages = document.getElementById("chat-messages");
const chatToggleBtn = document.getElementById("chat-toggle-btn");
const chatBox = document.getElementById("chat-box");
const chatCloseBtn = document.getElementById("chat-close");

// Views Navigation mapping
const views = {
    home: document.getElementById("home-view"),
    health: document.getElementById("health-view"),
    vaccine: document.getElementById("vaccine-view"),
    dashboard: document.getElementById("dashboard-view"),
    about: document.getElementById("about-view"),
    articles: document.getElementById("articles-view"),
    contact: document.getElementById("contact-view"),
    wishlist: document.getElementById("wishlist-view")
};

// Initialize Application logic
document.addEventListener("DOMContentLoaded", () => {
    // Load local storage items
    loadCartFromStorage();
    loadWishlistFromStorage();
    loadEhrFromStorage();
    loadLoyaltyFromStorage();
    loadSearchHistory();
    
    // Initial Render
    renderActiveProducts();
    renderArticles();
    setupNavigation();
    setupThemeSwitch();
    setupLanguageSwitch();
    setupCompareSystem();
    setupBmiCalculator();
    setupSymptomSelector();
    setupVaccineBooking();
    setupCheckoutCoupons();
    setupCheckoutFlow();
    setupChatbot();
    setupContactForm();
    setupAudioSystem();
    setupCurrencySelector();
    setupVideoCall();
    setupPrescriptionScanner();
    setupDeliveryDateCalculator();
    setupPillScheduler();
    setupHealthQuiz();
    
    // Header Scroll Shadow and Back to Top logic (Upgrade 2)
    const backToTopBtn = document.getElementById("back-to-top-btn");
    
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        // Show or hide Back to Top button on scroll
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = "flex";
            } else {
                backToTopBtn.style.display = "none";
            }
        }
    });
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});

// Setup Multi-View SPA router
function setupNavigation() {
    const handleNav = (targetId) => {
        Object.keys(views).forEach(key => {
            if (key === targetId) {
                views[key].classList.remove("hidden");
            } else {
                views[key].classList.add("hidden");
            }
        });
        
        // Sync desktop links active state
        document.querySelectorAll(".nav-link-btn").forEach(btn => {
            if (btn.getAttribute("data-target") === targetId) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
        
        // Sync mobile bottom links active state
        document.querySelectorAll(".mobile-nav-item").forEach(item => {
            if (item.getAttribute("data-target") === targetId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
        
        if (targetId === "wishlist") {
            openWishlistBtn.classList.add("active");
            renderWishlist();
        } else {
            openWishlistBtn.classList.remove("active");
        }
        
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    document.querySelectorAll(".nav-link-btn, .mobile-nav-item, .footer-links a[data-target]").forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            const target = element.getAttribute("data-target");
            handleNav(target);
        });
    });

    openWishlistBtn.addEventListener("click", () => handleNav("wishlist"));

    // Cart Drawer Toggle
    openCartBtn.addEventListener("click", () => {
        cartDrawer.classList.add("open");
        overlay.classList.add("active");
    });

    closeCartBtn.addEventListener("click", () => {
        closeDrawer();
    });

    // Modal dismiss controls
    const closeAllModals = () => {
        closeDrawer();
        closeModal();
        compareModal.classList.remove("active");
        checkoutModal.classList.remove("active");
        vaccineBookingModal.classList.remove("active");
        ticketModal.classList.remove("active");
        receiptModal.classList.remove("active");
        document.getElementById("article-detail-modal").classList.remove("active");
    };

    overlay.addEventListener("click", closeAllModals);
    
    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener("click", closeAllModals);
    if (closeArticleModalBtn) closeArticleModalBtn.addEventListener("click", closeAllModals);

    // Search and category selectors (Upgrade 1 with Debounced Search History)
    let searchDebounce;
    if (searchBox) {
        searchBox.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            renderActiveProducts();
            
            clearTimeout(searchDebounce);
            searchDebounce = setTimeout(() => {
                if (searchQuery.trim().length >= 2) {
                    saveSearchHistory(searchQuery);
                }
            }, 1200);
        });
    }

function loadSearchHistory() {
    try {
        const saved = localStorage.getItem("pc_search_history");
        searchHistory = saved ? JSON.parse(saved) : [];
    } catch (e) {
        searchHistory = [];
    }
    renderSearchHistoryTags();
}

function saveSearchHistory(query) {
    const q = query.trim();
    if (!q || q.length < 2) return;
    searchHistory = searchHistory.filter(item => item.toLowerCase() !== q.toLowerCase());
    searchHistory.unshift(q);
    if (searchHistory.length > 5) searchHistory.pop();
    localStorage.setItem("pc_search_history", JSON.stringify(searchHistory));
    renderSearchHistoryTags();
}

function renderSearchHistoryTags() {
    const section = document.getElementById("recent-searches-section");
    const container = document.getElementById("recent-searches-tags");
    if (!section || !container) return;
    if (searchHistory.length === 0) {
        section.style.display = "none";
        return;
    }
    section.style.display = "block";
    container.innerHTML = "";
    searchHistory.forEach(q => {
        const tag = document.createElement("button");
        tag.className = "recent-search-tag";
        tag.innerHTML = `<i class="fa-solid fa-clock-rotate-left"></i> ${q}`;
        tag.addEventListener("click", () => {
            searchBox.value = q;
            searchQuery = q;
            renderActiveProducts();
        });
        container.appendChild(tag);
    });
}

function playSound(type) {
    if (isMuted) return;
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        if (type === "click") {
            osc.type = "sine";
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            gain.gain.setValueAtTime(0.04, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            osc.start();
            osc.stop(ctx.currentTime + 0.08);
        } else if (type === "cart") {
            osc.type = "sine";
            osc.frequency.setValueAtTime(880, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.12);
            gain.gain.setValueAtTime(0.03, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
            osc.start();
            osc.stop(ctx.currentTime + 0.15);
        } else if (type === "success") {
            const now = ctx.currentTime;
            osc.type = "sine";
            gain.gain.setValueAtTime(0.04, now);
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
            osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
            osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
            osc.start();
            osc.stop(now + 0.45);
        }
    } catch (e) {
        console.warn("Web Audio API not supported or allowed yet.");
    }
}

function setupAudioSystem() {
    const soundToggleBtn = document.getElementById("sound-toggle-btn");
    if (!soundToggleBtn) return;
    
    // Load setting from localStorage
    const saved = localStorage.getItem("pc_audio_muted");
    isMuted = saved === "true";
    updateSoundToggleButtonUI();
    
    soundToggleBtn.addEventListener("click", () => {
        isMuted = !isMuted;
        localStorage.setItem("pc_audio_muted", isMuted);
        updateSoundToggleButtonUI();
        if (!isMuted) playSound("click");
    });
    
    // Add generic click sound listeners to interactive elements
    document.addEventListener("click", (e) => {
        const target = e.target.closest("button, a, .tab-btn, .symptom-chip, .allergy-checkbox-label");
        if (target) {
            playSound("click");
        }
    });
}

function updateSoundToggleButtonUI() {
    const soundToggleBtn = document.getElementById("sound-toggle-btn");
    if (!soundToggleBtn) return;
    const icon = soundToggleBtn.querySelector("i");
    if (isMuted) {
        icon.className = "fa-solid fa-volume-xmark";
        soundToggleBtn.title = currentLang === "th" ? "เปิดเสียง" : "Unmute Sound";
    } else {
        icon.className = "fa-solid fa-volume-high";
        soundToggleBtn.title = currentLang === "th" ? "ปิดเสียง" : "Mute Sound";
    }
}

    document.querySelectorAll("#category-tabs .tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("#category-tabs .tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-category");
            renderActiveProducts();
        });
    });
}

function closeDrawer() {
    cartDrawer.classList.remove("open");
    if (!detailModal.classList.contains("active") && !checkoutModal.classList.contains("active") && !vaccineBookingModal.classList.contains("active") && !ticketModal.classList.contains("active") && !compareModal.classList.contains("active")) {
        overlay.classList.remove("active");
    }
}

// Render Health Article details modal popup
window.openFullArticle = function(id) {
    const article = articles.find(a => a.id === id);
    if (!article) return;
    
    const modal = document.getElementById("article-detail-modal");
    const content = document.getElementById("article-modal-content");
    
    const title = currentLang === "th" ? article.title_th : article.title_en;
    const body = currentLang === "th" ? article.content_th : article.content_en;
    
    content.innerHTML = `
        <h3 style="font-weight:700; font-size:1.4rem; color:var(--primary); margin-bottom:12px;">${title}</h3>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:15px;">${article.date}</p>
        <img src="${article.image}" style="width:100%; height:230px; object-fit:cover; border-radius:var(--radius-md); margin-bottom:20px; border:1px solid var(--border);">
        <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.6; text-align:justify;">${body}</p>
        <button class="success-close-btn" style="margin-top:25px; width:100%; border:none;" onclick="document.getElementById('article-detail-modal').classList.remove('active'); document.getElementById('overlay').classList.remove('active');">
            ${currentLang === "th" ? "ปิดบทความ" : "Close Article"}
        </button>
    `;
    
    modal.classList.add("active");
    overlay.classList.add("active");
};



// Upgrade 5: Currency formatting and live exchange rates
function formatPrice(priceThb) {
    if (currentCurrency === "USD") {
        return `$${(priceThb / 36.5).toFixed(2)}`;
    } else if (currentCurrency === "EUR") {
        return `€${(priceThb / 39.5).toFixed(2)}`;
    } else {
        return `${priceThb.toLocaleString()} ฿`;
    }
}

function setupCurrencySelector() {
    const selector = document.getElementById("currency-select");
    if (!selector) return;
    
    // Load from localStorage
    const saved = localStorage.getItem("pc_current_currency");
    if (saved) {
        currentCurrency = saved;
        selector.value = saved;
    }
    
    selector.addEventListener("change", (e) => {
        currentCurrency = e.target.value;
        localStorage.setItem("pc_current_currency", currentCurrency);
        renderActiveProducts();
        updateCartUI();
    });
}

// Render active product lists with Formal Medical Trust Badges containing official medical icons
function renderActiveProducts() {
    productsGrid.innerHTML = "";
    const activeList = products[currentLang];
    
    // Apply categories / search filters
    let filtered = activeList;
    if (activeCategory !== "all") {
        const catMap = {
            "all": "all",
            "ยาสามัญ": currentLang === "th" ? "ยาสามัญ" : "General Medicine",
            "อาหารเสริม": currentLang === "th" ? "อาหารเสริม" : "Supplements",
            "อุปกรณ์แพทย์": currentLang === "th" ? "อุปกรณ์แพทย์" : "Medical Supplies",
            "เวชสำอาง": currentLang === "th" ? "เวชสำอาง" : "Dermo-Cosmetic"
        };
        filtered = filtered.filter(p => p.category === catMap[activeCategory]);
    }
    
    if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.shortDesc.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
    }
    
    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
                <i class="fa-solid fa-face-frown" style="font-size: 3rem; margin-bottom: 15px; color: var(--text-muted);"></i>
                <p style="font-size: 1.1rem; font-weight: 500;">${currentLang === "th" ? "ไม่พบสินค้าที่ตรงกับการค้นหาของคุณ" : "No products match your search query."}</p>
            </div>
        `;
        return;
    }

    filtered.forEach(product => {
        const isLiked = wishlist.includes(product.id);
        const isCompared = compareItems.includes(product.id);
        
        // Dynamic Trust Badges based on product Category to look extremely official
        let trustBadgesHtml = "";
        const cat = product.category;
        
        if (cat === "ยาสามัญ" || cat === "General Medicine") {
            trustBadgesHtml = `
                <div class="product-trust-badges">
                    <span class="trust-badge"><i class="fa-solid fa-prescription-bottle-medical"></i> ${currentLang === "th" ? "ผ่านมาตรฐาน อย." : "FDA Approved"}</span>
                    <span class="trust-badge"><i class="fa-solid fa-user-shield"></i> ${currentLang === "th" ? "เภสัชกรรับรอง" : "Pharmacist Certified"}</span>
                </div>
            `;
        } else if (cat === "อาหารเสริม" || cat === "Supplements") {
            trustBadgesHtml = `
                <div class="product-trust-badges">
                    <span class="trust-badge"><i class="fa-solid fa-shield-halved"></i> ${currentLang === "th" ? "ของแท้ 100%" : "100% Original"}</span>
                    <span class="trust-badge"><i class="fa-solid fa-leaf"></i> ${currentLang === "th" ? "สารสกัดธรรมชาติ" : "Natural Extract"}</span>
                </div>
            `;
        } else if (cat === "อุปกรณ์แพทย์" || cat === "Medical Supplies") {
            trustBadgesHtml = `
                <div class="product-trust-badges">
                    <span class="trust-badge"><i class="fa-solid fa-stethoscope"></i> ${currentLang === "th" ? "เครื่องมือการแพทย์" : "Medical Grade"}</span>
                    <span class="trust-badge"><i class="fa-solid fa-truck-fast"></i> ${currentLang === "th" ? "พร้อมส่งด่วน" : "Fast Shipping"}</span>
                </div>
            `;
        } else {
            trustBadgesHtml = `
                <div class="product-trust-badges">
                    <span class="trust-badge"><i class="fa-solid fa-dna"></i> ${currentLang === "th" ? "ผ่านการทดสอบคลินิก" : "Clinically Tested"}</span>
                    <span class="trust-badge"><i class="fa-solid fa-face-smile-wink"></i> ${currentLang === "th" ? "อ่อนโยนต่อผิว" : "Gentle on Skin"}</span>
                </div>
            `;
        }
        
        // Dynamic stock status indicators (Upgrade 4)
        let stockHtml = "";
        const isOutOfStock = product.stock <= 0;
        
        if (isOutOfStock) {
            stockHtml = `
                <div style="font-size: 0.72rem; color: var(--danger); font-weight: 600; margin-bottom: 8px; display: flex; align-items: center; gap: 4px;">
                    <i class="fa-solid fa-circle-xmark"></i> ${currentLang === "th" ? "สินค้าหมดคลังชั่วคราว" : "Temporarily Out of Stock"}
                </div>
            `;
        } else if (product.stock <= 5) {
            stockHtml = `
                <div style="font-size: 0.72rem; color: #d97706; font-weight: 600; margin-bottom: 8px; display: flex; align-items: center; gap: 4px; animation: pulse 1.5s infinite alternate;">
                    <i class="fa-solid fa-triangle-exclamation"></i> ${currentLang === "th" ? `เหลือเพียง ${product.stock} ชิ้นสุดท้าย!` : `Only ${product.stock} left in stock!`}
                </div>
            `;
        } else {
            stockHtml = `
                <div style="font-size: 0.72rem; color: var(--text-muted); margin-bottom: 8px; display: flex; align-items: center; gap: 4px;">
                    <i class="fa-solid fa-boxes-stacked"></i> ${currentLang === "th" ? `คงเหลือในคลัง: ${product.stock} ชิ้น` : `In Stock: ${product.stock} units`}
                </div>
            `;
        }

        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <span class="product-tag">${product.category}</span>
            <button class="wishlist-heart-btn ${isLiked ? 'liked' : ''}" onclick="toggleWishlist(event, ${product.id})">
                <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
            <div class="product-img-wrapper" onclick="openProductDetail(${product.id})">
                <img class="product-img" src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-body">
                <h3 class="product-title" onclick="openProductDetail(${product.id})">${product.name}</h3>
                <p class="product-desc">${product.shortDesc}</p>
                
                <!-- Clinical and logistical Trust Badges with Icons -->
                ${trustBadgesHtml}
                
                <!-- Dynamic Stock Level Indicators -->
                ${stockHtml}
                
                <div class="product-footer">
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})" ${isOutOfStock ? 'disabled style="background:var(--text-muted); cursor:not-allowed; box-shadow:none;"' : ''}>
                        <i class="fa-solid ${isOutOfStock ? 'fa-circle-xmark' : 'fa-cart-plus'}"></i> ${isOutOfStock ? (currentLang === "th" ? "สินค้าหมด" : "Out of Stock") : (currentLang === "th" ? "เพิ่มลงตะกร้า" : "Add to Cart")}
                    </button>
                </div>
                <!-- Compare Checkbox -->
                <div class="compare-checkbox-container" onclick="event.stopPropagation();">
                    <input type="checkbox" id="comp-chk-${product.id}" class="compare-checkbox" data-id="${product.id}" ${isCompared ? 'checked' : ''}>
                    <label for="comp-chk-${product.id}">${currentLang === "th" ? "เลือกเปรียบเทียบยา" : "Compare Medicine"}</label>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
    
    // Register Compare Checkboxes listeners dynamically
    document.querySelectorAll(".compare-checkbox").forEach(chk => {
        chk.addEventListener("change", (e) => {
            const pId = parseInt(e.target.getAttribute("data-id"));
            if (e.target.checked) {
                if (compareItems.length >= 3) {
                    showToast(currentLang === "th" ? "เปรียบเทียบได้สูงสุดครั้งละ 3 สินค้า!" : "Compare up to 3 products at a time!");
                    e.target.checked = false;
                    return;
                }
                compareItems.push(pId);
            } else {
                compareItems = compareItems.filter(id => id !== pId);
            }
            updateCompareUI();
        });
    });
}

// 1. Language Translation Switcher logic
function setupLanguageSwitch() {
    langToggleBtn.addEventListener("click", () => {
        currentLang = currentLang === "th" ? "en" : "th";
        langToggleBtn.textContent = dictionary[currentLang].langBtn;
        
        // Translate Static Texts
        document.getElementById("hero-badge-txt").innerHTML = `<i class="fa-solid fa-globe"></i> ` + dictionary[currentLang].heroBadge;
        document.getElementById("hero-title-txt").textContent = dictionary[currentLang].heroTitle;
        document.getElementById("hero-desc-txt").textContent = dictionary[currentLang].heroDesc;
        document.getElementById("products-heading").innerHTML = `<i class="fa-solid fa-star"></i> ` + dictionary[currentLang].productsHeading;
        document.getElementById("health-title").textContent = dictionary[currentLang].healthTitle;
        document.getElementById("health-desc").textContent = dictionary[currentLang].healthDesc;
        document.getElementById("chatbot-welcome-txt").textContent = dictionary[currentLang].chatbotWelcome;
        document.getElementById("chatbot-name-txt").textContent = dictionary[currentLang].chatbotName;
        
        // Switch Bilingual labels across the website elements
        document.querySelectorAll(".lang-text").forEach(el => {
            const th = el.getAttribute("data-th");
            const en = el.getAttribute("data-en");
            el.textContent = currentLang === "th" ? th : en;
        });
        
        // Switch placeholders dynamically
        document.querySelectorAll("[data-placeholder-th]").forEach(el => {
            const th = el.getAttribute("data-placeholder-th");
            const en = el.getAttribute("data-placeholder-en");
            el.setAttribute("placeholder", currentLang === "th" ? th : en);
        });
        
        // Translate Navbar Target Texts with respective clean official icons
        document.getElementById("nav-btn-home").innerHTML = `<i class="fa-solid fa-house-medical"></i> ` + (currentLang === "th" ? "หน้าหลัก" : "Home");
        document.getElementById("nav-btn-health").innerHTML = `<i class="fa-solid fa-heart-pulse"></i> ` + (currentLang === "th" ? "วิเคราะห์สุขภาพ" : "Health Advisor");
        document.getElementById("nav-btn-vaccine").innerHTML = `<i class="fa-solid fa-syringe"></i> ` + (currentLang === "th" ? "จองวัคซีน" : "Vaccine Hub");
        document.getElementById("nav-btn-dashboard").innerHTML = `<i class="fa-solid fa-gauge-high"></i> ` + (currentLang === "th" ? "แดชบอร์ด" : "Dashboard");
        document.getElementById("nav-btn-about").innerHTML = `<i class="fa-solid fa-circle-info"></i> ` + (currentLang === "th" ? "เกี่ยวกับเรา" : "About Us");
        document.getElementById("nav-btn-articles").innerHTML = `<i class="fa-solid fa-file-medical"></i> ` + (currentLang === "th" ? "บทความ" : "Articles");
        document.getElementById("nav-btn-contact").innerHTML = `<i class="fa-solid fa-envelope"></i> ` + (currentLang === "th" ? "ติดต่อเรา" : "Contact");
        
        // Categories Translate with clean official icons
        document.getElementById("tab-all").innerHTML = `<i class="fa-solid fa-border-all"></i> ` + (currentLang === "th" ? "ทั้งหมด" : "All");
        document.getElementById("tab-med").innerHTML = `<i class="fa-solid fa-capsules"></i> ` + (currentLang === "th" ? "ยาสามัญประจำบ้าน" : "General Medicine");
        document.getElementById("tab-supp").innerHTML = `<i class="fa-solid fa-prescription-bottle"></i> ` + (currentLang === "th" ? "วิตามินและอาหารเสริม" : "Supplements");
        document.getElementById("tab-equip").innerHTML = `<i class="fa-solid fa-stethoscope"></i> ` + (currentLang === "th" ? "อุปกรณ์การแพทย์" : "Medical Supplies");
        document.getElementById("tab-skin").innerHTML = `<i class="fa-solid fa-pump-medical"></i> ` + (currentLang === "th" ? "เวชสำอางและสกินแคร์" : "Dermo-Cosmetic");
        
        // Refresh products list rendering in English/Thai
        renderActiveProducts();
        updateCartUI();
        renderArticles();
    });
}

// 2. Dark/Light Theme Switcher Logic (Upgrade 11)
function setupThemeSwitch() {
    // Load local storage theme configuration
    const savedTheme = localStorage.getItem("pharma_theme");
    
    const applyTheme = (isDark) => {
        if (isDark) {
            document.body.classList.add("dark-mode");
            themeToggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        } else {
            document.body.classList.remove("dark-mode");
            themeToggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        }
    };
    
    if (savedTheme) {
        applyTheme(savedTheme === "dark");
    } else {
        // Auto system detection (Upgrade 11)
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        applyTheme(prefersDark);
    }
    
    // Listen to changes in system preferences in real-time (Upgrade 11)
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (!localStorage.getItem("pharma_theme")) {
            applyTheme(e.matches);
            showToast(currentLang === "th" ? "ปรับโหมดสีตามระบบ OS อัตโนมัติ" : "Synced theme with system preferences");
        }
    });
    
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("pharma_theme", isDark ? "dark" : "light");
        applyTheme(isDark);
        showToast(
            isDark 
                ? (currentLang === "th" ? "สลับเข้าสู่โหมดกลางคืนพรีเมียม 🌓" : "Switched to Premium Dark Mode 🌓")
                : (currentLang === "th" ? "สลับเข้าสู่โหมดกลางวันสว่างสะอาดตา ☀️" : "Switched to Clean Light Mode ☀️")
        );
    });
}

// 3. Product Comparison side-by-side modal logic
function setupCompareSystem() {
    triggerCompareBtn.addEventListener("click", () => {
        if (compareItems.length === 0) return;
        
        compareTableContent.innerHTML = "";
        const activeList = products[currentLang];
        const selected = activeList.filter(p => compareItems.includes(p.id));
        
        // Render comparison table headers
        let headers = `<th>คุณสมบัติ (Features)</th>`;
        selected.forEach(p => {
            headers += `<th style="text-align:center;"><img src="${p.image}" style="width:70px; height:70px; object-fit:cover; border-radius:8px; margin-bottom:8px; border: 1px solid var(--border);"><br>${p.name.split(' ')[0]}</th>`;
        });
        
        let rowPrice = `<td><strong>ราคา (Price)</strong></td>`;
        selected.forEach(p => rowPrice += `<td><strong style="color:var(--primary);">${p.price} บาท</strong></td>`);
        
        let rowCategory = `<td><strong>หมวดหมู่ (Category)</strong></td>`;
        selected.forEach(p => rowCategory += `<td>${p.category}</td>`);
        
        let rowDesc = `<td><strong>สรรพคุณ (Indication)</strong></td>`;
        selected.forEach(p => rowDesc += `<td style="font-size:0.75rem;">${p.shortDesc}</td>`);
        
        let rowCaution = `<td><strong style="color:var(--danger);">ข้อควรระวัง (Caution)</strong></td>`;
        selected.forEach(p => rowCaution += `<td style="font-size:0.75rem; color:#92400e;">${p.caution.split('：')[0]}</td>`);
        
        compareTableContent.innerHTML = `
            <thead><tr>${headers}</tr></thead>
            <tbody>
                <tr>${rowPrice}</tr>
                <tr>${rowCategory}</tr>
                <tr>${rowDesc}</tr>
                <tr>${rowCaution}</tr>
            </tbody>
        `;
        
        compareModal.classList.add("active");
        overlay.classList.add("active");
    });
    
    closeCompareModalBtn.addEventListener("click", () => {
        compareModal.classList.remove("active");
        overlay.classList.remove("active");
    });
}

function updateCompareUI() {
    compareCountBadge.textContent = compareItems.length;
    if (compareItems.length > 0) {
        triggerCompareBtn.style.display = "block";
    } else {
        triggerCompareBtn.style.display = "none";
    }
}

// 4. EHR Drug Allergy System check
function loadEhrFromStorage() {
    const saved = localStorage.getItem("pharma_ehr_allergies");
    if (saved) {
        try {
            const list = JSON.parse(saved);
            ehrAllergyChecks.forEach(chk => {
                if (list.includes(chk.value)) {
                    chk.checked = true;
                }
            });
            updateAllergyWarningUI();
        } catch(e) {}
    }
    
    ehrAllergyChecks.forEach(chk => {
        chk.addEventListener("change", () => {
            const allergies = [];
            ehrAllergyChecks.forEach(c => {
                if (c.checked) allergies.push(c.value);
            });
            localStorage.setItem("pharma_ehr_allergies", JSON.stringify(allergies));
            updateAllergyWarningUI();
            
            showToast(currentLang === "th" ? "บันทึกและปรับปรุงประวัติสุขภาพ EHR แล้ว" : "EHR Electronic Health Record Updated");
        });
    });
}

function updateAllergyWarningUI() {
    let hasAllergy = false;
    ehrAllergyChecks.forEach(c => {
        if (c.checked) hasAllergy = true;
    });
    
    if (hasAllergy) {
        allergyAlertContainer.style.display = "block";
    } else {
        allergyAlertContainer.style.display = "none";
    }
}

// Intercept Add to Cart to block allergic drug orders
function checkAllergyBeforeCart(productId) {
    const allergies = [];
    ehrAllergyChecks.forEach(c => {
        if (c.checked) allergies.push(c.value);
    });
    
    if (allergies.length === 0) return true; // Safe
    
    // Product ID 1 = Paracetamol
    if (productId === 1 && allergies.includes("พาราเซตามอล")) {
        triggerDrugAllergyAlert("พาราเซตามอล (Paracetamol)", "ระบบตรวจสอบสุขภาพ EHR ป้องกันการสั่งซื้อยาลดไข้พาราเซตามอลเนื่องจากประวัติบันทึกภูมิแพ้ของคุณ หากมีความจำเป็นโปรดปรึกษาแพทย์โดยเร่งด่วน");
        return false;
    }
    // Product ID 9 = Marine Collagen
    if (productId === 9 && allergies.includes("อาหารทะเล")) {
        triggerDrugAllergyAlert("คอลลาเจนสกัดจากปลาทะเล", "ระบบบล็อกการสั่งผลิตภัณฑ์คอลลาเจนปลาเนื่องจากประวัติระบุการแพ้อาหารทะเลอย่างรุนแรง เพื่อสุขอนามัยที่ดีของผิวพรรณ");
        return false;
    }
    // Product ID 10 = Sunscreen chemicals
    if (productId === 10 && allergies.includes("สารเคมีผิวบาง")) {
        triggerDrugAllergyAlert("สารระคายเคืองในครีมกันแดดเคมี", "ระบบป้องกันการสั่งครีมเนื่องจากผิวบอบบางพิเศษ สารเคมีกันแดดอาจทำให้เกิดการระคายเคืองสูง แนะนำปรึกษาแพทย์ผิวหนัง");
        return false;
    }
    
    return true; // Safe
}

function triggerDrugAllergyAlert(title, message) {
    // Open a special flashing allergy Warning modal popup
    const warnHtml = `
        <div style="padding: 40px; text-align: center; color: #991b1b; background:#fef2f2; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; border: 3px solid #ef4444; border-radius: var(--radius-lg);">
            <i class="fa-solid fa-triangle-exclamation" style="font-size: 4rem; color: #ef4444; margin-bottom: 20px; animation: bounce 0.6s infinite;"></i>
            <h2 style="font-weight:700; font-size:1.4rem; margin-bottom:12px;">แจ้งเตือนภูมิแพ้สารประกอบอันตราย!</h2>
            <h4 style="font-weight:600; font-size:1.05rem; margin-bottom:15px; background:white; padding:4px 14px; border-radius:20px; border:1px solid #fca5a5;">${title}</h4>
            <p style="font-size:0.88rem; color:#b91c1c; line-height:1.6; max-width:400px; margin-bottom:25px;">${message}</p>
            <button class="success-close-btn" onclick="closeModal()" style="background:#ef4444; width:100%; border:none;">ยกเลิกและปิดหน้าต่างความปลอดภัย</button>
        </div>
    `;
    
    modalContent.innerHTML = warnHtml;
    detailModal.classList.add("active");
    overlay.classList.add("active");
}

// 5. Symptom Checker selector triage logic
function setupSymptomSelector() {
    symptomSelector.addEventListener("click", (e) => {
        // Fix target element if clicking on the nested icon instead of button
        let target = e.target;
        if (target.tagName === "I") {
            target = target.parentElement;
        }
        
        if (target.classList.contains("symptom-chip")) {
            document.querySelectorAll(".symptom-chip").forEach(c => c.classList.remove("active"));
            target.classList.add("active");
            
            const symptomKey = target.getAttribute("data-symptom");
            renderDiagnosis(symptomKey);
        }
    });
}

function renderDiagnosis(key) {
    diagnosisResult.innerHTML = "";
    
    const thAdvices = {
        headache: {
            title: "กลุ่มอาการปวดศีรษะ เป็นไข้ตัวร้อน",
            desc: "แนะนำทานยาลดไข้ บรรเทาปวดพาราเซตามอล 500mg ครั้งละ 1 เม็ดเมื่อมีอาการ ห่างกัน 4-6 ชั่วโมง นอนหลับพักผ่อนเช็ดตัวด้วยน้ำอุณหภูมิปกติ",
            products: [1]
        },
        throat: {
            title: "กลุ่มอาการไอ ระคายคอ มีเสมหะสะสม",
            desc: "แนะนำทานยาน้ำขับเสมหะมะขามป้อมเพื่อละลายเสมหะ และอมยาอมสมุนไพรบ่อยๆ จิบน้ำอุ่นเพื่อถนอมเยื่อบุลำคอ หลีกเลี่ยงของมันของทอด",
            products: [3, 6]
        },
        eye: {
            title: "กลุ่มอาการตาแห้ง แสบเคืองตาจากการจ้องจอ",
            desc: "แนะนำหยอดน้ำตาเทียมปราศจากสารกันเสีย 1-2 หยดเพื่อดวงตาชุ่มชื้น พักสายตาทุกๆ 20 นาที และสวมแว่นกรองแสงถนอมสายตา",
            products: [8]
        },
        skin: {
            title: "กลุ่มอาการผิวหนังอักเสบ บอบบาง หรือแสบร้อนแดด",
            desc: "แนะนำทาเจลแอลกอฮอล์ล้างมือทำความสะอาดก่อนสัมผัสใบหน้า และใช้ครีมกันแดดสูตรอ่อนโยนสำหรับผิวแพ้ง่ายเพื่อป้องกันรังสีมลภาวะและรังสี UV ทำร้ายเซลล์ผิว",
            products: [4, 10]
        }
    };
    
    const enAdvices = {
        headache: {
            title: "Fever and Headache Symptoms",
            desc: "We advise Paracetamol 500mg (1 tablet every 4-6 hours when symptoms appear). Drink water, wipe skin down to cool core temperature, and rest.",
            products: [1]
        },
        throat: {
            title: "Cough and Sore Throat Symptoms",
            desc: "We suggest traditional Emblica Cough Syrup to soothe airways and clear mucus, combined with herbal lozenges. Avoid cold drinks.",
            products: [3, 6]
        },
        eye: {
            title: "Dry Eyes and Screen Eye Strains",
            desc: "Apply preservative-free lubricating drops (1-2 drops as needed). Practice the 20-20-20 rule to rest retina muscles.",
            products: [8]
        },
        skin: {
            title: "Sensitive Skin Burn or Irritated Outer Layer",
            desc: "Use high clinical SPF50+ sunscreen to shield skin from PM2.5 and UV radiation. Keep hands sanitized with mild alcohol gel.",
            products: [4, 10]
        }
    };
    
    const data = currentLang === "th" ? thAdvices[key] : enAdvices[key];
    if (!data) return;
    
    // Compile recommendations
    let prodCards = `<div style="display:grid; grid-template-columns:1fr; gap:12px; margin-top:15px;">`;
    const list = products[currentLang];
    
    data.products.forEach(pId => {
        const prod = list.find(p => p.id === pId);
        if (prod) {
            prodCards += `
                <div style="display:flex; align-items:center; gap:10px; background:var(--bg-card); border:1px solid var(--border); padding:10px; border-radius:8px;">
                    <img src="${prod.image}" style="width:40px; height:40px; object-fit:cover; border-radius:4px;">
                    <div style="flex-grow:1;">
                        <div style="font-weight:600; font-size:0.8rem; color:var(--text-primary); line-height:1.2;">${prod.name.split(' ')[0]}</div>
                        <div style="font-size:0.75rem; color:var(--primary); font-weight:600;">${prod.price} บาท</div>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${prod.id})" style="padding:4px 8px; font-size:0.7rem;"><i class="fa-solid fa-cart-plus"></i></button>
                </div>
            `;
        }
    });
    prodCards += `</div>`;
    
    diagnosisResult.innerHTML = `
        <h4 style="font-weight:700; color:var(--primary-dark); font-size:0.92rem;"><i class="fa-solid fa-stethoscope"></i> ${data.title}</h4>
        <p style="color:var(--text-secondary); margin-top:6px; font-size:0.8rem; line-height:1.5;">${data.desc}</p>
        <div style="font-weight:600; font-size:0.8rem; margin-top:10px; color:var(--text-primary);">${currentLang === "th" ? "ยาเวชภัณฑ์และวิตามินที่เภสัชกรแนะนำ:" : "Recommended Clinical Supplies:"}</div>
        ${prodCards}
    `;
    
    diagnosisResult.classList.add("active");
}

// 6. BMI Calculator & personalized dietary health advisor
function setupBmiCalculator() {
    bmiCalcForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const w = parseFloat(document.getElementById("bmi-weight").value);
        const h = parseFloat(document.getElementById("bmi-height").value) / 100;
        
        const bmi = w / (h * h);
        bmiValueEl.textContent = bmi.toFixed(1);
        
        let status = "";
        let fillWidth = 0;
        let advice = "";
        
        if (bmi < 18.5) {
            status = currentLang === "th" ? "น้ำหนักน้อยกว่าเกณฑ์ (Underweight)" : "Underweight Status";
            fillWidth = 25;
            advice = currentLang === "th" ? "คุณมีมวลร่างกายน้อยกว่าเกณฑ์ แนะนำเสริมสร้างด้วยกลุ่ม 'คอลลาเจนเปปไทด์เข้มข้นพรีเมียม' เพื่อเพิ่มความอุดมสมบูรณ์ของมวลผิวข้อต่อกระดูก ร่วมกับการรับประทานวิตามินรวมบำรุงประสาท" 
                                          : "Underweight. We recommend 'Premium Marine Collagen Peptide' to enrich bone joint structure and build lean muscle cells.";
        } else if (bmi >= 18.5 && bmi < 23.0) {
            status = currentLang === "th" ? "น้ำหนักปกติสุขภาพดี (Healthy)" : "Normal Healthy Weight";
            fillWidth = 50;
            advice = currentLang === "th" ? "ร่างกายของคุณสมส่วนดีเยี่ยม ควรดูแลรักษาสภาพภูมิคุ้มกันร่างกายให้คงที่ด้วย 'วิตามินซีเข้มข้น 1,000 มก.' วันละ 1 เม็ดหลังอาหารเช้าเพื่อป้องกันมลพิษฝุ่นควันและเชื้อโรคในอากาศ"
                                          : "Normal weight. Keep up the good work and maintain immune strength with 1 tablet of 'Premium Vitamin C 1000mg' daily.";
        } else if (bmi >= 23.0 && bmi < 25.0) {
            status = currentLang === "th" ? "น้ำหนักเริ่มเกินเกณฑ์ (Overweight Level 1)" : "Slightly Overweight";
            fillWidth = 70;
            advice = currentLang === "th" ? "ร่างกายเริ่มสะสมสารอาหารเกินเกณฑ์เล็กน้อย แนะนำเลือกทานผักสมุนไพรแก้หวัดชุ่มคอแทนขนมขบเคี้ยว และดื่มน้ำสะอาดล้างแผลสารพิษสะสมเป็นประจำ"
                                          : "Slightly Overweight. We advise eating healthy diets and cleansing body toxins with pure mineral water frequently.";
        } else {
            status = currentLang === "th" ? "น้ำหนักอยู่ในเกณฑ์อ้วน (Obese)" : "Obese Status";
            fillWidth = 95;
            advice = currentLang === "th" ? "น้ำหนักตัวอยู่ในเกณฑ์เป็นดัชนีอันตราย ควรออกกำลังกายสม่ำเสมอ แนะนำใช้ 'เจลล้างมือและหน้ากากอนามัยเกรดการแพทย์' เพื่อสู้ฝุ่นควันและป้องกันหวัดในระหว่างออกกำลังกายนอกบ้านค่ะ"
                                          : "Obese. Exercise regularly and protect your breathing with high quality 3-ply surgical masks during cardio training.";
        }
        
        bmiStatusEl.textContent = status;
        bmiBarEl.style.width = `${fillWidth}%`;
        bmiAdviseEl.textContent = advice;
        
        bmiResultPanel.classList.add("active");
    });
}

// 7. Vaccine booking E-Ticket appointment scheduler
let activeVaccineSelected = "";
let activeVaccinePrice = 0;

window.openVaccineBooking = function(name, price) {
    activeVaccineSelected = name;
    activeVaccinePrice = price;
    
    // Prefill date input to tomorrow's date for safety
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById("v-select-date").value = tomorrow.toISOString().split("T")[0];
    
    vaccineBookingModal.classList.add("active");
    overlay.classList.add("active");
};

function setupVaccineBooking() {
    closeVaccineModalBtn.addEventListener("click", () => {
        vaccineBookingModal.classList.remove("active");
        overlay.classList.remove("active");
    });
    
    vaccineBookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const custName = document.getElementById("v-cust-name").value;
        const branch = document.getElementById("v-select-branch").value;
        const rawDate = document.getElementById("v-select-date").value;
        const time = document.getElementById("v-select-time").value;
        
        // Generate E-Ticket fields
        document.getElementById("ticket-cust-name").textContent = custName;
        document.getElementById("ticket-vac-name").textContent = activeVaccineSelected;
        
        const d = new Date(rawDate);
        const formattedDate = `${d.getDate()} / ${d.getMonth()+1} / ${d.getFullYear()}`;
        document.getElementById("ticket-date").textContent = formattedDate;
        
        document.getElementById("ticket-time").textContent = time;
        document.getElementById("ticket-branch").textContent = branch;
        document.getElementById("ticket-id").textContent = `PCV-${Math.floor(1000 + Math.random() * 9000)}`;
        
        // Membership loyalty sync
        document.getElementById("ticket-tier-lbl").textContent = userTierBadge.textContent;
        
        // Close booking pane
        vaccineBookingModal.classList.remove("active");
        
        // Open E-Ticket popup panel
        ticketModal.classList.add("active");
        overlay.classList.add("active");
        
        // Trigger simulated booking Confetti celebration!
        triggerConfettiFireworks();
    });
    
    ticketCloseBtn.addEventListener("click", () => {
        ticketModal.classList.remove("active");
        overlay.classList.remove("active");
        
        // Return to Vaccine view main
        document.querySelector('.nav-link-btn[data-target="vaccine"]').click();
    });
}

// 8. Coupon discount check logic
function setupCheckoutCoupons() {
    applyPromoBtn.addEventListener("click", () => {
        const code = promoCodeInput.value.trim().toUpperCase();
        
        if (code === "HEALTH20") {
            activeDiscount = 0.20; // 20% discount
            promoStatusMsg.style.color = "var(--primary)";
            promoStatusMsg.textContent = currentLang === "th" ? "✓ ใช้โค้ดสำเร็จ! ลดราคาสั่งซื้อ 20%" : "✓ Promo applied! 20% discount granted.";
            showToast("ลดราคาคูปองสั่งซื้อ 20% สำเร็จ! 🏷️");
        } else if (code === "QUIZ10") {
            activeDiscount = 0.10; // 10% discount
            promoStatusMsg.style.color = "var(--primary)";
            promoStatusMsg.textContent = currentLang === "th" ? "✓ ใช้โค้ดสำเร็จ! ลดราคาสั่งซื้อ 10%" : "✓ Promo applied! 10% discount granted.";
            showToast("ลดราคาคูปองสั่งซื้อ 10% สำเร็จ! 🏷️");
        } else if (code === "WELCOME100") {
            activeDiscount = 100; // Flat 100 THB discount
            promoStatusMsg.style.color = "var(--primary)";
            promoStatusMsg.textContent = currentLang === "th" ? "✓ ใช้โค้ดสำเร็จ! ลดราคาสั่งซื้อ 100 บาท" : "✓ Promo applied! Flat 100 THB discount.";
            showToast("ลดราคาคูปองสั่งซื้อ 100 บาท สำเร็จ! 🏷️");
        } else {
            activeDiscount = 0;
            promoStatusMsg.style.color = "var(--danger)";
            promoStatusMsg.textContent = currentLang === "th" ? "✗ รหัสส่วนลดไม่ถูกต้อง ลองพิมพ์ HEALTH20 หรือ WELCOME100" : "✗ Invalid code. Try HEALTH20 or WELCOME100";
        }
        
        updateCartTotalWithDiscount();
    });
}

function updateCartTotalWithDiscount() {
    let subtotal = 0;
    cart.forEach(item => subtotal += item.price * item.quantity);
    
    const shipping = subtotal >= 500 ? 0 : 40;
    
    let discountVal = 0;
    if (activeDiscount > 0 && activeDiscount < 1) {
        discountVal = Math.round(subtotal * activeDiscount);
    } else if (activeDiscount >= 1) {
        discountVal = activeDiscount;
    }
    
    const finalTotal = Math.max(0, subtotal - discountVal + shipping);
    totalPriceEl.textContent = `${finalTotal.toLocaleString()} บาท`;
}

// 9. Loyalty Club Points & Levels status record
function loadLoyaltyFromStorage() {
    const savedPoints = localStorage.getItem("pharma_loyalty_points");
    if (savedPoints) {
        loyaltyPoints = parseInt(savedPoints);
    }
    updateLoyaltyUI();
}

function updateLoyaltyUI() {
    loyaltyPointsVal.textContent = loyaltyPoints.toLocaleString();
    
    // Levels tiers conditions
    let tier = "Bronze Member";
    let badgeClass = "bronze";
    
    if (loyaltyPoints >= 500 && loyaltyPoints < 1500) {
        tier = "Silver Member";
        badgeClass = "silver";
    } else if (loyaltyPoints >= 1500) {
        tier = "Gold Member 👑";
        badgeClass = "gold";
    }
    
    userTierBadge.textContent = tier;
    userTierBadge.className = `loyalty-badge ${badgeClass}`;
    
    // Save points
    localStorage.setItem("pharma_loyalty_points", loyaltyPoints.toString());
    
    // Upgrade 16: Dynamic progress bar calculation
    const progressDesc = document.getElementById("loyalty-progress-desc");
    const progressPct = document.getElementById("loyalty-progress-pct");
    const progressFill = document.getElementById("loyalty-progress-fill");
    
    if (progressDesc && progressPct && progressFill) {
        let pct = 0;
        let desc = "";
        
        if (loyaltyPoints < 500) {
            pct = Math.round((loyaltyPoints / 500) * 100);
            const needed = 500 - loyaltyPoints;
            desc = currentLang === "th" 
                ? `ต้องการอีก ${needed} คะแนนเพื่อเป็น Silver Member` 
                : `Need ${needed} more points for Silver Member`;
        } else if (loyaltyPoints < 1500) {
            pct = Math.round(((loyaltyPoints - 500) / 1000) * 100);
            const needed = 1500 - loyaltyPoints;
            desc = currentLang === "th" 
                ? `ต้องการอีก ${needed} คะแนนเพื่อเป็น Gold Member` 
                : `Need ${needed} more points for Gold Member`;
        } else {
            pct = 100;
            desc = currentLang === "th" 
                ? "คุณอยู่ในระดับสูงสุดจำลองแล้ว 🎉" 
                : "You have reached the maximum tier 🎉";
        }
        
        progressPct.textContent = `${pct}%`;
        progressFill.style.width = `${pct}%`;
        progressDesc.textContent = desc;
    }
}

// 10. Spending Expense Chart tracker & simulated delivery timelines
function setupCheckoutFlow() {
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            showToast("ไม่มีสินค้าในตะกร้าสินค้าสำหรับดำเนินรายการ!");
            return;
        }
        closeDrawer();
        
        // Reset coupons
        activeDiscount = 0;
        promoCodeInput.value = "";
        promoStatusMsg.textContent = "";
        
        checkoutModal.classList.add("active");
        overlay.classList.add("active");
    });
    
    // Shipping Address Form submission -> Receipt + Points + Confetti + timeline
    shippingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const custName = document.getElementById("cust-name").value;
        const custPhone = document.getElementById("cust-phone").value;
        const custAddress = document.getElementById("cust-address").value;
        
        // Hide checkout dialog
        checkoutModal.classList.remove("active");
        
        // Generate E-Receipt
        const orderId = `#PC-${Math.floor(100000 + Math.random() * 900000)}`;
        document.getElementById("receipt-order-id").textContent = orderId;
        
        const now = new Date();
        const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')} น.`;
        document.getElementById("receipt-date").textContent = formattedDate;
        
        document.getElementById("receipt-cust-name").textContent = custName;
        document.getElementById("receipt-pay-method").textContent = selectedPaymentMethod === "COD" 
            ? (currentLang === "th" ? "เก็บเงินปลายทาง (COD)" : "Cash on Delivery (COD)") 
            : (currentLang === "th" ? "สแกนพร้อมเพย์ (โอนสำเร็จ)" : "PromptPay QR (Success)");
        document.getElementById("receipt-address").textContent = custAddress;
        
        // Compile items list
        const receiptItemsList = document.getElementById("receipt-items-list");
        receiptItemsList.innerHTML = "";
        
        let subtotal = 0;
        cart.forEach(item => {
            subtotal += item.price * item.quantity;
            const line = document.createElement("div");
            line.className = "receipt-item-line";
            line.innerHTML = `
                <span>${item.name.split(' ')[0]} (x${item.quantity})</span>
                <span>${(item.price * item.quantity).toLocaleString()} บาท</span>
            `;
            receiptItemsList.appendChild(line);
        });
        
        const shipping = subtotal >= 500 ? 0 : 40;
        
        // Handle discounts on receipt
        let discountVal = 0;
        if (activeDiscount > 0 && activeDiscount < 1) {
            discountVal = Math.round(subtotal * activeDiscount);
        } else if (activeDiscount >= 1) {
            discountVal = activeDiscount;
        }
        
        const finalTotal = Math.max(0, subtotal - discountVal + shipping);
        
        if (discountVal > 0) {
            document.getElementById("receipt-discount-row").style.display = "flex";
            document.getElementById("receipt-discount").textContent = `-${discountVal.toLocaleString()} บาท`;
        } else {
            document.getElementById("receipt-discount-row").style.display = "none";
        }
        
        document.getElementById("receipt-shipping").textContent = shipping === 0 
            ? (currentLang === "th" ? "จัดส่งฟรี" : "Free Shipping") 
            : `${shipping} ${currentLang === "th" ? "บาท" : "THB"}`;
        document.getElementById("receipt-total").textContent = `${finalTotal.toLocaleString()} ${currentLang === "th" ? "บาท" : "THB"}`;
        
        // Generate shipping tracker
        const trackerId = `TH${Math.floor(100000000000 + Math.random() * 900000000000)}TH`;
        document.getElementById("receipt-track-num").textContent = trackerId;
        trackerIdTxt.textContent = trackerId;
        
        // Loyalty points earned: 10 THB = 1 point
        const pointsEarned = Math.round(finalTotal / 10);
        loyaltyPoints += pointsEarned;
        document.getElementById("receipt-points-earned").textContent = `+${pointsEarned.toLocaleString()} ${currentLang === "th" ? "แต้ม" : "Points"}`;
        updateLoyaltyUI();
        
        // Expense Chart tracker update
        monthlyExpense += finalTotal;
        expenseCurrentLbl.textContent = `${monthlyExpense.toLocaleString()} ${currentLang === "th" ? "บาท" : "THB"}`;
        // Limit max monthly budget display to 2000 THB to scale bar width
        const barWidth = Math.min(100, Math.round((monthlyExpense / 2000) * 100));
        expenseCurrentBar.style.width = `${barWidth}%`;
        
        // Setup Delivery steppers timelines
        stepOrderedTime.textContent = formattedDate;
        
        // Packed timeline: 1.5 seconds later
        setTimeout(() => {
            const packedTime = new Date();
            const timeStr = `${packedTime.getHours().toString().padStart(2,'0')}:${packedTime.getMinutes().toString().padStart(2,'0')} น.`;
            stepPackedTime.textContent = currentLang === "th" 
                ? `${timeStr} (เภสัชกรจัดส่งแล้ว)` 
                : `${timeStr} (Shipped by Pharmacist)`;
            document.getElementById("step-packed").classList.add("active");
        }, 3000);
        
        // Clear active cart
        cart = [];
        updateCartUI();
        saveCartToStorage();
        
        // Open receipt modal
        receiptModal.classList.add("active");
        overlay.classList.add("active");
        
        // Trigger simulated Checkout Confetti particle fireworks!
        triggerConfettiFireworks();
        playSound("success");
    });
    
    receiptCloseBtn.addEventListener("click", () => {
        receiptModal.classList.remove("active");
        overlay.classList.remove("active");
        
        // Redirect to Account Dashboard
        document.querySelector('.nav-link-btn[data-target="dashboard"]').click();
    });
}

// Visual Confetti Rain implementation
function triggerConfettiFireworks() {
    const colors = ["#f87171", "#fb923c", "#facc15", "#4ade80", "#60a5fa", "#c084fc", "#f472b6"];
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement("div");
        particle.className = "confetti-particle";
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Random locations
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `-20px`;
        
        // Random sizes
        const size = `${Math.floor(6 + Math.random() * 8)}px`;
        particle.style.width = size;
        particle.style.height = size;
        
        // Random falling durations
        particle.style.animationDuration = `${1.5 + Math.random() * 1.5}s`;
        
        document.body.appendChild(particle);
        
        // Clean up particles
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }
}

// Client Storage controllers
function loadCartFromStorage() {
    const saved = localStorage.getItem("pharma_cart");
    if (saved) {
        try {
            cart = JSON.parse(saved);
            updateCartUI();
        } catch (e) {
            cart = [];
        }
    }
}

// Product add to cart wrapper with drug allergy EHR intercept and active stock control
window.addToCart = function(productId) {
    const activeList = products[currentLang];
    const product = activeList.find(p => p.id === productId);
    if (!product) return;
    
    // Check stock first (Upgrade 4)
    if (product.stock <= 0) {
        showToast(currentLang === "th" ? "✗ ขออภัย สินค้านี้หมดคลังแล้ว" : "✗ Sorry, this product is out of stock.");
        return;
    }
    
    // Intercept checking
    const isSafe = checkAllergyBeforeCart(productId);
    if (!isSafe) return;
    
    // Decrement stock in both language databases to keep them fully synced
    Object.keys(products).forEach(lang => {
        const item = products[lang].find(p => p.id === productId);
        if (item) item.stock -= 1;
    });
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCartUI();
    saveCartToStorage();
    playSound("cart");
    showToast(currentLang === "th" ? `เพิ่ม "${product.name.split(' ')[0]}" ลงตะกร้าแล้ว!` : `Added "${product.name.split(' ')[0]}" to Cart!`);
    
    // Rerender active products grid to reflect stock reduction
    renderActiveProducts();
    
    cartCountBadge.style.animation = 'none';
    setTimeout(() => {
        cartCountBadge.style.animation = 'bounce 0.3s ease';
    }, 10);
};

window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCartToStorage();
};

window.changeQuantity = function(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
        saveCartToStorage();
    }
};

function updateCartUI() {
    cartItemsContainer.innerHTML = "";
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>${currentLang === "th" ? "ตะกร้าสินค้าว่างเปล่า" : "Your cart is empty."}</p>
            </div>
        `;
        cartCountBadge.textContent = "0";
        subtotalPriceEl.textContent = "0 บาท";
        shippingPriceEl.textContent = "0 บาท";
        totalPriceEl.textContent = "0 บาท";
        return;
    }
    
    let totalItems = 0;
    let subtotal = 0;
    
    cart.forEach(item => {
        totalItems += item.quantity;
        subtotal += item.price * item.quantity;
        
        const row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-controls">
                    <div class="quantity-control">
                        <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span class="qty-num">${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(row);
    });
    
    const shipping = subtotal >= 500 ? 0 : 40;
    const finalTotal = subtotal + shipping;
    
    cartCountBadge.textContent = totalItems;
    subtotalPriceEl.textContent = formatPrice(subtotal);
    shippingPriceEl.textContent = shipping === 0 
        ? (currentLang === "th" ? "ฟรีจัดส่ง" : "Free Shipping") 
        : formatPrice(shipping);
    totalPriceEl.textContent = formatPrice(finalTotal);
    
    // Manage cart reservation countdown banner (Upgrade 14)
    handleCartReservationTimer();
}

function saveCartToStorage() {
    localStorage.setItem("pharma_cart", JSON.stringify(cart));
}

// Wishlist Favorites Logic
window.toggleWishlist = function(event, productId) {
    event.stopPropagation();
    const activeList = products[currentLang];
    const product = activeList.find(p => p.id === productId);
    if (!product) return;
    
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast(currentLang === "th" ? `ลบ "${product.name.split(' ')[0]}" จากรายการโปรด` : `Removed "${product.name.split(' ')[0]}" from wishlist.`);
    } else {
        wishlist.push(productId);
        showToast(currentLang === "th" ? `เพิ่ม "${product.name.split(' ')[0]}" ในรายการโปรดแล้ว 🤍` : `Added "${product.name.split(' ')[0]}" to wishlist 🤍`);
    }
    
    saveWishlistToStorage();
    renderActiveProducts();
    renderWishlist();
};

function renderWishlist() {
    wishlistCountText.textContent = wishlist.length;
    wishlistGrid.innerHTML = "";
    
    if (wishlist.length === 0) {
        wishlistGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
                <i class="fa-regular fa-heart" style="font-size: 3.5rem; margin-bottom: 15px; color: var(--text-muted);"></i>
                <p style="font-size: 1.1rem; font-weight: 500;">${currentLang === "th" ? "ยังไม่มีรายการสินค้าโปรดของคุณ" : "Your wishlist is empty."}</p>
            </div>
        `;
        return;
    }
    
    const activeList = products[currentLang];
    const liked = activeList.filter(p => wishlist.includes(p.id));
    
    liked.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <span class="product-tag">${product.category}</span>
            <button class="wishlist-heart-btn liked" onclick="toggleWishlist(event, ${product.id})">
                <i class="fa-solid fa-heart"></i>
            </button>
            <div class="product-img-wrapper" onclick="openProductDetail(${product.id})">
                <img class="product-img" src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-body">
                <h3 class="product-title" onclick="openProductDetail(${product.id})">${product.name}</h3>
                <p class="product-desc">${product.shortDesc}</p>
                <div class="product-footer">
                    <div class="product-price">${product.price} <span>${currentLang === "th" ? "บาท" : "THB"}</span></div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fa-solid fa-cart-plus"></i> ${currentLang === "th" ? "เพิ่มลงตะกร้า" : "Add to Cart"}
                    </button>
                </div>
            </div>
        `;
        wishlistGrid.appendChild(card);
    });
}

function saveWishlistToStorage() {
    localStorage.setItem("pharma_wishlist", JSON.stringify(wishlist));
}

function loadWishlistFromStorage() {
    const saved = localStorage.getItem("pharma_wishlist");
    if (saved) {
        try {
            wishlist = JSON.parse(saved);
            wishlistCountText.textContent = wishlist.length;
        } catch(e) {
            wishlist = [];
        }
    }
}

// Product detail modal window
let currentActiveRating = 5;

window.openProductDetail = function(productId) {
    const activeList = products[currentLang];
    const product = activeList.find(p => p.id === productId);
    if (!product) return;
    
    currentActiveRating = 5;
    
    modalContent.innerHTML = `
        <div class="modal-img-container">
            <img class="modal-img" src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-body">
            <span class="modal-tag">${product.category}</span>
            <h3 class="modal-title">${product.name}</h3>
            <div class="modal-price">${product.price} <span style="font-size: 0.85rem; font-weight: 400; color: var(--text-secondary)">${currentLang === "th" ? "บาท" : "THB"}</span></div>
            
            ${generateRatingChartHTML(product)}
            
            <h4 class="modal-desc-title">${currentLang === "th" ? "รายละเอียดสินค้า" : "Product Details"}</h4>
            <p class="modal-desc">${product.fullDesc}</p>
            
            <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 15px;">
                <i class="fa-solid fa-prescription-bottle-medical"></i> ${product.spec}
            </p>
            
            <div class="modal-caution">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <p>${product.caution}</p>
            </div>
            
            <div class="modal-reviews-section">
                <h4 class="modal-desc-title" style="margin-bottom: 8px;">${currentLang === "th" ? "ความคิดเห็นและรีวิวผู้ใช้" : "User Reviews & Ratings"} (${product.reviews.length})</h4>
                <div class="reviews-list" id="modal-reviews-list">
                     <!-- Preloaded reviews -->
                </div>
                
                <div class="review-form">
                    <span style="font-size: 0.8rem; font-weight: 500; display:block; margin-bottom: 4px;">${currentLang === "th" ? "ให้คะแนนผลิตภัณฑ์ของคุณ:" : "Rate this Product:"}</span>
                    <div class="rating-select" id="rating-star-selector">
                        <i class="fa-solid fa-star selected" data-value="1"></i>
                        <i class="fa-solid fa-star selected" data-value="2"></i>
                        <i class="fa-solid fa-star selected" data-value="3"></i>
                        <i class="fa-solid fa-star selected" data-value="4"></i>
                        <i class="fa-solid fa-star selected" data-value="5"></i>
                    </div>
                    <div class="review-input-group">
                        <textarea id="review-comment-input" class="review-textarea" rows="2" placeholder="${currentLang === "th" ? "เขียนรีวิวของคุณ..." : "Write your review here..."}"></textarea>
                        <button class="submit-review-btn" onclick="submitUserReview(${product.id})">${currentLang === "th" ? "ส่งรีวิว" : "Submit Review"}</button>
                    </div>
                </div>
            </div>
            
            <div class="modal-footer" style="margin-top: 10px; display: flex; gap: 10px;">
                <button class="modal-btn" onclick="addToCart(${product.id}); closeModal();" style="flex-grow: 1;">
                    <i class="fa-solid fa-cart-plus"></i> ${currentLang === "th" ? "เพิ่มลงตะกร้า" : "Add to Cart"}
                </button>
                <button class="modal-btn" onclick="shareProductLink(${product.id})" style="background: rgba(14, 165, 233, 0.1); border: 1px solid var(--secondary); color: var(--secondary); width: auto; padding: 0 16px;">
                    <i class="fa-solid fa-share-nodes"></i> ${currentLang === "th" ? "แชร์สินค้า" : "Share"}
                </button>
            </div>
        </div>
    `;
    
    renderModalReviews(product);
    setupRatingStarListeners();
    
    detailModal.classList.add("active");
    overlay.classList.add("active");
};

function renderModalReviews(product) {
    const listContainer = document.getElementById("modal-reviews-list");
    listContainer.innerHTML = "";
    
    if (product.reviews.length === 0) {
        listContainer.innerHTML = `<p style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">${currentLang === "th" ? "ยังไม่มีรีวิวสำหรับสินค้าชิ้นนี้ มารีวิวคนแรกกันเถอะ!" : "No reviews yet. Be the first to review this product!"}</p>`;
        return;
    }
    
    product.reviews.forEach(rev => {
        let stars = "";
        for (let i = 1; i <= 5; i++) {
            stars += `<i class="${i <= rev.rating ? 'fa-solid' : 'fa-regular'} fa-star"></i>`;
        }
        
        const rDiv = document.createElement("div");
        rDiv.className = "review-item";
        rDiv.innerHTML = `
            <div class="review-header">
                <span class="review-author">${rev.author}</span>
                <span class="review-stars">${stars}</span>
            </div>
            <div class="review-comment">${rev.comment}</div>
        `;
        listContainer.appendChild(rDiv);
    });
}

function setupRatingStarListeners() {
    const stars = document.querySelectorAll("#rating-star-selector i");
    stars.forEach(star => {
        star.addEventListener("click", () => {
            const val = parseInt(star.getAttribute("data-value"));
            currentActiveRating = val;
            stars.forEach((s, idx) => {
                if (idx < val) {
                    s.classList.add("selected");
                    s.className = "fa-solid fa-star selected";
                } else {
                    s.classList.remove("selected");
                    s.className = "fa-regular fa-star";
                }
            });
        });
    });
}

window.submitUserReview = function(productId) {
    const activeList = products[currentLang];
    const product = activeList.find(p => p.id === productId);
    if (!product) return;
    
    const commentInput = document.getElementById("review-comment-input");
    const comment = commentInput.value.trim();
    
    if (comment === "") {
        showToast("กรุณาพิมพ์ข้อคิดเห็นรีวิวก่อนส่ง!");
        return;
    }
    
    product.reviews.unshift({
        author: "ลูกค้าใจดี (คุณ)",
        rating: currentActiveRating,
        comment: comment
    });
    
    renderModalReviews(product);
    commentInput.value = "";
    showToast("ส่งรีวิวสำเร็จ ขอบคุณสำหรับข้อคิดเห็นค่ะ! ⭐");
};

closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
    detailModal.classList.remove("active");
    if (!cartDrawer.classList.contains("open") && !checkoutModal.classList.contains("active") && !vaccineBookingModal.classList.contains("active") && !ticketModal.classList.contains("active") && !compareModal.classList.contains("active")) {
        overlay.classList.remove("active");
    }
}

// Render Health Article entries
function renderArticles() {
    const container = document.getElementById("articles-container");
    container.innerHTML = "";
    
    articles.forEach(article => {
        const title = currentLang === "th" ? article.title_th : article.title_en;
        const excerpt = currentLang === "th" ? article.excerpt_th : article.excerpt_en;
        
        const card = document.createElement("div");
        card.className = "article-card";
        card.innerHTML = `
            <img src="${article.image}" alt="${title}" class="article-img">
            <div class="article-body">
                <span class="article-date">${article.date}</span>
                <h3 class="article-title">${title}</h3>
                <p class="article-excerpt">${excerpt}</p>
                <button class="read-article-btn" onclick="openFullArticle(${article.id})">
                    ${currentLang === "th" ? "อ่านเพิ่มเติม" : "Read More"} <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Static Checkout steps config
let selectedPaymentMethod = "COD";
const payCodBox = document.getElementById("pay-cod");
const payQrBox = document.getElementById("pay-qr");
const promptpaySection = document.getElementById("promptpay-section");

payCodBox.addEventListener("click", () => {
    payCodBox.classList.add("selected");
    payQrBox.classList.remove("selected");
    promptpaySection.classList.remove("active");
    selectedPaymentMethod = "COD";
});

payQrBox.addEventListener("click", () => {
    payQrBox.classList.add("selected");
    payCodBox.classList.remove("selected");
    promptpaySection.classList.add("active");
    selectedPaymentMethod = "PROMPTPAY";
});

// Floating Smart Chatbot logic (Upgrade 12 - with chat history persistence)
let chatHistory = [];

function setupChatbot() {
    chatToggleBtn.addEventListener("click", () => {
        chatBox.classList.toggle("active");
        const dot = document.querySelector(".chat-btn-floating .badge-dot");
        if (dot) dot.style.display = "none";
    });
    
    chatCloseBtn.addEventListener("click", () => {
        chatBox.classList.remove("active");
    });
    
    // Load from LocalStorage
    const savedChat = localStorage.getItem("pharma_chat_history");
    if (savedChat) {
        try {
            chatHistory = JSON.parse(savedChat);
            chatMessages.innerHTML = ""; // Clear default welcome bubble
            chatHistory.forEach(msg => {
                const bubble = document.createElement("div");
                bubble.className = `chat-message-bubble ${msg.sender}`;
                bubble.innerHTML = msg.text;
                chatMessages.appendChild(bubble);
            });
            chatMessages.scrollTop = chatMessages.scrollHeight;
        } catch (e) {
            chatHistory = [];
        }
    } else {
        // Seed default welcome bubble in history
        chatHistory = [{ sender: "bot", text: dictionary[currentLang].chatbotWelcome }];
    }
    
    const sendMsg = () => {
        const text = chatInput.value.trim();
        if (text === "") return;
        
        appendChatBubble(text, "user");
        chatInput.value = "";
        
        // Automated responses
        setTimeout(() => {
            const reply = computeBotReply(text);
            appendChatBubble(reply, "bot");
        }, 700);
    };
    
    chatSendBtn.addEventListener("click", sendMsg);
    chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") sendMsg();
    });
}

function appendChatBubble(text, sender) {
    const bubble = document.createElement("div");
    bubble.className = `chat-message-bubble ${sender}`;
    bubble.innerHTML = text;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Save to history (Upgrade 12)
    chatHistory.push({ sender, text });
    localStorage.setItem("pharma_chat_history", JSON.stringify(chatHistory));
}

function computeBotReply(userInput) {
    const query = userInput.toLowerCase();
    
    if (currentLang === "th") {
        if (query.includes("พารา") || query.includes("แก้ปวด") || query.includes("เป็นไข้")) {
            return "<strong>ยาพาราเซตามอล 500mg</strong> ทานบรรเทาอาการปวดลดไข้ ครั้งละ 1 เม็ด ห่างกัน 4-6 ชั่วโมง ห้ามกินเกินวันละ 8 เม็ดนะคะ และห้ามกินร่วมกับแอลกอฮอล์เพื่อป้องกันตับเสียหายค่ะ 🩺";
        }
        if (query.includes("วิตามินซี") || query.includes("ภูมิคุ้มกัน")) {
            return "<strong>วิตามินซีเข้มข้น 1,000 มก.</strong> ช่วยเสริมภูมิคุ้มกันร่างกายให้แข็งแรง แนะนำทานวันละ 1 เม็ด หลังอาหารเช้าเพื่อลดกรดเกินในกระเพาะและส่งเสริมการดูดซึมค่ะ";
        }
        if (query.includes("ไอ") || query.includes("เจ็บคอ") || query.includes("ระคายคอ")) {
            return "แนะนำจิบ <strong>ยาน้ำแก้ไอสมุนไพรมะขามป้อม</strong> ร่วมกับอม <strong>ยาอมสมุนไพร</strong> บ่อยๆ เพื่อขับเสมหะและช่วยให้ลำคอชุ่มชื้นงดน้ำเย็นจัดค่ะ";
        }
        if (query.includes("จองวัคซีน") || query.includes("วัคซีน")) {
            return "คุณสามารถจองคิวฉีดวัคซีนเพื่อรับ E-Ticket นัดหมายล่วงหน้าได้ง่ายๆ โดยไปที่เมนู <strong>'จองวัคซีน'</strong> บนแถบเมนูบาร์ด้านบนได้เลยนะคะ มีทั้งวัคซีนไข้หวัดใหญ่และวัคซีน HPV 9 สายพันธุ์ค่ะ";
        }
        return "ขอบคุณสำหรับข้อคำถามค่ะ มีประเด็นสุขภาพหรือเรื่องการใช้ยาตัวไหน สอบถามปิยวรรณได้เลยนะคะ หรือสามารถเลือกซื้อยาสามัญประจำบ้านได้ที่หน้าหลักค่ะ 😊";
    } else {
        if (query.includes("paracetamol") || query.includes("pain") || query.includes("fever")) {
            return "<strong>Paracetamol 500mg</strong> is recommended for mild to moderate pain or fever. Take 1 tablet every 4-6 hours, not exceeding 8 tablets per day. Avoid alcohol! 🩺";
        }
        if (query.includes("vit c") || query.includes("vitamin c") || query.includes("immune")) {
            return "<strong>Premium Vitamin C 1,000mg</strong> boosts immune defense. We recommend taking 1 tablet daily after breakfast to facilitate cell absorption.";
        }
        if (query.includes("cough") || query.includes("throat") || query.includes("mucus")) {
            return "For cough and throat congestion, try our <strong>Herbal Lozenges</strong> combined with <strong>Emblica Cough Syrup</strong>. Keep hydrated with warm water!";
        }
        if (query.includes("vaccine") || query.includes("appointment")) {
            return "You can easily schedule a preventive vaccine shot and obtain your clinical E-Ticket by navigating to our <strong>'Vaccine Hub'</strong> navigation tab at the top!";
        }
        return "Thank you for consulting Piyawan. Let me know if you need medical directions, or proceed to shop clinical supplies on our Home tab! 😊";
    }
}

// Contact form message submit handler
function setupContactForm() {
    const contactForm = document.getElementById("contact-message-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("c-name").value;
        showToast(currentLang === "th" ? `✓ ส่งข้อความติดต่อของคุณ "${name}" สำเร็จแล้ว!` : `✓ Inquiry from "${name}" submitted!`);
        contactForm.reset();
    });
}

// Toast Notification
let toastTimeout;
function showToast(message) {
    clearTimeout(toastTimeout);
    toastMessage.textContent = message;
    toast.classList.add("show");
    
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// Upgrade 6: Simulated Pharmacist Live Video Call
let callTimerInterval;
let ringToneInterval;

function playRingingSound() {
    if (isMuted) return;
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);
        
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(440, ctx.currentTime);
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(480, ctx.currentTime);
        
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
        
        osc1.start();
        osc2.start();
        osc1.stop(ctx.currentTime + 1.5);
        osc2.stop(ctx.currentTime + 1.5);
    } catch(e) {}
}

function setupVideoCall() {
    const callBtn = document.getElementById("pharmacist-call-btn");
    const videoModal = document.getElementById("video-call-modal");
    const declineBtn = document.getElementById("decline-call-btn");
    const acceptBtn = document.getElementById("accept-call-btn");
    const muteBtn = document.getElementById("mute-call-btn");
    const endBtn = document.getElementById("end-call-btn");
    
    const ringingView = document.getElementById("video-ringing-view");
    const connectedView = document.getElementById("video-connected-view");
    const callTimerEl = document.getElementById("call-timer");
    
    if (!callBtn) return;
    
    callBtn.addEventListener("click", () => {
        // Play click sound
        playSound("click");
        
        // Open modal
        videoModal.style.display = "flex";
        ringingView.style.display = "flex";
        connectedView.style.display = "none";
        
        // Start Ringing Sounds
        playRingingSound();
        ringToneInterval = setInterval(playRingingSound, 3000);
    });
    
    const stopRinging = () => {
        if (ringToneInterval) {
            clearInterval(ringToneInterval);
            ringToneInterval = null;
        }
    };
    
    const closeCallModal = () => {
        stopRinging();
        if (callTimerInterval) {
            clearInterval(callTimerInterval);
            callTimerInterval = null;
        }
        videoModal.style.display = "none";
        playSound("click");
    };
    
    declineBtn.addEventListener("click", closeCallModal);
    endBtn.addEventListener("click", closeCallModal);
    
    acceptBtn.addEventListener("click", () => {
        stopRinging();
        playSound("success");
        
        ringingView.style.display = "none";
        connectedView.style.display = "flex";
        
        // Start Call Timer
        let seconds = 0;
        callTimerEl.textContent = "00:00";
        if (callTimerInterval) clearInterval(callTimerInterval);
        
        callTimerInterval = setInterval(() => {
            seconds++;
            const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
            const ss = String(seconds % 60).padStart(2, '0');
            callTimerEl.textContent = `${mm}:${ss}`;
            
            // Randomly simulate pharmacist advice messages in chat after some seconds
            if (seconds === 10) {
                appendChatBubble(
                    currentLang === "th" 
                        ? "📝 ใบสรุปคำปรึกษาผ่านวิดีโอคอล: เภสัชกรแนะนำให้ทานยาสามัญตามอาการ พักผ่อนเพิ่มขึ้น และดื่มน้ำอุ่นมากๆ นะคะ" 
                        : "📝 Video Consultation Summary: Pharmacist recommends general medicine according to symptoms, rest well, and drink plenty of warm water.", 
                    "bot"
                );
            }
        }, 1000);
    });
    
    let isMutedCall = false;
    muteBtn.addEventListener("click", () => {
        isMutedCall = !isMutedCall;
        const icon = muteBtn.querySelector("i");
        if (isMutedCall) {
            muteBtn.style.background = "var(--danger)";
            icon.className = "fa-solid fa-microphone-slash";
            showToast(currentLang === "th" ? "ปิดไมโครโฟนเรียบร้อย" : "Microphone Muted");
        } else {
            muteBtn.style.background = "rgba(255, 255, 255, 0.15)";
            icon.className = "fa-solid fa-microphone";
            showToast(currentLang === "th" ? "เปิดไมโครโฟนเรียบร้อย" : "Microphone Unmuted");
        }
    });
}

// Upgrade 7: Custom Prescription Upload Scanner
function setupPrescriptionScanner() {
    const dropzone = document.getElementById("prescription-dropzone");
    const fileInput = document.getElementById("prescription-file-input");
    const idleView = document.getElementById("scanner-idle-view");
    const loadingView = document.getElementById("scanner-loading-view");
    const progressBar = document.getElementById("scanner-progress-bar");
    
    if (!dropzone || !fileInput) return;
    
    dropzone.addEventListener("click", () => {
        fileInput.click();
    });
    
    fileInput.addEventListener("change", (e) => {
        if (e.target.files.length === 0) return;
        
        playSound("click");
        idleView.style.display = "none";
        loadingView.style.display = "flex";
        progressBar.style.width = "0%";
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += 5;
            progressBar.style.width = `${progress}%`;
            
            if (progress >= 100) {
                clearInterval(interval);
                
                // Simulate scan complete
                setTimeout(() => {
                    idleView.style.display = "block";
                    loadingView.style.display = "none";
                    fileInput.value = ""; // Reset file input
                    
                    playSound("success");
                    
                    // Add Paracetamol (ID 1) and Herbal Cough Syrup (ID 6)
                    addToCart(1);
                    addToCart(6);
                    
                    showToast(
                        currentLang === "th"
                            ? "✓ สแกนใบสั่งยาสำเร็จ! ระบบตรวจพบและเพิ่มยาสามัญลงในตะกร้าแล้ว"
                            : "✓ Prescription scanned! Identified & added medications to your cart."
                    );
                }, 300);
            }
        }, 100);
    });
}

// Upgrade 8: Real-Time Estimated Delivery Date Calculator
function setupDeliveryDateCalculator() {
    const provinceSelect = document.getElementById("cust-province");
    const estTxt = document.getElementById("est-delivery-date-txt");
    
    if (!provinceSelect || !estTxt) return;
    
    const calculateEstimate = () => {
        const val = provinceSelect.value;
        const now = new Date();
        
        let daysToAdd = 1;
        if (val === "bangkok") {
            daysToAdd = 1; // 1 day for Bangkok
        } else if (val === "central") {
            daysToAdd = 2; // 2 days
        } else {
            daysToAdd = 3; // 3 days for other regions
        }
        
        const estDate = new Date(now.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
        const day = estDate.getDate();
        const monthTh = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."][estDate.getMonth()];
        const monthEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][estDate.getMonth()];
        const yearTh = estDate.getFullYear() + 543;
        const yearEn = estDate.getFullYear();
        
        const thStr = `ภายใน ${day} ${monthTh} ${yearTh}`;
        const enStr = `by ${day} ${monthEn} ${yearEn}`;
        
        estTxt.innerHTML = currentLang === "th" ? `${thStr} (${daysToAdd} วัน)` : `${enStr} (${daysToAdd} Days)`;
        
        // Also update receipt E-invoice field if exists
        const receiptEst = document.getElementById("receipt-est-date");
        if (receiptEst) {
            receiptEst.textContent = currentLang === "th" ? thStr : enStr;
        }
    };
    
    provinceSelect.addEventListener("change", calculateEstimate);
    
    // Listen to language toggles to re-evaluate the text representation
    const langBtn = document.getElementById("lang-toggle-btn");
    if (langBtn) {
        langBtn.addEventListener("click", calculateEstimate);
    }
    
    calculateEstimate();
}

// Upgrade 9: Medication Pill Scheduler
let pillSchedules = [];
let lastSignaledMinStr = "";

function setupPillScheduler() {
    const form = document.getElementById("pill-scheduler-form");
    const container = document.getElementById("pill-list-container");
    
    if (!form || !container) return;
    
    // Load from LocalStorage
    const saved = localStorage.getItem("pharma_pill_schedules");
    if (saved) {
        try {
            pillSchedules = JSON.parse(saved);
        } catch (e) {
            pillSchedules = [];
        }
    }
    
    const renderPills = () => {
        container.innerHTML = "";
        if (pillSchedules.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 15px 0;">
                    <i class="fa-solid fa-hourglass-empty" style="margin-bottom: 5px;"></i><br>
                    <span class="lang-text" data-th="ไม่มีการนัดหมายทานยาในตาราง" data-en="No pill schedules configured.">ไม่มีการนัดหมายทานยาในตาราง</span>
                </div>
            `;
            return;
        }
        
        pillSchedules.forEach((pill, idx) => {
            const row = document.createElement("div");
            row.style.display = "flex";
            row.style.justify = "space-between";
            row.style.alignItems = "center";
            row.style.padding = "8px 12px";
            row.style.background = "var(--bg-card)";
            row.style.border = "1px solid var(--border)";
            row.style.borderRadius = "var(--radius-sm)";
            row.style.fontSize = "0.8rem";
            row.style.boxShadow = "var(--shadow-sm)";
            
            row.innerHTML = `
                <div style="display: flex; align-items: center; gap: 10px;">
                    <i class="fa-solid fa-pills" style="color: var(--primary); font-size: 1rem;"></i>
                    <div>
                        <strong style="color: var(--text-primary);">${pill.name}</strong>
                        <div style="color: var(--text-secondary); font-size: 0.72rem;">${pill.dose} | <i class="fa-regular fa-clock"></i> ${pill.time}</div>
                    </div>
                </div>
                <button class="action-btn" onclick="deletePill(${idx})" style="width: 28px; height: 28px; background: none; border: none; color: var(--danger); cursor: pointer; display: flex; justify-content: center; align-items: center; border-radius: 50%; font-size: 0.8rem; transition: var(--transition);" onmouseover="this.style.background='rgba(239, 68, 68, 0.1)'" onmouseout="this.style.background='none'">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            `;
            container.appendChild(row);
        });
    };
    
    // Global function to delete a pill
    window.deletePill = (index) => {
        pillSchedules.splice(index, 1);
        localStorage.setItem("pharma_pill_schedules", JSON.stringify(pillSchedules));
        renderPills();
        playSound("click");
        showToast(currentLang === "th" ? "ลบรายการเตือนทานยาเเล้ว" : "Removed pill alarm");
    };
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameInput = document.getElementById("sched-pill-name");
        const doseInput = document.getElementById("sched-pill-dose");
        const timeInput = document.getElementById("sched-pill-time");
        
        const newPill = {
            name: nameInput.value.trim(),
            dose: doseInput.value.trim(),
            time: timeInput.value
        };
        
        pillSchedules.push(newPill);
        localStorage.setItem("pharma_pill_schedules", JSON.stringify(pillSchedules));
        
        nameInput.value = "";
        doseInput.value = "";
        timeInput.value = "";
        
        renderPills();
        playSound("success");
        showToast(currentLang === "th" ? "✓ เพิ่มตารางเวลาเตือนทานยาเเล้ว" : "✓ Added pill alarm reminder");
    });
    
    // Background reminder checker interval
    setInterval(() => {
        const now = new Date();
        const curHH = String(now.getHours()).padStart(2, '0');
        const curMM = String(now.getMinutes()).padStart(2, '0');
        const curTimeStr = `${curHH}:${curMM}`;
        
        if (curTimeStr !== lastSignaledMinStr) {
            pillSchedules.forEach(p => {
                if (p.time === curTimeStr) {
                    lastSignaledMinStr = curTimeStr;
                    playSound("success");
                    
                    const msgTh = `🔔 ถึงเวลาทานยาของคุณเเล้ว: ${p.name} (${p.dose})`;
                    const msgEn = `🔔 Time to take your pill: ${p.name} (${p.dose})`;
                    
                    // Show a gorgeous alarm popup toast
                    showToast(currentLang === "th" ? msgTh : msgEn);
                    
                    // Push a simulated message to the pharmacist chat automatically
                    appendChatBubble(
                        currentLang === "th"
                            ? `🕒 แจ้งเตือนสุขภาพอัตโนมัติ: ได้เวลาทานยา <strong>${p.name} (${p.dose})</strong> ตามที่คุณกำหนดไว้ในตารางเวลาแล้วนะคะ อย่าลืมทานยาเพื่อสุขภาพที่เเข็งเเรงค่ะ 🩺`
                            : `🕒 Auto Health Alarm: Time to take your medication <strong>${p.name} (${p.dose})</strong> as configured in your schedule. Take care! 🩺`,
                        "bot"
                    );
                }
            });
        }
    }, 10000);
    
    renderPills();
}

// Upgrade 10: Interactive Health Quiz & Promo Rewards
let quizScores = { 1: 0, 2: 0, 3: 0 };

function setupHealthQuiz() {
    // Functions are exposed globally to facilitate html event handlers
    window.selectQuizOption = (step, score) => {
        playSound("click");
        quizScores[step] = score;
        
        const currentStepEl = document.getElementById(`quiz-step-${step}`);
        if (currentStepEl) currentStepEl.style.display = "none";
        
        if (step < 3) {
            const nextStepEl = document.getElementById(`quiz-step-${step + 1}`);
            if (nextStepEl) nextStepEl.style.display = "flex";
        } else {
            // Render results
            const totalScore = Math.round((quizScores[1] + quizScores[2] + quizScores[3]) / 3);
            const scoreLbl = document.getElementById("quiz-score-lbl");
            if (scoreLbl) {
                scoreLbl.innerHTML = currentLang === "th" 
                    ? `คะแนนสุขภาพประเมินเฉลยของคุณ: <strong style="color: var(--primary); font-size: 1.25rem;">${totalScore}/100 คะแนน</strong>`
                    : `Your evaluated health screening score: <strong style="color: var(--primary); font-size: 1.25rem;">${totalScore}/100 Points</strong>`;
            }
            
            const resultView = document.getElementById("quiz-result-view");
            if (resultView) resultView.style.display = "flex";
            playSound("success");
        }
    };
    
    window.copyQuizCoupon = () => {
        navigator.clipboard.writeText("QUIZ10").then(() => {
            playSound("click");
            showToast(currentLang === "th" ? "✓ คัดลอกโค้ดส่วนลด QUIZ10 ไปที่คลิปบอร์ดเเล้ว!" : "✓ Copied QUIZ10 promo code to clipboard!");
        });
    };
    
    window.resetHealthQuiz = () => {
        playSound("click");
        quizScores = { 1: 0, 2: 0, 3: 0 };
        
        document.getElementById("quiz-result-view").style.display = "none";
        document.getElementById("quiz-step-1").style.display = "flex";
        document.getElementById("quiz-step-2").style.display = "none";
        document.getElementById("quiz-step-3").style.display = "none";
    };
}

// Upgrade 13: Product Rating Review Stars Distribution Chart
function generateRatingChartHTML(product) {
    const reviews = product.reviews;
    let counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    
    // Seed standard base counts if reviews list is empty to keep UX gorgeous
    if (reviews.length === 0) {
        counts = { 5: 8, 4: 2, 3: 1, 2: 0, 1: 0 };
    } else {
        reviews.forEach(r => {
            const val = r.rating || 5;
            counts[val] = (counts[val] || 0) + 1;
        });
    }
    
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    const getPercent = (stars) => total > 0 ? Math.round((counts[stars] / total) * 100) : 0;
    
    let chartRows = "";
    for (let s = 5; s >= 1; s--) {
        const pct = getPercent(s);
        chartRows += `
            <div style="display: flex; align-items: center; gap: 8px; font-size: 0.72rem; margin-bottom: 4px; color: var(--text-secondary);">
                <span style="width: 40px; text-align: right; font-weight: 600;">${s} <i class="fa-solid fa-star" style="color: var(--accent); font-size: 0.65rem;"></i></span>
                <div style="flex-grow: 1; height: 6px; background: rgba(0,0,0,0.06); border-radius: 3px; overflow: hidden; border: 1px solid var(--border);">
                    <div style="width: ${pct}%; height: 100%; background: linear-gradient(90deg, var(--accent), var(--primary-light)); border-radius: 3px;"></div>
                </div>
                <span style="width: 30px; text-align: left; font-weight: 500;">${pct}%</span>
            </div>
        `;
    }
    
    return `
        <!-- Rating Distribution Chart (Upgrade 13) -->
        <div class="glass" style="display: flex; gap: 15px; align-items: center; padding: 15px; border-radius: var(--radius-md); margin: 15px 0; background: rgba(255,255,255,0.03);">
            <div style="text-align: center; min-width: 90px; border-right: 1px solid var(--border); padding-right: 15px;">
                <div style="font-size: 2rem; font-weight: 800; color: var(--text-primary); line-height: 1;">${product.rating.toFixed(1)}</div>
                <div style="color: var(--accent); font-size: 0.8rem; margin: 4px 0 2px;">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div style="font-size: 0.68rem; color: var(--text-muted);">${total} ${currentLang === "th" ? "รีวิวผู้ใช้" : "User reviews"}</div>
            </div>
            <div style="flex-grow: 1; display: flex; flex-direction: column;">
                ${chartRows}
            </div>
        </div>
    `;
}

// Upgrade 14: Dynamic Cart Reservation Expiration Timer
let cartTimerInterval;
let cartSecondsRemaining = 600;

function clearAndRestoreStock() {
    cart.forEach(item => {
        const id = item.id;
        const qty = item.quantity;
        // Restore stock
        Object.keys(products).forEach(lang => {
            const prod = products[lang].find(p => p.id === id);
            if (prod) prod.stock += qty;
        });
    });
    cart = [];
    saveCartToStorage();
    updateCartUI();
    renderActiveProducts();
}

function handleCartReservationTimer() {
    const banner = document.getElementById("cart-reservation-banner");
    const countEl = document.getElementById("cart-timer-countdown");
    
    if (!banner || !countEl) return;
    
    if (cart.length === 0) {
        // Clear interval if empty
        if (cartTimerInterval) {
            clearInterval(cartTimerInterval);
            cartTimerInterval = null;
        }
        banner.style.display = "none";
        cartSecondsRemaining = 600;
        return;
    }
    
    // Show banner
    banner.style.display = "flex";
    
    // If interval already running, do nothing
    if (cartTimerInterval) return;
    
    cartSecondsRemaining = 600; // Reset to 10 minutes on new items
    
    cartTimerInterval = setInterval(() => {
        cartSecondsRemaining--;
        
        const mm = String(Math.floor(cartSecondsRemaining / 60)).padStart(2, '0');
        const ss = String(cartSecondsRemaining % 60).padStart(2, '0');
        countEl.textContent = `${mm}:${ss}`;
        
        if (cartSecondsRemaining <= 0) {
            clearInterval(cartTimerInterval);
            cartTimerInterval = null;
            
            // Clear cart & restore stock
            clearAndRestoreStock();
            playSound("success");
            
            showToast(
                currentLang === "th"
                    ? "✗ หมดเวลาจองสินค้าในตะกร้า ตะกร้าสินค้าถูกรีเซ็ตเเล้ว"
                    : "✗ Cart reservation expired. Your cart has been reset."
            );
        }
    }, 1000);
}

// Upgrade 15: Social Share Product Button
window.shareProductLink = function(productId) {
    const activeList = products[currentLang];
    const product = activeList.find(p => p.id === productId);
    if (!product) return;
    
    // Copy fake URL to clipboard
    const cleanName = product.name.split(' ')[0].toLowerCase();
    const fakeUrl = `https://pharmacare.mock/product/${cleanName}`;
    
    navigator.clipboard.writeText(fakeUrl).then(() => {
        playSound("success");
        showToast(
            currentLang === "th"
                ? `✓ คัดลอกลิงก์ของ "${product.name.split(' ')[0]}" สำหรับแชร์เรียบร้อย!`
                : `✓ Copied "${product.name.split(' ')[0]}" link to clipboard for sharing!`
        );
    });
};
