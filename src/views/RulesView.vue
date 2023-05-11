<script lang="ts">
export default {
  name: "RulesView"
};
</script>

<template>
  <nav>
    <RouterLink to="/">Jeopardy</RouterLink>
    <RouterLink to="/play">Play</RouterLink>
  </nav>
  <main>
    <h1>Rules</h1>
    <ol>
      <li>Form two teams.</li>
      <li>
        Team 1 will take the first turn. They will select a category and point value.
        <img src="/images/play.png" alt="Play screen"/>
      </li>
      <li>
        Team 1 must discuss the answer among themselves and then verbally provide their answer.
        <img src="/images/question.png" alt="Question"/>
      </li>
      <li>
        If Team 1's answer is correct, they will score the points associated with the selected
        question.
      </li>
      <li>
        If Team 1's answer is incorrect, Team 2 will have an opportunity to steal the points by
        guessing the correct answer. Both teams should discuss their answers discreetly to prevent
        the other team from overhearing.
      </li>
      <li>
        Repeat this process, alternating between teams, with each team taking turns selecting a
        category and point value, until all the questions have been completed.
      </li>
      <li>
        At the end of the game, the team with the highest total score will be declared the winner.
      </li>
    </ol>

    <h2>Phone Policy</h2>
    <ol>
      <li>
        In order to maintain fairness and prevent cheating, it is important to ensure that all
        participants are fully engaged in the game.
      </li>
      <li>Therefore, the use of phones during the game is strictly prohibited.</li>
      <li>
        If any member of a team is found using their phone during the game, their team will be
        automatically disqualified from answering the current question.
      </li>
      <li>
        The disqualified team will not be eligible to score points for that particular question.
      </li>
      <li>
        It is the responsibility of each team to ensure that all members comply with the no-phone
        policy and remain fully present and focused on the game.
      </li>
      <li>
        The game host or an assigned moderator will monitor and enforce the phone policy throughout
        the game.
      </li>
      <li>
        By adhering to this policy, we aim to create a fair and enjoyable experience for all
        participants and maintain the integrity of the game.
      </li>
    </ol>

    <h2>Bathroom Policy</h2>
    <ol>
      <li>
        Participants are allowed to use the bathroom during the game, but it must be done in a
        manner that minimizes disruption and maintains fairness.
      </li>
      <li>
        If a team member needs to use the bathroom, they must be the first person to request it
        after a question has been answered and before a new question has begun.
      </li>
      <li>
        Once the individual requests to use the bathroom, they will choose a special bathroom
        question to answer.
        <img src="/images/bathroom.png" alt="Bathroom Questions"/>
      </li>
      <li>
        The individual must attempt to answer the bathroom question without any assistance from
        other team members.
      </li>
      <li>
        If there are no more designated bathroom questions available, the individual will not be
        permitted to use the bathroom at that time.
      </li>
      <li>
        If the individual answers the bathroom question correctly, they will be allowed to go to the
        bathroom.
      </li>
      <li>
        If the individual answers the bathroom question incorrectly, their team will incur a penalty
        of 50 points.
      </li>
      <li>
        After the penalty is applied, the individual will still be allowed to use the bathroom.
      </li>
      <li>
        It is the responsibility of the game host or an assigned moderator to provide and oversee
        the bathroom questions, ensuring they are fair and appropriate.
      </li>
      <li>
        By implementing this policy, we aim to strike a balance between accommodating participants'
        bathroom needs and maintaining the integrity of the game.
      </li>
    </ol>
  </main>
</template>

<script lang="ts" setup></script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--surface-card);
  padding: var(--content-padding);
  border-bottom: 1px solid var(--surface-border);
}
main {
  padding: var(--content-padding);
  margin: 0 auto;
  max-width: 70ch;
}
h1 {
  text-align: center;
}
a {
  color: var(--primary-color);
  text-decoration: none;
}
a:hover {
  color: var(--primary-600);
}
img {
  display: block;
  margin: 0 auto;
  width: 80%;
  margin: var(--inline-spacing) 0;
}
</style>
