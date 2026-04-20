import SectionHeading from "@/components/Helper/SectionHeading";
import { highlights } from "@/data";
import Image from "next/image";

const About = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      {/* Section heading */}
      <SectionHeading
        title_1="About"
        title_2="Me"
        description="Get to know the developer behind the code"
      />
      <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden p-2">
            <Image
              src={"/images/user.png"}
              alt="profile"
              width={700}
              height={700}
              className="w-full h-full object-center rounded-xl"
            />
          </div>
        </div>
        {/*Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-anchor-placement="top-center"
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">
            A passionate developer who loves to create
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            I’m a MERN stack developer specializing in building scalable web
            applications using React.js, Node.js, Express, and MongoDB. I’ve
            built full-stack projects like a Learning Management System with
            secure authentication and Razorpay integration, and an e-commerce
            platform with advanced search, filtering, and 200+ products.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I focus on writing efficient code, optimizing API performance, and
            delivering smooth user experiences. Currently, I’m looking for
            opportunities to work on real-world projects and grow as a
            full-stack developer.
          </p>
          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {highlights.map((item) => {
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
