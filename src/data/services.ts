
import {
  Fingerprint,
  CreditCard,
  BookUser,
  Car,
  Vote,
  FileText,
  Banknote,
  Home,
  Users,
  HeartPulse,
  Leaf,
  Lightbulb,
  GraduationCap,
  Hospital,
  Truck,
  Shield,
  Building,
  Briefcase,
  FileCheck,
  HardHat,
  BookOpen,
} from 'lucide-react';

export const serviceCategories = [
  {
    title: 'Identification & Documentation',
    services: [
      { name: 'Aadhaar (UIDAI)', description: 'Enrollment, Update, Status Check, e-Aadhaar', icon: Fingerprint, url: 'https://uidai.gov.in/' },
      { name: 'PAN Card', description: 'New PAN, Correction, Reprint, Link with Aadhaar', icon: CreditCard, url: 'https://www.incometax.gov.in/iec/foportal/' },
      { name: 'Voter ID (EPIC)', description: 'New Voter Card, Correction, Status Check', icon: Vote, url: 'https://voters.eci.gov.in/' },
      { name: 'Passport', description: 'New Passport, Renewal, Police Verification', icon: BookUser, url: 'https://www.passportindia.gov.in/' },
      { name: 'Driving License (DL)', description: "Learner's License, Renewal, Duplicate DL", icon: Car, url: 'https://parivahan.gov.in/parivahan/' },
      { name: 'Ration Card', description: 'New Application, Addition/Deletion of Members', icon: FileText, url: 'https://nfsa.gov.in/portal/ration_card_state_portals' },
    ],
  },
  {
    title: 'Banking & Financial',
    services: [
      { name: 'PM Jan Dhan Yojana', description: 'Zero-balance bank account for the poor', icon: Banknote, url: 'https://pmjdy.gov.in/' },
      { name: 'Public Sector Banks', description: 'Example: SBI Account Opening, Passbook, Loans', icon: Building, url: 'https://www.onlinesbi.sbi/' },
      { name: 'Post Office Savings', description: 'Savings, RD, FD, Sukanya Samriddhi Yojana', icon: Home, url: 'https://www.indiapost.gov.in/' },
      { name: 'Pension Services (NPS)', description: 'National Pension System, Pension Status', icon: Users, url: 'https://npscra.nsdl.co.in/' },
      { name: 'Public Provident Fund (PPF)', description: 'PPF Account Opening, Withdrawal', icon: FileText, url: 'https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx' },
    ],
  },
  {
    title: 'Social Welfare & Subsidy Schemes',
    services: [
      { name: 'Public Distribution System (PDS)', description: 'Ration Card, Food Grain Subsidy', icon: Users, url: 'https://nfsa.gov.in/' },
      { name: 'PM Ujjwala Yojana', description: 'Free LPG Connection for BPL Families', icon: Lightbulb, url: 'https://www.pmuy.gov.in/' },
      { name: 'PM Kisan Samman Nidhi', description: '₹6,000/year to Farmers', icon: Leaf, url: 'https://pmkisan.gov.in/' },
      { name: 'Ayushman Bharat (PM-JAY)', description: 'Health Insurance for Poor Families', icon: HeartPulse, url: 'https://beneficiary.nha.gov.in/' },
      { name: 'MNREGA', description: '100 Days Employment Guarantee Scheme', icon: HardHat, url: 'https://nrega.nic.in/' },
    ],
  },
  {
    title: 'Tax & Utility',
    services: [
      { name: 'Income Tax e-Filing', description: 'ITR Filing, Refund Status, TDS', icon: FileCheck, url: 'https://www.incometax.gov.in/iec/foportal/' },
      { name: 'GST Services', description: 'GST Registration, Return Filing', icon: FileCheck, url: 'https://www.gst.gov.in/' },
      { name: 'Electricity Bill Payment', description: 'Varies by state (e.g., UPPCL)', icon: Lightbulb, url: 'https://services.india.gov.in/service/listing?cat_id=5&ln=en' },
      { name: 'Water Bill Payment', description: 'Varies by Municipal Corporation', icon: Home, url: 'https://services.india.gov.in/service/listing?cat_id=10&ln=en' },
    ],
  },
  {
    title: 'Education & Employment',
    services: [
      { name: 'National Scholarship Portal', description: 'Centralized scholarship platform', icon: GraduationCap, url: 'https://scholarships.gov.in/' },
      { name: 'UPSC Exams', description: 'Civil Services Examinations', icon: BookUser, url: 'https://upsc.gov.in/' },
      { name: 'SSC Exams', description: 'Staff Selection Commission jobs', icon: Briefcase, url: 'https://ssc.gov.in/' },
      { name: 'AICTE/UGC', description: 'Higher Education regulations and information', icon: BookOpen, url: 'https://www.aicte-india.org/' },
    ],
  },
  {
    title: 'Health',
    services: [
      { name: 'CoWIN', description: 'COVID-19 Vaccination Portal', icon: Shield, url: 'https://www.cowin.gov.in/' },
      { name: 'e-Hospital', description: 'Online OPD appointments in govt hospitals', icon: Hospital, url: 'https://ors.gov.in/' },
    ],
  },
  {
    title: 'Transport & Vehicle',
    services: [
      { name: 'Vehicle Services (Vahan)', description: 'Vehicle Registration, Fitness, Tax', icon: Car, url: 'https://vahan.parivahan.gov.in/' },
      { name: 'Driving License (Sarathi)', description: 'Learner, Permanent, International DL', icon: CreditCard, url: 'https://sarathi.parivahan.gov.in/' },
      { name: 'FASTag', description: 'Electronic Toll Collection on Highways', icon: Truck, url: 'https://fastag.ihmcl.com/' },
    ],
  },
  {
    title: 'Agriculture & Rural Development',
    services: [
      { name: 'PM Fasal Bima Yojana', description: 'Crop Insurance Scheme', icon: Leaf, url: 'https://pmfby.gov.in/' },
      { name: 'Kisan Credit Card (KCC)', description: 'Credit for farmers at concessional rates', icon: CreditCard, url: 'https://agricoop.gov.in/' },
    ],
  },
  {
    title: 'Housing & Property',
    services: [
      { name: 'PM Awas Yojana (PMAY)', description: 'Affordable Housing Scheme', icon: Home, url: 'https://pmaymis.gov.in/' },
      { name: 'Property Registration', description: 'Varies by state government', icon: FileText, url: 'https://services.india.gov.in/service/listing?cat_id=76&ln=en' },
    ],
  },
  {
    title: 'Digital India Initiatives',
    services: [
      { name: 'DigiLocker', description: 'Secure document wallet', icon: Shield, url: 'https://www.digilocker.gov.in/' },
      { name: 'UMANG', description: 'Unified Mobile Application for New-age Governance', icon: Shield, url: 'https://web.umang.gov.in/' },
    ],
  },
];
