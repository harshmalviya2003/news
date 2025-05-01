

const RightSidebar = () => {
  return (
    <aside className="bg-[#18191A] shadow-lg z-40 text-white">
      <div className="fixed top-16 right-30 h-[calc(100vh-70px)] w-56 overflow-y-auto scrollbar-hide p-4 hidden md:block text-center">
        <div className="text-xs space-y-2">
          <div className="flex justify-center mb-2">
            <span className="mx-1">•</span>
            <span className="mx-1">•</span>
            <span className="mx-1">•</span>
          </div>
          <p>Advertise with Us | DB Reporter | Sitemap</p>
          <p>Terms & Conditions and Grievance Redressal Policy | Contact Us | RSS | Cookie Policy | Privacy Policy</p>
          <p>DainikBhaskar.com</p>
          <p>DivyaBhaskar.com</p>
          <p>BhaskarEnglish.in</p>
          <p>DivyaMarathi.com</p>
          <p>MoneyBhaskar.com</p>
          <p>BhaskarAd.com</p>
          <p className="mt-4">Copyright © 2024-25 DB Corp Ltd. All Rights Reserved</p>
          <p>This website follows the DNPA Code of Ethics.</p>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;