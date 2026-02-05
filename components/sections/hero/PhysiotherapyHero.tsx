import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { businessInfo } from "@/lib/data/business-info"

// =============================================================================
// CONFIGURATION - Edit these variables to customize the hero
// =============================================================================

/** Hero height: "large" | "medium" | "small" */
const size: "large" | "medium" | "small" = "large"

/** Hero content - edit these values directly */
const heroContent = {
  title: "Move Better, Feel Better, Live Better",
  description:
    "Expert physiotherapy care tailored to your recovery and performance goals. Our evidence-based treatments help you return to the activities you love.",
  ctaText: "Book Your Assessment",
  ctaUrl: businessInfo.bookingUrl || "/contact",
  secondaryCtaText: "Learn More",
  secondaryCtaUrl: "/about",
  heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070",
  heroImageAlt: "Physiotherapist helping patient with rehabilitation exercises",
  logoImage: "/uploads/Pro-Active-Therapy.gif",
}

// =============================================================================
// SIZE CLASSES
// =============================================================================

const sizeClasses = {
  large: "min-h-[600px] md:min-h-[700px] lg:min-h-[800px]",
  medium: "min-h-[500px] md:min-h-[600px]",
  small: "min-h-[400px] md:min-h-[500px]",
}

// =============================================================================
// PROPS INTERFACE (for dynamic pages)
// =============================================================================

export interface PhysiotherapyHeroProps {
  /** Override main headline */
  title?: string
  /** Override description text */
  description?: string
  /** Override hero image URL */
  heroImage?: string
  /** Override hero image alt text */
  heroImageAlt?: string
  /** Override primary CTA button text */
  ctaText?: string
  /** Override primary CTA button URL */
  ctaUrl?: string
  /** Override secondary CTA button text */
  secondaryCtaText?: string
  /** Override secondary CTA button URL */
  secondaryCtaUrl?: string
  /** Override hero size */
  size?: "large" | "medium" | "small"
  /** Additional CSS classes */
  className?: string
}

// =============================================================================
// COMPONENT
// =============================================================================

/**
 * Hero section for physiotherapy website with logo and image.
 *
 * Features:
 * - Prominent logo display
 * - Large hero image
 * - Primary and secondary CTAs
 * - Responsive layout
 *
 * @example
 * // Default usage (uses variables defined above)
 * <PhysiotherapyHero />
 *
 * @example
 * // Override for dynamic page
 * <PhysiotherapyHero
 *   title="Sports Injury Recovery"
 *   size="medium"
 * />
 */
export function PhysiotherapyHero(props: PhysiotherapyHeroProps = {}) {
  // Use props if provided, otherwise fall back to variables
  const displayTitle = props.title ?? heroContent.title
  const displayDescription = props.description ?? heroContent.description
  const displayImage = props.heroImage ?? heroContent.heroImage
  const displayImageAlt = props.heroImageAlt ?? heroContent.heroImageAlt
  const displayCtaText = props.ctaText ?? heroContent.ctaText
  const displayCtaUrl = props.ctaUrl ?? heroContent.ctaUrl
  const displaySecondaryCtaText = props.secondaryCtaText ?? heroContent.secondaryCtaText
  const displaySecondaryCtaUrl = props.secondaryCtaUrl ?? heroContent.secondaryCtaUrl
  const displaySize = props.size ?? size

  return (
    <section className={cn("relative overflow-hidden bg-background", props.className)}>
      <div className="mx-auto max-w-7xl">
        <div className={cn("grid gap-8 lg:grid-cols-2 lg:gap-16", sizeClasses[displaySize])}>
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center px-6 py-12 md:px-8 lg:py-16">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src={heroContent.logoImage}
                alt="Pro-Active Therapy Logo"
                width={200}
                height={200}
                className="h-auto w-48 md:w-56 lg:w-64"
                priority
              />
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-balance font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              {displayTitle}
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
              {displayDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* Primary CTA */}
              {displayCtaText && displayCtaUrl && (
                <Link
                  href={displayCtaUrl}
                  className="group relative flex min-h-12 items-center justify-center rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors ease-in-out hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="flex flex-1 items-center justify-center gap-x-2">
                    <span className="flex flex-row items-center gap-x-1">
                      {displayCtaText}
                      <span className="relative inline-block h-4 w-4">
                        <ChevronRight
                          className="absolute left-0 top-0 h-4 w-4 transition-[transform,opacity] duration-200 group-hover:translate-x-1 group-hover:opacity-0"
                          aria-hidden="true"
                        />
                        <ArrowRight
                          className="absolute left-0 top-0 h-4 w-4 -translate-x-1 opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </span>
                </Link>
              )}

              {/* Secondary CTA */}
              {displaySecondaryCtaText && displaySecondaryCtaUrl && (
                <Link
                  href={displaySecondaryCtaUrl}
                  className="flex min-h-12 items-center justify-center rounded-lg border-2 border-border bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {displaySecondaryCtaText}
                </Link>
              )}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative overflow-hidden lg:rounded-l-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <Image
              src={displayImage}
              alt={displayImageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
