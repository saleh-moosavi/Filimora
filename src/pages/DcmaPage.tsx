import { useEffect } from "react";

export default function DcmaPage() {
  useEffect(() => {
    window.scrollY > 1 && window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="color-white px-5 xl:max-w-[85rem] xl:mx-auto">
      <h2 className="py-5 md:pt-32 text-xl font-semibold lg:text-3xl">
        DMCA POLICY
      </h2>
      <article className="text-justify flex flex-col gap-y-5 lg:text-lg leading-8 lg:leading-9">
        <p>
          avamovie.in, avamovie.shop is in compliance with 17 U.S.C. § ۵۱۲ and
          the Digital Millennium Copyright Act (“DMCA”). It is our policy to
          respond to any infringement notices and take appropriate actions under
          the Digital Millennium Copyright Act (“DMCA”) and other applicable
          intellectual property laws. If your copyrighted material has been
          posted on avamovie.in or if links to your copyrighted material are
          returned through our search engine and you want this material removed,
          you must provide a written communication that details the information
          listed in the following section. Please be aware that you will be
          liable for damages (including costs and attorneys’ fees) if you
          misrepresent information listed on our site that is infringing on your
          copyrights. We suggest that you first contact an attorney for legal
          assistance on this matter.
        </p>
        <p>
          The following elements must be included in your copyright infringement
          claim: – Provide evidence of the authorized person to act on behalf of
          the owner of an exclusive right that is allegedly infringed. – Provide
          sufficient contact information so that we may contact you. You must
          also include a valid email address. – You must identify in sufficient
          detail the copyrighted work claimed to have been infringed and
          including at least one search term under which the material appears in
          avamovie.in search results. – A statement that the complaining party
          has a good faith belief that use of the material in the manner
          complained of is not authorized by the copyright owner, its agent, or
          the law. – A statement that the information in the notification is
          accurate, and under penalty of perjury, that the complaining party is
          authorized to act on behalf of the owner of an exclusive right that is
          allegedly infringed. – Must be signed by the authorized person to act
          on behalf of the owner of an exclusive right that is allegedly being
          infringed.
        </p>
        <p>
          Send the written infringement notice to the following address and an
          email notifcation to: info.avamovie@gmail.com We inform you that due
          to problem with our search engine we can’t guarantee that all content
          will be deleted, please sent us CLICKABLE direct links to each
          publication which contains your illegal material. Only in this case we
          can guarantee removal of all content.
        </p>
        <p>
          Please allow 1-3 business days for an email response. Note that
          emailing your complaint to other parties such as our Internet Service
          Provider will not expedite your request and may result in a delayed
          response due the complaint not properly being filed.
        </p>
      </article>
    </div>
  );
}
