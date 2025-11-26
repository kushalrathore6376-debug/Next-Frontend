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
      const { data, error } = await get("https://backend-iqm4.onrender.com/api/teams", {
        onLoading: setLoading,
      });
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

  const teamMembers =
    (Array.isArray(members) && members.length > 0 ? members : remoteMembers) ||
    fallbackMembers;

  return (
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, idx) => (
            <article
              key={member.id ?? member._id ?? `${member.name}-${idx}`}
              className="relative rounded-[28px] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] flex flex-col items-center text-center p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.22)]"
            >
              <div className="absolute inset-0 rounded-[28px] bg-linear-to-br from-[#f9fbf4] via-white to-[#e7f6d9] opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative flex flex-col items-center">
                <div className="mb-6 w-28 h-28 sm:w-32 sm:h-32 rounded-full border-[5px] border-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] overflow-hidden relative bg-white">
                  <Image
                    src={
                      member.imageUrl || member.src || "/team-placeholder.jpg"
                    }
                    alt={member.alt || member.name || "Team member"}
                    fill
                    sizes="140px"
                    className="object-cover"
                    unoptimized
                    priority={idx < 4}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#73A94A] mb-4">
                  {(member.designation || member.role || "").toUpperCase()}
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {member.description || member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
