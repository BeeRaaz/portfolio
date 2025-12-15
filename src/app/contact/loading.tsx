import { Skeleton } from "@/components/ui/skeleton";

export default function ContactLoading() {
  return (
    <section className="pt-28 pb-10 min-h-screen flex flex-wrap justify-center items-center">
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="p-10 border rounded-xl space-y-5 max-w-md mx-auto">
          {/* Title skeleton */}
          <Skeleton className="h-8 w-40" />

          {/* Name field skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Email field skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Message field skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-24 w-full" />
          </div>

          {/* Button skeleton */}
          <Skeleton className="h-11 w-full" />
        </div>
      </div>
    </section>
  );
}
