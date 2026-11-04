/**
 * Cloudflare R2 storage service for professional documents.
 * Uses S3-compatible API for R2 bucket operations.
 */
export class R2StorageService {
  private readonly accountId: string;
  private readonly bucketName: string;
  private readonly accessKeyId: string;
  private readonly secretAccessKey: string;

  constructor(config: {
    accountId: string;
    bucketName: string;
    accessKeyId: string;
    secretAccessKey: string;
  }) {
    this.accountId = config.accountId;
    this.bucketName = config.bucketName;
    this.accessKeyId = config.accessKeyId;
    this.secretAccessKey = config.secretAccessKey;
  }

  /**
   * Generate a presigned URL for document upload.
   */
  async getUploadUrl(key: string, _contentType: string, _expiresIn = 3600): Promise<string> {
    // S3-compatible presigned URL for R2
    throw new Error(`R2 upload URL generation not yet configured for ${key}`);
  }

  /**
   * Generate a presigned URL for document download.
   */
  async getDownloadUrl(key: string, _expiresIn = 3600): Promise<string> {
    throw new Error(`R2 download URL generation not yet configured for ${key}`);
  }

  /**
   * Delete a document from R2.
   */
  async deleteObject(key: string): Promise<void> {
    throw new Error(`R2 object deletion not yet configured for ${key}`);
  }

  /**
   * Build a storage key for professional documents.
   */
  static buildDocumentKey(professionalId: string, documentId: string, fileName: string): string {
    return `professionals/${professionalId}/documents/${documentId}/${fileName}`;
  }
}
