/**
 * RABT (رَبْـط) - Shared Bilingual & Interactivity Engine 2026
 * Handles AR/EN localization, Dark/Light Theme persistence, and UI Interactivity.
 */

const translations = {
  ar: {
    // --- Navigation & Common ---
    "nav.brand": "رَبْـط",
    "nav.tagline": "أتمتة وتكامل التجارة الإلكترونية",
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات والحلول",
    "nav.about": "عن الشركة",
    "nav.pricing": "الأسعار والباقات",
    "nav.demo": "التجربة التفاعلية",
    "nav.contact": "تواصل معنا",
    "nav.getStarted": "ابدأ الآن مجاناً",

    // --- Footer ---
    "footer.desc": "المنصة العراقية الأولى المتخصصة في أتمتة الربط البرمجي بين المتاجر الإلكترونية، بوابات الدفع الإلكتروني (زين كاش، كي كارد) وأنظمة إدارة المخزون والتوصيل.",
    "footer.col1_title": "المنتجات والحلول",
    "footer.col1_link1": "تسوية زين كاش وكي كارد",
    "footer.col1_link2": "مزامنة المخزون والـ POS",
    "footer.col1_link3": "بوت الواتساب واللهجة العراقية",
    "footer.col1_link4": "أتمتة شركات التوصيل",
    "footer.col2_title": "الشركة والبيئة",
    "footer.col2_link1": "عن رَبْـط Baghdad",
    "footer.col2_link2": "معايير الأمان ISO",
    "footer.col2_link3": "مركز بغداد للبيانات",
    "footer.col2_link4": "الوظائف والانضمام",
    "footer.col3_title": "الدعم الفني",
    "footer.col3_link1": "وثائق الـ API والـ SDK",
    "footer.col3_link2": "حالة الخدمة (Uptime)",
    "footer.col3_link3": "مركز مساعدة التجار",
    "footer.col3_link4": "اتصل بالدعم",
    "footer.copyright": "© 2026 رَبْـط للتكنولوجيا والتكامل البرمجي ش.م.م - بغداد، العراق. جميع الحقوق محفوظة.",
    "footer.status": "جميع الأنظمة تعمل بكفاءة 99.99%",

    // --- Homepage (index.html) ---
    "page.title.index": "رَبْـط | أتمتة وتكامل أنظمة التجارة الإلكترونية كلياً - العراق 2026",
    "home.badge": "منصة الأتمتة المالية والتجارية الأولى في العراق 2026",
    "home.hero_title": "أتمتة وتكامل أنظمة التجارة الإلكترونية كلياً",
    "home.hero_subtitle": "ربط فوري ومباشر بين متجرك الإلكتروني، بوابات الدفع (زين كاش، كي كارد، ماستركارد)، وأنظمة إدارة المخزون ERP والتوصيل. دون أخطاء يدويّة وبسرعة تنفيذ خلال ملي ثوانٍ.",
    "home.hero_img_badge": "مركز بغداد للتشغيل المباشر",
    "home.hero_img_caption": "بنية تحتية برمجية متصلة بلحظة مع بوابات زين كاش، كي كارد، وأنظمة POS الكاشير في العراق.",
    "home.cta_primary": "تجربة المنصة الآن",
    "home.cta_secondary": "حجز جلسة استشارية",
    "home.status_badge": "● زمن الاستجابة: 12ms | نسبة التشغيل: 99.99%",
    
    "home.diag_title": "مخطط التدفق الآلي المباشر (معمارية رَبْـط)",
    "home.diag_status": "● خط المعالجة المباشر نشط",
    "home.diag_node1_title": "المتاجر ونقاط البيع",
    "home.diag_node1_desc": "سلة، زد، أودو، شوبيفاي أو تطبيقات خاصة",
    "home.tag_salla": "متاجر سلة",
    "home.tag_ziina": "متاجر زد",
    "home.tag_webhooks": "واجهات برمجية مخصصة",
    "home.diag_node2_title": "محرك رَبْـط الذكي",
    "home.diag_node2_desc": "معالجة فورية، أتمتة الدفع والتدقيق",
    "home.tag_aes": "تشفير AES-256",
    "home.tag_12ms": "مزامنة 12ms",
    "home.diag_node3_title": "البنوك والتوصيل",
    "home.diag_node3_desc": "زين كاش، كي كارد، وشركات التوصيل العراقية",
    "home.tag_zaincash": "زين كاش",
    "home.tag_qicard": "كي كارد",
    "home.tag_delivery": "أساطيل التوصيل",

    "home.metrics_1_val": "+5,000,000",
    "home.metrics_1_lbl": "معاملة مالية مؤتمتة",
    "home.metrics_2_val": "12ms",
    "home.metrics_2_lbl": "متوسط زمن معالجة الطلب",
    "home.metrics_3_val": "99.99%",
    "home.metrics_3_lbl": "استقرار الخدمة الجغرافي",
    "home.metrics_4_val": "صفر",
    "home.metrics_4_lbl": "أخطاء مطابقة الحسابات",

    "home.bento_badge": "لماذا تختار رَبْـط؟",
    "home.bento_title": "بنية تحتية مصممة خصيصاً للتجارة العراقية",
    "home.bento_card1_title": "مطابقة فورية للمبالغ والتحويلات",
    "home.bento_card1_desc": "لا حاجة للتحقق اليدوي من إشعارات زين كاش وكي كارد. يتولى النظام مطابقة كل دينار وتحديث حالة الطلب تلقائياً.",
    "home.bento_card1_how": "💡 كيف تعمل الخدمة تقنياً: يرتبط النظام عبر Webhook خاص ببوابة التاجر في زين كاش وكي كارد، ويتحقق تلقائياً من التوقيع الرقمي HMAC لكل معاملة، ثم يحدّث قاعدة بيانات المتجر إلى (تم الدفع) فوراً بدون أي تدخل بشري.",
    "home.bento_card2_how": "💡 كيف تعمل الخدمة تقنياً: يعتمد المحرك على بروتوكول WebSockets مزدوج الاتجاه ينقل أي حركة بيع من جهاز الكاشير (Odoo, SAP) إلى المتجر الإلكتروني خلال 12 ملي ثانية، مما يمنع ظاهرة البيع المزدوج نهائياً.",
    "home.bento_card3_how": "💡 كيف تعمل الخدمة تقنياً: يستخدم المحرك نموذج ذكاء اصطناعي محلي مُدرَّب على الخرائط والمصطلحات العراقية، ويرسل رسالة واتساب آلية للزبون لتحديد الدبوس الجغرافي وقرب العلامة المشهورة.",
    "home.bento_card4_how": "💡 كيف تعمل الخدمة تقنياً: يتصل النظام بـ REST APIs الخاصة بأساطيل التوصيل في بغداد والمحافظات، ليقوم بتوليد المانفيست المجمع وطباعة ملصق الشحن Barcode بنقرة واحدة.",

    "home.faq_badge": "الأسئلة الشائعة",
    "home.faq_title": "استفسارات واقعية قبل البدء في الأتمتة",
    "home.faq_q1": "كم يستغرق تركيب النظام وتفعيله لمتجري الإلكتروني؟",
    "home.faq_a1": "يستغرق تفعيل النظام للمتاجر القياسية (سلة، زد، ووكمرس) أقل من 24 ساعة عبر إضافات جاهزة. أما للمؤسسات التي تمتلك أنظمة ERP مخصصة مثل Odoo أو SAP، فيحتاج الربط من يومين إلى 4 أيام عمل بتنسيق مباشر من فريقنا في بغداد.",
    "home.faq_q2": "هل يحتاج الربط إلى خبرة تقنية أو مطور برمجيات من طرفي؟",
    "home.faq_a2": "لا إطلاقاً! فريق مهندسي رَبْـط في الجادرية يتولى الإعداد الكامل من الألف إلى الياء، مع تزويدك بلوحة تحكم بسيطة جداً وتدريب طاقم عملك مجاناً.",
    "home.faq_q3": "ماذا لو كان لدي متجر يعمل فعلياً ومبيعات يومية، هل يمكن النقل إليكم بدون توقف؟",
    "home.faq_a3": "نعم، نضمن لك انتقالاً سلساً 100% بدون أي انقطاع في الخدمة (Zero Downtime)، حيث نقوم باختبار قنوات الربط الموازية في بيئة تجريبية Sandbox ثم تحويل المبيعات للحية فور تأكيد استقرارها.",
    "home.faq_q4": "كيف يتأكد النظام من مطابقة الحسابات وعدم وجود إشعارات دفع مزيفة؟",
    "home.faq_a4": "يتصل محرك رَبْـط مباشرة بالخوادم الرسمية لـ زين كاش وكي كارد عبر تشفير AES-256 ومطابقة التوقيع الرقمي (HMAC Validation). يرفض النظام أي إشعار فوتوشوب أو لقطة شاشة مزيفة تلقائياً.",
    "home.faq_q5": "ماذا يحدث إذا انقطع اتصال الإنترنت في كاشير المحل الفيزيائي؟",
    "home.faq_a5": "يحتوي النظام على ذاكرة تخزين مؤقتة (Offline Queue Buffer). عند انقطاع الإنترنت، تُسجل المبيعات محلياً في الكاشير، وفور عودة التغطية تُرفع التعديلات للمتجر الإلكتروني تلقائياً خلال ملي ثوانٍ.",
    "home.faq_q6": "هل التجميع وتوليد بوليصة التوصيل يتوافق مع شركات التوصيل العراقية؟",
    "home.faq_a6": "نعم، محرك رَبْـط مرتبط برمجياً بأغلب أساطيل التوصيل العاملة في بغداد، أربيل، البصرة، وباقي المحافظات، ويصدر بوليصة الشحن مع الباركود الرسمي المعتمد لديهم.",
    "home.bento_c1_sub": "استجابة زين كاش الفورية",
    "home.bento_c1_status": "200 تم بنجاح (0.18ث)",
    "home.bento_card2_title": "مزامنة المخزون متعدد الفروع",
    "home.bento_card2_desc": "ربط برنامج الكاشير في محلّك مع متجرك الإلكتروني لمنع بيع المنتجات غير المتوفرة.",
    "home.c2_status_lbl": "مزامنة المخزون نشطة 100%",
    "home.c2_pos": "الكاشير (نقطة البيع)",
    "home.c2_pos_sub": "-1 قطعة مبيعة",
    "home.c2_arrow": "⚡ 12 ملي ثانية",
    "home.c2_store": "المتجر الإلكتروني",
    "home.c2_store_sub": "خصم فوري للمخزون",
    "home.bento_card3_title": "الذكاء الاصطناعي باللهجة العراقية",
    "home.bento_card3_desc": "تأكيد العناوين ورقم الهاتف عبر الواتساب والانستغرام تلقائياً قبل إرسال الشحنة لتقليل نسبة الراجع.",
    "home.c3_bot_sender": "🤖 بوت رَبْـط الذكي",
    "home.c3_msg1": "\"هلا بيك! نأكد شحنتك للجادرية قرب الجامع؟\"",
    "home.c3_msg2": "\"اي نعم بالضبط، شكراً إلكم!\"",
    "home.c3_loc": "📍 بغداد - الجادرية",
    "home.c3_status": "✔✔ تم التأكيد",
    "home.bento_card4_title": "تكامل مع كبرى شركات التوصيل",
    "home.bento_card4_desc": "إصدار المانفيست وطباعة بوليصة الشحن بنقرة واحدة عبر الربط المباشر مع أساطيل التوصيل.",
    "home.c4_manifest_title": "بوليصة الشحن رقم #IQ-99104",
    "home.c4_manifest_sub": "تأكيد تلقائي وطباعة مباشرة",
    "home.c4_status": "جاهز للشحن",
    "home.bento_c4_t1": "مركز توزيع بغداد",
    "home.bento_c4_t2": "فرع أربيل",
    "home.bento_c4_t3": "شحن البصرة السريع",

    "home.cta_banner_title": "جاهز لرفع كفاءة متجرك الإلكتروني في العراق؟",
    "home.cta_banner_subtitle": "انضم إلى المئات من التجار والمؤسسات التي تعتمد على رَبْـط لأتمتة عملياتها المالية والتنفيذية.",
    "home.cta_banner_btn1": "تواصل مع فريق المبيعات",
    "home.cta_banner_btn2": "جرب المحاكاة التفاعلية",

    // --- Services Page (services.html) ---
    "services.page_title": "الخدمات والحلول للتكامل البرمجي | رَبْـط",
    "services.hero_badge": "حلول متكاملة للمؤسسات والتجار",
    "services.hero_title": "خدمات الأتمتة والربط البرمجي الشامل",
    "services.hero_subtitle": "نظام موحد يستبدل العمل اليدوي الشاق بالحلول الذكية المباشرة، لتعزيز مبيعاتك وتقليل التكاليف التشغيلية.",
    // --- Services Deep Copy (AR) ---
    "services.s1_prob": "🔴 المشكلة التي تعاني منها: قضاء المحاسبين ساعات يومياً في مراجعة لقطات الشاشات وإشعارات زين كاش وكي كارد اليدوية، مما يؤدي إلى تأخير تجهيز الطلبات ومخاطر قبول تحويلات مزيفة بنفس رقم المعاملة.",
    "services.s1_sol": "🟢 كيف يحلها رَبْـط: نربط متجرك برمجياً بـ API البنوك والمحافظ مباشرة. يتلقى النظام إشعار Webhook المشفر بـ HMAC فور التحويل، ويفحص رقم المعاملة في الخادم الرسمي، ثم يغير حالة الطلب تلقائياً إلى (مقبول ومطابق) خلال 500ms.",
    "services.s1_res1": "توفير 100% من وقت التدقيق اليدوي للمحاسبين.",
    "services.s1_res2": "تأكيد فوري مسبق قبل تسليم البضائع للمندوب.",
    "services.s1_res3": "حماية كاملة ضد الإشعارات المزيفة أو صور الفوتوشوب.",
    "services.s1_res4": "كشوفات حساب مجمعة بصيغة Excel لسهولة المطابقة المالية.",

    "services.s2_prob": "🔴 المشكلة التي تعاني منها: بيع منتج عبر المتجر الإلكتروني اكتشفت لاحقاً أنه بيع بالفعل قبل دقائق لكاستمر في المحل الفيزيائي، مما يسبب إحراجاً مع الزبون وإرجاع مبالغ التحويلات.",
    "services.s2_sol": "🟢 كيف يحلها رَبْـط: نشئ قناة اتصال WebSockets مستمرة بين برنامج الكاشير (Odoo, SAP, QuickBooks) وقاعدة بيانات المتجر. بمجرد قراءة الـ Barcode في المحل، يتحدث الرصيد في المتجر أونلاين فوراً بـ 12ms.",
    "services.s2_res1": "القضاء النهائي على مشكلة نفاد المخزون غير المتوقع.",
    "services.s2_res2": "ربط أكثر من 10 فروع محلية بمتجر أونلاين واحد.",
    "services.s2_res3": "تحديث تلقائي للأسعار والتخفيضات بكل القنوات بنقرة واحدة.",
    "services.s2_res4": "تنبيهات المبكر قبل نفاذ القطع الأكثر طلباً.",

    "services.s3_prob": "🔴 المشكلة التي تعاني منها: العناوين غير الدقيقة بالرسائل (مثل: قرب المحل الفلاني) وضياع مناديب التوصيل في بغداد والمحافظات، مما ينتهي بإرجاع الشحنة وتحمل المتجر تكلفة الشحن المزدوج.",
    "services.s3_sol": "🟢 كيف يحلها رَبْـط: ندمج بوت ذكي عبر الواتساب والانستغرام يفهم المصطلحات العراقية. يتواصل البوت تلقائياً فور الطلب ويطلب من الزبون إرسال الـ Pin الجغرافي وقرب نقطة دالة، ثم يصدر خطة التوصيل للمندوب.",
    "services.s3_res1": "تقليل نسبة الشحنات المرجعة (الراجع) بنسبة 40%.",
    "services.s3_res2": "تحديد الإحداثيات الجغرافية دقيقة للمندوب.",
    "services.s3_res3": "خدمة الزبائن التلقائية 24/7 دون الحاجة لموظفين إضافيين.",
    "services.s3_res4": "زيادة تقييم رضا الزبائن وسرعة الاستجابة.",

    "services.s4_prob": "🔴 المشكلة التي تعاني منها: كتابة المانفيست وطباعة بوليصات التوصيل يدوياً لكل طلب على حدة، وتأخير تسليم الشحنات لشركات الشحن حتى ساعات التأخير.",
    "services.s4_sol": "🟢 كيف يحلها رَبْـط: يتصل محركنا بـ API شركات التوصيل العراقية كافة. ينشئ النظام بوليصة الشحن مع الباركود الرسمي تلقائياً بنقرة واحدة، ويطبّع المانفيست المجمع جاهزاً للتسليم.",
    "services.s4_res1": "إصدار مئات بوليصات الشحن بنقرة زر واحدة.",
    "services.s4_res2": "تتبع آلي لحالة الشحنات من (قيد التوصيل) إلى (تم التسليم).",
    "services.s4_res3": "تقليل أخطاء إدخال أرقام الهواتف وأسماء الزبائن إلى صفر.",
    "services.s4_res4": "تسريع خروج المندوب بالبضاعة في نفس اليوم.",
    "services.code_title": "تحقق فوري عبر ZainCash API",
    "services.code_badge": "إشعار نشط (Webhook)",
    "services.pos_store_title": "فرع الجادرية (POS المحل)",
    "services.pos_store_desc": "خصم قطعتين من منتج #SKU-4912",
    "services.pos_badge": "خصم تلقائي",
    "services.sync_arrow": "⬇️ مزامنة لحظية عبر RABT (12ms) ⬇️",
    "services.ecom_title": "المتجر الإلكتروني (سلة / زد / Web)",
    "services.ecom_desc": "تحديث الرصيد المتوفر إلى 8 قطع",
    "services.ecom_badge": "متزامن 100%",
    "services.chat_m1": "🤖 هلا بيك علي! طلبك رقم #9910 جاهز. تدلل العنوان بغداد - الجادرية قرب المستشفى؟",
    "services.chat_m2": "👤 اي نعم بالظبط مقابل جامع الجامعة.",
    "services.chat_m3": "✅ تمام عيني! انتمتت الشحنة وانطبعت البوليصة لمندوب التوصيل المباشر.",
    
    "services.s1_title": "1. المطابقة المالية الذكية وبوابات الدفع",
    "services.s1_desc": "ربط برمجيات المبيعات ببوابات المحافظ الإلكترونية العراقية ZainCash و QiCard والبطاقات المصرفية مع خدمة التسوية الفورية.",
    "services.s1_feat1": "تحقق فوري من الحوالة خلال 500 ملي ثانية.",
    "services.s1_feat2": "كشوفات حساب مؤتمتة ومطابقة يومية دقيقة.",
    "services.s1_feat3": "حماية كاملة من الاحتيال والإشعارات المزيفة.",

    "services.s2_title": "2. مزامنة الـ POS والـ ERP في الوقت الفعلي",
    "services.s2_desc": "ربط نظام الإدارة والمخازن (Odoo, SAP, QuickBooks) ونقاط البيع المحلية مع متجرك الإلكتروني بكفاءة متناهية.",
    "services.s2_feat1": "خصم المخزون التلقائي من المحل والجريد الإلكتروني.",
    "services.s2_feat2": "تحديث الأسعار والعروض في جميع المنصات بلحظة واحدة.",
    "services.s2_feat3": "تنبيهات انخفاض المخزون للقطع الأكثر مبيعاً.",

    "services.s3_title": "3. شات بوت الذكاء الاصطناعي باللهجة العراقية",
    "services.s3_desc": "مساعد افتراضي مدرب على فهم المصطلحات والعناوين العراقية (مثل: البياع، الجادرية، حي الجامعة، مقابل جامع...) لتأكيد الشحنات.",
    "services.s3_feat1": "تأكيد الموقع الدقيق وتحديد نقاط العلامة الجغرافية.",
    "services.s3_feat2": "تقليل نسبة البضائع المرجعة بنسبة تصل إلى 40%.",
    "services.s3_feat3": "إعادة استهداف الزبائن ومتابعة الشحنات الآلية.",

    "services.s4_title": "4. أتمتة شركات التوصيل والمانفيست",
    "services.s4_desc": "إصدار بوليصات الشحن والمانفيست بنقرة واحدة عبر الربط المباشر مع أساطيل التوصيل العراقية.",
    "services.s4_feat1": "طباعة تلقائية للعلامات وبوليصة الشحن بنقرة واحدة.",
    "services.s4_feat2": "تتبع الجغرافيا الحي لشحنات التجار والزبائن.",
    "services.s4_feat3": "إحصائيات دقيقة لنسب التسليم وتخفيض الراجع.",
    "services.modal_btn": "طلب ربط الخدمة الآن",
    "services.modal_close": "إغلاق",

    // --- About Page (about.html) ---
    "about.page_title": "عن رَبْـط | الرؤية والمعايير البرمجية",
    "about.hero_badge": "الهندسة والموثوقية العراقية",
    "about.hero_title": "نبني البنية التحتية لمستقبل التجارة الرقمية في العراق",
    "about.hero_subtitle": "تأسست رَبْـط في بغداد بأيدي مهندسين عراقيين متخصصين في الأنظمة عالية الاعتمادية، لتزويد السوق المحلي ببرمجيات تضاهي المعايير العالمية.",
    // --- About Story & Values (AR) ---
    "about.story_badge": "قصة التأسيس",
    "about.story_title": "من تحديات السوق المحلي إلى بنية تحتية رقمية متكاملة",
    "about.story_p1": "تأسست منصة رَبْـط عام 2024 في بغداد بعد أن لاحظ مهندسو الشركة الفجوة الكبيرة بين نمو التجارة الإلكترونية السريع في العراق وبين الحلول اليدوية البدائية المستعملة في إدارة المبيعات والتحويلات المالية.",
    "about.story_p2": "كان التجار والمؤسسات يعانون يومياً من ضياع الساعات في مطابقة تحويلات زين كاش وكي كارد اليدوية، والتخبط في متابعة رصيد المخزون بين المحل الفيزيائي والمتجر الإلكتروني، فضلاً عن ضياع المناديب بسبب العناوين غير الدقيقة بالرسائل. من هنا انطلقت رَبْـط لبناء بنية تحتية برمجية موحدة مصممة خصيصاً لتحديات السوق العراقي، تمنح التاجر أتمتة كاملة 100% تمكنه من التركيز على زيادة مبيعاته وتوسيع نشاطه دون الغرق في الروتين التشغيلي.",

    "about.values_badge": "مبادئنا وهويتنا",
    "about.values_title": "القيم الأساسية التي تقود عملنا اليومي",
    "about.v1_title": "الشفافية المطلقة في التسعير",
    "about.v1_desc": "لا توجد رسوم خفية أو نفقات غير معلنة. باقات اشتراك ثابتة تناسب حجم نشاطك التجار دون أي اقتطاعات فجائية من أرباحك.",
    "about.v2_title": "الدعم الفني المحلي المباشر",
    "about.v2_desc": "فريقنا البرمجي متواجد فعلياً في الجادرية ببغداد، ويقدم الدعم الفني المباشر عبر الهاتف والواتساب دون المرور بردود آلية جامدة.",
    "about.v3_title": "الالتزام بالقوانين العراقية",
    "about.v3_desc": "بنية تحتية متوافقة بالكامل مع تعليمات البنك المركزي العراقي ومعايير أمن المعلومات السيبرانية لحماية بيانات التجار والمستهلكين.",
    "about.v4_title": "الهندسة عالية الاعتمادية",
    "about.v4_desc": "نستضيف الخوادم بمعايير عالمية تضمن استمرارية الخدمة بنسبة 99.99% حتى أثناء فترات التخفيضات الكبرى وموسم الأعياد.",
    "about.team_img_badge": "فريق رَبْـط البرمجي في بغداد",
    "about.team_img_caption": "عقول عراقية متميزة تبني وتطور محرك الربط المباشر في المجمع التكنولوجي بالجادرية.",
    
    "about.val1_title": "مركز بيانات في قلب بغداد",
    "about.val1_desc": "خوادم محلية فائقة السرعة تضمن أدنى استجابة (Latency) لاتصالات البنوك والشبكات الوطنية.",
    "about.val2_title": "أمان بدرجة البنوك",
    "about.val2_desc": "تشفير AES-256 وامتثال كامل لمعايير الأمن السيبراني لحماية بيانات التجار والمستهلكين.",
    "about.val3_title": "استمرارية 99.99%",
    "about.val3_desc": "بنية تحتية موزعّة تضمن عدم انقطاع الخدمة حتى خلال أوقات الذروة والمواسم التسوقية.",
    "about.val4_title": "دعم فني برمجيات محلي",
    "about.val4_desc": "فريق مهندسين موجود في الجادرية تقديم الدعم والمساعدة المباشرة على مدار الساعة.",

    "about.hq_badge": "مقرنا الرئيسي في بغداد",
    "about.hq_title": "الجادرية - المجمع التكنولوجي",
    "about.hq_desc": "نحن نعمل بالقرب من أرقى المؤسسات الأكاديمية والبحثية في بغداد. نوفر بيئة عمل هندسية تجذب أفضل العقول البرمجية العراقية لبناء حلول وطنية مستقلة ومستدامة.",
    "about.hq_btn": "زيارة مقر الشركة أو التواصل",
    "about.standards_title": "معايير السلامة والجودة البرمجية",
    "about.std1": "شهادة الأمن السيبراني وتشفير الاتصالات SSL/TLS 1.3",
    "about.std2": "امتثال تام مع معايير البنك المركزي العراقي (CBI Guidelines)",
    "about.std3": "نسخ احتياطي فوري وموزع جغرافي كل 60 ثانية",
    "about.timeline_badge": "مسيرة الابتكار",
    "about.timeline_title": "تطور معمارية رَبْـط في العراق",
    "about.datacenter_badge": "مراقبة الأنظمة الحيّة",
    "about.datacenter_title": "مركز شبكة بيانات بغداد والجادرية",

    // --- Pricing Page (pricing.html) ---
    "pricing.hero_badge": "خطط وتكاليف شفافة",
    "pricing.hero_title": "باقات تناسب جميع أحجام الأعمال",
    "pricing.hero_subtitle": "ابدأ بأتمتة متجرك اليوم اختر الخطة المناسبة لنشاطك التجاري دون مصاريف خفية.",
    "pricing.monthly": "دفعة شهرية",
    "pricing.annual": "دفعة سنوية (خصم 20%)",
    "pricing.period": "شهرياً / تُدفع بحسب الاختيار",

    "pricing.p1_name": "باقة المتاجر الناشئة",
    "pricing.p1_desc": "مثالية للمتاجر الصغرى التي تبدأ أتمتة الدفع الشائع والتوصيل.",
    "pricing.p1_price": "49",
    "pricing.p1_f1": "حتى 500 عملية مؤتمتة شهرياً",
    "pricing.p1_f2": "ربط زين كاش أو كي كارد",
    "pricing.p1_f3": "مزامنة مخزون متجر واحد",
    "pricing.p1_f4": "دعم عبر البريد والواتساب",
    "pricing.p1_cta": "اختر الباقة الناشئة",

    "pricing.p2_badge": "الأكثر شعبية ونمواً",
    "pricing.p2_name": "باقة النمو المتكاملة",
    "pricing.p2_desc": "للحركات التجارية المتنامية والمتاجر متعددة الفروع.",
    "pricing.p2_price": "129",
    "pricing.p2_f1": "حتى 5,000 عملية مؤتمتة شهرياً",
    "pricing.p2_f2": "جميع بوابات الدفع (زين كاش، كي كارد، ماستر)",
    "pricing.p2_f3": "مزامنة POS + ERP متقدمة",
    "pricing.p2_f4": "شات بوت تأكيد العناوين بالعراقي",
    "pricing.p2_f5": "دعم هاتف ذو أولوية 24/7",
    "pricing.p2_cta": "جرب باقة النمو مجاناً",

    "pricing.p3_name": "باقة المؤسسات والشركات",
    "pricing.p3_desc": "سعة لا محدودة مع بنية تحتية مخصصة ومطابقة حسابات معقدة.",
    "pricing.p3_price": "299",
    "pricing.p3_f1": "عمليات لا محدودة شهرياً",
    "pricing.p3_f2": "خادم مخصص وقنوات API خاصة",
    "pricing.p3_f3": "تكامل مخصص مع أنظمة SAP / Oracle",
    "pricing.p3_f4": "مدير حسابات فني خاص في بغداد",
    "pricing.p3_cta": "تواصل مع قسم المبيعات",

    "pricing.matrix_h1": "الميزة / الخاصيّة البرمجيّة",
    "pricing.matrix_h2": "الناشئة ($49)",
    "pricing.matrix_h3": "النمو ($129)",
    "pricing.matrix_h4": "المؤسسات ($299)",
    "pricing.matrix_r1_f": "سرعة التحقق الفوري (ZainCash & QiCard)",
    "pricing.matrix_r1_c1": "500ms (تحقق فوري عبر Webhook)",
    "pricing.matrix_r1_c2": "200ms (أولوية معالجة في الخادم)",
    "pricing.matrix_r1_c3": "12ms (عقدة خادم مخصصة بغداد)",
    "pricing.matrix_r2_f": "مزامنة نقاط البيع اليدوية POS",
    "pricing.matrix_r2_c1": "فرع واحد",
    "pricing.matrix_r2_c2": "حتى 5 فروع",
    "pricing.matrix_r2_c3": "فروع لا محدودة",
    "pricing.matrix_r3_f": "شات بوت العناوين العراقي (WhatsApp)",
    "pricing.matrix_r3_c1": "غير مشمول",
    "pricing.matrix_r3_c2": "مشمول 1,000 محادثة",
    "pricing.matrix_r3_c3": "محادثات لا محدودة",
    "pricing.matrix_r4_f": "اتفاقية مستوى الخدمة SLA",

    "pricing.faq_badge": "الأسئلة الشائعة",
    "pricing.faq_title": "إجابات على استفساراتك الفنية والتجارية",
    "pricing.faq_q1": "هل يتطلب الربط تعديل كود متجري الإلكتروني الحالي؟",
    "pricing.faq_a1": "لا، نوفر إضافات برمجية جاهزة (Plugins / SDKs) لمنصات سلة، زد، Odoo، ووكمرس، كما نوفر RESTful APIs سهلة الدمج لأي تطبيق مخصص.",
    "pricing.faq_q2": "كيف تضمنون أمان التحويلات المالية عبر زين كاش وكي كارد؟",
    "pricing.faq_a2": "يتم الاتصال مباشرة عبر القنوات المعتمدة تشفيرياً مع البنوك والمحافظ الإلكترونية دون تخزين أي بيانات حساسة، مع استخدام تشفير AES-256 ومطابقة التوقيع الرقمي (Signature Verification).",
    "pricing.faq_q3": "ما هي المدة الاستغراقية لبدء التشغيل الفعلي (Go-Live)؟",
    "pricing.faq_a3": "تستغرق عملية الإعداد والتفعيل للمتاجر القياسية أقل من 24 ساعة. بالنسبة للمؤسسات الكبرى التي تتطلب دمج SAP أو Oracle، يتطلب ذلك من 3 إلى 5 أيام عمل فقط.",
    "pricing.faq_q4": "هل توجد أي رسوم خفية أو نسبة مئوية مقتطعة من أرباح التاجر؟",
    "pricing.faq_a4": "صفر عمولة على المبيعات (0% Commission). تحافظ على أرباحك كاملة ورَبْـط تتقاضى فقط رسوم الاشتراك الشفافة المعلنة.",
    "pricing.faq_q5": "ماذا يحدث لو تجاوزت عدد المعاملات المشمولة بباقي الشهرية؟",
    "pricing.faq_a5": "لا تتوقف الخدمة إطلاقاً. يتم إشعارك بقرب الوصول للحد الأقصى مع إمكانية الترقية التلقائية للباقة الأعلى بنقرة واحدة.",

    // --- Demo Page (demo.html) ---
    "demo.hero_badge": "محاكاة واقعية للمقارنة",
    "demo.hero_title": "شاهد الفرق الفعلي قبل وبعد نظام رَبْـط",
    "demo.hero_subtitle": "جرب كيف تحول رَبْـط المعاملات المالية المربكة واليدوية إلى عملية فورية تكتمل خلال ثوانٍ.",
    "demo.tab_before": "❌ العمل التقليدي (قبل رَبْـط)",
    "demo.tab_after": "⚡ الأتمتة الذكية (بعد رَبْـط)",

    "demo.card_before1_title": "التأخير والأخطاء اليدويّة",
    "demo.before_t1": "تحقق يدوي من زين كاش (ساعتان تأخير)",
    "demo.before_d1": "الزبون يرسل لقطة شاشة للحوالة، والموظف يتحقق يدوياً من تطبيق المحفظة.",
    "demo.before_t2": "خطأ في المخزون ونفاذ القطع",
    "demo.before_d2": "طلب نفس القطعة من المحل والجريد في وقت واحد مما يسبب إحراجاً مع الزبون.",

    "demo.card_before2_title": "ارتفاع التكاليف والراجع",
    "demo.before_t3": "ارتفاع نسبة الشحنات المرجعة",
    "demo.before_d3": "عدم تأكيد العنوان الدقيق يؤدي لعدم وصول سائق التوصيل ورجوع الطلب.",

    "demo.card_after1_title": "سرعة ودقة فائقة",
    "demo.after_t1": "تأكيد مالي فوري خلال 15 ثانية",
    "demo.after_d1": "إشعار فوري وتأكيد تلقائي للطلب بمجرد إتمام التحويل عبر API زين كاش وكي كارد.",
    "demo.after_t2": "مزامنة لحظية للمخزون في المحل والمتجر",
    "demo.after_d2": "خصم تلقائي لحظي يضمن عدم تكرار بيع المنتج المباع في أي منصة.",

    "demo.card_after2_title": "أقل راجع وأعلى أرباح",
    "demo.after_t3": "تأكيد العنوان عبر الذكاء الاصطناعي",
    "demo.after_d3": "شات بوت يحدد الموقع بدقة ويصدر البوليصة لشركة التوصيل مباشرة.",

    "demo.sim_badge": "المحاكاة الحية",
    "demo.sim_title": "مشغل محاكاة الطلب الحي (Live Transaction Simulator)",
    "demo.sim_start_btn": "تشغيل تجربة طلب حية",
    "demo.sim_clear_btn": "مسح السجل",
    "demo.sim_ready": "جاهز لتشغيل محاكاة المعاملة المالية. اضغط \"تشغيل تجربة طلب حية\" أعلاه...",

    // --- Contact Page (contact.html) ---
    "contact.hero_badge": "تواصل مباشر",
    "contact.hero_title": "دعنا نساعدك في أتمتة أعمالك التجاريّة",
    "contact.hero_subtitle": "فريقنا في بغداد جاهز للإجابة على استفساراتك الفنية، تقديم العروض المخصصة، وتنسيق جلسة توضيحية.",
    "contact.form_title": "حجز استشارة فنية أو طلب عرض",
    "contact.lbl_fullname": "الاسم الكامل",
    "contact.lbl_email": "البريد الإلكتروني المهني",
    "contact.lbl_phone": "رقم الهاتف (العراق)",
    "contact.lbl_company": "اسم الشركة / المتجر",
    "contact.lbl_service": "الخدمة المطلوبة",
    "contact.opt1": "أتمتة زين كاش وكي كارد",
    "contact.opt2": "ربط المخزون ونقاط البيع POS",
    "contact.opt3": "البوت العراقي لتأكيد العناوين",
    "contact.opt4": "حلول المؤسسات المخصصة Enterprise",
    "contact.lbl_message": "تفاصيل استفسارك",
    "contact.btn_submit": "إرسال الطلب الآن",
    "contact.placeholder_fullname": "مثال: المهندس علي أحمد",
    "contact.placeholder_email": "ali@company.iq",
    "contact.placeholder_phone": "+964 780 000 0000",
    "contact.placeholder_company": "شركة دجلة للتجارة",
    "contact.placeholder_message": "اشرح لنا طبيعة متجرك أو النظام المراد ربطه...",

    "contact.office_title": "مقر الشركة في بغداد",
    "contact.addr_lbl": "العنوان الجغرافي:",
    "contact.office_addr": "بغداد - الجادرية - المجمع التكنولوجي، بالقرب من جامعة بغداد",
    "contact.hours_lbl": "ساعات العمل الرسمية:",
    "contact.office_hours": "أوقات العمل: الأحد - الخميس (9:00 صباحاً - 5:00 مساءً)",
    "contact.support_lbl": "المبيعات والدعم:",
    "contact.office_phone": "الهاتف المباشر: 9647800000000+",
    "contact.office_email": "البريد: enterprise@rabt.iq",
    "contact.map_title": "مركز بيانات واستشارات بغداد",
    // --- Contact Page Deep Copy & Pre-Contact FAQ (AR) ---
    "contact.faq_badge": "استفسارات قبل التواصل",
    "contact.faq_title": "أسئلة شائعة قبل التواصل مع مهندسينا",
    "contact.faq_q1": "كم يستغرق زمن الرد عند إرسال الطلب؟",
    "contact.faq_a1": "يتصل بك مهندس متخصص من فريقنا ببغداد خلال أقل من 30 دقيقة أثناء ساعات العمل الرسمية (من 8 صباحاً حتى 8 مساءً)، أو في بداية يوم العمل التالي.",
    "contact.faq_q2": "هل الجلسة الاستشارية الأولى مجانية فعلاً وبدون أي التزام؟",
    "contact.faq_a2": "نعم، 100% مجانية وبدون أي التزام تجاري! نقوم بدراسة معمارية متجرك وحجم مبيعاتك ونقدم لك تقريراً هندسياً بالحلول المناسبة.",
    "contact.faq_q3": "هل يمكن تنظيم اجتماع حضوري في مقر شركتنا أو في مكتب رَبْـط بالجادرية؟",
    "contact.faq_a3": "نرحب بكم جداً! يمكنك اختيار زيارة مقرنا في المجمع التكنولوجي بالجادرية أو تنسيق زيارة فريقنا لمقر متجرك أو مستودعكم.",
  },
  en: {
    // --- Navigation & Common ---
    "nav.brand": "RABT",
    "nav.tagline": "E-Commerce & Payment Automation",
    "nav.home": "Home",
    "nav.services": "Solutions",
    "nav.about": "About Us",
    "nav.pricing": "Pricing",
    "nav.demo": "Interactive Demo",
    "nav.contact": "Contact Us",
    "nav.getStarted": "Get Started Free",

    // --- Footer ---
    "footer.desc": "Iraq's premier B2B SaaS platform specializing in API integration between e-commerce stores, payment gateways (ZainCash, QiCard), ERP inventory, and logistics.",
    "footer.col1_title": "Products & Solutions",
    "footer.col1_link1": "ZainCash & QiCard Reconciliation",
    "footer.col1_link2": "POS & ERP Stock Sync",
    "footer.col1_link3": "Iraqi Dialect AI Chatbot",
    "footer.col1_link4": "Logistics Automation",
    "footer.col2_title": "Company",
    "footer.col2_link1": "About RABT Baghdad",
    "footer.col2_link2": "ISO Security Standards",
    "footer.col2_link3": "Baghdad Data Hub",
    "footer.col2_link4": "Careers",
    "footer.col3_title": "Developers & Support",
    "footer.col3_link1": "API & SDK Documentation",
    "footer.col3_link2": "System Status (99.99%)",
    "footer.col3_link3": "Merchant Help Center",
    "footer.col3_link4": "Support Line",
    "footer.copyright": "© 2026 RABT Technology & API Integration LLC - Baghdad, Iraq. All rights reserved.",
    "footer.status": "All systems operational (99.99% Uptime)",

    // --- Homepage (index.html) ---
    "page.title.index": "RABT | End-to-End E-Commerce & Payment Automation Infrastructure - Iraq 2026",
    "home.badge": "Iraq's #1 B2B Financial & Retail Automation Platform 2026",
    "home.hero_title": "End-to-End E-Commerce Automation & Systems Integration",
    "home.hero_subtitle": "Instant direct connection between your online storefront, payment gateways (ZainCash, QiCard, Mastercard), POS inventory & logistics. Zero manual errors with sub-millisecond execution.",
    "home.hero_img_badge": "Baghdad Live Operations Hub",
    "home.hero_img_caption": "Real-time software infrastructure connecting ZainCash, QiCard, and physical retail POS cashiers in Iraq.",
    "home.cta_primary": "Try Interactive Demo Now",
    "home.cta_secondary": "Book Consultation",
    "home.status_badge": "● Latency: 12ms | System Uptime: 99.99%",

    "home.diag_title": "RABT Automated Workflow Architecture Pipeline",
    "home.diag_status": "● Live Pipeline Active",
    "home.diag_node1_title": "Storefront & POS Systems",
    "home.diag_node1_desc": "Salla, Ziina, Odoo, Shopify & Custom APIs",
    "home.tag_salla": "Salla Store",
    "home.tag_ziina": "Ziina Store",
    "home.tag_webhooks": "Custom APIs",
    "home.diag_node2_title": "RABT Smart Engine",
    "home.diag_node2_desc": "Real-time processing & payment verification",
    "home.tag_aes": "AES-256 Encrypted",
    "home.tag_12ms": "12ms Latency Sync",
    "home.diag_node3_title": "Banking & Logistics",
    "home.diag_node3_desc": "ZainCash, QiCard & Iraqi Delivery Fleets",
    "home.tag_zaincash": "ZainCash Wallet",
    "home.tag_qicard": "QiCard Gateway",
    "home.tag_delivery": "Courier Fleets",

    "home.metrics_1_val": "+5,000,000",
    "home.metrics_1_lbl": "Automated Financial Transactions",
    "home.metrics_2_val": "12ms",
    "home.metrics_2_lbl": "Average Latency Execution",
    "home.metrics_3_val": "99.99%",
    "home.metrics_3_lbl": "Regional High-Availability Uptime",
    "home.metrics_4_val": "ZERO",
    "home.metrics_4_lbl": "Reconciliation Discrepancies",

    "home.bento_badge": "Why RABT?",
    "home.bento_title": "Purpose-Built for Iraqi Commerce Infrastructure",
    "home.bento_card1_title": "Instant Payment Settlement",
    "home.bento_card1_desc": "Eliminate manual verification of ZainCash and QiCard transfer receipts. RABT verifies every Dinar and updates orders automatically.",
    "home.bento_card1_how": "💡 Technical Execution: RABT connects via a dedicated Webhook to your merchant gateway on ZainCash & QiCard, validating HMAC digital signatures per transaction and instantly updating order status to PAID without human audit.",
    "home.bento_card2_how": "💡 Technical Execution: The engine uses bidirectional WebSockets to transmit any sale from your physical POS (Odoo, SAP) to your e-commerce storefront in 12ms, eliminating double-selling completely.",
    "home.bento_card3_how": "💡 Technical Execution: Uses a localized AI model trained on Iraqi landmark geography via automated WhatsApp API to verify exact GPS pins and nearby landmarks.",
    "home.bento_card4_how": "💡 Technical Execution: Connects directly to REST APIs of courier fleets in Baghdad and provinces, generating unified manifests and printable barcode labels in 1 click.",

    "home.faq_badge": "Frequently Asked Questions",
    "home.faq_title": "Realistic Pre-Onboarding Technical FAQs",
    "home.faq_q1": "How long does integration and setup take for my store?",
    "home.faq_a1": "For standard stores (Salla, Ziina, WooCommerce), integration takes less than 24 hours via ready-to-use plugins. For enterprise custom ERPs like Odoo or SAP, integration takes 2 to 4 business days with direct coordination from our team in Baghdad.",
    "home.faq_q2": "Do I need technical expertise or in-house developers?",
    "home.faq_a2": "Not at all! RABT's engineering team in Jadriya handles the full end-to-end setup, provides an intuitive dashboard, and trains your operations staff for free.",
    "home.faq_q3": "What if I have an existing live store with daily volume? Can I migrate with zero downtime?",
    "home.faq_a3": "Yes, we guarantee 100% zero downtime. We configure and test parallel staging endpoints in Sandbox mode before switching live transaction traffic seamlessly.",
    "home.faq_q4": "How does the platform verify payment legitimacy and prevent fake receipt screenshots?",
    "home.faq_a4": "RABT connects directly to official ZainCash and QiCard banking endpoints using AES-256 encryption and HMAC-SHA256 signature verification. Fake receipts or edited screenshots are automatically rejected.",
    "home.faq_q5": "What happens if the internet drops at our physical cashier counter?",
    "home.faq_a5": "The system features an Offline Queue Buffer. Sales are recorded locally at the cashier terminal and automatically synced to the online store the moment connectivity is restored.",
    "home.faq_q6": "Does shipping manifest generation support Iraqi courier fleets?",
    "home.faq_a6": "Yes, RABT is integrated via API with major delivery fleets in Baghdad, Erbil, Basra, and all governorates, issuing official barcoded waybills directly.",
    "home.bento_c1_sub": "ZainCash API Response",
    "home.bento_c1_status": "200 OK (0.18s)",
    "home.bento_card2_title": "Multi-Branch POS Stock Sync",
    "home.bento_card2_desc": "Sync physical store cash registers with your online store instantly to prevent overselling unavailable items.",
    "home.c2_status_lbl": "100% Active Stock Sync",
    "home.c2_pos": "Store POS Cashier",
    "home.c2_pos_sub": "-1 item sold offline",
    "home.c2_arrow": "⚡ 12ms Sync",
    "home.c2_store": "E-Commerce Storefront",
    "home.c2_store_sub": "Instant stock auto-deducted",
    "home.bento_card3_title": "Iraqi Dialect AI Chatbot",
    "home.bento_card3_desc": "Automate address verification & phone confirmations via WhatsApp/Instagram before dispatch to reduce returns.",
    "home.c3_bot_sender": "🤖 RABT AI Bot",
    "home.c3_msg1": "\"Hello! Confirm delivery to Jadriya near mosque?\"",
    "home.c3_msg2": "\"Yes exactly, thank you!\"",
    "home.c3_loc": "📍 Baghdad - Jadriya",
    "home.c3_status": "✔✔ Address Verified",
    "home.bento_card4_title": "Top Delivery Logistics Integration",
    "home.bento_card4_desc": "Generate manifests and print shipping labels in one click with direct API links to top Iraqi courier fleets.",
    "home.c4_manifest_title": "Waybill #IQ-99104",
    "home.c4_manifest_sub": "Auto-Confirmed & 1-Click Print",
    "home.c4_status": "Ready to Dispatch",
    "home.bento_c4_t1": "Baghdad Dispatch Hub",
    "home.bento_c4_t2": "Erbil Fleet Hub",
    "home.bento_c4_t3": "Basra Direct Express",

    "home.cta_banner_title": "Ready to Automate Your Retail Operations in Iraq?",
    "home.cta_banner_subtitle": "Join hundreds of merchants relying on RABT for real-time financial reconciliation & stock sync.",
    "home.cta_banner_btn1": "Contact Sales Team",
    "home.cta_banner_btn2": "Try Interactive Demo",

    // --- Services Page ---
    "services.page_title": "Enterprise Integration Solutions | RABT",
    "services.hero_badge": "Enterprise Solutions",
    "services.hero_title": "End-to-End Automation & Integration Services",
    "services.hero_subtitle": "A unified infrastructure replacing tedious manual tasks with intelligent API workflows, driving sales while cutting operational costs.",
    // --- Services Deep Copy (EN) ---
    "services.s1_prob": "🔴 Current Pain Point: Accountants spend hours daily verifying manual ZainCash and QiCard screenshots, causing shipping delays and risking fraudulent receipts.",
    "services.s1_sol": "🟢 RABT Solution: Direct API connection with bank gateways. System receives HMAC-encrypted Webhooks, verifies txid with official servers, and updates order to PAID within 500ms.",
    "services.s1_res1": "100% elimination of manual accounting verification time.",
    "services.s1_res2": "Instant pre-delivery confirmation before handoff to couriers.",
    "services.s1_res3": "Complete security against photoshopped or duplicate receipts.",
    "services.s1_res4": "Consolidated Excel financial reconciliation reporting.",

    "services.s2_prob": "🔴 Current Pain Point: Selling an item online only to discover it was sold minutes prior at your physical counter, forcing embarrassing customer apologies & refunds.",
    "services.s2_sol": "🟢 RABT Solution: Bi-directional WebSockets link your cashier (Odoo, SAP, QuickBooks) with your online store. Scanning a barcode in-store updates online stock in 12ms.",
    "services.s2_res1": "Complete elimination of unexpected out-of-stock orders.",
    "services.s2_res2": "Syncing 10+ physical retail branches to 1 central e-commerce store.",
    "services.s2_res3": "Instant 1-click price and discount updates across all channels.",
    "services.s2_res4": "Low-stock alert thresholds for top-selling items.",

    "services.s3_prob": "🔴 Current Pain Point: Inaccurate address descriptions causing lost delivery couriers in Baghdad & provinces, leading to rejected parcels & double shipping fees.",
    "services.s3_sol": "🟢 RABT Solution: Automated AI WhatsApp bot trained on Iraqi dialect & landmarks. Automatically prompts customers for GPS pins & landmarks, generating courier route plans.",
    "services.s3_res1": "40% reduction in returned/failed package delivery rates.",
    "services.s3_res2": "Precise GPS coordinates generated for couriers.",
    "services.s3_res3": "24/7 automated customer support without extra headcount.",
    "services.s3_res4": "Higher customer satisfaction and faster response speed.",

    "services.s4_prob": "🔴 Current Pain Point: Writing manifests and waybills manually for every order, delaying courier dispatch and increasing data entry errors.",
    "services.s4_sol": "🟢 RABT Solution: Direct API integration with major Iraqi delivery fleets. Automatically generates barcoded waybills & consolidated manifests in 1 click.",
    "services.s4_res1": "1-click issuance of hundreds of barcoded shipping waybills.",
    "services.s4_res2": "Automated shipment status tracking from dispatch to delivery.",
    "services.s4_res3": "Zero phone number or customer name data entry errors.",
    "services.s4_res4": "Same-day order dispatch for courier couriers.",
    "services.code_title": "ZainCash Instant API Verification",
    "services.code_badge": "Active Webhook",
    "services.pos_store_title": "Jadriya Branch (Physical POS)",
    "services.pos_store_desc": "Deducted 2 items of #SKU-4912",
    "services.pos_badge": "Auto Deducted",
    "services.sync_arrow": "⬇️ RABT Real-Time Synchronization (12ms) ⬇️",
    "services.ecom_title": "Online Storefront (Salla / Ziina / Web)",
    "services.ecom_desc": "Available stock updated to 8 items",
    "services.ecom_badge": "100% Synced",
    "services.chat_m1": "🤖 Hello Ali! Order #9910 is ready. Is your address Baghdad - Jadriya near hospital?",
    "services.chat_m2": "👤 Yes exactly opposite University Mosque.",
    "services.chat_m3": "✅ Perfect! Waybill generated & dispatched to driver automatically.",
    
    "services.s1_title": "1. Automated Financial Reconciliation & Gateways",
    "services.s1_desc": "Direct API connection between retail systems and Iraqi mobile wallets (ZainCash, QiCard) & credit cards with instant settlement.",
    "services.s1_feat1": "Instant transaction verification within 500 milliseconds.",
    "services.s1_feat2": "Automated ledger statements & daily balance reconciliation.",
    "services.s1_feat3": "Bank-grade fraud prevention & fake receipt filtering.",

    "services.s2_title": "2. Real-Time POS & ERP Inventory Sync",
    "services.s2_desc": "Connect your physical POS and back-office ERP (Odoo, SAP, QuickBooks) seamlessly to your e-commerce storefront.",
    "services.s2_feat1": "Automatic stock deduction across offline stores & online catalogs.",
    "services.s2_feat2": "Instant price and promo updates across all sales channels.",
    "services.s2_feat3": "Automated low-stock threshold alerts for high-demand items.",

    "services.s3_title": "3. Iraqi Dialect AI Verification & Dispatch",
    "services.s3_desc": "AI virtual assistant trained specifically on Iraqi colloquial terminology and address landmarks (e.g. Al-Jadriya, Karrada, near mosque...).",
    "services.s3_feat1": "Precise geo-location pin confirmation via WhatsApp.",
    "services.s3_feat2": "Reduces failed delivery return rates by up to 40%.",
    "services.s3_feat3": "Automated customer order tracking notifications.",

    "services.s4_title": "4. Courier Fleet & Logistics Automation",
    "services.s4_desc": "Generate waybills and shipping manifests in one click with direct API links to top Iraqi courier fleets.",
    "services.s4_feat1": "1-Click automated shipping label & waybill printing.",
    "services.s4_feat2": "Real-time GPS delivery tracking for merchants and shoppers.",
    "services.s4_feat3": "Detailed delivery success analytics to minimize return rates.",
    "services.modal_btn": "Request Integration Now",
    "services.modal_close": "Close",

    // --- About Page ---
    "about.hero_badge": "Iraqi Engineering & High Reliability",
    "about.hero_title": "Building the Infrastructure for Digital Commerce in Iraq",
    "about.hero_subtitle": "Founded in Baghdad by Iraqi engineers specialized in high-reliability systems, empowering local retail with enterprise-grade software.",
    // --- About Story & Values (EN) ---
    "about.story_badge": "Our Origin Story",
    "about.story_title": "Bridging Local Market Gaps with Infrastructure-Grade Engineering",
    "about.story_p1": "RABT was founded in 2024 in Baghdad when our software engineers identified a massive disparity between Iraq's rapid e-commerce expansion and the archaic manual processes powering retail operations.",
    "about.story_p2": "Merchants spent hours verifying manual ZainCash and QiCard transfer screenshots, struggled with inventory discrepancies between physical stores and websites, and lost money on returned packages due to vague text addresses. RABT was engineered to solve these exact Iraqi retail hurdles, offering 100% automated infrastructure that lets merchants scale without operational gridlock.",

    "about.values_badge": "Our Core Principles",
    "about.values_title": "The Engineering & Business Values Driving RABT",
    "about.v1_title": "Absolute Pricing Transparency",
    "about.v1_desc": "No hidden fees or unexpected charges. Fixed tier pricing tailored to your scale with zero profit commissions.",
    "about.v2_title": "Direct Local Tech Support",
    "about.v2_desc": "Our engineering team is physically located in Jadriya, Baghdad, offering direct phone and WhatsApp support without canned responses.",
    "about.v3_title": "Strict Regulatory Compliance",
    "about.v3_desc": "Infrastructure fully compliant with Central Bank of Iraq standards and cybersecurity frameworks protecting merchant data.",
    "about.v4_title": "Enterprise High Availability",
    "about.v4_desc": "Hosted on redundant data nodes guaranteeing 99.99% uptime even during peak holiday sales volume.",
    "about.team_img_badge": "RABT Software Team in Baghdad",
    "about.team_img_caption": "Top Iraqi engineering minds building & scaling the integration platform in Jadriya Technology Park.",
    
    "about.val1_title": "Baghdad Data Node",
    "about.val1_desc": "Ultra-low latency local server infrastructure connected directly to national telecom networks.",
    "about.val2_title": "Bank-Grade Security",
    "about.val2_desc": "AES-256 encryption and full cybersecurity compliance to safeguard merchant and consumer financial data.",
    "about.val3_title": "99.99% Uptime Guarantee",
    "about.val3_desc": "Distributed architecture ensuring zero downtime during high-volume promotional sales events.",
    "about.val4_title": "Local Engineering Support",
    "about.val4_desc": "On-ground engineering team stationed in Jadriya, Baghdad providing 24/7 technical assistance.",

    "about.hq_badge": "Baghdad Headquarters",
    "about.hq_title": "Al-Jadriya Technology Park",
    "about.hq_desc": "Stationed near top academic and research institutions in Baghdad. We foster an engineering culture attracting Iraq's top software talent to build independent, sustainable national solutions.",
    "about.hq_btn": "Visit Baghdad HQ or Contact",
    "about.standards_title": "Software Safety & Quality Standards",
    "about.std1": "Cybersecurity compliance & SSL/TLS 1.3 encryption",
    "about.std2": "Full compliance with Central Bank of Iraq (CBI) guidelines",
    "about.std3": "Automated distributed backups synced every 60 seconds",

    // --- Pricing Page ---
    "pricing.hero_badge": "Transparent SaaS Pricing",
    "pricing.hero_title": "Flexible Tiers for Every Scale",
    "pricing.hero_subtitle": "Automate your retail operations today. Pick the ideal plan for your enterprise with zero hidden charges.",
    "pricing.monthly": "Billed Monthly",
    "pricing.annual": "Billed Annually (Save 20%)",
    "pricing.period": "Per Month / Billed per plan selection",

    "pricing.p1_name": "Starter Automation",
    "pricing.p1_desc": "Ideal for small merchants beginning payment and courier automation.",
    "pricing.p1_price": "49",
    "pricing.p1_f1": "Up to 500 automated transactions / mo",
    "pricing.p1_f2": "ZainCash or QiCard API integration",
    "pricing.p1_f3": "Single storefront stock sync",
    "pricing.p1_f4": "Email & WhatsApp standard support",
    "pricing.p1_cta": "Select Starter Plan",

    "pricing.p2_badge": "Most Popular & Fast Growing",
    "pricing.p2_name": "Growth E-Commerce",
    "pricing.p2_desc": "For scaling businesses & multi-channel retail brands.",
    "pricing.p2_price": "129",
    "pricing.p2_f1": "Up to 5,000 automated transactions / mo",
    "pricing.p2_f2": "All Payment Gateways (ZainCash, QiCard, Cards)",
    "pricing.p2_f3": "Advanced Multi-Branch POS & ERP Sync",
    "pricing.p2_f4": "Iraqi Dialect WhatsApp AI Chatbot",
    "pricing.p2_f5": "24/7 Priority Phone Support",
    "pricing.p2_cta": "Try Growth Plan Free",

    "pricing.p3_name": "Enterprise Infrastructure",
    "pricing.p3_desc": "Unlimited volume with custom dedicated pipelines & ledger rules.",
    "pricing.p3_price": "299",
    "pricing.p3_f1": "Unlimited transactions / mo",
    "pricing.p3_f2": "Dedicated server node & high-rate APIs",
    "pricing.p3_f3": "Custom SAP / Oracle / Odoo modules",
    "pricing.p3_f4": "Dedicated Technical Account Manager in Baghdad",
    "pricing.p3_cta": "Contact Enterprise Sales",

    "pricing.matrix_h1": "Feature / API Capability",
    "pricing.matrix_h2": "Starter ($49)",
    "pricing.matrix_h3": "Growth ($129)",
    "pricing.matrix_h4": "Enterprise ($299)",
    "pricing.matrix_r1_f": "Instant API Settlement Latency",
    "pricing.matrix_r2_f": "Physical POS Cashier Sync",
    "pricing.matrix_r2_c1": "1 Branch",
    "pricing.matrix_r2_c2": "Up to 5 Branches",
    "pricing.matrix_r2_c3": "Unlimited Branches",
    "pricing.matrix_r3_f": "Iraqi Address AI Chatbot",
    "pricing.matrix_r3_c1": "Not Included",
    "pricing.matrix_r3_c2": "Included (1,000 chats)",
    "pricing.matrix_r3_c3": "Unlimited Conversations",
    "pricing.matrix_r4_f": "Service Level Agreement (SLA)",

    "pricing.faq_badge": "Frequently Asked Questions",
    "pricing.faq_title": "Answers to Technical & Commercial FAQs",
    "pricing.faq_q1": "Does integration require modifying my store's codebase?",
    "pricing.faq_a1": "No, we provide ready-made Plugins / SDKs for Salla, Ziina, Odoo, WooCommerce, as well as developer-friendly RESTful APIs for custom apps.",
    "pricing.faq_q2": "How do you guarantee transaction security for ZainCash & QiCard?",
    "pricing.faq_a2": "Connections use encrypted channels with banks and mobile wallets without storing sensitive payload data, utilizing AES-256 encryption & RSA signature verification.",
    "pricing.faq_q3": "How long does Go-Live onboarding take?",
    "pricing.faq_a3": "Standard store setup takes under 24 hours. Enterprise integrations requiring custom SAP or Oracle connectors take 3-5 business days.",

    // --- Demo Page ---
    "demo.hero_badge": "Interactive Benchmark",
    "demo.hero_title": "Before vs After RABT Automation",
    "demo.hero_subtitle": "Experience firsthand how RABT converts manual payment checking into an instantaneous 15-second process.",
    "demo.tab_before": "❌ Traditional Manual Workflow",
    "demo.tab_after": "⚡ RABT Automated Engine",

    "demo.card_before1_title": "Delays & Manual Errors",
    "demo.before_t1": "Manual ZainCash Receipt Verification (2hr Delay)",
    "demo.before_d1": "Customers send transfer screenshots, staff manually check wallet app records.",
    "demo.before_t2": "Stock Mismatch & Double Selling",
    "demo.before_d2": "Same item sold in physical store and online simultaneously causing order cancellations.",

    "demo.card_before2_title": "High Costs & Returns",
    "demo.before_t3": "High Delivery Return Rate",
    "demo.before_d3": "Unconfirmed addresses lead to courier driver confusion and returned packages.",

    "demo.card_after1_title": "Ultra Speed & Accuracy",
    "demo.after_t1": "Instant Financial Settlement in 15s",
    "demo.after_d1": "Automated order confirmation immediately upon API verification from ZainCash/QiCard.",
    "demo.after_t2": "Real-Time Multi-Channel Stock Inventory",
    "demo.after_d2": "Instant stock deduction prevents overselling across all physical and web points.",

    "demo.card_after2_title": "Lower Returns & Higher Profit",
    "demo.after_t3": "AI Dialect Address Verification",
    "demo.after_d3": "WhatsApp bot confirms landmark details and sends dispatch waybill to couriers automatically.",

    "demo.sim_badge": "Live Simulation",
    "demo.sim_title": "Live Transaction Pipeline Simulator",
    "demo.sim_start_btn": "Run Live Transaction Test",
    "demo.sim_clear_btn": "Clear Log",
    "demo.sim_ready": "Ready to execute transaction simulation. Click \"Run Live Transaction Test\" above...",

    // --- Contact Page ---
    "contact.hero_badge": "Get In Touch",
    "contact.hero_title": "Let's Automate Your Business Operations",
    "contact.hero_subtitle": "Our team in Baghdad is ready to address your technical requirements and prepare custom API solutions.",
    "contact.form_title": "Schedule a Technical Consultation",
    "contact.lbl_fullname": "Full Name",
    "contact.lbl_email": "Work Email",
    "contact.lbl_phone": "Phone Number (Iraq)",
    "contact.lbl_company": "Company / Store Name",
    "contact.lbl_service": "Required Solution",
    "contact.opt1": "ZainCash & QiCard Automation",
    "contact.opt2": "POS & ERP Stock Inventory Link",
    "contact.opt3": "Iraqi Dialect Verification Chatbot",
    "contact.opt4": "Custom Enterprise Solutions",
    "contact.lbl_message": "Project Details & Inquiry",
    "contact.btn_submit": "Submit Request Now",
    "contact.placeholder_fullname": "e.g. Eng. Ali Ahmed",
    "contact.placeholder_email": "ali@company.iq",
    "contact.placeholder_phone": "+964 780 000 0000",
    "contact.placeholder_company": "Tigris Commerce Ltd.",
    "contact.placeholder_message": "Describe your storefront, ERP, or API requirements...",

    "contact.office_title": "Baghdad Headquarters",
    "contact.addr_lbl": "Headquarters Address:",
    "contact.office_addr": "Baghdad - Al-Jadriya - Technology Hub, near University of Baghdad",
    "contact.hours_lbl": "Office Working Hours:",
    "contact.office_hours": "Working Hours: Sun - Thu (9:00 AM - 5:00 PM)",
    "contact.support_lbl": "Sales & Support Lines:",
    "contact.office_phone": "Direct Phone: +9647800000000",
    "contact.office_email": "Email: enterprise@rabt.iq",
    "contact.map_title": "Baghdad Data & Consulting Hub",
    // --- Contact Page Deep Copy & Pre-Contact FAQ (EN) ---
    "contact.faq_badge": "Pre-Contact FAQs",
    "contact.faq_title": "Frequently Asked Questions Before Reaching Out",
    "contact.faq_q1": "How long does a response take after submitting my request?",
    "contact.faq_a1": "A dedicated solutions engineer from our Baghdad hub will contact you within 30 minutes during business hours (8 AM - 8 PM), or at the start of the next business day.",
    "contact.faq_q2": "Is the initial consultation genuinely 100% free with no commitment?",
    "contact.faq_a2": "Yes, 100% free with zero commercial commitment! We audit your storefront architecture and transaction volume, providing an engineering recommendation report.",
    "contact.faq_q3": "Can we arrange an in-person meeting at our office or RABT's Jadriya hub?",
    "contact.faq_a3": "You are most welcome! You can visit our headquarters in Jadriya Technology Park or schedule an on-site visit by our team to your warehouse or retail store.",
  }
};

// --- Shared Engine State & Controllers ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initMobileMenu();
  initInteractivity();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('rabt_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const themeToggle = document.getElementById('theme-toggle-btn');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('rabt_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const iconContainer = document.getElementById('theme-toggle-icon');
  if (!iconContainer) return;
  
  if (theme === 'light') {
    // Moon Icon for switching to dark
    iconContainer.innerHTML = `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  } else {
    // Sun Icon for switching to light
    iconContainer.innerHTML = `<svg class="icon-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}

// Language & Localization Management
function initLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const queryLang = urlParams.get('lang');
  const savedLang = queryLang || localStorage.getItem('rabt_lang') || 'ar';
  setLanguage(savedLang);

  const langBtn = document.getElementById('lang-switch-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const currentLang = document.documentElement.getAttribute('lang') || 'ar';
      const newLang = currentLang === 'ar' ? 'en' : 'ar';
      setLanguage(newLang);
    });
  }
}

function setLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  localStorage.setItem('rabt_lang', lang);

  const langLabel = document.getElementById('lang-switch-label');
  if (langLabel) {
    langLabel.textContent = lang === 'ar' ? 'English' : 'عربي';
  }

  // Translate document title if title has data-i18n
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) {
    const key = titleEl.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      document.title = translations[lang][key];
    }
  }

  // Translate all elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Also update placeholders if any
  const inputElements = document.querySelectorAll('[data-i18n-placeholder]');
  inputElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

// Mobile Navigation
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
    });
  }
}

// General Interactive Elements
function initInteractivity() {
  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      item.classList.toggle('active');
    });
  });

  // Comparison Tabs (Demo Page)
  const tabBefore = document.getElementById('tab-before');
  const tabAfter = document.getElementById('tab-after');
  const panelBefore = document.getElementById('panel-before');
  const panelAfter = document.getElementById('panel-after');

  if (tabBefore && tabAfter && panelBefore && panelAfter) {
    tabBefore.addEventListener('click', () => {
      tabBefore.classList.add('active-before');
      tabAfter.classList.remove('active-after');
      panelBefore.classList.add('active');
      panelAfter.classList.remove('active');
    });

    tabAfter.addEventListener('click', () => {
      tabAfter.classList.add('active-after');
      tabBefore.classList.remove('active-before');
      panelAfter.classList.add('active');
      panelBefore.classList.remove('active');
    });
  }

  // Pricing Toggle (Monthly / Annual)
  const priceToggle = document.getElementById('pricing-checkbox');
  if (priceToggle) {
    priceToggle.addEventListener('change', (e) => {
      const isAnnual = e.target.checked;
      const prices = document.querySelectorAll('.pricing-price-val');
      prices.forEach(p => {
        const basePrice = parseInt(p.getAttribute('data-monthly'));
        if (isAnnual) {
          // 20% discount
          p.textContent = Math.round(basePrice * 0.8);
        } else {
          p.textContent = basePrice;
        }
      });
    });
  }

  // Live Simulation Button (Demo Page)
  const simStartBtn = document.getElementById('sim-start-btn');
  const simClearBtn = document.getElementById('sim-clear-btn');
  const simLog = document.getElementById('sim-log');

  if (simStartBtn && simLog) {
    simStartBtn.addEventListener('click', () => {
      runLiveSimulation(simLog);
    });
  }

  if (simClearBtn && simLog) {
    simClearBtn.addEventListener('click', () => {
      const currentLang = document.documentElement.getAttribute('lang') || 'ar';
      const readyMsg = translations[currentLang] && translations[currentLang]['demo.sim_ready'] 
        ? translations[currentLang]['demo.sim_ready'] 
        : 'Ready to execute transaction simulation...';
      simLog.innerHTML = `<div class="sim-log-line"><span class="sim-log-time">[SYSTEM]</span> <span data-i18n="demo.sim_ready">${readyMsg}</span></div>`;
    });
  }

  // Contact Form Submission Simulation
  const contactForm = document.getElementById('b2b-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const currentLang = document.documentElement.getAttribute('lang') || 'ar';
      const msg = currentLang === 'ar' 
        ? 'تم إرسال طلبك بنجاح! سيتواصل معك أحد مهندسينا في بغداد خلال ساعة واحدة.' 
        : 'Your request has been submitted successfully! One of our engineers in Baghdad will contact you within 1 hour.';
      alert(msg);
      contactForm.reset();
    });
  }
}

// Live Transaction Simulator Sequence
function runLiveSimulation(logContainer) {
  const isAr = document.documentElement.getAttribute('lang') === 'ar';
  const steps = isAr ? [
    { time: '00:00.012', type: 'info', text: '📥 تلقي طلب جديد رقم #RBT-98241 من متجر سلة / POS...' },
    { time: '00:00.145', type: 'info', text: '💳 استدعاء API زين كاش (ZainCash Gateway) للتحقق من التحويل...' },
    { time: '00:00.320', type: 'success', text: '✅ إشعار نجاح التحويل: تم استلام 150,000 د.ع بنجاح (TXID: ZC-8821903).' },
    { time: '00:00.410', type: 'info', text: '📦 إرسال أمر خصم الكمية لنظام Odoo ERP ونقطة بيع فرع الجادرية...' },
    { time: '00:00.650', type: 'success', text: '✅ تم تحديث المخزون: متبقي (14 قطعة) في جميع القنوات.' },
    { time: '00:00.820', type: 'info', text: '🤖 تفعيل بوت الواتساب العراقي لتأكيد العنوان (حي الجامعة - شارع 14)...' },
    { time: '00:01.100', type: 'success', text: '🚚 تم تأكيد الموقع الجغرافي وتوليد بوليصة الشحن لدى شركة التوصيل.' },
    { time: '00:01.250', type: 'success', text: '🎉 اكتملت الدورة الآلية كلياً خلال 1.25 ثانية فقط! (Zero Discrepancies).' }
  ] : [
    { time: '00:00.012', type: 'info', text: '📥 Received new order #RBT-98241 from Storefront / POS...' },
    { time: '00:00.145', type: 'info', text: '💳 Invoking ZainCash Direct API for financial settlement...' },
    { time: '00:00.320', type: 'success', text: '✅ Settlement verified: 150,000 IQD received (TXID: ZC-8821903).' },
    { time: '00:00.410', type: 'info', text: '📦 Sending stock deduction command to Odoo ERP & Jadriya POS...' },
    { time: '00:00.650', type: 'success', text: '✅ Inventory synchronized: (14 items remaining) across channels.' },
    { time: '00:00.820', type: 'info', text: '🤖 Triggering Iraqi Dialect WhatsApp Bot for address verification...' },
    { time: '00:01.100', type: 'success', text: '🚚 Geo-location confirmed & dispatch waybill created for courier.' },
    { time: '00:01.250', type: 'success', text: '🎉 Automated workflow cycle completed in 1.25s! (Zero Discrepancies).' }
  ];

  logContainer.innerHTML = '';
  steps.forEach((step, index) => {
    setTimeout(() => {
      const line = document.createElement('div');
      line.className = `sim-log-line sim-log-${step.type}`;
      line.innerHTML = `<span class="sim-log-time">[${step.time}]</span> ${step.text}`;
      logContainer.appendChild(line);
      logContainer.scrollTop = logContainer.scrollHeight;
    }, index * 350);
  });
}
