"use strict";

// Quote array
const quotes = [
	{
		id: 1,
		quote:
			"You have passed through life without an opponent—no one can ever know what you are capable of, not even you.",
		author: "Seneca",
	},
	{
		id: 2,
		quote:
			"Look back over the past, with its changing empires that rose and fell, and you can foresee the future too.",
		author: "Marcus Aurelius",
	},
	{
		id: 3,
		quote:
			"Stoicism, in our day, is not strength to overcome wishes, but to hide them.",
		author: "Rollo May, 'Love and Will.'",
	},
	{
		id: 4,
		quote:
			"The one who puts the finishing touches on their life each day is never short of time.",
		author: "Marcus Aurelius",
	},
	{
		id: 5,
		quote:
			"Sometimes in life, we need a few bad days in order to keep the good ones in perspective.",
		author: "Colleen Hoover, 'Maybe Someday.'",
	},
	{
		id: 6,
		quote:
			"Begin at once to live, and count each separate day as a separate life.",
		author: "Seneca",
	},
	{
		id: 7,
		quote:
			"It's time you realized that you have something in you more powerful and miraculous than the things that affect you and make you dance like a puppet.",
		author: "Marcus Aurelius",
	},
	{
		id: 8,
		quote: "Whatever can happen at any time can happen today.",
		author: "Seneca",
	},
	{
		id: 9,
		quote:
			"They lose the day in expectation of the night, and the night in fear of the dawn.",
		author: "Seneca",
	},
	{
		id: 10,
		quote:
			"There is no better way to grow as a person than to do something you hate every day.",
		author: "David Goggins",
	},
	{
		id: 11,
		quote:
			"Today I escaped anxiety. Or no, I discarded it, because it was within me, in my own perceptions — not outside.",
		author: "Marcus Aurelius",
	},
	{
		id: 12,
		quote:
			"I have often wondered how it is that every man loves himself more than all the rest of men, but yet sets less value on his own opinion of himself than on the opinion of others.",
		author: "Marcus Aurelius",
	},
	{
		id: 13,
		quote:
			"Consult your friend on all things, especially on those which respect yourself. His counsel may then be useful where your own self-love might impair your judgment.",
		author: "Seneca",
	},
	{
		id: 14,
		quote: "To love only what happens, what was destined. No greater harmony.",
		author: "Marcus Aurelius",
	},
	{
		id: 15,
		quote: "But to recognize that if it’s humanly possible, you can do it too.",
		author: "Marcus Aurelius",
	},
	{
		id: 16,
		quote:
			"You don’t love yourself enough. Or No great thing is you’d love your nature too, and what it demands of you.",
		author: "Marcus Aurelius",
	},
	{
		id: 17,
		quote:
			"A fit body, a calm mind, a house full of love. These things cannot be bought — they must be earned.",
		author: "Naval Ravikant",
	},
	{
		id: 18,
		quote:
			"It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.",
		author: "Marcus Aurelius",
	},
	{
		id: 19,
		quote:
			"People in love often become edgy, dangerous. They lose their sense of perspective.",
		author: "Charles Bukowski, 'Women.'",
	},
	{
		id: 20,
		quote:
			"Think of the life you have lived until now as over and, as a dead man, see what’s left as a bonus and live it according to Nature.",
		author: "Marcus Aurelius",
	},
	{
		id: 21,
		quote:
			"In your soul, don’t be passive or aggressive. In your life, don’t be all about business.",
		author: "Marcus Aurelius",
	},
	{
		id: 22,
		quote:
			"Sometimes in life we must fight not only without fear, but also without hope.",
		author: "Alessandro Pertini",
	},
	{
		id: 23,
		quote:
			"In life, it doesn’t matter what happens to you or where you came from. It matters what you do with what happens and what you’ve been given.",
		author: "Ryan Holiday",
	},
	{
		id: 24,
		quote:
			"It can ruin your life only if it ruins your character. Otherwise, it cannot harm you — inside or out.",
		author: "Marcus Aurelius",
	},
	{
		id: 25,
		quote:
			"Sometimes life hits you in the head with a brick. Don’t lose faith.",
		author: "Steve Jobs",
	},
	{
		id: 26,
		quote:
			"The ultimate power in life is to be completely self-reliant, completely yourself.",
		author: "Robert Greene",
	},
	{
		id: 27,
		quote:
			"The happiness of your life depends upon the quality of your thoughts.",
		author: "Marcus Aurelius",
	},
	{
		id: 28,
		quote:
			"Entrust everything willingly to the gods, and then make your way through life—no one’s master and no one’s slave.",
		author: "Marcus Aurelius",
	},
	{
		id: 29,
		quote:
			"You will find no one willing to share out his money; but to how many does each of us divide up his life!",
		author: "Seneca",
	},
	{
		id: 30,
		quote:
			"Mastery of reading and writing requires a master. Still more so life.",
		author: "Marcus Aurelius",
	},
	{
		id: 31,
		quote:
			"Your perspective on life comes from the cage you were held captive in.",
		author: "Shannon L. Alder",
	},
	{
		id: 32,
		quote:
			"Life is very short and anxious for those who forget the past, neglect the present, and fear the future.",
		author: "Seneca",
	},
	{
		id: 33,
		quote: "It is more civilized to make fun of life than to bewail it.",
		author: "Seneca",
	},
	{
		id: 34,
		quote:
			"You could leave life right now. Let that determine what you do and say and think.",
		author: "Marcus Aurelius",
	},
	{
		id: 35,
		quote:
			"Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
		author: "Marcus Aurelius",
	},
	{
		id: 36,
		quote:
			"Maybe it's good to put things in perspective, but sometimes, I think that the only perspective is to really be there.",
		author: "Stephen Chbosky, 'The Perks of Being a Wallflower.'",
	},
	{
		id: 37,
		quote:
			"Between stimulus and response, there is a space. In that space is our power to choose our response.",
		author: "Viktor Frankl",
	},
	{
		id: 38,
		quote:
			"In a little while you will have forgotten everything; in a little while everything will have forgotten you.",
		author: "Marcus Aurelius",
	},
	{
		id: 39,
		quote:
			"The tranquility that comes when you stop caring what they say. Or think, or do. Only what you do.",
		author: "Marcus Aurelius",
	},
	{
		id: 40,
		quote:
			"As long as you live, keep learning how to live to err is human, but to persist (in the mistake) is diabolical.",
		author: "Seneca",
	},
	{
		id: 41,
		quote: "Every one of us is, in the cosmic perspective, precious.",
		author: "Carl Sagan, 'Cosmos.'",
	},
	{
		id: 42,
		quote: "Be tolerant with others and strict with yourself",
		author: "Marcus Aurelius",
	},
	{
		id: 43,
		quote: "How does it help…to make troubles heavier by bemoaning them?",
		author: "Seneca",
	},
	{
		id: 44,
		quote: "The robbed that smiles steals something from the thief.",
		author: "Othello",
	},
	{
		id: 45,
		quote: "If a man knows not which port he sails, no wind is favorable.",
		author: "Seneca",
	},
	{
		id: 46,
		quote:
			"People are frugal in guarding their personal property, but as soon as it comes to squandering time they are most wasteful of the one thing in which it is right to be stingy.",
		author: "Seneca",
	},
	{
		id: 47,
		quote: "The best revenge is not to be like your enemy.",
		author: "Marcus Aurelius",
	},
	{
		id: 48,
		quote:
			"If you’ll study even the smallest bit of science, for all practical purposes we are nothing.",
		author: "Naval Ravikant",
	},
	{
		id: 49,
		quote:
			"Choose not to be harmed — and you won’t feel harmed. Don’t feel harmed — and you haven’t been.",
		author: "Marcus Aurelius",
	},
	{
		id: 50,
		quote: "Sometimes even to live is an act of courage.",
		author: "Seneca",
	},
	{
		id: 51,
		quote:
			"This is our big mistake: to think we look forward to death. Most of death is already gone. Whatever time has passed is owned by death.",
		author: "Seneca",
	},
	{
		id: 52,
		quote: "Waste no more time arguing what a good man should be, be one.",
		author: "Marcus Aurelius",
	},
	{
		id: 53,
		quote:
			"Whatever you have been expecting for some time comes as less of a shock.",
		author: "Seneca",
	},
	{
		id: 54,
		quote: "Don’t wait to do things that matter, and savor the time you have.",
		author: "Paul Graham",
	},
	{
		id: 55,
		quote:
			"It’s not that we have little time, but more that we waste a good deal of it.",
		author: "Seneca",
	},
	{
		id: 56,
		quote:
			"Remember: Matter. How tiny your share of it. Time. How brief and fleeting your allotment of it. Fate. How small a role you play in it.",
		author: "Marcus Aurelius",
	},
	{
		id: 57,
		quote:
			"The average man is a conformist, accepting miseries and disasters with the stoicism of a cow standing in the rain.",
		author: "Colin Wilson",
	},
	{
		id: 58,
		quote:
			"When we are no longer able to change a situation, we are challenged to change ourselves.",
		author: "Viktor Frankl",
	},
	{
		id: 59,
		quote:
			"Whatever happens at all happens as it should; you will find this true, if you watch narrowly.",
		author: "Marcus Aurelius",
	},
	{
		id: 60,
		quote:
			"Everything can be taken from a man but one thing: the last of the human freedoms – to choose one’s attitude in any given set of circumstances, to choose one’s own way.",
		author: "Viktor Frankl",
	},
	{
		id: 61,
		quote:
			"It is not the man who has too little, but the man who craves more, that is poor.",
		author: "Seneca",
	},
	{
		id: 62,
		quote: "Nothing endures but change.",
		author: "Heraclitus",
	},
	{
		id: 63,
		quote:
			"The best answer to anger is silence. Agreed. But nature set a limit on that — as it did on eating and drinking",
		author: "Marcus Aurelius",
	},
	{
		id: 64,
		quote: "There is no genius without a touch of madness.",
		author: "Seneca",
	},
	{
		id: 65,
		quote: "And it is in your power to wipe out this judgment now.",
		author: "Marcus Aurelius",
	},
	{
		id: 66,
		quote:
			"He who fears death will never do anything worth of a man who is alive.",
		author: "Seneca",
	},
	{
		id: 67,
		quote: "To be calm is the highest achievement of the self.",
		author: "Zen proverb",
	},
	{
		id: 68,
		quote:
			"If it does, you have failed to practice your virtues by going with the hype of pain.",
		author: "Tiisetso Maloma",
	},
	{
		id: 69,
		quote: "Man conquers the world by conquering himself.",
		author: "Zeno of Citium",
	},
	{
		id: 70,
		quote:
			"We’re never unhappy until we remember why we’re supposed to be unhappy.",
		author: "Daniel V Chappell",
	},
	{
		id: 71,
		quote: "All vices are at odds with nature.",
		author: "Seneca",
	},
	{
		id: 72,
		quote: "It is the power of the mind to be unconquerable.",
		author: "Seneca",
	},
	{
		id: 73,
		quote: "It is the quality rather than the quantity that matters.",
		author: "Seneca",
	},
	{
		id: 74,
		quote:
			"Uncertainty is an uncomfortable position. But certainty is an absurd one.",
		author: "Voltaire",
	},
	{
		id: 75,
		quote:
			"Change: nothing inherently bad in the process, nothing inherently good in the result.",
		author: "Marcus Aurelius",
	},
	{
		id: 76,
		quote: "Ignorance is the cause of fear.",
		author: "Seneca",
	},
	{
		id: 77,
		quote:
			"We become wiser by adversity; prosperity destroys our appreciation of the right.",
		author: "Seneca",
	},
	{
		id: 78,
		quote:
			"The good things of prosperity are to be wished; but the good things that belong to adversity are to be admired.",
		author: "Seneca",
	},
	{
		id: 79,
		quote:
			"Focus on what nature demands, as if you were governed by that alone. Then do that, and accept it, unless your nature as a living being would be degraded by it.",
		author: "Marcus Aurelius",
	},
	{
		id: 80,
		quote:
			"Whatever anyone does or says, I’m bound to the good. Whatever anyone does or says, I must be what I am and show my true colors.",
		author: "Marcus Aurelius",
	},
	{
		id: 81,
		quote:
			"Stoicism teaches how to keep a calm and rational mind no matter what happens to you and it helps you understand and focus on what you can control and not worry about and accept what you can’t control.",
		author: "Jonas Salzgeber",
	},
	{
		id: 82,
		quote:
			"Produce them in your mind, as you know them from experience or from history…All just the same. Only the people different.",
		author: "Marcus Aurelius",
	},
	{
		id: 83,
		quote:
			"No one can keep you from living as your nature requires. Nothing can happen to you that is not required by Nature.",
		author: "Marcus Aurelius",
	},
	{
		id: 84,
		quote:
			"To move from one unselfish action to another with God in mind. Only there, delight and stillness.",
		author: "Marcus Aurelius",
	},
	{
		id: 85,
		quote:
			"Is it the action of a responsible being, part of society, and subject to the same decrees as God?",
		author: "Marcus Aurelius",
	},
	{
		id: 86,
		quote:
			"For there is a single harmony. Just as the world forms a single body comprising all bodies, so fate forms a single purpose, comprising all purposes.",
		author: "Marcus Aurelius",
	},
	{
		id: 87,
		quote:
			"Whatever happens to you is for the good of the world. That would be enough right there. But if you look closely you’ll generally notice something else as well: whatever happens to a single person is for the good of others.",
		author: "Marcus Aurelius",
	},
	{
		id: 88,
		quote:
			"Nothing, to my way of thinking, is a better proof of a well ordered mind than a man’s ability to stop just where he is and pass some time in his own company.",
		author: "Seneca",
	},
	{
		id: 89,
		quote:
			"No person has the power to have everything they want, but it is in their power not to want what they don’t have, and to cheerfully put to good use what they do have.",
		author: "Seneca",
	},
	{
		id: 90,
		quote:
			"If what you have seems insufficient to you, then though you possess the world, you will yet be miserable.",
		author: "Seneca",
	},
	{
		id: 91,
		quote:
			"Take a deep breath. Get present in the moment and ask yourself what is important this very second.",
		author: "Greg McKeown, 'Essentialism.'",
	},
	{
		id: 92,
		quote:
			"Floods will rob us of one thing, fire of another. These are conditions of our existence which we cannot change.",
		author: "Seneca",
	},
	{
		id: 93,
		quote:
			"Do what you will. Even if you tear yourself apart, most people will continue doing the same things.",
		author: "Marcus Aurelius",
	},
	{
		id: 94,
		quote: "He is most powerful who has power over himself.",
		author: "Seneca",
	},
	{
		id: 95,
		quote: "To be evenminded is the greatest virtue.",
		author: "Heraclitus",
	},
	{
		id: 96,
		quote:
			"I shall never be ashamed of citing a bad author if the line is good.",
		author: "Seneca",
	},
	{
		id: 97,
		quote: "As long as you live, keep learning how to live.",
		author: "Seneca",
	},
	{
		id: 98,
		quote: "Luck is what happens when preparation meets opportunity.",
		author: "Seneca",
	},
	{
		id: 99,
		quote:
			"Wherever there is a human being, there is an opportunity for a kindness.",
		author: "Seneca",
	},
	{
		id: 100,
		quote: "Difficulties strengthen the mind, as labor does the body.",
		author: "Seneca",
	},
	{
		id: 101,
		quote: "No human thing is of serious importance.",
		author: "Plato",
	},
	{
		id: 102,
		quote:
			"As is a tale, so is life: not how long it is, but how good it is, is what matters.",
		author: "Seneca",
	},
	{
		id: 103,
		quote: "Life, if well lived, is long enough.",
		author: "Seneca",
	},
	{
		id: 104,
		quote: "It does not matter what you bear, but how you bear it.",
		author: "Seneca",
	},
	{
		id: 105,
		quote:
			"To be stoic is not to be emotionless, but to remain unaffected by your emotions.",
		author: "James Pierce",
	},
	{
		id: 106,
		quote: "Don’t aim to be perfect. Aim to be antifragile.",
		author: "Nassim Nicholas Taleb",
	},
	{
		id: 107,
		quote: "Just that you do the right thing. The rest doesn’t matter.",
		author: "Marcus Aurelius",
	},
	{
		id: 108,
		quote: "Order your soul. Reduce your wants.",
		author: "Augustine of Hippo",
	},
	{
		id: 109,
		quote:
			"I begin to speak only when I’m certain what I’ll say isn’t better left unsaid.",
		author: "Cato",
	},
	{
		id: 110,
		quote:
			"If you are irritated by every rub, how will your mirror be polished?",
		author: "Rumi",
	},
	{
		id: 111,
		quote: "The great law of nature is that it never stops. There is no end.",
		author: "Ryan Holiday",
	},
	{
		id: 112,
		quote: "Associate with people who are likely to improve you.",
		author: "Seneca",
	},
	{
		id: 113,
		quote: "Wealth is the slave of the wise. The master of the fool.",
		author: "Seneca",
	},
	{
		id: 114,
		quote: "The mind that is anxious about future events is miserable.",
		author: "Seneca",
	},
	{
		id: 115,
		quote: "We suffer more often in imagination than in reality.",
		author: "Seneca",
	},
	{
		id: 116,
		quote: "The whole future lies in uncertainty: live immediately.",
		author: "Seneca",
	},
	{
		id: 117,
		quote: "The limit is not the sky. The limit is the mind.",
		author: "Wim Hof",
	},
	{
		id: 118,
		quote: "Make the mind tougher by exposing it to adversity.",
		author: "Robert Greene",
	},
	{
		id: 119,
		quote: "Problems only exist in the human mind.",
		author: "Anthony de Mello",
	},
	{
		id: 120,
		quote: "What injures the hive injures the bee.",
		author: "Marcus Aurelius",
	},
	{
		id: 121,
		quote: "To stop talking about what the good man is like, and just be one.",
		author: "Marcus Aurelius",
	},
	{
		id: 122,
		quote:
			"When you realize there is nothing lacking, the whole world belongs to you.",
		author: "Lao Tzu",
	},
	{
		id: 123,
		quote:
			"She released her grievances like handfuls of birdseed: They are there, and they are gone.",
		author: "Gillian Flynn",
	},
	{
		id: 124,
		quote:
			"No man is good by chance. Virtue is something which must be learned.",
		author: "Seneca",
	},
	{
		id: 125,
		quote:
			"You have power over your mind — not outside events. Realize this, and you will find strength.",
		author: "Marcus Aurelius",
	},
	{
		id: 126,
		quote:
			"If it is not right, do not do it, if it is not true, do not say it.",
		author: "Marcus Aurelius",
	},
	{
		id: 127,
		quote:
			"That man is happy, whose reason recommends to him the whole posture of his affairs.",
		author: "Seneca",
	},
	{
		id: 128,
		quote:
			"Self-control is strength. Right thought is mastery. Calmness is power.",
		author: "James Allen",
	},
	{
		id: 129,
		quote: "The willing are led by fate, the reluctant dragged.",
		author: "Cleanthes",
	},
	{
		id: 130,
		quote: "Discomfort is the currency of success.",
		author: "Brooke Castillo",
	},
	{
		id: 131,
		quote: "Is a world without pain possible? Then don’t ask the impossible.",
		author: "Marcus Aurelius",
	},
	{
		id: 132,
		quote: "Learn to detach yourself from the chaos of the battlefield.",
		author: "Robert Greene",
	},
	{
		id: 133,
		quote: "Learn to be indifferent to what makes no difference.",
		author: "Marcus Aurelius",
	},
	{
		id: 134,
		quote: "That man lives badly who does not know how to die well.",
		author: "Seneca",
	},
	{
		id: 135,
		quote:
			"Endurance is not just the ability to bear a hard thing, but to turn it into glory.",
		author: "William Barclay",
	},
	{
		id: 136,
		quote:
			"Stoicism is the wisdom of madness and cynicism the madness of wisdom.",
		author: "Bergen Evans",
	},
	{
		id: 137,
		quote: "The stoicism that comes of endurance has something of death in it.",
		author: "Mary Catherwood",
	},
	{
		id: 138,
		quote: "What's the good of being stoical if nobody notices?",
		author: "Mason Cooley",
	},
	{
		id: 139,
		quote: "The things you think about determine the quality of your mind.",
		author: "Marcus Aurelius",
	},
	{
		id: 140,
		quote: "Once we accept our limits, we go beyond them.",
		author: "Albert Einstein",
	},
	{
		id: 141,
		quote: "Whoever has nothing to hope, let him despair of nothing.",
		author: "Seneca",
	},
	{
		id: 142,
		quote: "Warriors should suffer their pain silently.",
		author: "Erin Hunter",
	},
	{
		id: 143,
		quote: "Respect the past, be open to the future",
		author: "Seneca",
	},
	{
		id: 144,
		quote:
			"It’s far better to seem like a downer than to be blindsided or caught off guard.",
		author: "Ryan Holiday",
	},
	{
		id: 145,
		quote: "Stoicism is designed to be medicine for the soul.",
		author: "Ryan Holiday",
	},
	{
		id: 146,
		quote:
			"Appreciating what you have is the best cure for missing what you have lost.",
		author: "Mokokoma Mokhonoana",
	},
	{
		id: 147,
		quote: "Knowing yourself is the beginning of all wisdom.",
		author: "Aristotle",
	},
	{
		id: 148,
		quote: "Turn your wounds into wisdom.",
		author: "Oprah Winfrey",
	},
	{
		id: 149,
		quote: "Knowing others is intelligence, Knowing yourself is true wisdom.",
		author: "Lao Tzu",
	},
	{
		id: 150,
		quote: "Knowledge speaks, but wisdom listens",
		author: "Jimi Hendrix",
	},
	{
		id: 151,
		quote: "Even strength must bow to wisdom sometimes.",
		author: "Rick Riordan",
	},
	{
		id: 152,
		quote: "I wanted the whole world or nothing.",
		author: "Charles Bukowski, 'Post Office.'",
	},
	{
		id: 153,
		quote: "Failures are finger posts on the road to achievement.",
		author: "C.S. Lewis",
	},
	{
		id: 154,
		quote: "Intelligence consists in ignoring things that are irrelevant.",
		author: "Nassim Nicholas Taleb",
	},
	{
		id: 155,
		quote:
			"Be so busy building your own life that other people’s... is of no concern.",
		author: "Ed Latimore",
	},
	{
		id: 156,
		quote: "Stay calm and serene regardless of what life throws at you.",
		author: "Marcus Aurelius",
	},
	{
		id: 157,
		quote: "Show people, don't tell people.",
		author: "David Goggins",
	},
	{
		id: 158,
		quote: "We carry all the power we need inside ourselves already.",
		author: "J.K. Rowling",
	},
	{
		id: 159,
		quote:
			"When the power of love overcomes the love of power, the world will know peace.",
		author: "Jimi Hendrix",
	},
	{
		id: 160,
		quote: "The past has no power over the present moment.",
		author: "Eckhart Tolle",
	},
	{
		id: 161,
		quote: "Books are the training weights of the mind.",
		author: "Epictetus",
	},
	{
		id: 162,
		quote:
			"For as time passes we forget what we learned and end up doing the opposite, and hold opinions the opposite of what we should.",
		author: "Epictetus",
	},
	{
		id: 163,
		quote:
			"Where then do I look for good and evil? Not to uncontrollable externals, but within myself to the choices that are my own...",
		author: "Epictetus",
	},
	{
		id: 164,
		quote:
			"Curb your desire—don’t set your heart on so many things and you will get what you need.",
		author: "Epictetus",
	},
	{
		id: 165,
		quote:
			"Unhappy man, who are the slave even of a girl… Why then do you still call yourself free?",
		author: "Epictetus",
	},
	{
		id: 166,
		quote:
			"When someone is properly grounded in life, they shouldn’t have to look outside themselves for approval.",
		author: "Epictetus",
	},
	{
		id: 167,
		quote:
			"That’s why the philosophers warn us not to be satisfied with mere learning, but to add practice and then training.",
		author: "Epictetus",
	},
	{
		id: 168,
		quote: "Anything or anyone capable of angering you becomes your master.",
		author: "Epictetus",
	},
	{
		id: 169,
		quote:
			"From now on, then, resolve to live as a grown-up who is making progress, and make whatever you think best a law that you never set aside.",
		author: "Epictetus",
	},
	{
		id: 170,
		quote:
			"Be silent for the most part, or, if you speak, say only what is necessary and in a few words.",
		author: "Epictetus",
	},
	{
		id: 171,
		quote:
			"It’s not what happens to you, but how you react to it that matters.",
		author: "Epictetus",
	},
	{
		id: 172,
		quote:
			"We have two ears and one mouth so that we can listen twice as much as we speak.",
		author: "Epictetus",
	},
	{
		id: 173,
		quote:
			"No great thing is created suddenly, any more than a bunch of grapes or a fig.",
		author: "Epictetus",
	},
	{
		id: 174,
		quote:
			"Just keep in mind: the more we value things outside our control, the less control we have.",
		author: "Epictetus",
	},
	{
		id: 175,
		quote:
			"We should always be asking ourselves: 'Is this something that is, or is not, in my control?'",
		author: "Epictetus",
	},
	{
		id: 176,
		quote:
			"For it is better to die of hunger, but free from distress and fear, than to live in plenty with a troubled mind.",
		author: "Epictetus",
	},
	{
		id: 177,
		quote:
			"It isn’t the things themselves that disturb people, but the judgements that they form about them.",
		author: "Epictetus",
	},
	{
		id: 178,
		quote:
			"Remain silent for the most part, or say only what is essential, and in few words.",
		author: "Epictetus",
	},
	{
		id: 179,
		quote:
			"If you want to make progress, put up with being perceived as ignorant or naive in worldly matters, don't aspire to a reputation for sagacity.",
		author: "Epictetus",
	},
	{
		id: 180,
		quote:
			"Caring about the one inevitably means you are going to short change the other.",
		author: "Epictetus",
	},
	{
		id: 181,
		quote:
			"How long are you going to wait before you demand the best for yourself?",
		author: "Epictetus",
	},
	{
		id: 182,
		quote:
			"The key is to keep company only with people who uplift you, whose presence calls forth your best.",
		author: "Epictetus",
	},
	{
		id: 183,
		quote:
			"What upsets people is not things themselves, but their judgments about these things.",
		author: "Epictetus",
	},
	{
		id: 184,
		quote: "Circumstances don’t make the man, they only reveal him to himself.",
		author: "Epictetus",
	},
	{
		id: 185,
		quote:
			"Because he not only wants to perform well, he wants to be well received — and the latter lies outside his control.",
		author: "Epictetus",
	},
	{
		id: 186,
		quote:
			"Progress is not achieved by luck or accident, but by working on yourself daily.",
		author: "Epictetus",
	},
	{
		id: 187,
		quote:
			"Wealth consists not in having great possessions, but in having few wants.",
		author: "Epictetus",
	},
	{
		id: 188,
		quote: "Don’t explain your philosophy. Embody it.",
		author: "Epictetus",
	},
	{
		id: 189,
		quote: "I cannot escape death, but at least I can escape the fear of it.",
		author: "Epictetus",
	},
	{
		id: 190,
		quote: "So why be upset if it happens now? If it isn’t now, it’s later.",
		author: "Epictetus",
	},
	{
		id: 191,
		quote:
			"Very well, what further concern have I? For my part has been fulfilled.",
		author: "Epictetus",
	},
	{
		id: 192,
		quote: "Remind yourself that what you love is mortal.",
		author: "Epictetus",
	},
	{
		id: 193,
		quote:
			"How long can you afford to put off who you really want to be? Your nobler self cannot wait any longer.",
		author: "Epictetus",
	},
	{
		id: 194,
		quote:
			"There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.",
		author: "Epictetus",
	},
	{
		id: 195,
		quote: "Reason is not measured by size or height, but by principle.",
		author: "Epictetus",
	},
	{
		id: 196,
		quote: "Try to enjoy the great festival of life with other men.",
		author: "Epictetus",
	},
	{
		id: 197,
		quote: "It is difficulties that show what men are.",
		author: "Epictetus",
	},
	{
		id: 198,
		quote:
			"If you want to improve, be content to be thought foolish and stupid.",
		author: "Epictetus",
	},
	{
		id: 199,
		quote: "He who laughs at himself never runs out of things to laugh at.",
		author: "Epictetus",
	},
	{
		id: 200,
		quote:
			"Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.",
		author: "Epictetus",
	},
];

// Random quote generate
function getRandomQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	return quotes[randomIndex];
}

function updateQuote() {
	const quote = getRandomQuote();
	$(".quote-generator__text").text(`"${quote.quote}"`);
	$(".quote-generator__author").text(`- ${quote.author}`);
}

// DOM
$(document).ready(function () {
	// Generate Quote button
	updateQuote();
	$(".button-section__generate-button").on("click", updateQuote);

	// Text Copy button
	// Copy quote to clipboard
	$(".button-section__copy-button").on("click", function () {
		let quoteTextFull = `${$(".quote-generator__text").text()} ${$(
			".quote-generator__author"
		).text()}`;
		let quoteTextAuthor = `${$(".quote-generator__author").text()}`;
		navigator.clipboard.writeText(quoteTextFull);

		// Change copy button tooltip to copied quote author
		$(".tooltip__text").html(`Copied quote by ${quoteTextAuthor}`);
	});

	// Text copy button mouseout tooltip reset
	$(".button-section__copy-button").on("mouseout", function () {
		$(".tooltip__text").html(`Copy to clipboard`);
	});
});
