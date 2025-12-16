import { useQuery } from 'convex/react';
import { withConvexProvider } from '../lib/convex';
import Question from './question';
import Square from './square';
import Title from './title';
import { api } from '../../convex/_generated/api';
import GuessDisplay from './guess-display';
import CurrentlyAnswering from './currently-answering';

export default withConvexProvider(function Controls({
	slug,
}: {
	slug: string;
}) {
	const game = useQuery(api.game.get_game, { slug });
	const win = useQuery(api.game.check_for_win, { game: game?._id });
	const currentSquare = useQuery(api.squares.get_active_square);

	if (!game) {
		return null;
	}

	return (
		<div className="game" data-state={game.state}>
			<section className="squares">
				{Array(9)
					.fill('')
					.map((_, i) => {
						{
							let highlight = false;
							if (win && win.winningCombo) {
								highlight = win.winningCombo.includes(i);
							}

							return <Square key={i} location={i} highlight={highlight} />;
						}
					})}
			</section>

			<section className="info">
				{win ? (
					<aside className="win-banner">
						<p>
							{win.winType === 'cat' ? (
								<>
									Cat's game!
									<br />
								</>
							) : null}{' '}
							{win.winner} wins!
						</p>
					</aside>
				) : null}

				<CurrentlyAnswering />

				<Question />

				{game.state === 'secret-square' ? (
					<div className="secret-square-banner">
						<p>
							<strong>{currentSquare?.name} is the secret square!</strong>
						</p>
					</div>
				) : null}

				{game.state === 'show-guesses' ? (
					<GuessDisplay game={game._id} />
				) : null}

				<Title />

				<div className="play-along">
					<h3>
						Play along
						<br />
						on your phone
						<br />
						or computer
						<br />
						devsquares.redspace.com
					</h3>
					<img src="ydsmWw.png" alt="qr-code" className='qr' />
				</div>
			</section>
		</div>
	);
});
