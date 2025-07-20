// src/app/page.tsx
"use client";

// import TopNavbar from "./components/Topnarbar"; // ตรวจสอบชื่อไฟล์และ path ให้ตรง

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      {/* Header */}
      {/* <header className="sticky top-0 z-50 bg-gray-800 text-white">
        <TopNavbar />
      </header> */}

      {/* Main content */}
      <main className="flex flex-col p-5 pl-20 pr-20 gap-10">
        <div>
          <section className="promote">
            <Image
              src="/promote.jpeg"
              alt="Promotional Banner"
              width={2000}
              height={100}
              className="w-full h-100 object-cover"
            />
          </section>

          <section className="productnew p-4">
            <h2 className="pt-3 pb-4">
              <strong className="bg-red-600 p-1">NEW</strong>สินค้ามาใหม่
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 text-center hover:shadow-md transition shadow-md"
                >
                  <Image
                    src="/promote.jpeg" // ใช้ภาพเดียวกันทุกช่อง
                    alt={`Product `}
                    width={200}
                    height={200}
                    className="mx-auto object-cover rounded"
                  />
                  <p className="mt-2 font-medium text-black text-start flex flex-col">
                    <span>฿ 1,000</span>
                    <span>Reciver Card</span>
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <section className="introweb flex flex-col gap-3 bg-white p-3 text-black">
          <h2>ยินดีต้อนรับเข้าสู่เว็บไซต์ของเรา</h2>
          <p>
            บริษัทของเราผู้เชี่ยวชาญด้านจอ LED Module มีประสบการณ์มากกว่า 20 ปี
            และระบบควบคุมภาพแบบครบวงจร เราให้บริการจำหน่ายอุปกรณ์คุณภาพสูง เช่น
            จอ LED Module, Processor, Sender Card, Receiver Card
            และคอมพิวเตอร์สำหรับควบคุมภาพ พร้อมบริการออกแบบ วางแผน
            และติดตั้งระบบจอ LED โดยทีมงานมืออาชีพ
          </p>
          <p>
            เรามีทีมที่ปรึกษาพร้อมให้คำแนะนำฟรี สำหรับลูกค้าที่สนใจติดตั้งจอ LED
            ทั้งในภาครัฐและเอกชน
            ครอบคลุมตั้งแต่การเลือกอุปกรณ์ให้เหมาะสมกับพื้นที่
            ไปจนถึงการติดตั้งจริง
            พร้อมการรับประกันและบริการหลังการขายที่ครอบคลุมภายใต้เงื่อนไขที่กำหนด
          </p>
          <p>
            นอกจากนี้ เรายังให้บริการติดตั้งจอ LED และจัดงานอีเวนต์แบบครบวงจร
            รวมถึงบริการให้เช่าจอ LED Module สำหรับงานทุกประเภท
            โดยให้บริการครอบคลุม ทั่วราชอาณาจักรไทย
            ทั้งในส่วนของงานติดตั้งถาวรและงานอีเวนต์ชั่วคราว
            ด้วยทีมงานมากประสบการณ์ รวดเร็ว ตรงเวลา และเป็นมืออาชีพ
          </p>
          <p>
            หากคุณกำลังมองหาโซลูชันด้านจอ LED ที่เชื่อถือได้ ครบ จบในที่เดียว
            ไม่ต้องเสียเวลาหาหลายที่ เราคือตัวเลือกที่ดีที่สุด
            พร้อมให้ราคาที่คุ้มค่า บริการที่ดีเยี่ยม และการดูแลที่คุณวางใจได้
          </p>
        </section>
        <section className="brandsupport bg-white">
          <h2 className="pt-5 pb-5 ml-5">
            <strong>Brand Support</strong>
          </h2>
          <div className="flex justify-evenly">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="">
                <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden mx-auto border-2 border-black">
                  <Image
                    src="/BrandSupport.png"
                    alt={`Brand Support ${index + 1}`}
                    fill
                    className=""
                  />
                </div>
                <p className="mt-2 font-medium text-black text-center">
                  Nova Start
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="archive bg-white">
          <h2 className="pt-5 pb-5 ml-5">
            <strong>ผลงาน</strong>
          </h2>
          <div className="flex justify-evenly">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="">
                <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden mx-auto border-2 border-black">
                  <Image
                    src="/Archivement.jpg"
                    alt={`Brand Support ${index + 1}`}
                    fill
                    className=""
                  />
                </div>
                <p className="mt-2 font-medium text-black text-center">
                  ผลงานที่ {index + 1}
                </p>
              </div>
            ))}
          </div>
        </section>
          <h1 className="p-5 text-2xl text-center">Most Seller</h1>
          <section className="mostsell grid grid-cols-2 md:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-4 text-center border hover:shadow-md transition "
                >
                  <Image
                    src="/promote.jpeg" // ใช้ภาพเดียวกันทุกช่อง
                    alt={`Product `}
                    width={200}
                    height={200}
                    className="mx-auto object-cover rounded"
                  />
                  <p className="mt-2 font-medium text-black text-start flex flex-col">
                    <span>฿ 1,000</span>
                    <span>Reciver Card</span>
                  </p>
                </div>
              ))}
          </section>

          <section className="normalproduct">
            <h1 className="p-5 text-2xl text-center">Normal Product</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Array.from({ length: 15 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-4 text-center border hover:shadow-md transition "
                >
                  <Image
                    src="/promote.jpeg" // ใช้ภาพเดียวกันทุกช่อง
                    alt={`Product `}
                    width={200}
                    height={200}
                    className="mx-auto object-cover rounded"
                  />
                  <p className="mt-2 font-medium text-black text-start flex flex-col">
                    <span>฿ 1,000</span>
                    <span>Reciver Card</span>
                  </p>
                </div>
              ))}
            </div>
          </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        <p>&copy; 2023 BuriThai. All rights reserved.</p>
      </footer>
    </div>
  );
}
