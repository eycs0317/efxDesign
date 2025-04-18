import Card from './card';

export default function CardSection() {
  return (
    <section>
      <h1 className="text-3xl">Our Services</h1>
      <div className="flex justify-center items-center gap-6">
        <Card
          title="Customer Website Design"
          image="/assets/i/icons/image1.png"
          description="We create visually appealing and user-friendly websites that help your Business stand out in the digital world"
        />
        <Card
          title="Customer Website Design"
          image="/assets/i/icons/image2.png"
          description="We create visually appealing and user-friendly websites that help your Business stand out in the digital world"
        />
        <Card
          title="Customer Website Design"
          image="/assets/i/icons/image3.png"
          description="We create visually appealing and user-friendly websites that help your Business stand out in the digital world"
        />
      </div>
    </section>
  );
}
