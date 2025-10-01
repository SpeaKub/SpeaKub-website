// ...existing imports...
import React, { useState, useEffect } from "react";


// Testimonial data
const testimonials = [
  {
    name: "Ayush Pathak (1st year MS student)",
    text: "She has been very patient and understanding, focusing on my weak areas and giving me helpful exercises and advice. She actively works with me to fix issues, and her support has really been helping to fix gaps between my thoughts and the communication.",
  },
  {
    name: "Garima Sharma (1st year law student)",
    text: "I really appreciate your work and experience which you have shared with us. Your teaching style was superb and very easy to understand. Thanks for giving us great knowledge!!!",
  },
  {
    name: "Japneet Kaur (12th standard student)",
    text: "I really enjoyed the classes by ms sahej hira...the classes helped me to improve my fluency and interaction....she always corrected my mistakes wherever I was wrong and helped me to become more confident. I was really hesitant at first but she saw my fears and helped me overcome it.",
  },
  {
    name: "Ravpreet Singh (Final year BCA student)",
    text: "English was always a challenge for me, especially in group discussions. These sessions helped me structure my thoughts, build vocabulary, and practice real-life scenarios. I now feel more confident speaking in class or with professors. I’m grateful to Miss Hira for tailoring the sessions to my needs instead of teaching a generic course.",
  },
  {
    name: "Payal Gnotra (B.Tech grad/fresher)",
    text: "I've taken plenty of unofficial English classes over the years, and I highly recommend giving SpeakUp a try. What sets it apart is the focus on real-world conversational practice. My speaking confidence has improved noticeably. If you're looking to move past rote memorization and actually use your English, this is the place to be. Highly satisfied!",
  },
  {
    name: "Vivek Bhahat (Final year B.Tech student )",
    text: "Great place to build up confidence in speaking",
  },
];

// Full-width photo album carousel
const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Autoscroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center relative py-16 min-h-[340px]">
      <div className="w-full flex justify-center items-center relative h-[300px]">
        {testimonials.map((testimonial, idx) => {
          // Photo album effect
          const offset = idx - current;
          let zIndex = testimonials.length - Math.abs(offset);
          let scale = offset === 0 ? "scale-100" : "scale-90";
          let opacity = offset === 0 ? "opacity-100" : "opacity-60";
          let translateX = offset * 60; // px
          let blur = offset === 0 ? "" : "blur-sm";
          let boxShadow =
            offset === 0
              ? "shadow-xl shadow-purple-300"
              : "shadow-md shadow-gray-400";

          return (
          <div
            key={idx}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${scale} ${opacity} ${blur} ${boxShadow}`}
            style={{
              zIndex,
              transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${offset === 0 ? 1 : 0.9})`,
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              display: "flex",
              pointerEvents: offset === 0 ? "auto" : "none",
            }}
          >
            <div className="bg-white rounded-xl p-4 sm:p-8 flex flex-col items-center border-2 border-purple-300 min-h-[220px] w-full overflow-y-auto" style={{maxHeight: "500px"}}>
              <p className="text-base sm:text-lg text-gray-800 italic mb-4 text-center whitespace-pre-line break-words">
                "{testimonial.text}"
              </p>
              <span className="font-semibold text-purple-600">
                {testimonial.name}
              </span>
            </div>
          </div>
          );
        })}
        {/* Navigation buttons */}
        <button
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-purple-300 text-black rounded-full px-4 py-2 shadow-md hover:bg-sky-400 transition z-50"
          onClick={prevTestimonial}
        >
          &#8592;
        </button>
        <button
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-purple-300 text-black rounded-full px-4 py-2 shadow-md hover:bg-sky-400 transition z-50"
          onClick={nextTestimonial}
        >
          &#8594;
        </button>
      </div>
      {/* Dots */}
      <div className="flex gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-purple-400" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};



// const Portfolio = () => {
//   return (
//     <div
//       id="portfolio"
//       className="bg-gradient-to-b from-black via-black to-sky-300 w-full text-white min-h-screen"
//     >
//       <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
//         {/* Testimonials Section */}
//         <div className="flex flex-col items-center mb-16 w-full">
//           <h2 className="text-5xl font-bold text-center mb-4 tracking-tight">
//             User Experience
//           </h2>
//           <p className="text-lg text-center text-gray-200 mb-8 max-w-2xl">
//             Discover what our users have to say about their journey with speaKub.<br />
//             These testimonials showcase our best reputation, gallery, and memories—each story a step toward confident communication.
//           </p>
//           <TestimonialCarousel />
//         </div>


//       </div>
//     </div>
//   );
// };

export default TestimonialCarousel;