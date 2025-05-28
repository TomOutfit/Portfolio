import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-[#1e1e1e] dark:to-[#111] text-gray-800 dark:text-white px-6 sm:px-12 py-12 font-sans flex flex-col items-center justify-center">
      {/* Avatar + Info */}
      <div className="flex flex-col sm:flex-row items-center gap-8 w-full max-w-4xl">
        <Image
          src="/avatar.png" // nhớ để file avatar.png trong thư mục public
          alt="Avatar"
          width={150}
          height={150}
          className="rounded-full shadow-lg ring-4 ring-blue-200 dark:ring-blue-500"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-2">Đinh Ngoc Thiện</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            👨‍💻 Lập trình viên Backend.. Yêu thích thiết kế hiện đại, tối giản và
            hiệu quả.
          </p>
        </div>
      </div>

      {/* About */}
      <section className="mt-12 max-w-3xl w-full text-center sm:text-left">
        <h2 className="text-2xl font-semibold mb-3">📝 Giới thiệu</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Mình là Thiện sống tại Quy Nhơn, Tailwind CSS và hệ sinh thái Next.js.
          Thích tạo ra những trải nghiệm người dùng mượt mà và dễ dùng. Ngoài
          ra, mình còn có kinh nghiệm với backend (Node.js, Express, MongoDB) để
          xây dựng API và các ứng dụng web fullstack. Ngoài công việc, mình
          thích đọc sách và chơi thể thao.
        </p>
      </section>

      {/* Skills */}
      <section className="mt-10 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold mb-3 text-center sm:text-left">
          🛠️ Kỹ năng
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800 dark:text-gray-200">
          <Skill name="React" />
          <Skill name="Next.js" />
          <Skill name="Tailwind CSS" />
          <Skill name="TypeScript" />
          <Skill name="Node.js" />
          <Skill name="Express" />
          <Skill name="MongoDB" />
          <Skill name="Git/GitHub" />
          <Skill name="Figma" />
        </ul>
      </section>

      {/* Contact */}
      <section className="mt-10 max-w-3xl w-full text-center sm:text-left">
        <h2 className="text-2xl font-semibold mb-3">📬 Liên hệ</h2>
        <p>
          Email:{" "}
          <a
            className="text-blue-600 dark:text-blue-400 underline"
            href="mailto:nguyenvana@example.com"
          >
            dinhngocthien2004@gmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            className="text-blue-600 dark:text-blue-400 underline"
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noreferrer"
          >
            dinhngocthien
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            className="text-blue-600 dark:text-blue-400 underline"
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/yourlinkedin
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-500 dark:text-gray-400 text-center">
        © 2025 Đinh Ngoc Thiện. All rights reserved.
      </footer>
    </div>
  );
}

function Skill({ name }: { name: string }) {
  return (
    <li className="bg-white dark:bg-gray-800 rounded-xl shadow p-3 text-center hover:scale-105 transition-transform font-medium cursor-default">
      {name}
    </li>
  );
}
