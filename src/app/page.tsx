"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="floatingGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Products", id: "products" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Cake Crafts"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      title="Crafting Memories with Every Bite"
      description="Cake Crafts provides exceptional bespoke cakes that combine stunning visual artistry with rich, delicious flavours. Customised for your special occasions in Pune."
      testimonials={[
        { name: "Kishan Salve", handle: "@kishan", testimonial: "Everyone wanted to know where we got it. It was really tasty.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-woman-serving-pastry-cake-female-customer-coffee-shop_23-2148028059.jpg" },
        { name: "Shravani P", handle: "@shravani", testimonial: "Cake texture is perfect and taste is also good.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/curly-girl-with-beatiful-smile-keeping-cup-coffee-looking-camera_7502-9179.jpg" },
        { name: "Arjun Mehta", handle: "@arjun", testimonial: "The design was exactly what we envisioned for our anniversary.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/dessert-with-my-best-friend-tastes-doubly-well_329181-2937.jpg" },
        { name: "Deepa Rao", handle: "@deepa", testimonial: "Absolutely professional and prompt service every single time.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/laughing-young-lady-sitting-posing-near-cupcakes_171337-14180.jpg" },
        { name: "Vikram Singh", handle: "@vikram", testimonial: "Hands down the best bakery experience in Kharadi.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/photo-positive-young-woman-with-curly-hair-holds-appetizing-cake-with-raspberries-enjoys-eating-sweet-creamy-food-closes-eyes-from-satisfaction-dressed-pink-formal-jacket-eating-dessert_273609-60933.jpg" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB1yVZY3e5YuyRHOXIu2F1hkx9/uploaded-1777740966699-7cfjr6dt.jpg?_wi=1"
      mediaAnimation="blur-reveal"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/holidays-celebration-dreamy-birthday-girl-making-wish-looking-up-hopeful-holding-bday-cake_1258-117410.jpg", alt: "Customer 1" },
        { src: "http://img.b2bpic.net/free-photo/portrait-waitress-holding-tray-muffins-counter_107420-12317.jpg", alt: "Customer 2" },
        { src: "http://img.b2bpic.net/free-photo/happy-father-giving-thumbs-up-while-holding-plate-muffins_23-2148414896.jpg", alt: "Customer 3" },
        { src: "http://img.b2bpic.net/free-photo/smiling-waitress-holding-tray_23-2147985012.jpg", alt: "Customer 4" },
        { src: "http://img.b2bpic.net/free-photo/expressive-senior-woman-posing_344912-2978.jpg", alt: "Customer 5" },
      ]}
      marqueeItems={[
        { type: "text", text: "Premium Quality" },
        { type: "text", text: "Custom Designs" },
        { type: "text", text: "Freshly Baked" },
        { type: "text", text: "Pune's Best" },
        { type: "text", text: "Memorable Cakes" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Our Passion for Perfection"
      description="Located in Kharadi, Cake Crafts specializes in hand-crafted, designer cakes that define indulgence. We believe every celebration deserves a unique masterpiece created with fresh, premium ingredients and artistic precision."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB1yVZY3e5YuyRHOXIu2F1hkx9/uploaded-1777740966699-pj2wu200.jpg?_wi=1"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="one-large-left-three-stacked-right"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Chocolate Truffle Cake", price: "₹480", variant: "Small", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB1yVZY3e5YuyRHOXIu2F1hkx9/uploaded-1777740966699-pj2wu200.jpg?_wi=2", onProductClick: () => { window.location.href = '#contact'; } },
        { id: "p2", name: "Coffee Moka Cake", price: "₹550", variant: "Medium", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB1yVZY3e5YuyRHOXIu2F1hkx9/uploaded-1777740966699-7cfjr6dt.jpg?_wi=2", onProductClick: () => { window.location.href = '#contact'; } },
        { id: "p3", name: "KitKat Cake", price: "₹650", variant: "Large", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB1yVZY3e5YuyRHOXIu2F1hkx9/uploaded-1777740966699-uusuad9u.jpg?_wi=1", onProductClick: () => { window.location.href = '#contact'; } },
        { id: "p4", name: "Roasted Almond Cake", price: "₹550", variant: "Small", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB1yVZY3e5YuyRHOXIu2F1hkx9/uploaded-1777740966699-977ovp54.jpg?_wi=1", onProductClick: () => { window.location.href = '#contact'; } },
        { id: "p5", name: "Swiss Chocolate Cake", price: "₹450", variant: "Small", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB1yVZY3e5YuyRHOXIu2F1hkx9/uploaded-1777740966699-46x641cp.jpg?_wi=1", onProductClick: () => { window.location.href = '#contact'; } },
        { id: "p6", name: "Tiramisu Cake", price: "₹750", variant: "Large", imageSrc: "http://img.b2bpic.net/free-photo/smiling-pretty-girl-model-standing-pointing-cabbage_114579-74356.jpg?_wi=1", onProductClick: () => { window.location.href = '#contact'; } },
      ]}
      buttons={[{ text: "Order Now", href: "#contact" }]}
      title="Signature Creations"
      description="Explore our range of artisanal cakes baked to perfection."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-items-per-row"
      useInvertedBackground={false}
      features={[
        { title: "Bespoke Designs", description: "Customized art to match your theme.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB1yVZY3e5YuyRHOXIu2F1hkx9/uploaded-1777740966699-uusuad9u.jpg?_wi=2" },
        { title: "Fresh Quality", description: "Fresh ingredients for best taste.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB1yVZY3e5YuyRHOXIu2F1hkx9/uploaded-1777740966699-977ovp54.jpg?_wi=2" },
        { title: "On-Time Delivery", description: "Timely arrival for every event.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB1yVZY3e5YuyRHOXIu2F1hkx9/uploaded-1777740966699-46x641cp.jpg?_wi=2" },
      ]}
      title="Why Choose Cake Crafts?"
      description="Our commitment to quality, creativity, and customer satisfaction sets us apart."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      textboxLayout="default"
      useInvertedBackground={false}
      animationType="slide-up"
      testimonials={[
        { id: "1", name: "Anika", handle: "@anika", testimonial: "Beautiful work, tasted as good as it looked!", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB1yVZY3e5YuyRHOXIu2F1hkx9/uploaded-1777741321525-7xf952g2.jpg" },
        { id: "2", name: "Siddharth", handle: "@sid", testimonial: "Professional and super friendly service.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB1yVZY3e5YuyRHOXIu2F1hkx9/uploaded-1777741321526-lnprg8pk.jpg" },
        { id: "3", name: "Priya", handle: "@priya", testimonial: "Reliable on-time delivery for my party.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB1yVZY3e5YuyRHOXIu2F1hkx9/uploaded-1777741321526-41xcgbu1.jpg" },
        { id: "4", name: "Rahul", handle: "@rahul", testimonial: "Excellent flavor profiles, truly customized.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB1yVZY3e5YuyRHOXIu2F1hkx9/uploaded-1777741321526-huyqfnyh.jpg" },
        { id: "5", name: "Sneha", handle: "@sneha", testimonial: "The best custom cake studio in Pune!", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB1yVZY3e5YuyRHOXIu2F1hkx9/uploaded-1777741321526-neqwtlve.jpg" },
      ]}
      showRating={true}
      title="Loved by Our Community"
      description="See why our customers keep coming back for more."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Impact in Numbers"
      tag="Trusted Quality"
      metrics={[
        { id: "m1", value: "890+", description: "Happy Customers" },
        { id: "m2", value: "100%", description: "Fresh Ingredients" },
        { id: "m3", value: "5.0", description: "Average Rating" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Do you deliver?", content: "Yes, we offer on-time delivery across Pune." },
        { id: "f2", title: "Can I request custom designs?", content: "Absolutely! Customization is our specialty." },
        { id: "f3", title: "How far in advance should I order?", content: "We recommend ordering at least 48 hours prior." },
      ]}
      title="Frequently Asked Questions"
      description="Have questions about our cake services?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Get in touch"
      title="Let's Bake Something Special"
      description="Reach out to us today to order your customized masterpiece."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB1yVZY3e5YuyRHOXIu2F1hkx9/uploaded-1777740966699-pj2wu200.jpg?_wi=3"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        { title: "Explore", items: [{ label: "About Us", href: "#about" }, { label: "Our Menu", href: "#products" }] },
        { title: "Support", items: [{ label: "FAQ", href: "#faq" }, { label: "Contact Us", href: "#contact" }] },
      ]}
      logoText="Cake Crafts"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}