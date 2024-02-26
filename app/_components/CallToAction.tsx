import { Button } from "@/components/ui/button";
import { socialLinks } from "@/messages/content";
import Link from "next/link";
import React from "react";

export default function CallToAction() {
  return (
    <section className='bg-secondary'>
      <div className='flex flex-col items-center max-w-2xl mx-auto px-2 py-16 gap-4'>
        <h2 className='text-4xl font-bold text-center'>
          Ready to capture your next event?
        </h2>
        <p className='text-muted-foreground'>
          Send us a message at our Facebook page.
        </p>
        <Button asChild variant={"default"}>
          <Link href={socialLinks.facebook} target='_blank'>
            Book now
          </Link>
        </Button>
      </div>
    </section>
  );
}
