
import {
  Fingerprint,
  CreditCard,
  BookUser,
  Car,
  Vote,
  Train,
  Bus,
  FileText,
  Leaf,
  Briefcase,
  HardHat,
  HeartPulse,
  FileCheck,
} from 'lucide-react';

export const popularServices = [
  { name: 'Aadhaar (UIDAI)', icon: Fingerprint, url: 'https://uidai.gov.in/' },
  { name: 'PAN Card', icon: CreditCard, url: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html' },
  { name: 'Passport', icon: BookUser, url: 'https://www.passportindia.gov.in/' },
  { name: 'Driving License', icon: Car, url: 'https://parivahan.gov.in/parivahan//en/content/driving-licence-0' },
  { name: 'Voter ID', icon: Vote, url: 'https://voters.eci.gov.in/' },
  { name: 'IRCTC', icon: Train, url: 'https://www.irctc.co.in/' },
  { name: 'MSRTC', icon: Bus, url: 'https://msrtc.maharashtra.gov.in/' },
  { name: 'Ration Card', icon: Fingerprint, url: 'https://nfsa.gov.in/portal/ration_card_state_portals' },
  { name: 'Income Certificate', icon: FileText, url: 'https://services.india.gov.in/' },
  { name: 'Domicile Certificate', icon: FileText, url: 'https://services.india.gov.in/' },
  { name: 'PM Kisan Yojana', icon: Leaf, url: 'https://pmkisan.gov.in/' },
  { name: 'Udyam Registration', icon: Briefcase, url: 'https://udyamregistration.gov.in/' },
  { name: 'e-Shram Card', icon: HardHat, url: 'https://eshram.gov.in/' },
  { name: 'Ayushman Bharat', icon: HeartPulse, url: 'https://beneficiary.nha.gov.in/' },
  { name: 'Jeevan Pramaan', icon: FileCheck, url: 'https://jeevanpramaan.gov.in/' },
];
