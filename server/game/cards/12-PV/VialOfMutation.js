const Card = require('../../Card.js');

class VialOfMutation extends Card {
    // Play: Put a Mutation counter on 2 creatures. While those creatures have a mutation counter, they gain the Mutant trait.
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: 'exactly',
                numCards: 2,
                cardType: 'creature',
                gameAction: ability.actions.sequential([
                    ability.actions.addMutationCounter(),
                    ability.actions.cardLastingEffect((context) => ({
                        duration: 'lastingEffect',
                        target: context.target,
                        while: (target) => target.hasToken('mutation'),
                        effect: ability.effects.addTrait('mutant')
                    }))
                ])
            },
            effect: 'put a mutation counter on {0}, making them gain the Mutant trait'
        });
    }
}

VialOfMutation.id = 'vial-of-mutation';

module.exports = VialOfMutation;
