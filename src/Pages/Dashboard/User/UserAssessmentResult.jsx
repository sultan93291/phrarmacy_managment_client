import AssessmentResult from '@/components/Dashboard/User/AssessmentResult';
import DashboardTitle from '@/components/Dashboard/User/DashboardTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const UserAssessmentResult = () => {
  const userData = [
    {
      assessmentId: 1,
      title: 'Health Risk Assessment',
      questions: [
        {
          id: 1,
          title: 'What is your biological sex?',
          options: ['Male', 'Female', 'Others'],
          answer: 'Male',
        },
        {
          id: 2,
          title:
            'Do you believe you have the ability to make healthcare decisions for yourself?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          additionalInfo:
            'This helps to assess your understanding and ability to make informed healthcare choices for your well-being.',
        },
        {
          id: 3,
          title: 'Are you taking any medications currently?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          additionalInfo:
            'Please list the medications you are currently taking, including over-the-counter drugs or supplements.',
        },
        {
          id: 4,
          title: 'How much do you weigh?',
          options: ['Under 50 kg', '50-70 kg', 'Over 70 kg'],
          answer: 'Over 70 kg',
          additionalInfo:
            'Your weight helps in determining potential health risks and appropriate interventions.',
        },
        {
          id: 5,
          title: 'What is your Blood Pressure?',
          options: [
            'Low (below 90/60)',
            'Normal (between 90/60 and 120/80)',
            'High (above 120/80)',
          ],
          answer: 'Normal (between 90/60 and 120/80)',
          additionalInfo:
            'Blood pressure readings help to evaluate your cardiovascular health and risks associated with hypertension.',
        },
        {
          id: 6,
          title: 'Do you exercise regularly?',
          options: ['Yes', 'No'],
          answer: 'Yes',
        },
      ],
    },
    {
      assessmentId: 2,
      title: 'Mental Health Self-Assessment',
      questions: [
        {
          id: 1,
          title: 'Have you ever been diagnosed with a mental health condition?',
          options: ['Yes', 'No'],
          answer: 'No',
        },
        {
          id: 2,
          title: 'Do you feel stressed or anxious most days?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          additionalInfo:
            'Stress and anxiety are common but can impact mental well-being if not addressed.',
        },
        {
          id: 3,
          title: 'How often do you feel depressed?',
          options: ['Rarely', 'Sometimes', 'Frequently'],
          answer: 'Sometimes',
        },
        {
          id: 4,
          title: 'Do you have trouble sleeping?',
          options: ['Yes', 'No'],
          answer: 'Yes',
        },
        {
          id: 5,
          title: 'Have you experienced significant mood changes recently?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          additionalInfo:
            'Mood changes can be an indication of underlying mental health conditions.',
        },
        {
          id: 6,
          title: 'Do you seek support when feeling mentally overwhelmed?',
          options: ['Yes', 'No'],
          answer: 'Yes',
        },
      ],
    },
    {
      assessmentId: 3,
      title: 'Diet and Nutrition Assessment',
      questions: [
        {
          id: 1,
          title: 'How often do you consume fruits and vegetables?',
          options: ['Daily', 'Few times a week', 'Rarely'],
          answer: 'Daily',
        },
        {
          id: 2,
          title: 'Do you drink sugary drinks regularly?',
          options: ['Yes', 'No'],
          answer: 'No',
        },
        {
          id: 3,
          title: 'How many meals do you eat per day?',
          options: ['1-2', '3', 'More than 3'],
          answer: '3',
        },
        {
          id: 4,
          title: 'Do you have any dietary restrictions?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          additionalInfo:
            'Please provide details of your dietary restrictions, such as vegan, gluten-free, or allergies.',
        },
        {
          id: 5,
          title: 'Do you track your calorie intake?',
          options: ['Yes', 'No'],
          answer: 'No',
          additionalInfo:
            'Tracking calories can help in managing weight and ensuring you meet nutritional goals.',
        },
        {
          id: 6,
          title: 'Do you consume fast food often?',
          options: ['Yes', 'No'],
          answer: 'No',
        },
      ],
    },
    {
      assessmentId: 4,
      title: 'Lifestyle and Habits Assessment',
      questions: [
        {
          id: 1,
          title: 'Do you smoke or use tobacco products?',
          options: ['Yes', 'No'],
          answer: 'No',
        },
        {
          id: 2,
          title: 'Do you drink alcohol?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          additionalInfo:
            'Moderation is key. Excessive alcohol consumption can have adverse health effects.',
        },
        {
          id: 3,
          title: 'How many hours of sleep do you get each night?',
          options: ['Less than 5', '5-7', 'More than 7'],
          answer: '5-7',
        },
        {
          id: 4,
          title: 'Do you feel your current lifestyle is balanced?',
          options: ['Yes', 'No'],
          answer: 'Yes',
        },
        {
          id: 5,
          title: 'How often do you engage in social activities?',
          options: ['Daily', 'Weekly', 'Rarely'],
          answer: 'Weekly',
          additionalInfo:
            'Socializing can significantly contribute to emotional well-being and stress reduction.',
        },
        {
          id: 6,
          title: 'Do you take regular breaks during work?',
          options: ['Yes', 'No'],
          answer: 'Yes',
        },
      ],
    },
    {
      assessmentId: 5,
      title: 'Chronic Disease Risk Assessment',
      questions: [
        {
          id: 1,
          title: 'Do you have a family history of heart disease?',
          options: ['Yes', 'No'],
          answer: 'No',
        },
        {
          id: 2,
          title: 'Do you have a family history of diabetes?',
          options: ['Yes', 'No'],
          answer: 'Yes',
        },
        {
          id: 3,
          title: 'Do you experience frequent headaches?',
          options: ['Yes', 'No'],
          answer: 'Yes',
        },
        {
          id: 4,
          title: 'Have you ever been diagnosed with high cholesterol?',
          options: ['Yes', 'No'],
          answer: 'No',
        },
        {
          id: 5,
          title: 'Do you have a history of asthma or respiratory conditions?',
          options: ['Yes', 'No'],
          answer: 'No',
          additionalInfo:
            'Chronic respiratory conditions can impact overall health and quality of life.',
        },
        {
          id: 6,
          title: 'Do you experience joint pain or stiffness?',
          options: ['Yes', 'No'],
          answer: 'Yes',
        },
      ],
    },
    {
      assessmentId: 6,
      title: 'Sleep Quality Assessment',
      questions: [
        {
          id: 1,
          title: 'How often do you experience difficulty falling asleep?',
          options: ['Never', 'Sometimes', 'Often'],
          answer: 'Sometimes',
        },
        {
          id: 2,
          title: 'How many hours of sleep do you get on average?',
          options: ['Less than 5 hours', '5-7 hours', 'More than 7 hours'],
          answer: '5-7 hours',
        },
        {
          id: 3,
          title: 'Do you wake up feeling rested?',
          options: ['Yes', 'No'],
          answer: 'No',
          additionalInfo:
            'Not feeling rested upon waking can be a sign of poor sleep quality or underlying conditions.',
        },
        {
          id: 4,
          title: 'Do you suffer from frequent waking during the night?',
          options: ['Yes', 'No'],
          answer: 'Yes',
        },
        {
          id: 5,
          title: 'Do you have a bedtime routine?',
          options: ['Yes', 'No'],
          answer: 'Yes',
        },
        {
          id: 6,
          title: 'Do you use electronic devices before bed?',
          options: ['Yes', 'No'],
          answer: 'No',
        },
      ],
    },
  ];

  return (
    <section>
      {/* title */}
      <DashboardTitle title="Assessment Result History" />

      {/* All Results */}
      <div className="mt-10">
        {userData?.map((data) => (
          <Accordion
            key={data?.assessmentId}
            type="single"
            collapsible
            className="w-full"
          >
            {/* item */}
            <AccordionItem
              data-aos="zoom-in"
              data-aos-duration="1000"
              value={`item-1`}
              className="border border-[#084772] rounded-[10px] overflow-hidden mt-[14px] accordion-item"
            >
              {/* title */}
              <AccordionTrigger className="text-2xl text-[#052D4C] font-semibold py-5 px-10">
                <div className="flex items-center gap-12">
                  <p className="text-lg">#2734</p>
                  <h5 className="text-xl">{data?.title}</h5>
                </div>
              </AccordionTrigger>

              {/* details */}
              <AccordionContent className="pt-5 pb-8 px-[55px] bg-white">
                <AssessmentResult questions={data?.questions} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default UserAssessmentResult;
