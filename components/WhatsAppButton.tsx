import Image from 'next/image';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/2975555555" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 transition-all hover:scale-110 flex items-center justify-center"
            aria-label="Chat with us on WhatsApp"
        >
            <Image
                src="/whatsapp.svg"
                alt="WhatsApp"
                width={60}
                height={60}
                className="drop-shadow-lg"
            />
        </a>
    );
};

export default WhatsAppButton;
