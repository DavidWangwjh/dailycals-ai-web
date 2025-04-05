import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center p-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
            The Simplest AI Calories Tracker
        </h1>
        <p className="w-4/5 text-xl mb-8">
            Discover the simplicity of daily calorie tracking powered by AI. Simply capture a photo of your meal and receive immediate, accurate nutrition insights.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-8">
            <div className="relative w-80 h-[520px]">
                <Image
                    src="/app-home.png"
                    alt="App Home"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div className="relative w-80 h-[520px]">
                <Image
                    src="/app-detail.png"
                    alt="App Detail"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </div>
    </section>
  );
};