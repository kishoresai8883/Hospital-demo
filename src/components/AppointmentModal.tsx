import React, { useState } from 'react';
import { Dialog, IconButton } from '@mui/material';
import {
  Close as CloseIcon,
  CheckCircle as CheckCircleOutlineIcon,
} from '@mui/icons-material';
import { getAssetUrl } from './HospitalImage';

interface AppointmentModalProps {
  open: boolean;
  onClose: () => void;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  open,
  onClose,
  initialService = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState(initialService || 'Obstetrics & Maternity Care');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setError('');
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleResetAndClose}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            maxWidth: '680px',
            borderRadius: '12px',
            overflow: 'hidden',
            p: 0,
          },
        },
      }}
    >
      {/* Replicating themify_builder_content-2500 desktop-popup */}
      <div className="relative bg-white p-4 sm:p-6">
        <IconButton
          onClick={handleResetAndClose}
          aria-label="Close popup"
          sx={{
            position: 'absolute',
            right: 12,
            top: 12,
            zIndex: 10,
            backgroundColor: 'rgba(255,255,255,0.85)',
            '&:hover': { backgroundColor: '#e1eddf' },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: .tb_focp404 background image */}
          <div
            className="hidden sm:block sm:col-span-5 rounded-lg bg-cover bg-center min-h-[380px]"
            style={{ backgroundImage: `url(${getAssetUrl('/images/popup-bg.webp')})` }}
          />

          {/* Right Column: .accordinflu form */}
          <div className="sm:col-span-7 flex flex-col justify-center py-2">
            <h4 className="font-inter font-semibold text-[22px] sm:text-[24px] text-black m-0 leading-snug">
              Book Your Appointment Today
            </h4>
            <h6 className="font-inter font-medium text-[16px] sm:text-[18px] text-neutral-700 mt-1 mb-4">
              Compassionate Care for Women, Children &amp; Families
            </h6>

            {submitted ? (
              <div className="bg-[#e1eddf] rounded-xl p-6 text-center my-4">
                <CheckCircleOutlineIcon sx={{ fontSize: 48, color: '#4caf50', mb: 1 }} />
                <h5 className="font-inter font-semibold text-lg text-black m-0">
                  Appointment Request Received!
                </h5>
                <p className="font-opensans text-sm text-neutral-700 mt-2 mb-4">
                  Thank you, <strong>{name}</strong>. Our care coordinator at Dhanvvantrri Hospital will call you shortly on <strong>{phone}</strong> to confirm your slot.
                </p>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="bg-[#97e078] hover:bg-[#6fcfcf] text-white font-opensans font-bold text-sm px-6 py-2.5 rounded-md transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="accordinflu space-y-2" noValidate>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    aria-label="Select Department"
                  >
                    <option value="Obstetrics & Maternity Care">Obstetrics &amp; Maternity Care</option>
                    <option value="Gynaecology">Gynaecology</option>
                    <option value="Hysteroscopy & Laparoscopy">Hysteroscopy &amp; Laparoscopy</option>
                    <option value="Infertility & IVF">Infertility &amp; IVF</option>
                    <option value="Paediatric & Neonatal Care">Paediatric &amp; Neonatal Care</option>
                    <option value="General & Family Medicine">General &amp; Family Medicine</option>
                    <option value="Dental / Orthopaedics / Physiotherapy">Dental / Orthopaedics / Physiotherapy</option>
                  </select>
                </div>
                <div>
                  <textarea
                    rows={2}
                    placeholder="Your Message (Optional)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-xs font-opensans pt-1 m-0">{error}</p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#97e078] hover:bg-[#6fcfcf] text-white font-opensans font-bold text-[15px] px-6 py-2.5 rounded-[6px] transition-colors cursor-pointer"
                  >
                    Book Appointment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Dialog>
  );
};
