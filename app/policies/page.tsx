// import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Terms of Payment Section */}
      <section className="bg-white p-8 my-8 w-[80%] lg:w-[60%] shadow-md rounded-xl">
        <h2 className="text-3xl font-bold mb-6">Terms of Payment</h2>
        {/* Initial Appointment */}
        <div className="mb-4">
  <h3 className="text-xl font-semibold mb-2">INITIAL APPOINTMENT</h3>
  <p>
    Credit card details are required to secure your first appointment. Credit card details will be encrypted and securely stored on our online payment platform “Stripe”.
  </p>
  <p className="mt-2">
    If the initial appointment is canceled with less than 48 hours notice (two business days not including the weekend), late cancellation fees will apply. Please refer to our Cancellation Policy.
  </p>
  <p className="mt-2">
    Please be advised that the initial appointment cannot be confirmed until Stripe has been set up. Failure to set up Stripe will result in the initial appointment being canceled.
  </p>
</div>

<div className="mb-4">
  <h3 className="text-xl font-semibold mb-2">PRIVATE PAYING CLIENTS</h3>
  <p>
    All sessions must be paid for, before or on, the day of the appointment.
  </p>
  <p className="mt-2">
    All privately paying clients are required to provide their Credit Card details to book an appointment. Credit card details will be encrypted and securely stored on our online payment platform “Stripe”. More details below under Contactless Payment.
  </p>
  <p className="mt-2">
    Where services are being funded by a third party (e.g. an insurer), the individual is still required to provide credit card details in line with our Cancellation Policy.
  </p>
</div>
<div className="mb-4">
  <h3 className="text-xl font-semibold mb-2">CONTACTLESS PAYMENT</h3>
  
  <p className="mb-2 font-semibold">OPTION 1</p>
  <p>
    Stripe is our preferred method and applies to all privately paying clients. Nominated cards will be charged after each session through Stripe.
  </p>
  <p className="mt-2">
    Credit card details are entered directly into Stripe. Credit card details are not recorded, held, or stored by HealthPlex. HealthPlex team members cannot view or access client credit card details once they are entered into Stripe. It is the client’s responsibility to advise HealthPlex when your credit card details change.
  </p>

  <h3 className="text-xl font-semibold mt-4 mb-2">MEDICARE REBATES</h3>
  <p>
    Paperwork/Care Plans from referring GP must be provided in order to be eligible for Medicare rebated services and must be dated before the appointment date to be applied and claimed.
  </p>
  <p className="mt-2">
    Please be advised that the full cost of service is required for HealthPlex to process rebates. Once payment has been received in full and all Medicare details have been provided, this will then be processed, and the rebate will be settled within 24 hours into your bank account linked to Medicare.
  </p>
  <p className="mt-2">
    Unfortunately, and due to reasons out of our control, occasionally there may be claims that are unsuccessful on our end. If this is the case, we will notify you and ask that you claim through Medicare, in their app or clinic.
  </p>
</div>
<div className="mb-4">
  <h3 className="text-xl font-semibold mb-2">PRIVATE HEALTH REBATES</h3>
  <p>
    Private health rebates may be able to be processed through one of our HICAPS machines where possible and if there is an Administrator present at the time of your appointment and you have your health fund card with you. Alternatively, you can submit your invoice to your health fund manually to receive your rebate.
  </p>

  <h3 className="text-xl font-semibold mt-4 mb-2">REPORTS</h3>
  <p>
    Invoice/payments for all reports or other documentation must be settled before they are released. Timeframes for the completion of reports are dependent on the Clinician’s workload, however, we strive to have them completed within two weeks of the start date.
  </p>

  <h3 className="text-xl font-semibold mt-4 mb-2">DEBT COLLECTION</h3>
  <p>
    Stripe will be used for any overdue invoices, and receipts will be sent to you upon successful payment. Should your card decline, you will be contacted, and payment will be reattempted within seven days. If still unsuccessful, your card will then be reattempted weekly thereafter until the outstanding amounts have been collected. Invoices that are not paid within 28 days may be sent to HealthPlex’s debt recovery team, and all costs associated with the recovery of this debt will be payable by the client. No reports, documentation, or services will be provided until the outstanding debt is recovered in full. Weekly reminders and emails are sent for payment to be paid in the lead up to the account being sent to our debt collection team for recovery.
  </p>

  <h3 className="text-xl font-semibold mt-4 mb-2">CREDITS / REFUNDS</h3>
  <p>
    Should you incur a credit on your account, the credit will be held on file and allocated towards future sessions. If this is not suitable, refunds will be paid directly into your bank account or refunded back via Stripe. This process can take 5-10 days. HealthPlex is not able to offer cash refunds.
  </p>

  <h3 className="text-xl font-semibold mt-4 mb-2">CASH</h3>
  <p>
    All HealthPlex clinics are cashless and are unable to accept cash payments.
  </p>

  <h3 className="text-xl font-semibold mt-4 mb-2">PAYMENT ENQUIRIES</h3>
  <p>
    Any queries or feedback please contact HealthPlex’s Administration team who will direct the query appropriately. We highly value all feedback and use this to constantly improve our services.
  </p>

  <p className="font-semibold mt-4">
    Terms of payment are effective from 1 January 2024 and are subject to review and change at any time. We thank you for supporting HealthPlex.
  </p>
</div>
        {/* ... (Continue for other sections) */}
      </section>

      {/* Cancellation Policy Section */}
      <section className="bg-white p-8 my-8 w-[80%] lg:w-[60%] shadow-md rounded-xl">
      <div className="mb-4">
  <h2 className="text-2xl font-semibold mb-2">Cancellation, Non-Attendance and Late Arrival Policy</h2>
  <p>
    The act of booking any appointment with our service means that you agree to this policy in full.
  </p>

  <p className="mt-4">
    HealthPlex provides a professional service to you. Our clinicians can only see a limited number of clients per day and commit to providing significant time and care to session planning and preparation. When an appointment is scheduled, that time has been set aside for you. When late cancellation, non-attendance, or late arrival occurs, this time cannot be used to see other clients who need our professional assistance. In an effort to reduce the number of such occurrences, HealthPlex has implemented a Cancellation, Non-Attendance, and Late Arrival Policy so that we can offer other clients available appointments and be respectful of our clinicians’ time.
  </p>

  <p className="mt-4">
    To avoid a cancellation or non-attendance fee, ensure you must contact HealthPlex a minimum of 48 hours or two business days prior to your appointment if you propose to cancel your appointment. For cancellations or non-attendance with less than 48 hours or two business days’ notice, HealthPlex will charge a $20.00 cancellation fee.
  </p>

  <p className="mt-4">
    When scheduling an appointment with HealthPlex, please take the time to take note of this in a way that works for you so that you don’t forget your appointments. HealthPlex also sends email reminders three days prior to your appointment and an SMS reminder 24 hours prior to your appointment. You can contact us by phone or, alternatively, respond to the email reminder notice to cancel or change your appointment.
  </p>

  <p className="mt-4">
    We do understand that emergencies sometimes occur, and we will not charge a cancellation fee in such cases. Discretion will be used to determine the significance of the emergency. If we can offer a suitable alternative time within the same calendar week and you attend the rescheduled appointment, a cancellation fee will not apply. This scenario is discretionary and will be determined on a case-by-case basis. The request for a medical certificate may also be required to waive the cancellation fee.
  </p>

  <p className="mt-4">
    Please note that Medicare, WorkCover, DVA, TAC, and Private Health Insurances will not cover the cost of cancellation fees. It will be your responsibility to cover those fees. HealthPlex also has the right to take any further reasonable action necessary to recover any unpaid fees and to bill you for any reasonable additional costs incurred in taking such action. We reserve the right to make no future appointments for you until all outstanding fees are paid.
  </p>

  <p className="mt-4">
    If you are late for an appointment, you will be seen as soon as possible, though your session duration may be shortened in length. For any client under the age of 18 years old, we require a parent or guardian to accept the terms of this policy at the time of booking an initial consultation.
  </p>

  <p className="mt-4">
    We hope you find this to be a fair and reasonable policy, and we thank you for your understanding and cooperation.
  </p>
</div>
      </section>

      {/* Informed Consent Policy Section */}
      <section className="bg-white p-8 my-8 w-[80%] lg:w-[60%] shadow-md rounded-xl">
      <div className="mb-4">
  <h2 className="text-2xl font-semibold mb-2">Informed Consent Policy</h2>
  <p>
    I consent to the assessment and treatment recommended and performed by HealthPlex and its practitioners in accordance with the governing bodys professional guidelines. This may include verbal, physical, and mental health treatment techniques, such as manipulation, manual therapy techniques, acupuncture, electrotherapy modalities, CBT, EMDR, and others.
  </p>

  <p className="mt-4">
    I understand that before treatment is carried out, a full explanation of the purpose and any risks of that treatment will be provided. I understand that should I wish to decline any form of assessment or treatment, then I am entirely within my right to do so and that I should inform the clinician of my wishes at the time. HealthPlex accepts no responsibility for treatment received - any professional liability is between the patient and the individual treating therapist - all therapists are insured via their own personal policies.
  </p>
</div>
        {/* ... (Include content for Informed Consent Policy) */}
      </section>
    </div>
  );
}

export default page;
