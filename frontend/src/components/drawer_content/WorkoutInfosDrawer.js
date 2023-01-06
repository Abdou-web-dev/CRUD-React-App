import "./drawer_content_styles.scss";
import { WorkoutInfos } from "./WorkoutInfos";

export function WorkoutInfosDrawer({ workoutTitle }) {
  function infos() {
    //only for Chest category
    let infos =
      workoutTitle === "Barbell Flat Bench Press"
        ? {
            description:
              "The bench press is a classic exercise. Powerlifters do it to see who has the most pressing strength, gym rats use it to build up their pecs, and athletes utilize the bench for explosive pushing power.            ",
            benefits: {
              b1: "This lift is a necessiry for powerlifters, since it’s one of the three lifts judged in a powerlifting meet.",
              b2: "The bench press recruits muscles in the chest, triceps, and shoulders — so you’ll build a muscular torso",
              b3: "Compared to other chest exercises, you can load the bench press up with a relatively heavy amount of weight.",
            },
            howToDo:
              "Lay back down on a bench, arch your lower back slightly, and plant your feet on the floor. Pull your shoulder blades together to enhance stability and upper back strength. Grab the bar (varying grips) and squeeze the hand hard to flex the arm and grip muscles maximally. With the load unracked, think about pulling the barbell to the body to touch the sternum/base of the chest. Press the weight upwards, making sure to keep your back tight, and shoulder blades pulled together.",
          }
        : workoutTitle === "Barbell Incline Bench Press"
        ? {
            description:
              "The incline press is somewhat of a hybrid of an overhead press and flat bench press, and so pressing a barbell (or a pair of kettlebells or dumbbells) from an incline recruits more of the muscle fibers in the upper chest and taxes the shoulders a bit more. For that reason, strongmen like to use this pressing variation since it has more carryover to log presses and axle bar clean and presses.            ",
            benefits: {
              b1: "More shoulder and upper chest activation compared to flat press variations.            ",
              b2: "The incline bench press will have carryover to overhead pressing variations, as it strengthens the deltoids, too.",
            },
            howToDo:
              "Adjust a workout bench so it is at a 45-degree angle and set up similar to that of the flat bench press. Unrack the loaded barbell and begin to pull the load downwards to line with the upper chest (a few inches below the clavicle). With the shoulder blades pulled together and elbows angled at about 45 degrees. Push the barbell upward.            ",
          }
        : workoutTitle === "Barbell Decline Bench Press"
        ? {
            description:
              "The third major barbell bench press variation focuses on the lower pectoral fibers. This pressing variation is typically less strenuous on your shoulders than the standard bench press because of the shifted shoulder angle. ",
            benefits: {
              b1: "You’ll have decreased strain on your shoulder joints due to the angle of the bench you’re lifting on.",
              b2: "A greater emphasis on the lower pectoral fibers. ",
            },
            howToDo:
              "Start by securing your feet into a decline bench set up and secure your upper back and hips to the bench (similar to the flat bench press). Unrack the weight and pull the load downwards toward the sternum while keeping the shoulder blades pulled together. Press through the barbell to lock out your elbows. Be sure not to allow the elbows to flare excessively out in the movement.            ",
          }
        : workoutTitle === "Chest Flye"
        ? {
            description:
              "The chest flye — which can be done with dumbbells or on a cable machine — is a popular bodybuilding exercise to stretch the muscle fibers and pump up the muscle. That pump will help to drive nutrient-rich blood to the target area to help speed up recovery.            ",
            benefits: {
              b1: "More muscular coordination as the lifter is forced to stabilize and lift two separate dumbbells.",
              b2: "The chest flye stretch, which is achieved by extending the arms with light weight, will really tax the chest’s ",
            },
            howToDo:
              "Lie back on a bench (either flat, decline, or incline), with a dumbbell in each hand. With a slight bend in your elbows, lower your arms out to your sides slowly and with control. Now, reverse the motion to engage the chest. You should look like you’re hugging a tree. ",
          }
        : workoutTitle === "Dumbbell Bench Press"
        ? {
            description:
              "The dumbbell bench press doesn’t allow you to go as heavy as its barbell counterpart, but there’s a lot to like about this move. For one, you’re controlling two dumbbells, which works your chest (and the smaller stabilizer muscles around your shoulder joint) differently than the bench press.",
            benefits: {
              b1: "It’s easier to find a pressing position that’s more comfortable for someone who may have shoulder or elbow aches. ",
              b2: "You’ll acquire more joint and muscle stability from lifting two separate dumbbells.            ",
            },
            howToDo:
              "Sit up on a flat bench and then hinge forward to pick up each dumbbell. Place each weight on a knee and get set. Lean back and then drive the dumbbells back towards you (carefully) with your knees, simultaneously pressing the weights over your chest. Lower the weights, keeping your elbows tucked in at 45-degrees until your elbows break 90 degrees. Then, drive the dumbbells back up. You can also turn your palms, so they’re facing each other and press from this neutral position.             ",
          }
        : workoutTitle === "Push-Up"
        ? {
            description:
              "Do we need to sell you on the push-up? Probably not, but what kind of training resource would we be if we didn’t tell you that the push-up is easier on your joints since you’re not loading them with weight?             ",
            benefits: {
              b1: "Because you’re working out with just your body weight, your joints won’t be under as much stress as weighted movements.            ",
              b2: "You can also really do a lot of pushups, so you’ll accumulate more muscle-building tension over time.            ",
            },
            howToDo:
              "Get into a plank position, with your hands underneath your shoulders, back flat, and feet together. Screw your palms into the ground. You should feel your chest tighten. Hold this position, and then slowly lower yourself until your chest is about an inch from the floor. Now, drive back up through the palms of your hands.",
          }
        : workoutTitle === "Dip"
        ? {
            description:
              " is another bodyweight gem. Compared to the push-up, which has you on all fours, you’re suspended for the dip, and so your complete bodyweight is in play. ",
            benefits: {
              b1: "You’ll strengthen the triceps and pecs — two key pressing muscles — together.             ",
              b2: "You’ll utilize 100-percent of your bodyweight, which is far more than what you lift during a push-up.            ",
            },
            howToDo:
              "Grab the dip bar firmly and get yourself in the top of the dip position, with your upper back tight and shoulder blades squeezed together. Angle your torso slightly forward and allow your elbows to bend as they slightly tuck inwards towards the sides of the torso. Lower yourself down until your elbows bend at about 90 degrees. When ready, press through the handles and bring your body upright into the top of the dip position.            ",
          }
        : workoutTitle === "Svend Press"
        ? {
            description:
              "The silliest-looking move on our best chest exercise list will probably burn the worst (read: the best). To avoid dropping two plates on your toes, you need to squeeze the weights together continuously. That alone will get those pecs activated.            ",
            benefits: {
              b1: "Finally, a pressing movement that won’t require you to have to wait for everyone else to finish their bench press sets.             ",
              b2: `The squeeze and press combination will create a lot of time under tension for a serious pump and muscular hypertrophy.             `,
            },
            howToDo: `Start by taking two smaller weight plates (five or 10-pound plates) and pressing them together between your hands. Your arms should be extended outwards in front of you.While actively pinching the plate together and not letting them slip apart (constant tension), pull the plates towards your sternum as you keep your chest up and shoulder blades pulled together. Flex your chest and press the weights back outwards. Keep the plates pressed together and the inner chest muscles engaged.`,
          }
        : workoutTitle === "Cable Iron Cross"
        ? {
            description:
              "The iron cross is a gymnastics classic, but when performed in a cable tree can be great for physique development too. This exercise stretches your chest muscles from the start and takes you through a large range of motion for better chest building potential.",
            benefits: {
              b1: "Keeps tension on the working muscles for better muscle-building potential.             ",
              b2: `Isolates and takes the lower chest muscles through a larger range of motion compared to the dumbbell variation.            `,
            },
            howToDo: `Set the handles at both ends of the cable machine at the highest level. Stand in the center with a staggered stance and take hold of both handles. Lean your torso forward keeping your spine in neutral and bend your elbows slightly too. Keeping your core tight pull both handles down and across your body and squeeze the chest muscles at the end of the movement.           `,
          }
        : workoutTitle === "Chaos Push-Up"
        ? {
            description:
              "Resistance bands are a great tool to build the chest too. By looping a heavy band around a squat rack, you can perform a variety of exercises — including the chaos push-up. The unstable resistance band fires up all your stabilizing muscles while performing a push-up.             ",
            benefits: {
              b1: "The instability of the Chaos Push-Up is great for additional rotator cuff recruitment            ",
              b2: `Adds more core stability and control to your push-ups which leads to increased time under tension       `,
            },
            howToDo: `Loop a heavy-duty band around the squat rack. The higher up the band, the easier the exercise. Lowering the band makes it harder. Place your hands on the band in a shoulder-width grip and grip tight. Bring your legs behind you. Engage your glutes and core. Slowly lower yourself down into a push-up. Press up against the band.`,
          }
        : workoutTitle === "Plyo Push-Up"
        ? {
            description:
              "When you get into the higher push-up rep ranges, you’re training muscular endurance and not just muscle-building. Enter the plyo push-up, one of the more difficult push-up variations to perform.            ",
            benefits: {
              b1: "This will put less stress on your joints as compared to the plyo push-up.            ",
              b2: `You’ll improve your pressing power production, which will help with all of your pressing exercises.            `,
            },
            howToDo: `Get into a push-up position with your hands underneath your shoulders. Lower yourself to the floor. Explosively push yourself up, with your hands leaving the ground. Slightly bend your elbows on the way down to better absorb the force. Rapidly descend into another push-up. Repeat.          `,
          }
        : workoutTitle === "Dumbbell Floor Press"
        ? {
            description:
              "The dumbbell floor press overloads your triceps and chest while limiting your range of motion (ROM). This makes it easier for the shoulders than the barbell version. This is due to your shoulders not going into external rotation where your shoulder joints are most vulnerable to injury. ",
            benefits: {
              b1: "The neutral grip and the reduced ROM on the floor make this move easier on your shoulders.",
              b2: `Reducing lower-body involvement with the floor press puts more focus on your chest and triceps.`,
            },
            howToDo: `Lie on your back with a dumbbell by your side. Roll over and grip the dumbbell with both hands, press it up, and take one hand off. Have your feet planted on the ground or extend your legs. This is a matter of personal preference. Lower the dumbbell down until your upper arm touches the ground. Press up to lockout. Reset and repeat for reps. Repeat on the other side.`,
          }
        : workoutTitle === "Pause Push-Up"
        ? {
            description:
              "There’s nothing wrong with pumping out as many push-ups as possible — but you’ll be crossing into muscular endurance territory and not as much hypertrophy. When you want to feel your chest muscles working (and growing), the pause push-up is what you want.",
            benefits: {
              b1: "The pause in the bottom position puts more time under tension on your chest muscles for better muscle-building potential.",
              b2: `This move makes concentric contraction more difficult because the muscle stretch reflex is taken away.`,
            },
            howToDo: `Set up as you would for a regular push-up. Lower down with your arms about 45-degrees out from your torso. Stop with your chest just above the ground for three to five seconds. Push back up until lockout. Reset and repeat.          `,
          }
        : workoutTitle === "Side-to-Side Landmine Press"
        ? {
            description:
              "The side-to-side landmine press is another great landmine press option when you want to train the chest and triceps with increased load. Holding the barbell with two hands in a close grip allows you to go heavier than other landmine press options for increased chest size and strength.",
            benefits: {
              b1: "This move trains both anti-rotational and pressing strength.",
              b2: `This move trains both anti-rotational and pressing strength.`,
            },
            howToDo: `Hold the end of the barbell with both hands a few inches from your right shoulder. Keep your shoulders down and your chest up. Press the barbell up and to the center of your body. Lock out your arms. Lower to your left shoulder. Press to the center again. Lower down to your right shoulder. Keep alternating sides for an even number of reps on each side.`,
          }
        : workoutTitle === "Close-Grip Push-Up"
        ? {
            description:
              "The close-grip push-up is where you set up with your hands closer than shoulder width apart. You’ll keep your upper arms tucked even more closely to your rib cage. This shifts the load more to your triceps, inner chest, and anterior delts.",
            benefits: {
              b1: "If your shoulders are bothering you, this is a great pressing variation because you’re less externally rotated. This takes some stress off your shoulder joints.",
              b2: `The reduced base of support improves core strength and trains your chest from a different angle for better muscle development.`,
            },
            howToDo: `Get into a plank position. Keep your hands close together, back flat, and feet wider than hip-width. Screw your palms into the ground. Try to feel your chest tighten. Slowly lower yourself until your chest is about an inch from the floor and your upper arms are touching your sides. Drive back up until lockout. Reset and repeat`,
          }
        : "";
    return infos;
  }
  return (
    <>
      <WorkoutInfos
        {...{
          workoutTitle,
        }}
        infos={infos()}
      />
    </>
  );
}
