import { PrismaClient, type Review } from "../generated/prisma";

export const reviewRepository = {
   async getReviews(productId: number, limit?: number): Promise<Review[]> {
      // SELECT * FROM reviews WHERE productId = @productId ORDER BY createdAt DESC
      // will be generated
      // by prisma when we run the following code
      const prisma = new PrismaClient();

      return prisma.review.findMany({
         where: { productId },
         orderBy: { createdAt: "desc" },
         take: limit,
      });
   },
};
