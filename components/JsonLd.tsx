export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "모아 청년 협동조합",
        "url": "https://moacoop.co.kr",
        "logo": "https://moacoop.co.kr/images/logo.webp",
        "description": "청년 전문가들이 모여 만드는 사회적 가치. 집수리 봉사, 주거환경개선, 시설 유지보수, 그리고 IT/AI 솔루션 모아름까지.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "경상남도 김해시 김해대로 2301번길 11, 2층",
            "addressLocality": "Gimhae-si",
            "addressRegion": "Gyeongsangnam-do",
            "postalCode": "50938",
            "addressCountry": "KR"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+82-10-0000-0000", // TODO: 대표 전화번호 업데이트 필요
            "contactType": "customer service",
            "email": "moa@moacoop.co.kr"
        },
        "sameAs": [
            "https://moacoop.co.kr",
            // "https://www.instagram.com/yourprofile", // TODO: SNS 프로필 URL 추가
            // "https://www.facebook.com/yourprofile"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
