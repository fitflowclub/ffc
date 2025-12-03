// TypeScript interfaces for Integrated_FitFlow_Club_System_V4
// اللغة الافتراضية: العربية
// استعمل هذه الواجهات لكتابة كود TypeScript متوافق مع نموذج البيانات

export interface NotificationSettings {
  email_alerts: boolean;
}

export interface Staff {
  staff_id: string;
  name_ar: string;
  role: string;
  notification_settings: NotificationSettings;
}

export interface MembershipInfo {
  plan_id: string;
  end_date: string; // YYYY-MM-DD
  is_active: boolean;
}

export interface PersonalTrainerDetails {
  assigned_pt_id: string;
  sessions_remaining: number;
}

export interface FollowUpNote {
  staff_id: string;
  comment: string;
  next_follow_up_date?: string; // optional timestamp
}

export interface MemberProfile {
  member_id: string;
  full_name: string;
  join_date: string; // YYYY-MM-DD
  profile_image_url?: string;
  current_membership?: MembershipInfo;
  personal_trainer_details?: PersonalTrainerDetails;
  follow_up_notes?: FollowUpNote[];
  notification_settings?: NotificationSettings;
}

export interface ConversionStatus {
  is_converted: boolean;
  converted_member_id?: string | null;
}

export interface Lead {
  lead_id: string;
  full_name: string;
  assigned_staff_id?: string;
  current_status?: string;
  conversion_status?: ConversionStatus;
  follow_up_notes?: FollowUpNote[];
}

export interface Transaction {
  transaction_id: string;
  member_id?: string;
  item_type?: string;
  amount_paid: number;
  transaction_date: string; // YYYY-MM-DD
  sales_agent_id?: string;
  commission_earned?: number;
}

export interface Booking {
  booking_id: string;
  member_id: string;
  cancellation_deadline?: string; // timestamp
  booking_status?: string;
}

export interface CancellationPolicy {
  deadline_hours_before: number;
}

export interface ClassSession {
  session_id: string;
  class_type_id?: string;
  schedule_date: string; // YYYY-MM-DD
  trainer_staff_id?: string;
  max_capacity?: number;
  current_bookings_count?: number;
  cancellation_policy?: CancellationPolicy;
  bookings?: Booking[];
}

export interface MemberRating {
  rating_id: string;
  member_id: string;
  rating_type?: string;
  staff_id?: string;
  rating_value: number;
  rating_date: string; // YYYY-MM-DD
}

export interface NotificationLogEntry {
  notification_id: string;
  recipient_type?: string;
  recipient_id?: string;
  type?: string;
  message_ar?: string;
}

export interface ChatMessage {
  sender_id: string;
  content: string;
  timestamp?: string;
}

export interface InternalChat {
  chat_id: string;
  department?: string;
  participants?: string[];
  messages?: ChatMessage[];
}

export interface MemberFile {
  file_id: string;
  member_id: string;
  uploader_staff_id?: string;
  file_name: string;
  description?: string;
  upload_date?: string; // timestamp
}

export interface IntegratedFitFlowClubSystemV4 {
  system_name: string;
  system_version: string;
  data_model_date: string;
  default_language: string;
  staff_management: Staff[];
  member_profile: MemberProfile[];
  lead_management: Lead[];
  transactions: Transaction[];
  class_sessions: ClassSession[];
  member_ratings: MemberRating[];
  notifications_log: NotificationLogEntry[];
  internal_chat: InternalChat[];
  member_files: MemberFile[];
}