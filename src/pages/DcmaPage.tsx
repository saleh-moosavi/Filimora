export default function DcmaPage() {
  return (
    <div className="text-my-white-max">
      <h1 className="text-3xl font-bold mb-6">DMCA Policy - FAnime</h1>

      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-my-warning mb-3">
            DMCA Compliance
          </h2>
          <p>
            FAnime respects intellectual property rights and complies with the
            Digital Millennium Copyright Act (DMCA).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-my-warning mb-3">
            Reporting Copyright Infringement
          </h2>
          <p>To file a DMCA takedown notice, please include:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Your contact information</li>
            <li>Direct URLs to infringing content</li>
            <li>Proof of copyright ownership</li>
            <li>Your physical or electronic signature</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-my-warning mb-3">
            Contact Information
          </h2>
          <p>
            <strong>Email :</strong> dmca@fanime.com
          </p>
          <p>
            <strong>Response Time :</strong> 3-5 business days
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-my-error">
            Important Notice
          </h2>
          <p>
            False claims may result in liability for damages. Please ensure your
            claim is valid before submitting.
          </p>
        </section>
      </div>
    </div>
  );
}
