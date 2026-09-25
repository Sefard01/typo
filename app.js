"use strict";


/* =========================
   TEXT
========================= */

const TEXTS = {

  /* =========================================================
     BEGINNER — LEVEL 1 TO 30
     Class 2–8 style topics
     Simple vocabulary, short-to-medium sentences
     ========================================================= */

  beginner: [

    // Level 1
    `The sun rises in the east and gives us light every morning. Birds begin to sing when the day starts. Children get ready for school, while parents prepare for their daily work. A fresh morning can make us feel happy and active. We should begin our day with clean habits, healthy food, and a positive mind. Drinking water, taking a bath, eating breakfast, and reaching school on time are simple habits that help us stay healthy and disciplined. Every good day begins with small and useful actions.`,

    // Level 2
    `A garden is a beautiful place where many plants and flowers grow. Some flowers are bright red, while others may be yellow, white, pink, or blue. Butterflies often fly from one flower to another in search of nectar. Bees also visit flowers and help plants in many ways. A garden needs sunlight, water, air, and proper care. When we plant trees and take care of them, we make our surroundings cleaner and more beautiful. Plants also give us oxygen and provide homes for many small animals.`,

    // Level 3
    `Water is one of the most important things on Earth. People need water for drinking, cooking, cleaning, farming, and many other activities. Animals and plants also need water to live. We should never waste water because clean water is limited in many places. Turning off the tap while brushing our teeth is a simple way to save water. We can also use a bucket instead of wasting large amounts of water. If every person uses water carefully, our communities can protect this valuable natural resource.`,

    // Level 4
    `Trees are useful to people, animals, and the environment. They give us shade on hot days and help keep the air clean. Many birds build their nests on trees, while insects and small animals use them as shelter. Trees also provide fruits, wood, medicine, and other useful materials. Forests help protect soil and support rainfall. Cutting too many trees can harm nature. Therefore, we should plant more trees and protect the ones that already exist. A healthy environment is important for every living creature.`,

    // Level 5
    `Our school is not only a place where we learn from books. It is also a place where we learn how to work with others, follow rules, solve problems, and become responsible people. Teachers guide students and help them understand new ideas. Friends make school life enjoyable and teach us the value of cooperation. Activities such as sports, drawing, reading, science experiments, and group projects give students opportunities to discover their interests. A good school encourages curiosity and helps children become confident learners.`,

    // Level 6
    `The Earth is our home, and many different living things share it with us. Mountains, rivers, forests, oceans, deserts, and grasslands are all parts of our planet. Each place has its own plants and animals. Humans depend on nature for food, water, air, and many other resources. Pollution can damage these natural systems and make life difficult for people and animals. We can help by keeping our surroundings clean, reducing waste, saving electricity, and using resources carefully. Protecting Earth is everyone's responsibility.`,

    // Level 7
    `A good friend is someone who respects us, listens to us, and supports us when we need help. Friendship is not only about playing together or having fun. True friends also tell us when we are making a mistake and encourage us to do better. We should be honest with our friends and respect their feelings. Sometimes friends may disagree, but a small disagreement should not destroy a strong friendship. Good communication, kindness, trust, and understanding can make friendships stronger over time.`,

    // Level 8
    `Books can take us to places that we have never visited and introduce us to people we have never met. A child reading a story about a forest may imagine walking among tall trees, while a science book can explain how planets move through space. Reading also improves vocabulary and helps us understand different ideas. We do not need to read only difficult books. Even a short story, newspaper article, poem, or interesting fact can teach us something new. Regular reading develops imagination and curiosity.`,

    // Level 9
    `The water cycle is a natural process that moves water around the Earth. Heat from the Sun causes water from rivers, lakes, and oceans to evaporate. The water vapour rises into the atmosphere and cools down. It then forms tiny drops of water that create clouds. When these drops become heavy, water falls back to Earth as rain or snow. Some water enters the soil, while some flows into rivers and lakes. This continuous process provides fresh water to living organisms and supports life on our planet.`,

    // Level 10
    `Animals have many different ways of living and surviving in their surroundings. A camel can live in a dry desert because its body is suited to conditions where water is difficult to find. Fish have special bodies that help them move through water, while birds have wings that allow many of them to fly. Polar animals have features that help them survive in cold regions. These differences show how living organisms adapt to their environments. Nature is full of examples of balance, variety, and clever survival strategies.`,

    // Level 11
    `The Moon is Earth's natural satellite and can be seen in different shapes during the month. Sometimes it appears as a thin curve, while at other times it looks like a bright circle. These changes happen because we see different amounts of the Moon's sunlit side as it moves around Earth. The Moon does not produce its own light. It reflects light from the Sun. People have observed the Moon for thousands of years, and it continues to be an important object of study for scientists.`,

    // Level 12
    `Cleanliness is important for both personal health and the health of our community. We should keep our homes, classrooms, streets, and public places clean. Waste should be placed in the correct bins instead of being thrown on roads or into drains. Washing our hands before eating can help prevent the spread of germs. Clean surroundings also make places more pleasant to live and work in. Small actions may seem unimportant, but when many people follow good habits, they can create a large positive change.`,

    // Level 13
    `Farmers play an important role in our daily lives because they grow many of the foods we eat. Farming depends on soil, water, sunlight, weather, seeds, and careful planning. Farmers may grow crops such as rice, wheat, vegetables, fruits, pulses, and many other plants. Modern tools and machines can make farming easier, but farmers still need knowledge and experience to make good decisions. We should respect the work of farmers because food reaches our homes through the efforts of many people working together.`,

    // Level 14
    `Festivals bring families and communities together and give people an opportunity to celebrate important traditions. Different parts of India have different festivals, foods, clothes, music, and customs. Although celebrations may look different, many festivals teach values such as kindness, sharing, gratitude, courage, and respect. Festivals can also help children learn about history and culture. We should enjoy celebrations responsibly by avoiding unnecessary waste and respecting other people. Understanding different traditions can help us appreciate the diversity of our country.`,

    // Level 15
    `A bicycle is a simple machine that can be used for travel, exercise, and enjoyment. Riding a bicycle does not require fuel, so it does not produce exhaust like many motor vehicles. Cycling can make our legs stronger and improve physical fitness. However, cyclists should follow traffic rules and wear proper safety equipment. A helmet can protect the head during an accident. When roads are safe for cycling, bicycles can become an affordable and environmentally friendly way to travel short distances.`,

    // Level 16
    `The night sky contains many objects that are far beyond our planet. We can see the Moon and some bright planets without using a telescope. Stars appear as small points of light because they are extremely far away from Earth. Scientists use powerful telescopes to study distant stars, galaxies, and other objects in space. The universe is much larger than we can easily imagine. Learning about space teaches us that there is still a great deal that humans have not discovered.`,

    // Level 17
    `Exercise helps our body remain active and strong. Children can exercise by walking, running, cycling, swimming, playing football, playing cricket, dancing, or simply spending time outdoors. Regular movement can improve fitness and help us feel energetic. Exercise is also a good way to take a break from sitting and looking at screens for long periods. We do not always need special equipment or a gym. Simple physical activities done regularly can become a healthy part of our daily routine.`,

    // Level 18
    `Animals depend on forests for food, shelter, and protection. A forest may contain trees of different sizes, insects, birds, reptiles, and mammals. These living organisms are connected to one another through food chains and other natural relationships. If forests disappear, many animals lose their homes and may struggle to survive. Forests also help control climate and protect soil. Protecting forests is therefore important not only for wildlife but also for people who depend on healthy natural environments.`,

    // Level 19
    `Honesty is a quality that helps people build trust. Telling the truth may sometimes feel difficult, especially when we are afraid of getting into trouble. However, hiding the truth can create bigger problems later. An honest person accepts mistakes and tries to correct them. Honesty does not mean being rude or hurting someone with careless words. It means being truthful while also being respectful and responsible. When people trust one another, families, schools, friendships, and communities can work together more effectively.`,

    // Level 20
    `Technology is now a part of everyday life. We use phones, computers, televisions, cameras, and many other devices for communication, learning, entertainment, and work. Technology can save time and make information easier to access. At the same time, using screens for too long can reduce the time we spend sleeping, exercising, reading, or talking with family members. The best approach is to use technology wisely. A device should be a useful tool, not something that controls every part of our day.`,

    // Level 21
    `A library is a quiet place where people can discover knowledge through books and other resources. Students can visit a library to read stories, learn about science, understand history, or explore topics that interest them. Libraries also teach us how to search for information and choose useful sources. Reading in a library can improve concentration because there are usually fewer distractions. Even in the digital age, libraries remain valuable because they encourage learning, curiosity, and independent thinking.`,

    // Level 22
    `Rain is an important part of the natural world. It fills rivers and lakes, provides water for crops, and helps plants grow. When rain falls after a long dry period, farmers may feel relief because their fields receive the water they need. However, very heavy rain can sometimes cause floods, especially when drains are blocked or natural water channels have been damaged. Good planning, clean drainage systems, trees, and careful use of land can reduce some of the problems caused by excessive rainfall.`,

    // Level 23
    `A balanced meal gives the body different nutrients that it needs for growth and energy. Fruits and vegetables provide vitamins, while grains and other foods provide carbohydrates. Pulses, milk, eggs, nuts, and other foods can provide protein. Drinking enough clean water is also important. Eating the same food every day may not provide everything the body needs. Children should develop healthy eating habits early because good nutrition supports learning, physical activity, and normal growth.`,

    // Level 24
    `The Internet has made communication much faster than it was in the past. People can send messages, attend classes, share photographs, watch educational videos, and find information within seconds. However, not everything on the Internet is true. We should check information before believing or sharing it. We should also protect passwords and avoid giving private information to unknown people. Responsible Internet use means understanding both its benefits and its risks. Digital skills are becoming increasingly important for students and adults.`,

    // Level 25
    `A map is a useful tool for understanding places. It can show countries, states, cities, rivers, mountains, roads, and other features. Maps use symbols and colours to represent information in a simple way. A person travelling to a new place can use a map to understand directions and distances. Modern digital maps can also provide live information about roads and locations. Learning how to read a map develops useful skills in observation, planning, direction, and understanding the world around us.`,

    // Level 26
    `Teamwork means working with other people to achieve a common goal. In a classroom project, one student may collect information, another may prepare drawings, and another may explain the final work. Good teamwork requires communication and respect. Everyone should have a chance to contribute. If one person makes a mistake, the group should try to solve the problem instead of blaming that person. Working in a team teaches children that different people can have different strengths and that cooperation can produce better results.`,

    // Level 27
    `The human body is made of many systems that work together. The heart pumps blood through the body, while the lungs help us take in oxygen and remove carbon dioxide. The digestive system breaks food into nutrients that the body can use. The brain controls many activities and helps us think, learn, remember, and respond to the world. These systems depend on one another. Healthy food, regular exercise, enough sleep, and good hygiene help the body function properly.`,

    // Level 28
    `Science begins with curiosity. When children ask why the sky changes colour, how plants grow, or why objects fall toward the ground, they are beginning to think like scientists. Scientists observe the world, ask questions, collect information, test ideas, and use evidence to understand what happens. Sometimes an experiment gives an unexpected result. That does not mean the experiment was useless. Unexpected results can lead to new questions and better understanding. Science grows when people remain curious and willing to learn.`,

    // Level 29
    `Our surroundings are connected in many ways. The food we eat may come from farms, the water we drink may come from rivers or underground sources, and the electricity we use may be produced far from our homes. Every resource has a cost, even when we do not see it directly. Wasting food, water, paper, or electricity can put unnecessary pressure on natural resources. By making careful choices in our daily lives, we can reduce waste and encourage a more sustainable way of living.`,

    // Level 30
    `Learning is a journey that does not end when a school lesson is finished. A curious student can learn from books, teachers, parents, friends, experiments, mistakes, nature, and everyday experiences. Sometimes a difficult subject may seem confusing at first, but patience and regular practice can make it easier. Asking questions is not a sign of weakness; it is one of the best ways to understand something deeply. When students develop the habit of learning independently, they become better prepared to face new challenges in school and in life.`
  ],


  /* =========================================================
     INTERMEDIATE — LEVEL 1 TO 30
     Class 9–12 style topics
     Longer sentences and more academic vocabulary
     ========================================================= */

  intermediate: [

    // Level 1
    `Education is more than the process of memorising information for an examination. It helps students develop the ability to understand ideas, ask meaningful questions, solve problems, and communicate their thoughts. A good education should encourage curiosity rather than create fear of making mistakes. Students learn at different speeds and may have different interests, so classrooms should provide opportunities for discussion, experimentation, reading, and independent thinking. When knowledge is connected with real situations, students are more likely to understand why a subject matters and how it can be applied in everyday life.`,

    // Level 2
    `Climate is influenced by many factors, including latitude, altitude, distance from the sea, winds, and geographical features. Unlike weather, which can change from day to day, climate describes patterns observed over a much longer period. Understanding climate is important because agriculture, water availability, ecosystems, and human settlements are all affected by climatic conditions. Changes in temperature and rainfall patterns can create difficulties for communities that depend heavily on natural resources. Studying climate therefore requires observations from many years as well as careful analysis of environmental data.`,

    // Level 3
    `Democracy depends on the participation of citizens as well as the functioning of institutions. People express their views through elections, public discussions, community activities, journalism, and other peaceful forms of participation. Democratic systems also require rules that protect rights and establish responsibilities. A society becomes stronger when citizens can disagree without treating disagreement as a personal attack. Listening to different perspectives is important because complex social problems rarely have simple solutions. Responsible citizenship involves understanding issues, checking information, respecting lawful processes, and considering how decisions affect other members of society.`,

    // Level 4
    `The scientific method provides a structured way to investigate questions about the natural world. A researcher may begin with an observation, develop a question, propose a possible explanation, and design an experiment or study to test that explanation. The results may support the original idea, contradict it, or raise new questions. Scientific knowledge changes when stronger evidence becomes available. This does not mean that science is unreliable; rather, it demonstrates the importance of evidence and the willingness to revise conclusions when observations do not support them.`,

    // Level 5
    `Economic development involves more than an increase in the amount of money produced by a country. Access to education, healthcare, infrastructure, employment opportunities, clean water, and reliable public services can strongly influence people's quality of life. Economic growth may provide resources for development, but the benefits of growth do not automatically reach every section of society equally. For this reason, economists often examine several indicators together rather than relying on a single number. Understanding development requires attention to both measurable economic activity and the conditions in which people live.`,

    // Level 6
    `The human brain is a complex biological system that allows people to learn, remember, communicate, make decisions, and respond to their environment. Learning changes the connections between neurons, and repeated practice can strengthen certain patterns of activity. Sleep is also important because the brain continues to process information during rest. Concentration can be affected by stress, fatigue, distractions, and the way information is presented. Understanding how learning works can help students design better study habits instead of depending entirely on long hours of memorisation.`,

    // Level 7
    `Renewable energy sources such as sunlight, wind, and flowing water are increasingly important in discussions about the future of energy. Unlike fossil fuels, renewable sources are naturally replenished, although each technology has its own limitations. Solar power depends on available sunlight, wind power depends on suitable wind conditions, and large hydroelectric projects can affect ecosystems and communities. Energy systems therefore require careful planning. A sustainable transition involves technology, infrastructure, storage, economics, environmental considerations, and changes in the way electricity is produced and consumed.`,

    // Level 8
    `Urbanisation changes both the physical landscape and the social structure of communities. As people move toward cities in search of education, employment, healthcare, and other opportunities, urban areas expand and become more densely populated. Rapid growth can create pressure on housing, transportation, water supply, waste management, and public services. At the same time, cities can encourage innovation because large numbers of people, institutions, businesses, and ideas interact in close proximity. Effective urban planning attempts to balance economic activity with environmental quality and the needs of residents.`,

    // Level 9
    `The Internet has transformed the way information is created, distributed, and consumed. A student can access lectures, research papers, news reports, tutorials, and discussions from many parts of the world. However, abundance of information does not automatically produce knowledge. Information must be evaluated for accuracy, relevance, context, and reliability. Search engines can make useful sources easier to find, but users still need critical thinking skills to identify misleading claims, outdated information, manipulated images, and incomplete arguments. Digital literacy is therefore an important part of modern education.`,

    // Level 10
    `Literature often allows readers to examine human experiences from perspectives different from their own. A fictional character may face conflict, uncertainty, ambition, loss, friendship, or moral choices that encourage readers to think about similar situations in real life. The value of literature is not limited to entertainment. Stories can preserve cultural memories, question social assumptions, and explore emotions that are difficult to express directly. Reading carefully also teaches students to notice language, structure, symbolism, tone, and the relationship between a writer's choices and the meaning created by a text.`,

    // Level 11
    `Biodiversity refers to the variety of living organisms found within ecosystems and across the planet. It includes genetic variation, different species, and the diversity of ecosystems themselves. Biodiversity supports processes such as pollination, nutrient cycling, soil formation, and food production. Human activities including habitat destruction, pollution, overexploitation, and climate change can place pressure on biological systems. Conservation is therefore not simply about protecting individual animals; it also involves maintaining the ecological relationships that allow entire communities of organisms to survive.`,

    // Level 12
    `A computer program is a sequence of instructions that enables a machine to perform a task. Although computers can execute instructions extremely quickly, they do not understand problems in the same way humans do. Programmers must break complex problems into smaller steps and express those steps using precise rules. Good software also requires testing because a program that works for one input may fail for another. As systems become larger, developers need to consider performance, security, maintainability, usability, and the possibility of unexpected conditions.`,

    // Level 13
    `Probability provides a mathematical language for describing uncertainty. It is used in fields ranging from statistics and economics to engineering and scientific research. A probability does not guarantee that a particular event will occur; instead, it describes how likely an event is under a specified model or set of assumptions. Understanding this distinction is important because people often confuse probability with certainty. Good reasoning about uncertain situations requires careful attention to evidence, assumptions, sample size, and the difference between correlation and causation.`,

    // Level 14
    `Photosynthesis is one of the fundamental processes that supports life on Earth. Green plants use light energy to convert carbon dioxide and water into chemical energy stored in organic compounds, while oxygen is released as a by-product. The process occurs mainly in structures called chloroplasts and depends on pigments that absorb light. Photosynthesis connects the energy of sunlight with biological systems and contributes to the movement of carbon through the environment. Understanding this process helps explain why plants are central to many food chains.`,

    // Level 15
    `Historical events are rarely caused by a single factor. Political decisions, economic conditions, social structures, technological changes, geography, individual choices, and unexpected events can interact to produce major transformations. Studying history therefore requires more than remembering dates and names. Historians examine sources, compare accounts, identify patterns, and consider the limitations of available evidence. Different interpretations may emerge from the same period because researchers may ask different questions or give greater importance to different kinds of evidence. Historical thinking is therefore an analytical process.`,

    // Level 16
    `Scientific communication plays an important role in the development of knowledge. Researchers must explain methods, observations, limitations, and conclusions clearly enough for other people to evaluate their work. Peer review can identify weaknesses, but it does not guarantee that every published claim is correct. Reproducibility and independent verification are also important. When results are difficult to reproduce, researchers may need to investigate whether differences in methods, measurements, samples, or assumptions explain the disagreement. Transparent communication helps science correct itself over time.`,

    // Level 17
    `Artificial intelligence refers to computational systems designed to perform tasks that normally require aspects of human intelligence, such as recognising patterns, generating language, making predictions, or interpreting complex data. Different AI systems use different methods and have different limitations. A model may perform well on one type of problem and poorly on another. The usefulness of AI therefore depends not only on its technical capabilities but also on the quality of data, evaluation methods, human oversight, and the context in which the system is used.`,

    // Level 18
    `Environmental pollution occurs when harmful substances or forms of energy enter natural systems at levels that cause damage. Air pollution can affect respiratory health, water pollution can harm aquatic ecosystems, and soil pollution can reduce the quality of agricultural land. Pollution does not always remain close to its original source because wind, water, and biological processes can transport contaminants. Reducing pollution therefore requires both local action and broader systems of regulation, technology, monitoring, and responsible consumption.`,

    // Level 19
    `Communication is not simply the transfer of words from one person to another. Meaning can be influenced by tone, context, cultural expectations, body language, previous experiences, and the assumptions of both the speaker and the listener. A technically correct message may still create confusion if the intended audience does not understand the language or background information. Effective communication therefore requires clarity as well as empathy. Listening carefully can be just as important as speaking because misunderstandings often begin when people respond before fully understanding what was said.`,

    // Level 20
    `Time management becomes increasingly important as students take responsibility for larger assignments and multiple subjects. A useful schedule does not simply divide every hour into rigid blocks. It should account for priorities, deadlines, concentration levels, breaks, unexpected tasks, and the amount of effort required for different activities. Large assignments can become less stressful when they are divided into smaller steps. Planning also makes it easier to identify tasks that are important but not urgent, preventing them from being ignored until the final moment.`,

    // Level 21
    `The process of scientific discovery often involves failure, uncertainty, and repeated attempts. An experiment that produces an unexpected result may reveal a weakness in the original hypothesis or expose an aspect of a system that was not previously understood. Researchers therefore record unsuccessful experiments and unusual observations instead of ignoring them. Progress frequently occurs through a combination of successful ideas and careful learning from mistakes. The image of science as a straight path from question to answer is much simpler than the actual process of investigation.`,

    // Level 22
    `Modern transportation has connected cities and countries on a scale that would have been difficult to imagine in earlier centuries. Roads, railways, airports, ports, and digital systems allow people and goods to move across large distances. This connectivity supports trade and tourism, but transportation also consumes energy and can contribute to pollution and congestion. Future transportation systems may therefore need to balance speed, affordability, accessibility, safety, and environmental impact. Designing such systems requires cooperation between engineers, planners, governments, businesses, and communities.`,

    // Level 23
    `Mathematics is often described as a collection of formulas, but mathematical thinking involves much more than calculation. It requires recognising patterns, defining concepts precisely, constructing logical arguments, and understanding relationships between quantities. A student may memorise a formula and still struggle to decide when it should be used. Deeper understanding develops when learners ask why a formula works, what assumptions it depends on, and how the result changes when the conditions change. Mathematical reasoning is useful far beyond examinations because it trains structured problem solving.`,

    // Level 24
    `Social media has changed the speed at which information and opinions travel between people. A single post can reach a large audience within a short period, and users can respond immediately. This creates opportunities for communication and community building, but it can also spread incomplete or misleading information quickly. Algorithms may influence which content users see, while emotional messages can attract more attention than careful explanations. Responsible digital participation requires users to pause, verify important claims, understand context, and distinguish personal opinion from evidence.`,

    // Level 25
    `The study of space has expanded our understanding of the universe and of our own planet. Telescopes allow astronomers to observe distant galaxies, stars, planets, and other astronomical objects. Space missions have also provided detailed information about bodies within our solar system. These investigations require advanced mathematics, engineering, physics, computer science, and international cooperation. Exploring space is not only about travelling farther from Earth; it also helps scientists understand how planets form, how stars evolve, and what conditions may support life.`,

    // Level 26
    `A strong argument depends on evidence and reasoning rather than confidence alone. When evaluating a claim, it is useful to ask what evidence supports it, whether the evidence is reliable, and whether other explanations are possible. A collection of examples may illustrate an idea without proving that it is universally true. Similarly, two events occurring together do not necessarily mean that one caused the other. Learning to recognise these distinctions helps students evaluate advertisements, news reports, scientific claims, and everyday arguments more carefully.`,

    // Level 27
    `Economic decisions are influenced by limited resources and competing needs. Individuals may have to decide how to divide income between food, education, housing, savings, entertainment, and other expenses. Governments also face choices because public resources are limited while demands for services can be extensive. Economists study these decisions using concepts such as opportunity cost, incentives, supply, demand, and productivity. Understanding these ideas does not provide a simple answer to every economic problem, but it can help explain why choices involve trade-offs.`,

    // Level 28
    `Memory is not a perfect recording of everything that happens to us. Human memory can change as people recall events, encounter new information, or discuss experiences with others. This is one reason researchers distinguish between remembering something and having independent evidence that the event occurred exactly as remembered. Studying memory has implications for education, eyewitness testimony, psychology, and everyday decision-making. Effective learning strategies often involve repeated retrieval, meaningful connections, practice over time, and sufficient rest rather than passive rereading alone.`,

    // Level 29
    `The future of work is likely to involve continuous changes in technology, organisations, and the skills expected from workers. Some repetitive tasks can be automated, while new roles may emerge around technologies that did not previously exist. This does not mean that technical knowledge is the only important ability. Communication, adaptability, creativity, critical thinking, collaboration, and the ability to learn new tools can also become increasingly valuable. Students preparing for future careers therefore benefit from building both specialised knowledge and the ability to learn beyond what they already know.`,

    // Level 30
    `Knowledge becomes more useful when people learn how to connect ideas from different fields. A problem involving climate change, for example, may require knowledge of physics, chemistry, biology, economics, geography, technology, and social behaviour. No single subject can provide every part of the answer. Interdisciplinary thinking allows researchers and students to examine a problem from several perspectives and identify relationships that may not be visible within one discipline. This approach can be challenging because it requires learning different forms of evidence, but it can also produce more complete explanations of complex problems.`
  ],


  /* =========================================================
     ADVANCED — LEVEL 1 TO 30
     Difficult literary, philosophical, scientific and technical
     original passages.
     ========================================================= */

  advanced: [

    // Level 1
    `Civilisation is often described through its monuments, institutions, technologies, and written records, yet the deeper character of a society can sometimes be observed in the ordinary decisions made by people who never appear in historical accounts. The way a community treats strangers, distributes scarce resources, responds to failure, and remembers its past reveals assumptions that official documents may conceal. Progress, therefore, cannot be measured solely by the complexity of machines or the height of buildings. It must also be examined through the quality of relationships, institutions, and opportunities that a society creates for those who inhabit it.`,

    // Level 2
    `Every technological system introduces a particular way of organising human attention. A notification interrupts a conversation, a recommendation changes what a person notices, and an automated interface decides which choices are presented first. None of these decisions necessarily determines human behaviour, yet repeated exposure can gradually influence habits and expectations. The important question is therefore not simply whether technology is useful, but what patterns of behaviour its design encourages. Understanding technology requires examining not only its capabilities but also the incentives, assumptions, and forms of attention embedded within the systems people use every day.`,

    // Level 3
    `Scientific uncertainty is sometimes misunderstood as evidence that nothing can be known. In reality, uncertainty is a measurement of the limits within which a conclusion should be interpreted. A well-designed experiment may produce strong evidence while still leaving questions unanswered. Researchers therefore distinguish between what the data directly demonstrate, what can reasonably be inferred, and what remains speculative. This discipline is valuable because it prevents confidence from becoming a substitute for evidence. The strength of a scientific conclusion depends not on how certain its language sounds, but on how well its claims correspond to the available observations.`,

    // Level 4
    `A complex system can produce outcomes that are difficult to predict even when each individual component follows relatively simple rules. Weather, financial markets, ecosystems, traffic networks, and social interactions all contain numerous relationships that influence one another. A small change in one part of such a system may have little effect under ordinary conditions but become significant when it interacts with other changes. This phenomenon makes complex systems difficult to control through simple interventions. Effective analysis therefore requires attention to feedback loops, dependencies, delays, thresholds, and the possibility of unintended consequences.`,

    // Level 5
    `Memory gives continuity to personal identity, but continuity should not be confused with perfect accuracy. People reconstruct experiences whenever they remember them, combining fragments of perception with later knowledge, emotion, expectation, and interpretation. This does not make every memory false; it means that remembering is an active cognitive process rather than the retrieval of an untouched recording. The distinction becomes particularly important when memories are used as evidence. A sincere recollection can be genuinely experienced while still containing errors introduced by the ordinary limitations of human cognition.`,

    // Level 6
    `The history of scientific progress contains numerous moments when an established explanation was replaced by a framework that could account for observations more effectively. Such transitions rarely occur simply because a new idea appears. They depend on evidence, mathematical consistency, experimental results, technological capabilities, and the willingness of researchers to examine assumptions that had previously seemed obvious. Scientific revolutions can therefore be understood as changes in explanatory frameworks rather than merely the discovery of isolated facts. What changes is not only what people know, but also the conceptual structure through which they interpret new observations.`,

    // Level 7
    `Language is often treated as a transparent vehicle for thought, although words can influence the boundaries through which experiences are described and compared. The same event may acquire different meanings depending on the vocabulary available to the speaker, the cultural context in which the conversation occurs, and the assumptions shared by the participants. This does not imply that language completely determines thought. Rather, language provides tools for categorisation, emphasis, comparison, and abstraction. Learning a new language can therefore expose a person to alternative ways of organising experience without requiring the abandonment of existing conceptual frameworks.`,

    // Level 8
    `The development of cities has always involved a negotiation between concentration and movement. Dense settlements create opportunities for trade, education, culture, innovation, and specialised services because people and institutions exist near one another. At the same time, concentration can produce congestion, expensive housing, pollution, inequality, and pressure on infrastructure. Modern urban planning attempts to manage these tensions through transportation networks, zoning, public spaces, housing policies, and environmental design. Yet cities remain dynamic systems, and policies that solve one problem may produce new pressures elsewhere.`,

    // Level 9
    `A useful model is not necessarily a perfect representation of reality. In science, mathematics, economics, and engineering, models simplify complicated systems so that particular relationships can be examined more clearly. The simplification is valuable precisely because it removes details that are not essential to the question being studied. Problems arise when a model is treated as universally valid outside the conditions under which it was constructed. Good modelling therefore requires both technical skill and intellectual discipline: one must understand what a model explains, what it ignores, and where its assumptions cease to be reliable.`,

    // Level 10
    `Literary works often survive because they remain capable of generating new interpretations long after the circumstances of their creation have changed. A reader brings personal experience, cultural knowledge, historical awareness, and expectations to a text, and these factors influence what becomes significant. The text itself does not necessarily change, but the questions asked of it can change dramatically. This relationship between stability and interpretation is one reason literature continues to matter. A powerful work can preserve a particular historical voice while simultaneously becoming a space in which later generations examine their own concerns.`,

    // Level 11
    `The concept of progress becomes complicated when improvements in one dimension create costs in another. A technology may increase productivity while creating environmental pressure; an infrastructure project may improve transportation while disrupting established communities; an automated system may reduce repetitive labour while creating new forms of dependence. Such examples do not prove that progress is impossible. They demonstrate that progress is multidimensional and that evaluation requires attention to distribution, time, opportunity cost, and unintended effects. A society that measures success using only one indicator may overlook consequences that become visible much later.`,

    // Level 12
    `Information has economic value partly because attention is limited. An individual can encounter thousands of messages, images, advertisements, articles, and notifications in a single day, yet only a fraction can receive meaningful consideration. Systems designed to capture attention therefore compete for a scarce resource. This competition can reward novelty, emotional intensity, and rapid consumption even when careful understanding would require patience. The challenge for users is not simply to obtain more information but to construct environments in which important information can receive sufficient attention to be understood, evaluated, and remembered.`,

    // Level 13
    `In software engineering, complexity rarely arrives as a single dramatic event. It accumulates through small decisions that appear reasonable in isolation: a shortcut introduced to meet a deadline, an exception added for an unusual case, a dependency included for convenience, or a configuration changed without documentation. Over time, these decisions can interact and make a system difficult to understand. Technical debt is therefore not merely old code; it is the future cost created when present convenience repeatedly takes priority over maintainability. Managing complexity requires deliberate design, documentation, testing, and periodic simplification.`,

    // Level 14
    `A reliable system should not be judged only by whether it succeeds under ideal conditions. Real environments contain incomplete information, unexpected inputs, hardware failures, human mistakes, network interruptions, and changes in surrounding systems. Robust engineering attempts to anticipate such conditions and define how the system should behave when assumptions fail. This principle applies to software, transportation, medical equipment, communication networks, and many other technologies. Reliability is therefore not the absence of failure but the ability to respond to failure in a controlled, observable, and recoverable manner.`,

    // Level 15
    `The distinction between correlation and causation is one of the most important ideas in analytical reasoning. Two variables may change together because one influences the other, because both are affected by a third factor, or because the relationship is coincidental. Large datasets can reveal patterns with impressive precision, but statistical association alone does not explain why the pattern exists. Establishing causation generally requires additional evidence, appropriate research design, or a convincing mechanism. The ability to recognise this distinction protects reasoning from conclusions that appear obvious simply because two observations happen to occur together.`,

    // Level 16
    `Human attention is flexible but limited, and modern environments frequently exploit this limitation. When several tasks compete simultaneously, people may believe they are multitasking even though the brain is rapidly switching between activities. Each switch can carry a cognitive cost, especially when the tasks require active reasoning or memory. Deep work therefore depends partly on reducing unnecessary interruptions and creating periods in which a difficult problem can receive sustained attention. Concentration is not merely a personal quality; it is also influenced by the design of the environment in which thinking takes place.`,

    // Level 17
    `A book can function simultaneously as a story, a historical document, a philosophical argument, and a record of the assumptions held by its author and audience. Readers sometimes approach literature searching for a single correct interpretation, but complex works may resist such reduction. Ambiguity can be deliberate, allowing contradictory possibilities to remain active within the same narrative. This does not mean that every interpretation is equally defensible. Careful reading still requires evidence from language, structure, context, and recurring patterns. Interpretation becomes rigorous when imagination is constrained by what the text can actually support.`,

    // Level 18
    `Artificial intelligence systems can produce outputs that appear coherent without possessing a human-like understanding of the world. Their behaviour emerges from computational procedures, training data, representations, optimisation methods, and the context supplied during use. This distinction matters because fluent output can create an impression of reliability that exceeds the underlying evidence. Evaluating such systems therefore requires testing them against clearly defined tasks and examining both successful and unsuccessful cases. The central engineering challenge is not merely to make systems capable, but to make their limitations observable and their behaviour appropriate to the context.`,

    // Level 19
    `The preservation of knowledge depends not only on recording information but also on maintaining the systems required to interpret it. A digital file may survive physically while becoming inaccessible because its format, software, hardware, or documentation disappears. Historical preservation therefore involves more than storing copies. It requires metadata, context, compatible tools, institutional responsibility, and procedures for migration when technologies change. The paradox of the digital age is that copying information has become extraordinarily easy while preserving the ability to understand and use those copies over very long periods can remain surprisingly difficult.`,

    // Level 20
    `Education becomes transformative when students move from receiving answers to developing the capacity to formulate better questions. A memorised fact may be useful in a particular examination, but the ability to identify assumptions, compare evidence, construct explanations, and revise conclusions remains valuable when the problem changes. This is why genuine learning often feels more difficult than memorisation. It requires uncertainty and effort because the learner must reorganise existing knowledge. The purpose of education, viewed broadly, is therefore not simply to fill the mind with information but to improve the quality of thinking performed with that information.`,

    // Level 21
    `Ecological systems demonstrate that stability does not necessarily mean complete absence of change. Forests, wetlands, grasslands, oceans, and other ecosystems continuously respond to temperature, rainfall, competition, disturbance, migration, and seasonal cycles. A system may remain broadly functional while its individual components change significantly. Problems arise when the rate or scale of disturbance exceeds the system's ability to recover. Conservation science therefore considers resilience as well as preservation. The objective is often to maintain the processes that allow an ecosystem to adapt rather than attempting to freeze it in a permanently unchanged state.`,

    // Level 22
    `Democratic institutions are often evaluated through formal rules, yet institutions also depend on informal habits that cannot be completely written into law. Trust, procedural norms, willingness to compromise, respect for evidence, and acceptance of legitimate disagreement influence how formal structures operate in practice. When these habits weaken, even well-designed rules may become less effective. This observation does not eliminate the importance of law; instead, it demonstrates that institutional stability emerges from the interaction between written procedures and the behaviour of the people who operate within them.`,

    // Level 23
    `The history of invention is filled with technologies that produced consequences their creators could not fully anticipate. A tool designed to solve one problem may become the foundation for an entirely different application when it enters a new environment. This makes technological forecasting inherently uncertain. Researchers can examine trends, constraints, incentives, and possible scenarios, but they cannot know every future interaction. Responsible innovation therefore includes mechanisms for monitoring consequences and adjusting systems after deployment. Designing a technology is only one stage of its relationship with society.`,

    // Level 24
    `Attention to detail is valuable in technical work, but excessive attention to isolated details can obscure the structure of a larger problem. Engineers and researchers must move between different levels of abstraction: examining a single variable when precision is necessary, then stepping back to understand how that variable interacts with the complete system. This movement between detail and abstraction is a difficult intellectual skill. Too much abstraction produces vague explanations, while excessive detail can make the central relationship invisible. Effective reasoning requires knowing when to change the level at which a problem is being examined.`,

    // Level 25
    `The desire for certainty is understandable because uncertainty can make decisions uncomfortable. Yet many important decisions must be made before complete information is available. In such situations, rational thinking does not mean waiting for perfect knowledge; it means identifying what is known, what remains uncertain, what assumptions are being made, and what consequences may follow from each available option. A decision can therefore be reasonable even when its outcome is uncertain. The quality of reasoning should be judged partly by the process used to reach the decision, not only by whether the final result happened to be favourable.`,

    // Level 26
    `A difficult problem often becomes more manageable after its boundaries are defined precisely. Vague questions can contain several different problems at once, making it impossible to determine whether a proposed solution has actually succeeded. Engineers may define measurable requirements, researchers may specify variables and populations, and writers may establish the central question of an argument. Defining the problem does not solve it, but it determines what counts as evidence of progress. In many forms of intellectual work, a well-defined question is already a substantial improvement over an impressive but ambiguous one.`,

    // Level 27
    `The written word has an unusual capacity to preserve thought across time while simultaneously separating that thought from the circumstances in which it was produced. A sentence written centuries ago can be read by someone living under entirely different social, technological, and political conditions. Yet the distance between author and reader can create misunderstandings because assumptions that were obvious to the original audience may no longer be visible. Reading historically therefore requires a double movement: understanding the text in its own context while also recognising how the present reader's perspective shapes interpretation.`,

    // Level 28
    `Complexity often creates an illusion that more information automatically leads to better decisions. In practice, additional information can become useful only when it changes the quality of the model being used to interpret it. A thousand measurements may provide little insight if the important variable has not been identified, while a single carefully chosen observation can challenge an assumption that shaped an entire analysis. Effective reasoning therefore depends on selecting information according to its relevance rather than its quantity. The goal is not to collect everything, but to understand what evidence can genuinely distinguish between competing explanations.`,

    // Level 29
    `Human knowledge advances through a combination of accumulation and correction. Each generation inherits observations, theories, tools, institutions, and mistakes from earlier generations. Some inherited ideas remain useful, while others must be modified when new evidence exposes their limitations. Progress therefore does not require rejecting everything that came before. It requires distinguishing between principles that remain supported and assumptions that no longer fit the evidence. Intellectual maturity involves the ability to preserve valuable knowledge without becoming so attached to existing explanations that contradictory evidence is automatically dismissed.`,

    // Level 30
    `The most demanding form of learning begins when a person recognises that understanding a subject is different from merely becoming familiar with its vocabulary. Familiarity allows concepts to appear recognisable, whereas understanding allows them to be connected, questioned, applied, and explained under unfamiliar conditions. A learner who genuinely understands an idea should be able to describe its assumptions, identify its limitations, construct examples, recognise counterexamples, and relate it to other concepts. This deeper form of knowledge takes longer because it requires active reconstruction rather than passive exposure. Yet it is precisely this kind of understanding that remains useful when circumstances change and familiar answers are no longer sufficient.`

  ]

};
========================= */

const textDisplay =
  document.getElementById("textDisplay");

const typingContainer =
  document.getElementById("typingContainer");

const wpmElement =
  document.getElementById("wpm");

const accuracyElement =
  document.getElementById("accuracy");

const errorsElement =
  document.getElementById("errors");

const timerElement =
  document.getElementById("timer");

const typingHint =
  document.getElementById("typingHint");

const testScreen =
  document.getElementById("testScreen");

const resultScreen =
  document.getElementById("resultScreen");

const finalWpm =
  document.getElementById("finalWpm");

const finalAccuracy =
  document.getElementById("finalAccuracy");

const finalCorrect =
  document.getElementById("finalCorrect");

const finalIncorrect =
  document.getElementById("finalIncorrect");

const finalErrors =
  document.getElementById("finalErrors");

const resultMessage =
  document.getElementById("resultMessage");

const mistakeList =
  document.getElementById("mistakeList");

const settingsBtn =
  document.getElementById("settingsBtn");

const closeSettings =
  document.getElementById("closeSettings");

const settingsPanel =
  document.getElementById("settingsPanel");

const overlay =
  document.getElementById("overlay");

const backspaceToggle =
  document.getElementById("backspaceToggle");

const soundToggle =
  document.getElementById("soundToggle");


/* =========================
   STATE
========================= */

const state = {

  duration: 60,

  difficulty: "beginner",

  text: "",

  currentIndex: 0,

  started: false,

  finished: false,

  startTime: null,

  timerFrame: null,

  correctCharacters: 0,

  incorrectCharacters: 0,

  errors: 0,

  mistakes: {},

  typedCharacters: [],

  allowBackspace: true,

  soundEnabled: false,

  theme: "light"

};


/* =========================
   AUDIO
========================= */

let audioContext = null;


function createAudioContext() {

  if (!audioContext) {

    const AudioContext =
      window.AudioContext ||
      window.webkitAudioContext;

    if (!AudioContext) {
      return null;
    }

    audioContext =
      new AudioContext();

  }

  if (
    audioContext.state === "suspended"
  ) {

    audioContext.resume();

  }

  return audioContext;

}


function playTypingSound(
  isCorrect = true
) {

  if (!state.soundEnabled) {
    return;
  }

  const ctx =
    createAudioContext();

  if (!ctx) {
    return;
  }

  const oscillator =
    ctx.createOscillator();

  const gain =
    ctx.createGain();

  /*
    Two very subtle tones.
    They are intentionally short so
    they don't become annoying.
  */

  oscillator.type = "sine";

  oscillator.frequency.value =
    isCorrect
      ? 145
      : 105;

  gain.gain.setValueAtTime(
    0.0001,
    ctx.currentTime
  );

  gain.gain.exponentialRampToValueAtTime(
    isCorrect ? 0.035 : 0.05,
    ctx.currentTime + 0.005
  );

  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    ctx.currentTime + 0.045
  );

  oscillator.connect(gain);

  gain.connect(ctx.destination);

  oscillator.start();

  oscillator.stop(
    ctx.currentTime + 0.05
  );

}


/* =========================
   TIME
========================= */

function formatTime(seconds) {

  seconds =
    Math.max(
      0,
      Math.ceil(seconds)
    );

  const minutes =
    Math.floor(seconds / 60);

  const remaining =
    seconds % 60;

  return `${minutes}:${String(
    remaining
  ).padStart(2, "0")}`;

}


function elapsedSeconds() {

  if (!state.startTime) {
    return 0;
  }

  return (
    performance.now() -
    state.startTime
  ) / 1000;

}


/* =========================
   METRICS
========================= */

function calculateWPM() {

  const elapsed =
    elapsedSeconds();

  if (elapsed <= 0) {
    return 0;
  }

  const characters =
    state.correctCharacters +
    state.incorrectCharacters;

  const words =
    characters / 5;

  return Math.round(
    words / (elapsed / 60)
  );

}


function calculateAccuracy() {

  const total =
    state.correctCharacters +
    state.incorrectCharacters;

  if (!total) {
    return 100;
  }

  return Math.round(
    (
      state.correctCharacters /
      total
    ) * 100
  );

}


/* =========================
   TEXT
========================= */

function randomText() {

  return TEXTS[state.difficulty][
    Math.floor(
      Math.random() *
      TEXTS[state.difficulty].length
    )
  ];

}


function loadText() {

  state.text =
    randomText();

  state.currentIndex = 0;

  textDisplay.innerHTML = "";

  const fragment =
    document.createDocumentFragment();

  [...state.text].forEach(
    (character, index) => {

      const span =
        document.createElement("span");

      span.className = "char";

      span.dataset.index =
        index;

      span.textContent =
        character === " "
          ? "\u00A0"
          : character;

      fragment.appendChild(span);

    }
  );

  textDisplay.appendChild(
    fragment
  );

  updateCursor();

}


/* =========================
   CURSOR
========================= */

function updateCursor() {

  const old =
    textDisplay.querySelector(
      ".current"
    );

  if (old) {
    old.classList.remove("current");
  }

  const current =
    textDisplay.querySelector(
      `[data-index="${state.currentIndex}"]`
    );

  if (!current) {
    return;
  }

  current.classList.add(
    "current"
  );

  /*
    Only scroll vertically when necessary.
    Never allow horizontal movement.
  */

  if (state.started) {

    const rect =
      current.getBoundingClientRect();

    const containerRect =
      typingContainer.getBoundingClientRect();

    if (
      rect.bottom >
      containerRect.bottom - 30
    ) {

      current.scrollIntoView({
        block: "center",
        inline: "nearest"
      });

    }

  }

}


/* =========================
   START
========================= */

function startTest() {

  if (state.started) {
    return;
  }

  state.started = true;

  state.startTime =
    performance.now();

  typingHint.classList.add(
    "hidden"
  );

  createAudioContext();

  requestAnimationFrame(
    updateTimer
  );

}


/* =========================
   TIMER
========================= */

function updateTimer() {

  if (
    !state.started ||
    state.finished
  ) {
    return;
  }

  const elapsed =
    elapsedSeconds();

  const remaining =
    state.duration - elapsed;

  timerElement.textContent =
    formatTime(remaining);

  updateStats();

  if (remaining <= 0) {

    finishTest();

    return;

  }

  state.timerFrame =
    requestAnimationFrame(
      updateTimer
    );

}


/* =========================
   STATS
========================= */

function updateStats() {

  wpmElement.textContent =
    calculateWPM();

  accuracyElement.textContent =
    `${calculateAccuracy()}%`;

  errorsElement.textContent =
    state.errors;

}


/* =========================
   INPUT
========================= */

function typeCharacter(character) {

  if (state.finished) {
    return;
  }

  if (!state.started) {
    startTest();
  }

  const expected =
    state.text[state.currentIndex];

  if (expected === undefined) {
    appendMoreText();
  }

  const current =
    textDisplay.querySelector(
      `[data-index="${state.currentIndex}"]`
    );

  if (!current) {
    return;
  }


  const isCorrect =
    character ===
    state.text[state.currentIndex];


  playTypingSound(
    isCorrect
  );


  if (isCorrect) {

    state.correctCharacters++;

    current.classList.remove(
      "current"
    );

    current.classList.add(
      "correct"
    );

  } else {

    state.incorrectCharacters++;

    state.errors++;

    const expectedCharacter =
      state.text[state.currentIndex];

    state.mistakes[
      expectedCharacter
    ] =
      (
        state.mistakes[
          expectedCharacter
        ] || 0
      ) + 1;

    current.classList.remove(
      "current"
    );

    current.classList.add(
      "incorrect"
    );

  }


  state.typedCharacters.push({
    expected:
      state.text[state.currentIndex],

    actual:
      character,

    correct:
      isCorrect
  });


  state.currentIndex++;

  if (
    state.currentIndex >=
    state.text.length
  ) {

    appendMoreText();

  }

  updateCursor();

  updateStats();

}


/* =========================
   APPEND TEXT
========================= */

function appendMoreText() {

  const more =
    " " +
    randomText();

  const start =
    state.text.length;

  state.text += more;

  const fragment =
    document.createDocumentFragment();

  [...more].forEach(
    (character, index) => {

      const span =
        document.createElement("span");

      span.className =
        "char";

      span.dataset.index =
        start + index;

      span.textContent =
        character === " "
          ? "\u00A0"
          : character;

      fragment.appendChild(
        span
      );

    }
  );

  textDisplay.appendChild(
    fragment
  );

}


/* =========================
   BACKSPACE
========================= */

function backspace() {

  if (
    !state.started ||
    !state.allowBackspace ||
    state.currentIndex <= 0
  ) {
    return;
  }

  const previousIndex =
    state.currentIndex - 1;

  const previous =
    textDisplay.querySelector(
      `[data-index="${previousIndex}"]`
    );

  const previousTyped =
    state.typedCharacters.pop();

  if (!previousTyped) {
    return;
  }


  if (previousTyped.correct) {

    state.correctCharacters--;

  } else {

    state.incorrectCharacters--;

    state.errors--;

    const expected =
      previousTyped.expected;

    state.mistakes[expected]--;

    if (
      state.mistakes[expected] <= 0
    ) {

      delete state.mistakes[
        expected
      ];

    }

  }


  if (previous) {

    previous.classList.remove(
      "correct",
      "incorrect"
    );

  }


  state.currentIndex--;

  updateCursor();

  updateStats();

}


/* =========================
   KEYBOARD
========================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.ctrlKey ||
      event.altKey ||
      event.metaKey
    ) {
      return;
    }


    if (
      event.target.tagName ===
        "INPUT" ||
      event.target.tagName ===
        "TEXTAREA"
    ) {
      return;
    }


    if (event.key === "Escape") {

      event.preventDefault();

      resetTest();

      return;

    }


    if (event.key === "Tab") {

      event.preventDefault();

      resetTest();

      return;

    }


    if (
      event.key ===
      "Backspace"
    ) {

      event.preventDefault();

      backspace();

      return;

    }


    if (
      event.key.length === 1
    ) {

      event.preventDefault();

      typeCharacter(
        event.key
      );

    }

  }
);


/* =========================
   RESET
========================= */

function resetState() {

  cancelAnimationFrame(
    state.timerFrame
  );

  state.currentIndex = 0;

  state.started = false;

  state.finished = false;

  state.startTime = null;

  state.correctCharacters = 0;

  state.incorrectCharacters = 0;

  state.errors = 0;

  state.mistakes = {};

  state.typedCharacters = [];

}


function resetTest() {

  resetState();

  testScreen.classList.remove(
    "hidden"
  );

  resultScreen.classList.add(
    "hidden"
  );

  timerElement.textContent =
    formatTime(
      state.duration
    );

  wpmElement.textContent =
    "0";

  accuracyElement.textContent =
    "100%";

  errorsElement.textContent =
    "0";

  typingHint.textContent =
    "Start typing to begin";

  typingHint.classList.remove(
    "hidden"
  );

  loadText();

  typingContainer.focus();

}


/* =========================
   FINISH
========================= */

function finishTest() {

  if (state.finished) {
    return;
  }

  state.finished = true;

  cancelAnimationFrame(
    state.timerFrame
  );

  timerElement.textContent =
    "0:00";

  showResults();

}


/* =========================
   RESULTS
========================= */

function showResults() {

  testScreen.classList.add(
    "hidden"
  );

  resultScreen.classList.remove(
    "hidden"
  );

  const wpm =
    calculateWPM();

  const accuracy =
    calculateAccuracy();

  finalWpm.textContent =
    `${wpm} WPM`;

  finalAccuracy.textContent =
    `${accuracy}%`;

  finalCorrect.textContent =
    state.correctCharacters;

  finalIncorrect.textContent =
    state.incorrectCharacters;

  finalErrors.textContent =
    state.errors;


  if (accuracy >= 98) {

    resultMessage.textContent =
      "Excellent accuracy. Try increasing your speed while keeping this consistency.";

  } else if (accuracy >= 94) {

    resultMessage.textContent =
      "Good balance between speed and accuracy. Keep practicing consistently.";

  } else if (accuracy >= 85) {

    resultMessage.textContent =
      "Your speed is developing. Focus on accuracy before pushing your speed higher.";

  } else {

    resultMessage.textContent =
      "Slow down and focus on accuracy. Speed will naturally follow.";

  }


  renderMistakes();

}


/* =========================
   MISTAKES
========================= */

function renderMistakes() {

  const mistakes =
    Object.entries(
      state.mistakes
    )
      .sort(
        (a, b) =>
          b[1] - a[1]
      )
      .slice(0, 8);


  if (!mistakes.length) {

    mistakeList.textContent =
      "No mistakes";

    return;

  }


  mistakeList.innerHTML = "";


  mistakes.forEach(
    ([character, count]) => {

      const item =
        document.createElement(
          "div"
        );

      item.className =
        "mistake-item";

      item.innerHTML = `
        <strong>
          ${escapeHTML(character)}
        </strong>

        <small>
          ${count} errors
        </small>
      `;

      mistakeList.appendChild(
        item
      );

    }
  );

}


function escapeHTML(value) {

  return value
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    )
    .replaceAll(
      '"',
      "&quot;"
    )
    .replaceAll(
      "'",
      "&#039;"
    );

}


/* =========================
   DURATION
========================= */

document
  .querySelectorAll(".mode-btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".mode-btn"
          )
          .forEach(btn =>
            btn.classList.remove(
              "active"
            )
          );

        button.classList.add(
          "active"
        );

        state.duration =
          Number(
            button.dataset.time
          );

        resetTest();

      }
    );

  });


/* =========================
   DIFFICULTY
========================= */

document
  .querySelectorAll(
    ".difficulty-btn"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".difficulty-btn"
          )
          .forEach(btn =>
            btn.classList.remove(
              "active"
            )
          );

        button.classList.add(
          "active"
        );

        state.difficulty =
          button.dataset.difficulty;

        resetTest();

      }
    );

  });


/* =========================
   THEME
========================= */

function setTheme(theme) {

  state.theme =
    theme;

  document.documentElement
    .setAttribute(
      "data-theme",
      theme
    );

  localStorage.setItem(
    "typing-theme",
    theme
  );

  const themeButton =
    document.getElementById("themeToggle");

  const themeIcon =
    document.getElementById("themeIcon");

  themeIcon.textContent =
    theme === "dark" ? "☀" : "◐";

  const nextThemeLabel =
    theme === "dark"
      ? "Switch to light mode"
      : "Switch to dark mode";

  themeButton.setAttribute(
    "aria-label",
    nextThemeLabel
  );

  themeButton.setAttribute(
    "title",
    nextThemeLabel
  );

}


document
  .getElementById("themeToggle")
  .addEventListener(
    "click",
    () => {

      setTheme(
        state.theme === "dark"
          ? "light"
          : "dark"
      );

    }
  );


const savedTheme =
  localStorage.getItem(
    "typing-theme"
  );

if (
  savedTheme === "dark" ||
  savedTheme === "light"
) {

  setTheme(
    savedTheme
  );

}


/* =========================
   SETTINGS
========================= */

function openSettings() {

  settingsPanel.classList.add(
    "open"
  );

  overlay.classList.add(
    "open"
  );

}


function closeSettingsPanel() {

  settingsPanel.classList.remove(
    "open"
  );

  overlay.classList.remove(
    "open"
  );

}


settingsBtn.addEventListener(
  "click",
  openSettings
);

closeSettings.addEventListener(
  "click",
  closeSettingsPanel
);

overlay.addEventListener(
  "click",
  closeSettingsPanel
);


/* =========================
   BACKSPACE SETTING
========================= */

backspaceToggle.addEventListener(
  "change",
  () => {

    state.allowBackspace =
      backspaceToggle.checked;

  }
);


/* =========================
   SOUND
========================= */

soundToggle.addEventListener(
  "change",
  () => {

    state.soundEnabled =
      soundToggle.checked;

    /*
      Browsers often require an
      explicit user interaction
      before AudioContext can play.
    */

    if (state.soundEnabled) {
      createAudioContext();
    }

  }
);


/* =========================
   BUTTONS
========================= */

document
  .getElementById("restartBtn")
  .addEventListener(
    "click",
    resetTest
  );


document
  .getElementById("tryAgainBtn")
  .addEventListener(
    "click",
    resetTest
  );


document
  .getElementById("newTestBtn")
  .addEventListener(
    "click",
    resetTest
  );


/* =========================
   INIT
========================= */

loadText();

timerElement.textContent =
  formatTime(
    state.duration
  );

typingContainer.focus();
