import { Home, Users, Heart, Coffee, Shield, Sparkles } from "lucide-react";

export default function HomeOffers() {
  const offers = [
    {
      icon: Home,
      title: "Private & Shared Rooms",
      description:
        "Comfortable accommodation in a quiet, healing environment designed for rest and recovery.",
    },
    {
      icon: Shield,
      title: "On-site General Assistant",
      description:
        "Dedicated support staff available to help with daily needs and provide assistance when needed.",
    },
    {
      icon: Heart,
      title: "Companion Support",
      description:
        "Guests are welcome to bring a relative or emotional support companion on their healing journey.",
    },
    {
      icon: Users,
      title: "Community & Companionship",
      description:
        "Connect with other women on similar journeys in a supportive and understanding environment.",
    },
    {
      icon: Coffee,
      title: "Shared Living Spaces",
      description:
        "Access to comfortable common areas including kitchen, living room, and wellness spaces.",
    },
    {
      icon: Sparkles,
      title: "Healing Environment",
      description:
        "A peaceful atmosphere that eases the burden of travel, financial strain, and isolation.",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 inline-block relative">
          <span className="relative inline-block pb-2">
            What the Home Offers
            <span className="block absolute left-1/2 -translate-x-1/2 bottom-0 w-11/12 h-2 bg-[#1e8e9d] rounded"></span>
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-gray-600">
          By easing the burden of travel, financial strain, and isolation, our
          housing program helps women regain strength, feel supported, and walk
          their healing journey with dignity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer, index) => {
          const IconComponent = offer.icon;
          return (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <IconComponent className="w-8 h-8 text-primary-foreground text-[#1e8e9d]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {offer.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-gray-600">
                {offer.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
