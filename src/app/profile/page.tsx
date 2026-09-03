import Image from "next/image";
import { 
  Phone, 
  Mail, 
  Stethoscope, 
  Pill, 
  Calendar, 
  User as UserIcon, 
  Building2, 
  MessageCircle 
} from "lucide-react";

export default function ProfilePage() {
  const patientData = {
    name: "Jerome Bellingham",
    avatar: "/patient_jerome.png",
    phone: "+82 837 356 343 23",
    email: "jeromebellingham93@mail.com",
    reason: "Eating sweet foods, not brushing your teeth regularly, often drink cold water when eating food that is still hot.",
    diagnose: "Cavities, Exposed nerves causing pain, Tartar teeth",
    pharmacy: ["Cataflam 50 mg", "Ponstan 500 mg", "Mofinal 500 mg", "Ibuprofen 400 mg"],
    bookingDate: "Thursday, 12 November, 09.00 AM - 10.00AM",
    appointmentType: "Chat WhatsApp",
    schedule: [
      {
        date: "12 Oct 2023 10:30 AM",
        title: "Check up tooth",
        doctor: "Drg. Dianne Rachel",
        assistant: "Maria Kitty",
        room: "Dental AI2"
      },
      {
        date: "12 Oct 2023 10:30 AM",
        title: "Prosthetic Tooth Fabrication",
        doctor: "Drg. Dianne Rachel",
        assistant: "Markonah Nicky",
        room: "Laboratorium Tooth 1"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="mx-auto max-w-4xl space-y-8">
        
        {/* SECTION 1: Personal Detail */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            PERSONAL DETAIL
          </h2>

          <div className="border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 bg-white shadow-2xs">
            
            {/* Patient Header: Avatar + Name + Contact Info */}
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 rounded-full overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                <Image 
                  src={patientData.avatar} 
                  alt={patientData.name} 
                  fill 
                  className="object-cover" 
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900">
                  {patientData.name}
                </h3>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-500 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-slate-400" />
                    {patientData.phone}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-slate-400" />
                    {patientData.email}
                  </span>
                </div>
              </div>
            </div>

            {/* Reason Container */}
            <div className="bg-[#f8fafc] border border-slate-100 rounded-xl p-4 space-y-1">
              <span className="text-xs font-semibold text-slate-500 block">
                Reason
              </span>
              <p className="text-sm font-medium text-slate-800 leading-relaxed">
                {patientData.reason}
              </p>
            </div>

            {/* Diagnose & Preferred Pharmacy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Left: Diagnose */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Stethoscope className="h-4 w-4 text-slate-400" />
                  <span>Diagnose</span>
                </div>
                <p className="text-sm font-medium text-slate-800 leading-relaxed">
                  {patientData.diagnose}
                </p>
              </div>

              {/* Right: Preferred Pharmacy Pills */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Pill className="h-4 w-4 text-slate-400" />
                  <span>Preferred Pharmacy</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {patientData.pharmacy.map((med, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-700 shadow-2xs"
                    >
                      {med}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>


        {/* SECTION 2: Booking Information */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            BOOKING INFORMATION
          </h2>

          <div className="border border-slate-200 rounded-2xl p-6 sm:p-8 bg-white shadow-2xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Date Column */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  <span>Date</span>
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  {patientData.bookingDate}
                </p>
              </div>

              {/* Appointment Type Column */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <UserIcon className="h-4 w-4 text-slate-400" />
                  <span>Appointment Type</span>
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-md">
                    <MessageCircle className="h-3.5 w-3.5 fill-emerald-600 text-emerald-600" />
                    {patientData.appointmentType}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* SECTION 3: Planning Schedule */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            PLANNING SCHEDULE
          </h2>

          <div className="space-y-6 pl-2 relative">
            
            {/* Vertical Timeline Line */}
            <div className="absolute left-[17px] top-4 bottom-6 w-0.5 bg-sky-200" />

            {patientData.schedule.map((sch, idx) => (
              <div key={idx} className="relative flex items-start gap-4">
                
                {/* Outer blue ring with filled blue dot */}
                <div className="relative z-10 flex items-center justify-center h-9 w-9 rounded-full bg-white border-2 border-sky-400 shrink-0 shadow-xs">
                  <div className="h-3 w-3 rounded-full bg-sky-500" />
                </div>

                {/* Schedule Details Container */}
                <div className="flex-1 space-y-2 pt-1">
                  {/* Schedule Header Date */}
                  <div className="text-xs font-semibold text-slate-500">
                    {sch.date}
                  </div>

                  {/* Inner Card Box */}
                  <div className="border border-slate-200 rounded-xl p-5 sm:p-6 bg-white space-y-4 shadow-2xs">
                    <h3 className="text-base font-bold text-[#0284c7]">
                      {sch.title}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                      
                      {/* Doctor */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <Stethoscope className="h-3.5 w-3.5" />
                          <span>Doctor</span>
                        </div>
                        <p className="text-xs font-bold text-slate-800">
                          {sch.doctor}
                        </p>
                      </div>

                      {/* Assistant Doctor */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <UserIcon className="h-3.5 w-3.5" />
                          <span>Assistant Doctor</span>
                        </div>
                        <p className="text-xs font-bold text-slate-800">
                          {sch.assistant}
                        </p>
                      </div>

                      {/* Room */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <Building2 className="h-3.5 w-3.5" />
                          <span>Room</span>
                        </div>
                        <p className="text-xs font-bold text-slate-800">
                          {sch.room}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
