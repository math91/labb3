test('app renders with main title', async () => {
  render(<Blog />);
  await screen.findByText('Gör din egen podcast');
});
