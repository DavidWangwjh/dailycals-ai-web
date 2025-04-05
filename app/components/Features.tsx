export default function Features() {
    return (
        <section className="py-12 bg-gray-50">
            <h2 className="text-3xl text-center mb-8">Features</h2>
            <div className="flex flex-col md:flex-row justify-around gap-8 px-4">
                <div className="flex-1 text-center">
                    <h3 className="text-2xl font-semibold mb-2">Feature One</h3>
                    <p>Description for feature one.</p>
                </div>
                <div className="flex-1 text-center">
                    <h3 className="text-2xl font-semibold mb-2">Feature Two</h3>
                    <p>Description for feature two.</p>
                </div>
                <div className="flex-1 text-center">
                    <h3 className="text-2xl font-semibold mb-2">Feature Three</h3>
                    <p>Description for feature three.</p>
                </div>
            </div>
        </section>
    );
};