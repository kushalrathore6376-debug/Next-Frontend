"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { get } from "@/lib/apiClient";

const fallbackMembers = [
  {
    name: "John Doe",
    designation: "Co-Founder & CEO",
    imageUrl: "/team1.jpg",
    description:
      "John is a passionate innovator in carbon tech with over a decade of experience in renewable energy and sustainability.",
  },
  {
    name: "Jane Smith",
    designation: "Lead Scientist",
    imageUrl: "/team2.jpg",
    description:
      "Jane leads our R&D initiatives, driving scientific advances in carbon capture, storage, and industrial decarbonization.",
  },
  {
    name: "Alice Patel",
    designation: "Operations Manager",
    imageUrl: "/team3.jpg",
    description:
      "Alice manages daily operations and partner relations to ensure seamless scaling and impactful project delivery.",
  },
];

export default function TeamSection({ members }) {
  const [remoteMembers, setRemoteMembers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const fetchTeams = async () => {
      const { data, error } = await get(
        "https://backend-iqm4.onrender.com/api/teams",
        {
          onLoading: setLoading,
        }
      );
      if (ignore) return;
      if (error) {
        setFetchError(error.message || "Failed to load team data.");
        setRemoteMembers(null);
        return;
      }
      if (Array.isArray(data) && data.length > 0) {
        setRemoteMembers(data);
      } else {
        setRemoteMembers(null);
      }
    };
    fetchTeams();
    return () => {
      ignore = true;
    };
  }, []);

  const allMembers =
    (Array.isArray(members) && members.length > 0 ? members : remoteMembers) ||
    fallbackMembers;

  // Filter team members (exclude advisory, or include if no teamType)
  const teamMembers = Array.isArray(allMembers)
    ? allMembers.filter((m) => !m.teamType || m.teamType !== "advisory")
    : allMembers;

  // Filter advisory members
  const advisoryMembers = Array.isArray(allMembers)
    ? allMembers.filter((m) => m.teamType === "advisory")
    : [];

  // Reusable card component
  const TeamCard = ({ member, idx }) => (
    <article className="group relative h-[420px] sm:h-[480px] md:h-[500px] lg:h-[520px] rounded-[32px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.3)] cursor-pointer flex flex-col">
      {/* Decorative border glow on hover */}
      <div className="absolute inset-0 rounded-[32px] border-2 border-[#73A94A]/0 group-hover:border-[#73A94A]/30 transition-all duration-500 z-30 pointer-events-none" />

      {/* Image Section - 75% of card */}
      <div className="relative h-[75%] overflow-hidden bg-gray-100">
        <Image
          src={member.imageUrl || member.src || "/team-placeholder.jpg"}
          alt={member.alt || member.name || "Team member"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[4px]"
          unoptimized
          priority={idx < 4}
        />
        {/* Blackish blur overlay on hover */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 z-20" />
      </div>

      {/* Bottom Section - Name and Designation (visible by default) */}
      <div className="relative h-[25%] min-h-[105px] sm:min-h-[120px] bg-white px-4 sm:px-6 py-3 sm:py-4 flex flex-col justify-center items-center text-center z-10 border-t border-gray-100 group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-500">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 px-2 line-clamp-1">
          {member.name}
        </h3>
        <p className="text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-[0.1em] sm:tracking-[0.2em] text-[#73A94A] px-2 wrap-break-word max-w-full leading-snug sm:leading-tight text-center">
          {(member.designation || member.role || "").toUpperCase()}
        </p>
      </div>

      {/* Name - slides down from top on hover */}
      <div className="absolute top-0 left-0 right-0 px-6 py-5 transform -translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-out z-30">
        <h3 className="text-xl sm:text-2xl font-bold text-white text-center drop-shadow-lg">
          {member.name}
        </h3>
      </div>

      {/* Designation - appears from middle on hover (responsive for long text) */}
      <div className="absolute top-1/2 left-0 right-0 px-4 sm:px-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out z-30 delay-150">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          <div className="hidden sm:block h-px flex-1 max-w-12 bg-white/50"></div>
          <p className="text-[10px] xs:text-xs sm:text-sm font-semibold tracking-[0.3em] sm:tracking-[0.4em] text-white text-center drop-shadow-md px-2 sm:px-0 break-words max-w-[90%] sm:max-w-none">
            {(member.designation || member.role || "").toUpperCase()}
          </p>
          <div className="hidden sm:block h-px flex-1 max-w-12 bg-white/50"></div>
        </div>
      </div>

      {/* Description - slides up from bottom on hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md px-6 py-7 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.15)]">
        <div className="flex items-center justify-center mb-3">
          <div className="w-12 h-0.5 bg-[#73A94A] rounded-full" />
        </div>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center">
          {member.description || member.bio}
        </p>
      </div>

      {/* Floating accent dot */}
      <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-[#73A94A]/0 group-hover:bg-[#73A94A] transition-all duration-500 z-30 shadow-lg group-hover:shadow-[#73A94A]/50" />
    </article>
  );

  return (
    <>
      {/* Main Team Section */}
      <section className="w-full bg-[#73A94A] py-14 sm:py-18 md:py-24 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="max-w-6xl mx-auto space-y-8 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_55%)] rounded-[40px] p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="uppercase text-white/80 text-xs tracking-[0.6em] mb-3">
                People
              </p>
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
                Meet the team powering TraceXero
              </h2>
            </div>
            {loading && (
              <span className="text-white/80 text-sm tracking-wide">
                Loading team...
              </span>
            )}
            {fetchError && !loading && (
              <span className="text-red-100 text-sm">{fetchError}</span>
            )}
          </div>
          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {teamMembers.map((member, idx) => (
                <TeamCard
                  key={member.id ?? member._id ?? `${member.name}-${idx}`}
                  member={member}
                  idx={idx}
                />
              ))}
            </div>
          ) : (
            <p className="text-white/70 text-center py-8">
              No team members found.
            </p>
          )}
        </div>
      </section>

      {/* Advisory Section */}
      {advisoryMembers.length > 0 && (
        <section className="w-full bg-white py-14 sm:py-18 md:py-24 px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="uppercase text-gray-500 text-xs tracking-[0.6em] mb-3">
                  Advisory
                </p>
                <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
                  Advisory Board
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {advisoryMembers.map((member, idx) => (
                <TeamCard
                  key={member.id ?? member._id ?? `${member.name}-${idx}`}
                  member={member}
                  idx={idx}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
