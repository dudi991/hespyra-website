/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  de: {
    // Hero
    'hero.slogan': 'NICHT FÜR DEN SCHLAF.\nFÜR DEN MOMENT DAVOR.',
    'hero.title': 'Feierabend beginnt im Kopf.',
    'hero.desc': 'HESPYRA ist ein trinkbares Abendritual.\nFür den Moment, in dem der Tag leiser wird.',
    'hero.cta': 'EINLADUNG ERHALTEN',
    'hero.benefit1': 'Mentales Entlasten',
    'hero.benefit2': 'Regeneration',
    'hero.benefit3': 'Innere Stille',

    // BenefitStrip - Variant B
    'benefits.tag': 'Der Abend beginnt nicht plötzlich.',
    'benefits.title1': 'Lösen',
    'benefits.desc1': 'Der Tag darf zurücktreten.',
    'benefits.title2': 'Sammeln',
    'benefits.desc2': 'Die Aufmerksamkeit kehrt zurück.',
    'benefits.title3': 'Ankommen',
    'benefits.desc3': 'Der Abend wird erreichbar.',

    // Philosophy / CustomerStory
    'philosophy.tag': 'DER ÜBERGANG',
    'philosophy.title': 'Der Abend ist da.\nAber noch nicht ganz erreichbar.',
    'philosophy.text1': 'Manchmal endet der Tag äußerlich früher als innerlich.\nDer Raum wird ruhiger, das Licht weicher, die Aufgaben weniger sichtbar.',
    'philosophy.text2': 'Und trotzdem bleibt etwas vom Tag im Kopf:\nGespräche, Entscheidungen, Nachrichten, offene Schleifen.',
    'philosophy.text3': 'HESPYRA beginnt dort, wo der Tag noch nachwirkt.',

    // EditorialPause
    'pause.part1': 'Nicht alles muss mit',
    'pause.part2': 'in',
    'pause.part3': 'den Abend.',

    // Ritual
    'ritual.tag': 'DAS RITUAL · DREI SCHRITTE',
    'ritual.title': 'Ein kleiner Moment, in drei Teilen.',
    'ritual.desc': 'Genug, um den Abend zu beginnen. Warm, weich, zurückhaltend — nicht süß, nicht schwer, nicht laut.',
    'ritual.clarity_line1': 'Ein trinkbares Ritual in Pulverform.',
    'ritual.clarity_line2': 'Für den Moment, in dem der Tag zurücktreten darf.',
    'ritual.step1_tag': 'Lösen',
    'ritual.step1_text': 'Ein Löffel ins Glas.\nWarmes Wasser oder Pflanzenmilch.\nDer Tag darf leiser werden.',
    'ritual.step2_tag': 'Sammeln',
    'ritual.step2_text': 'Rühren. Atmen. Das Glas halten.\nDie Gedanken sammeln sich.\nDer Moment wird klarer.',
    'ritual.step3_tag': 'Ankommen',
    'ritual.step3_text': 'Das Glas wird leerer.\nDer Tag tritt zurück.\nDu kommst im Abend an.',
    'ritual.alt': 'HESPYRA Abendritual Zubereitung Schritt',

    // Ingredients
    'ingredients.tag': 'DIE REZEPTUR',
    'ingredients.title': 'Eine ruhige Komposition für den Abend.',
    'ingredients.desc': 'Mineralstoffe, Aminosäuren, Pflanzenstoffe und warme Geschmacksnoten — ausgewählt für ein trinkbares Abendritual.',
    'ingredients.list_label': 'Die Bestandteile der Komposition',
    
    // Ingredients Groups (German)
    'ing.group_ruhe_tag': 'Mineralstoffe',
    'ing.group_ruhe_title': 'Lösen',
    'ing.group_ruhe_desc': 'Für den Moment, in dem der Tag zurücktreten darf.',
    
    'ing.group_balance_tag': 'Pflanzenextrakte',
    'ing.group_balance_title': 'Sammeln',
    'ing.group_balance_desc': 'Ausgewählte Pflanzenextrakte und Aminosäuren für mehr innere Sammlung.',
    
    'ing.group_ritual_tag': 'Geschmack & Ritual',
    'ing.group_ritual_title': 'Ankommen',
    'ing.group_ritual_desc': 'Warme Noten und vertraute Zutaten, die aus Zubereitung einen stillen Moment des Ankommens machen.',

    // Ingredients descriptions (German)
    'ing.mag_bis': 'Zwei bioaktive Magnesiumformen, gewählt für die Muskelentspannung und Beruhigung des Nervensystems.',
    'ing.theanine': 'Aus grünem Tee. Fördert Alphawellen im Gehirn für mentale Ruhe ohne Müdigkeit.',
    'ing.apigenin': 'Ein natürlicher Pflanzenstoff aus der Kamille. Fördert sanft die Einschlaflust und Entspannung.',
    'ing.ashwa': 'Eine traditionelle Wurzel zur Regulierung des Cortisolspiegels und Minderung von Alltagsstress.',
    'ing.saffron': 'Safran-Extrakt zur Unterstützung der emotionalen Balance und Gelassenheit am Abend.',
    'ing.phosph': 'Aus pflanzlichen Lecithinen. Unterstützt die mentale Regeneration und kognitive Erholung.',
    'ing.reishi': 'Vitalpilz mit Tiefe. Traditionell geschätzt zur Unterstützung der Schlafqualität und des Immunsystems.',
    'ing.glycine': 'Aminosäure mit sanfter Süße, die als Neurotransmitter die Schlafqualität begünstigt.',
    'ing.vanilla': 'Natürliche Bourbon-Vanille und Tonkabohne für ein wärmendes, beruhigendes Geschmackserlebnis.',

    // Ingredients Names (German)
    'ing.name_mag_bis': 'Magnesium Bisglycinat & L-Threonat',
    'ing.name_theanine': 'L-Theanin',
    'ing.name_apigenin': 'Apigenin',
    'ing.name_ashwa': 'Ashwagandha',
    'ing.name_saffron': 'Safran',
    'ing.name_phosph': 'Phosphatidylserin',
    'ing.name_reishi': 'Reishi',
    'ing.name_glycine': 'Glycin',
    'ing.name_vanilla': 'Vanille & Tonka',

    // Trust elements (German)
    'ing.trust1_title': 'HOCHWERTIGE ROHSTOFFE',
    'ing.trust1_desc': 'Sorgfältig ausgewählt.',
    'ing.trust2_title': 'OHNE UNNÖTIGE ZUSÄTZE',
    'ing.trust2_desc': 'Frei von künstlichen Aromen, Farbstoffen & Süßstoffen.',
    'ing.trust3_title': 'PERFEKT KOMBINIERT',
    'ing.trust3_desc': 'Durchdachte Synergien für dein Abendritual.',
    'ing.trust4_title': 'MIT EXPERTISE ENTWICKELT',
    'ing.trust4_desc': 'Entwickelt von Experten für dein Wohlbefinden.',

    // Gallery
    'gallery.tag': 'Abendkultur',
    'gallery.title': 'Abendkultur, neu gedacht.',
    'gallery.desc': 'Nicht als Rückzug.\nSondern als bewusster Übergang in einen Abend,\nder wieder dir gehört.',

    // Waitlist
    'waitlist.tag': 'ABENDKULTUR, NEU GEDACHT',
    'waitlist.title': 'Die erste Edition von HESPYRA.',
    'waitlist.desc': 'Wir öffnen HESPYRA in kleinen Schritten.\nTrage dich ein, wenn du die erste Edition begleiten möchtest –\nmit frühen Einblicken, Abendnotizen und einem ersten Blick auf das Ritual.',
    'waitlist.placeholder': 'E-Mail-Adresse',
    'waitlist.submit': 'DABEI SEIN',
    'waitlist.success': 'Danke. Wir melden uns leise.',
    'waitlist.benefit1_title': 'ERSTE EDITION',
    'waitlist.benefit1_desc': 'Frühe Einblicke zum Start.',
    'waitlist.benefit2_title': 'ABENDNOTIZEN',
    'waitlist.benefit2_desc': 'Gedanken und Bilder aus der Welt von HESPYRA.',
    'waitlist.benefit3_title': 'DAS RITUAL',
    'waitlist.benefit3_desc': 'Ein erster Blick auf Produkt und Komposition.',

    // Why Hespyra & Trust (German)
    'why.tag': 'VERGLEICH',
    'why.title': 'Warum HESPYRA?',
    'why.table_criteria': 'Kriterium',
    'why.table_others': 'Andere Hilfen',
    'why.badge1_title': 'MADE IN GERMANY',
    'why.badge1_desc': 'Laborgeprüfte Qualität',
    'why.badge2_title': '100% VEGAN',
    'why.badge2_desc': 'Ohne künstliche Zusätze',
    'why.badge3_title': 'MELATONINFREI',
    'why.badge3_desc': 'Kein Gewöhnungseffekt',
    'why.badge4_title': 'SYNERGETISCH',
    'why.badge4_desc': 'Bioverfügbare Wirkstoffe',
    'why.row1_label': 'Wirkungsweise',
    'why.row1_hespyra': 'Fördert sanft die körpereigene Entspannung und mentale Klarheit.',
    'why.row1_others': 'Erzwingt Müdigkeit durch Hormone (Melatonin) oder Sedativa.',
    'why.row2_label': 'Der Morgen danach',
    'why.row2_hespyra': 'Klarer Kopf und volle Energie ohne Benommenheit.',
    'why.row2_others': 'Häufige Abgeschlagenheit und Schlaftrunkenheit (Hangover).',
    'why.row3_label': 'Gewöhnungseffekt',
    'why.row3_hespyra': 'Keiner. Ideal für die tägliche Abendroutine geeignet.',
    'why.row3_others': 'Hohes Risiko von Toleranzentwicklung und Abhängigkeit.',
    'why.row4_label': 'Inhaltsstoffe',
    'why.row4_hespyra': 'Reine Pflanzenextrakte, Aminosäuren und bioaktives Magnesium.',
    'why.row4_others': 'Synthetische Füllstoffe, künstliche Aromen oder Hormone.',

    // FAQ (German)
    'faq.tag': 'HÄUFIGE FRAGEN',
    'faq.title': 'Fragen, beantwortet.',
    'faq.q1': 'Ist HESPYRA ein Schlafmittel?',
    'faq.a1': 'Nein. HESPYRA ist kein Schlafmittel. Es ist ein trinkbares Abendritual für den Moment vor dem Schlaf — den Übergang aus dem Tagesmodus in einen ruhigeren Abend.',
    'faq.q2': 'Ist Melatonin enthalten?',
    'faq.a2': 'Nein. HESPYRA ist melatoninfrei. Die Rezeptur ist nicht darauf ausgelegt, Schlaf künstlich einzuleiten, sondern den Abend bewusst beginnen zu lassen.',
    'faq.q3': 'Was unterscheidet HESPYRA von Kapseln oder Gummies?',
    'faq.a3': 'HESPYRA ist ein Drink. Einrühren, trinken, einen Moment setzen. Dadurch wird die Einnahme nicht nur funktional, sondern Teil deiner Abendroutine.',
    'faq.q4': 'Wie schmeckt HESPYRA?',
    'faq.a4': 'Warm, rund und erwachsen — mit Kakao, Vanille und Tonka. Nicht süß-kindlich, nicht schwer, nicht medizinisch.',
    'faq.q5': 'Wie wird HESPYRA zubereitet?',
    'faq.a5': 'Eine Portion wird in Wasser oder Pflanzenmilch eingerührt. HESPYRA kann warm oder kalt getrunken werden.',
    'faq.q6': 'Wann sollte ich HESPYRA trinken?',
    'faq.a6': 'Wenn du den Tag bewusst unterbrechen und deinen Abend beginnen möchtest — zum Beispiel nach der Arbeit, nach dem Essen oder nachdem zuhause langsam Ruhe einkehrt.',
    'faq.q7': 'Wann ist die erste Edition verfügbar?',
    'faq.a7': 'HESPYRA entsteht aktuell in kleinen Schritten. Trage dich in die Warteliste ein, um frühen Zugang zur ersten Edition zu erhalten.',
    'faq.q8': 'Ist HESPYRA vegan?',
    'faq.a8': 'HESPYRA wird vegan entwickelt. Die finale Produktinformation folgt mit der ersten Edition.',

    // Footer
    'footer.about': 'ÜBER UNS',
    'footer.contact': 'KONTAKT',
    'footer.privacy': 'DATENSCHUTZ',
    'footer.imprint': 'IMPRESSUM',
    'navbar.calm_active': 'TAGESMODUS',
    'navbar.calm_inactive': 'ABENDMODUS',
    'preloader.subtitle': 'Der Tag darf leiser werden.'
  },
  en: {
    // Hero
    'hero.slogan': 'NOT FOR SLEEP.\nFOR THE MOMENT BEFORE.',
    'hero.title': 'Evening begins in the mind.',
    'hero.desc': 'HESPYRA is a drinkable evening ritual.\nFor the moment when the day grows quiet.',
    'hero.cta': 'RECEIVE INVITATION',
    'hero.benefit1': 'Mental Unwinding',
    'hero.benefit2': 'Regeneration',
    'hero.benefit3': 'Inner Stillness',

    // BenefitStrip - Variant B
    'benefits.tag': 'The evening does not begin suddenly.',
    'benefits.title1': 'Release',
    'benefits.desc1': 'The day is allowed to step back.',
    'benefits.title2': 'Gather',
    'benefits.desc2': 'The attention returns.',
    'benefits.title3': 'Arrive',
    'benefits.desc3': 'The evening becomes reachable.',

    // Philosophy / CustomerStory
    'philosophy.tag': 'THE TRANSITION',
    'philosophy.title': 'The evening is here.\nBut you have not quite arrived.',
    'philosophy.text1': 'Sometimes the day ends outwardly sooner than it does within.\nThe room grows quieter, the light softer, the tasks less visible.',
    'philosophy.text2': 'And yet, the day lingers in the mind:\nconversations, decisions, messages, open loops.',
    'philosophy.text3': 'HESPYRA begins where the day still echoes.',

    // EditorialPause
    'pause.part1': 'Not everything',
    'pause.part2': 'belongs',
    'pause.part3': 'in the evening.',

    // Ritual
    'ritual.tag': 'THE RITUAL · THREE STEPS',
    'ritual.title': 'A small moment, in three parts.',
    'ritual.desc': 'Enough to begin the evening. Warm, soft, understated — not sweet, not heavy, not loud.',
    'ritual.clarity_line1': 'A drinkable ritual in powder form.',
    'ritual.clarity_line2': 'For the moment when the day is allowed to step back.',
    'ritual.step1_tag': 'Release',
    'ritual.step1_text': 'One spoon in your glass.\nWarm water or plant milk.\nThe day is allowed to grow quiet.',
    'ritual.step2_tag': 'Gather',
    'ritual.step2_text': 'Stir. Breathe. Hold the glass.\nThoughts settle.\nThe moment becomes clearer.',
    'ritual.step3_tag': 'Arrive',
    'ritual.step3_text': 'The glass empties.\nThe day steps back.\nYou arrive in the evening.',
    'ritual.alt': 'HESPYRA evening ritual preparation step',


    // Ingredients
    'ingredients.tag': 'THE FORMULA',
    'ingredients.title': 'A quiet composition for the evening.',
    'ingredients.desc': 'Minerals, amino acids, plant extracts, and warm flavor notes — selected for a drinkable evening ritual.',
    'ingredients.list_label': 'The components of the composition',
    
    // Ingredients Groups (English)
    'ing.group_ruhe_tag': 'Minerals',
    'ing.group_ruhe_title': 'Release',
    'ing.group_ruhe_desc': 'For the moment when the day is allowed to step back.',
    
    // Ingredients Descriptions & Titles
    'ing.group_balance_tag': 'Plant Extracts',
    'ing.group_balance_title': 'Gather',
    'ing.group_balance_desc': 'Selected plant extracts and amino acids for greater inner focus.',
    
    'ing.group_ritual_tag': 'Flavor & Ritual',
    'ing.group_ritual_title': 'Arrive',
    'ing.group_ritual_desc': 'Warm notes and familiar ingredients that turn preparation into a quiet moment of arrival.',

    // Ingredients descriptions (English)
    'ing.mag_bis': 'Two bioactive forms of magnesium, selected to relax muscles and calm the nervous system.',
    'ing.theanine': 'From green tea. Promotes alpha brain waves for mental tranquility without drowsiness.',
    'ing.apigenin': 'A natural botanical compound from chamomile. Gently supports sleep onset and relaxation.',
    'ing.ashwa': 'A traditional root that helps regulate cortisol levels and reduce daily stress.',
    'ing.saffron': 'Saffron extract to support emotional balance and peacefulness in the evening.',
    'ing.phosph': 'Derived from plant lecithins. Supports mental recovery and cognitive regeneration.',
    'ing.reishi': 'Vital mushroom with depth. Traditionally valued to enhance sleep quality and support immunity.',
    'ing.glycine': 'An amino acid with a gentle sweetness that acts as a neurotransmitter to support sleep quality.',
    'ing.vanilla': 'Natural Bourbon vanilla and tonka bean for a warming, comforting sensory experience.',

    // Ingredients Names (English)
    'ing.name_mag_bis': 'Magnesium Bisglycinate & L-Threonate',
    'ing.name_theanine': 'L-Theanine',
    'ing.name_apigenin': 'Apigenin',
    'ing.name_ashwa': 'Ashwagandha',
    'ing.name_saffron': 'Saffron',
    'ing.name_phosph': 'Phosphatidylserine',
    'ing.name_reishi': 'Reishi',
    'ing.name_glycine': 'Glycine',
    'ing.name_vanilla': 'Vanilla & Tonka',

    // Trust elements (English)
    'ing.trust1_title': 'HIGH-QUALITY INGREDIENTS',
    'ing.trust1_desc': 'Carefully selected.',
    'ing.trust2_title': 'NO UNNECESSARY ADDITIVES',
    'ing.trust2_desc': 'Free from artificial flavors, colorants & sweeteners.',
    'ing.trust3_title': 'PERFECTLY COMBINED',
    'ing.trust3_desc': 'Thoughtful synergies for your evening ritual.',
    'ing.trust4_title': 'DEVELOPED WITH EXPERTISE',
    'ing.trust4_desc': 'Developed by experts for your well-being.',

    // Gallery
    'gallery.tag': 'Evening Culture',
    'gallery.title': 'Evening culture, reimagined.',
    'gallery.desc': 'Not as a retreat.\nBut as a conscious transition into an evening\nthat belongs to you again.',

    // Waitlist
    'waitlist.tag': 'EVENING CULTURE, REIMAGINED',
    'waitlist.title': 'The first edition of HESPYRA.',
    'waitlist.desc': 'HESPYRA opens in small steps.\nSign up to follow the first edition —\nwith early insights, evening notes, and a first look at the ritual.',
    'waitlist.placeholder': 'Email address',
    'waitlist.submit': 'JOIN IN',
    'waitlist.success': 'Thank you. We will reach out quietly.',
    'waitlist.benefit1_title': 'FIRST EDITION',
    'waitlist.benefit1_desc': 'Early insights at the start.',
    'waitlist.benefit2_title': 'EVENING NOTES',
    'waitlist.benefit2_desc': 'Thoughts and images from the world of HESPYRA.',
    'waitlist.benefit3_title': 'THE RITUAL',
    'waitlist.benefit3_desc': 'A first glance at the product and composition.',

    // Why Hespyra & Trust (English)
    'why.tag': 'THE DIFFERENCE',
    'why.title': 'Why HESPYRA.',
    'why.table_criteria': 'Criteria',
    'why.table_others': 'Other Aids',
    'why.badge1_title': 'MADE IN GERMANY',
    'why.badge1_desc': 'Lab-tested quality',
    'why.badge2_title': '100% VEGAN',
    'why.badge2_desc': 'No artificial additives',
    'why.badge3_title': 'MELATONIN-FREE',
    'why.badge3_desc': 'No dependency risk',
    'why.badge4_title': 'SYNERGISTIC',
    'why.badge4_desc': 'Bioavailable ingredients',
    'why.row1_label': 'Mechanism',
    'why.row1_hespyra': 'Gently supports natural relaxation and mental clarity.',
    'why.row1_others': 'Induces drowsiness through hormones or sedatives.',
    'why.row2_label': 'The morning after',
    'why.row2_hespyra': 'A clear mind and natural energy the next morning.',
    'why.row2_others': 'Risk of morning grogginess and sluggishness.',
    'why.row3_label': 'Dependency risk',
    'why.row3_hespyra': 'None. Designed for a daily evening routine.',
    'why.row3_others': 'High risk of tolerance build-up and dependency.',
    'why.row4_label': 'Ingredients',
    'why.row4_hespyra': 'Selected plant extracts, amino acids, and bioactive magnesium.',
    'why.row4_others': 'Often contains artificial additives, synthetic fillers, or hormones.',

    // FAQ (English)
    'faq.tag': 'FREQUENTLY ASKED QUESTIONS',
    'faq.title': 'Questions, answered.',
    'faq.q1': 'Is HESPYRA a sleeping aid?',
    'faq.a1': 'No. HESPYRA is not a sleeping aid. It is a drinkable evening ritual for the moment before sleep — the transition from the day\'s pace to a quieter evening.',
    'faq.q2': 'Does it contain melatonin?',
    'faq.a2': 'No. HESPYRA is melatonin-free. The formulation is not designed to artificially induce sleep, but to let the evening begin mindfully.',
    'faq.q3': 'What makes HESPYRA different from capsules or gummies?',
    'faq.a3': 'HESPYRA is a drink. Stir it, hold the glass, rest for a moment. This turns preparation into a quiet evening routine rather than just a function.',
    'faq.q4': 'What does HESPYRA taste like?',
    'faq.a4': 'Warm, balanced, and refined — with cacao, vanilla, and tonka. Not sweet, not heavy, not medicinal.',
    'faq.q5': 'How is HESPYRA prepared?',
    'faq.a5': 'One portion is stirred into water or plant-based milk. HESPYRA can be enjoyed warm or cold.',
    'faq.q6': 'When should I drink HESPYRA?',
    'faq.a6': 'When you wish to consciously pause the day and begin your evening — after work, after dinner, or as quiet slowly settles in at home.',
    'faq.q7': 'When will the first edition be available?',
    'faq.a7': 'HESPYRA is currently being developed in small steps. Sign up for the waitlist to receive early access to the first edition.',
    'faq.q8': 'Is HESPYRA vegan?',
    'faq.a8': 'HESPYRA is being developed vegan. Final product information will follow with the first edition.',

    // Footer
    'footer.about': 'ABOUT',
    'footer.contact': 'CONTACT',
    'footer.privacy': 'PRIVACY',
    'footer.imprint': 'IMPRINT',
    'navbar.calm_active': 'DAY MODE',
    'navbar.calm_inactive': 'EVENING MODE',
    'preloader.subtitle': 'May the day become quieter.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('hespyra_lang');
    if (saved === 'de' || saved === 'en') return saved;
    
    // Default to German, but check browser settings
    const browserLang = navigator.language.slice(0, 2);
    return browserLang === 'en' ? 'en' : 'de';
  });

  useEffect(() => {
    localStorage.setItem('hespyra_lang', language);
    // Update HTML lang attribute dynamically for SEO and accessibility
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
