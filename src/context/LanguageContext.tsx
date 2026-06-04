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
    'philosophy.title': 'Der Abend ist da. \nNur noch nicht ganz erreichbar.',
    'philosophy.text1': 'Manchmal endet der Tag äußerlich früher als innerlich. Der Raum wird ruhiger, das Licht weicher, die Aufgaben weniger sichtbar.',
    'philosophy.text2': 'Und trotzdem bleibt etwas vom Tag im Kopf: Gespräche, Entscheidungen, Nachrichten, kleine offene Schleifen.',
    'philosophy.text3': 'HESPYRA ist für diesen Moment gemacht — als warmes, trinkbares Ritual zwischen dem, was war, und dem, was jetzt beginnen darf.',

    // EditorialPause
    'pause.line1': 'Nicht alles muss mit',
    'pause.line2': 'in den Abend.',

    // Ritual
    'ritual.tag': 'Das Ritual',
    'ritual.title': 'Ein kleiner Moment.',
    'ritual.desc': 'Genug, um den Abend zu beginnen.\n\nWarm. Weich. Zurückhaltend.\nVanille, Tonka und eine ruhige Tiefe.\nNicht süß. Nicht schwer. Nicht laut.\n\nEin Löffel. Ein Glas.\nEin leiser Schnitt im Tag.\n\nNicht nebenbei.\nSondern als Anfang.',
    'ritual.clarity_line1': 'Ein trinkbares Ritual in Pulverform.',
    'ritual.clarity_line2': 'Für den Moment, in dem der Tag zurücktreten darf.',
    'ritual.step1_tag': 'Lösen',
    'ritual.step1_text': 'Ein Löffel ins Glas. Der Tag darf leiser werden.',
    'ritual.step2_tag': 'Sammeln',
    'ritual.step2_text': 'Rühren. Atmen. Aufmerksamkeit kehrt zurück.',
    'ritual.step3_tag': 'Ankommen',
    'ritual.step3_text': 'Trink dein Ritual, bevor der Abend in die Nacht übergeht.',
    'ritual.alt': 'HESPYRA Abendritual Zubereitung Schritt',

    // Ingredients
    'ingredients.tag': 'Rezeptur',
    'ingredients.title': 'Eine ruhige Komposition für den Abend.',
    'ingredients.desc': 'Mineralstoffe, Pflanzenextrakte, Aminosäuren und warme Geschmacksnoten — ausgewählt für ein Ritual, das nicht laut wirken muss.',
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
    'waitlist.title': 'Die erste Edition von HESPYRA.',
    'waitlist.desc': 'Wir öffnen HESPYRA in kleinen Schritten.\nTrag dich ein, wenn du erfahren möchtest,\nwann die erste Edition beginnt.',
    'waitlist.placeholder': 'E-Mail-Adresse',
    'waitlist.submit': 'Einladung erhalten',
    'waitlist.success': 'Danke. Wir melden uns leise.',
    'waitlist.benefit1_title': 'Erste Edition',
    'waitlist.benefit1_desc': 'Ein früher Zugang zum Start.',
    'waitlist.benefit2_title': 'Abendnotizen',
    'waitlist.benefit2_desc': 'Gedanken und Bilder aus der Welt von HESPYRA.',
    'waitlist.benefit3_title': 'Das Ritual',
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
    'faq.tag': 'FRAGEN',
    'faq.title': 'Häufige Fragen.',
    'faq.q1': 'Wie schmeckt HESPYRA?',
    'faq.a1': 'HESPYRA schmeckt warm, weich und natürlich nach echter Bourbon-Vanille und Tonkabohne. Es ist ungesüßt und enthält keine künstlichen Süßstoffe, weshalb es eine dezente, leicht erdige Herznote (durch die enthaltenen Kräuterextrakte) besitzt. Ein ehrlicher Geschmack für den Abend.',
    'faq.q2': 'Ist Melatonin in HESPYRA enthalten?',
    'faq.a2': 'Nein, wir verzichten bewusst auf Melatonin. Künstliche Hormone greifen in die körpereigene Hormonregulation ein und führen oft zu Müdigkeit am nächsten Morgen (Hangover). HESPYRA setzt stattdessen auf Mineralstoffe, Aminosäuren und Pflanzenextrakte, die deinem Körper helfen, auf natürliche Weise zur Ruhe zu kommen.',
    'faq.q3': 'Wie wird HESPYRA zubereitet?',
    'faq.a3': 'Einfach einen Esslöffel HESPYRA-Pulver in ein Glas geben, mit ca. 150ml warmem (nicht kochendem) Wasser oder einer Pflanzenmilch deiner Wahl (z.B. Mandel- oder Haferdrink) übergießen und gut umrühren. Nimm dir für das Rühren und Trinken bewusst einen Moment Zeit.',
    'faq.q4': 'Wann sollte ich HESPYRA trinken?',
    'faq.a4': 'Wir empfehlen, das Ritual etwa 30 bis 60 Minuten vor deinem geplanten Feierabend oder dem Schlafengehen zu trinken. Es signalisiert deinem Geist den Übergang in die Ruhephase und gibt dir Zeit, den Tag innerlich abzuschließen.',
    'faq.q5': 'Ist das Produkt vegan und allergenfrei?',
    'faq.a5': 'Ja, HESPYRA ist zu 100 % vegan, laktosefrei, glutenfrei und frei von künstlichen Aromen, Farbstoffen sowie Allergenen. Wir verarbeiten ausschließlich hochwertige, laborgeprüfte Rohstoffe.',

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
    'hero.title': 'Evening starts in your mind.',
    'hero.desc': 'HESPYRA is a drinkable evening ritual.\nFor the moment when the day becomes quieter.',
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
    'philosophy.title': 'Evening is here. \nJust not quite within reach yet.',
    'philosophy.text1': 'Sometimes the day ends outwardly sooner than inwardly. The room grows quieter, the light softer, the tasks less visible.',
    'philosophy.text2': 'And yet, something of the day lingers in your mind: conversations, decisions, messages, small open loops.',
    'philosophy.text3': 'HESPYRA is made for this very moment — a warm, drinkable ritual between what was, and what is now allowed to begin.',

    // EditorialPause
    'pause.line1': 'Not everything has to come',
    'pause.line2': 'into the evening.',

    // Ritual
    'ritual.tag': 'The Ritual',
    'ritual.title': 'A small moment.',
    'ritual.desc': 'Enough to begin the evening.\n\nWarm. Soft. Reserved.\nVanilla, tonka, and a quiet depth.\nNot sweet. Not heavy. Not loud.\n\nOne spoon. One glass.\nA quiet break in the day.\n\nNot in passing.\nBut as a beginning.',
    'ritual.clarity_line1': 'A drinkable ritual in powder form.',
    'ritual.clarity_line2': 'For the moment when the day is allowed to step back.',
    'ritual.step1_tag': 'Release',
    'ritual.step1_text': 'One spoon in your glass. The day is allowed to become quieter.',
    'ritual.step2_tag': 'Gather',
    'ritual.step2_text': 'Stir. Breathe. Attention returns.',
    'ritual.step3_tag': 'Arrive',
    'ritual.step3_text': 'Drink your ritual before evening transitions into the night.',
    'ritual.alt': 'HESPYRA evening ritual preparation step',

    // Ingredients
    'ingredients.tag': 'Formula',
    'ingredients.title': 'A quiet composition for the evening.',
    'ingredients.desc': 'Minerals, plant extracts, amino acids, and warm flavor notes — selected for a ritual that does not need to seem loud.',
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
    'waitlist.title': 'The first edition of HESPYRA.',
    'waitlist.desc': 'We open HESPYRA in small steps.\nSign up if you would like to know\nwhen the first edition begins.',
    'waitlist.placeholder': 'Email address',
    'waitlist.submit': 'Receive invitation',
    'waitlist.success': 'Thank you. We will reach out quietly.',
    'waitlist.benefit1_title': 'First Edition',
    'waitlist.benefit1_desc': 'An early access to the start.',
    'waitlist.benefit2_title': 'Evening Notes',
    'waitlist.benefit2_desc': 'Thoughts and images from the world of HESPYRA.',
    'waitlist.benefit3_title': 'The Ritual',
    'waitlist.benefit3_desc': 'A first glance at the product and composition.',

    // Why Hespyra & Trust (English)
    'why.tag': 'COMPARISON',
    'why.title': 'Why HESPYRA?',
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
    'why.row1_label': 'Effect mechanism',
    'why.row1_hespyra': 'Gently promotes natural relaxation and mental clarity.',
    'why.row1_others': 'Forces drowsiness through hormones (melatonin) or sedatives.',
    'why.row2_label': 'The morning after',
    'why.row2_hespyra': 'Clear head and full energy without grogginess.',
    'why.row2_others': 'Frequent grogginess and morning sluggishness.',
    'why.row3_label': 'Dependency risk',
    'why.row3_hespyra': 'None. Perfectly suitable for a daily evening routine.',
    'why.row3_others': 'High risk of tolerance build-up and dependency.',
    'why.row4_label': 'Ingredients',
    'why.row4_hespyra': 'Pure plant extracts, amino acids, and bioactive magnesium.',
    'why.row4_others': 'Synthetic fillers, artificial flavors, or hormones.',

    // FAQ (English)
    'faq.tag': 'QUESTIONS',
    'faq.title': 'Frequently Asked Questions.',
    'faq.q1': 'What does HESPYRA taste like?',
    'faq.a1': 'HESPYRA has a warm, soft, and natural taste of real Bourbon vanilla and tonka bean. It is unsweetened and contains no artificial sweeteners, leaving a subtle, slightly earthy core note (from the herbal extracts). An honest taste for the evening.',
    'faq.q2': 'Does HESPYRA contain melatonin?',
    'faq.a2': 'No, we deliberately avoid melatonin. Artificial hormones interfere with your body\'s natural hormone regulation and often cause drowsiness the next morning (hangover). HESPYRA relies instead on minerals, amino acids, and plant extracts that help your body wind down naturally.',
    'faq.q3': 'How do I prepare HESPYRA?',
    'faq.a3': 'Simply add one tablespoon of HESPYRA powder to a glass, pour about 150ml of warm (not boiling) water or a plant-based milk of your choice (e.g., almond or oat milk), and stir well. Take a conscious moment for stirring and drinking.',
    'faq.q4': 'When should I drink HESPYRA?',
    'faq.a4': 'We recommend drinking the ritual about 30 to 60 minutes before your planned evening relaxation or bedtime. It signals the transition to rest to your mind and gives you time to internally close the day.',
    'faq.q5': 'Is the product vegan and allergen-free?',
    'faq.a5': 'Yes, HESPYRA is 100% vegan, lactose-free, gluten-free, and free of artificial flavors, colorants, and allergens. We only process high-quality, lab-tested ingredients.',

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
