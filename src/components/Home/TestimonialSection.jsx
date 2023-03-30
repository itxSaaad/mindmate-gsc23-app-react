import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.",
    },
    {
      id: 2,
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.",
    },
    {
      id: 3,
      name: "Bob Smith",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      rating: 3,
      comment: "Amet consectetur adipisicing elit.",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            clipRule="evenodd"
          />
        </svg>
      );
    }

    return stars;
  };

  return (
    <section className="min-h-screen h-auto">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Testimonials
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              className="rounded-lg bg-gray-100 p-8"
            >
              <div className="flex items-center gap-4">
                <img
                  alt={testimonial.name}
                  src={testimonial.image}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    {renderStars(testimonial.rating)}
                  </div>

                  <p className="mt-1 text-lg font-bold text-gray-700">
                    {testimonial.name}
                  </p>
                </div>
              </div>

              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                {testimonial.comment}
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
