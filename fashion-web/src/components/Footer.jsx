import { FaFacebook, FaInstagramSquare, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="w-full bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:text-left">
              <h1 className="text-4xl font-bold">404 Studio</h1>
              <p className="mt-3">
                404 Studio là một "lỗi hệ thống" đầy nghệ thuật từ Việt Nam, nơi
                những thiết kế Streetwear độc bản thách thức mọi giới hạn để
                định nghĩa lại cái tôi khác biệt.
              </p>
            </div>

            <div className="md:text-right">
              <h1 className=" text-4xl font-bold">Thông tin shop</h1>
              <div className="mt-3 space-y-1">
                <p>Số 12 - Nguyễn Văn Bảo, Phường Hạnh Thông, Thành phố Hồ Chí Minh</p>
                <p>(+84) 38940390</p>
                <p>404.studio@gmail.com.vn</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-between my-2">
            <div className="text-left"> 
                <h2 className="text-2xl font-bold">SHOP</h2>
                <ul>
                  <a href=""><li>Mới nhất</li></a>
                  <a href=""><li>Nam</li></a>
                  <a href=""><li>Nữ</li></a>
                  <a href=""><li>Bộ sưu tập</li></a>
                  <a href=""><li>Sale</li></a>
                </ul>
            </div>
            <div className=""> 
                <h2 className="text-2xl font-bold">Hỗ trợ</h2>
                <ul>
                  <a href=""><li>Chính sách đổi trả</li></a>
                  <a href=""><li>Hướng dẫn chọn size</li></a>
                  <a href=""><li>Vận chuyển & Thanh toán</li></a>
                  <a href=""><li>FAQ</li></a>
                  <a href=""><li>Liên hệ</li></a>
                </ul>
            </div>
            <div className="text-right "> 
              <h2 className="text-2xl font-bold">Công ty</h2>
                <ul>
                  <a href=""><li>Về chúng tôi</li></a>
                  <a href=""><li>Tuyển dụng</li></a>
                  <a href=""><li>Chính sách bảo mật</li></a>
                  <a href=""><li>Điều khoản dịch vụ</li></a>
                  <li className="flex justify-between gap-4 text-3xl">
                    <a href="#"><FaFacebook /></a> 
                    <a href="#"><FaInstagramSquare /></a> 
                    <a href="#"><FaTiktok /></a> 
                  </li>
                </ul>
            </div>
          </div>
          <hr />
          <div className="my-2">
            <p>Copyright © 2026 404 Studio. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
