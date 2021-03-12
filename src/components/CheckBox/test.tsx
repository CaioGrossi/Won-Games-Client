import { render, screen, waitFor } from 'utils/test-utils';
import userEvent from '@testing-library/user-event';

import CheckBox from '.';

describe('<CheckBox />', () => {
  it('should render with label', () => {
    const { container } = render(
      <CheckBox label="checkbox label" labelFor="check" />
    );

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with no label', () => {
    render(<CheckBox />);

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument();
  });

  it('should render with black label', () => {
    render(
      <CheckBox label="checkbox label" labelFor="check" labelColor="black" />
    );

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    });
  });

  it('should render dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    render(<CheckBox label="Checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should render dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    render(<CheckBox label="Checkbox" onCheck={onCheck} isChecked />);

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('should be accessible with tab', () => {
    render(<CheckBox label="checkbox label" labelFor="check" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/checkbox label/i)).toHaveFocus();
  });
});
